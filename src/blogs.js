// Load all blog markdown files at build time using Vite's glob import
const blogFiles = import.meta.glob('/content/blogs/*.md', { query: '?raw', import: 'default', eager: true });

// Simple YAML frontmatter parser (avoids Node.js dependency from gray-matter)
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw.trim() };

  const yamlBlock = match[1];
  const content = match[2].trim();
  const data = {};

  for (const line of yamlBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Parse arrays like ["tag1", "tag2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      // Strip quotes
      value = value.replace(/^["']|["']$/g, '');
      // Parse numbers
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        // Keep date as string
      } else if (!isNaN(value) && value !== '') {
        value = Number(value);
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
    }

    data[key] = value;
  }

  return { data, content };
}

// Parse all blog posts
function getAllPosts() {
  const posts = [];

  for (const [filePath, rawContent] of Object.entries(blogFiles)) {
    const { data, content } = parseFrontmatter(rawContent);

    if (!data.title || !data.slug || !data.date) {
      console.warn(`Blog post missing required frontmatter (title, slug, date): ${filePath}`);
      continue;
    }

    posts.push({
      title: data.title,
      date: data.date,
      slug: data.slug,
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      coverImage: data.coverImage || '',
      content,
    });
  }

  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

const allPosts = getAllPosts();

export function getBlogPosts() {
  return allPosts;
}

export function getBlogPost(slug) {
  return allPosts.find((post) => post.slug === slug) || null;
}

export function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
