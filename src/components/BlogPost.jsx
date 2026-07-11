import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPost, formatDate } from '../blogs';

export default function BlogPost({ slug }) {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="font-display text-3xl font-bold theme-text mb-4">
            Post not found
          </h1>
          <p className="theme-text-tertiary mb-8">
            The blog post you are looking for does not exist or may have been removed.
          </p>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 accent-text hover:underline"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to blog
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back button */}
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm theme-text-secondary hover:accent-text transition-colors mb-8 group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </a>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <FiTag className="w-3.5 h-3.5 theme-text-quaternary" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full theme-bg-subtle accent-text border theme-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance theme-text">
            {post.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-2 mb-10 pb-8 border-b theme-border">
            <FiCalendar className="w-4 h-4 theme-text-quaternary" />
            <time className="text-sm theme-text-quaternary font-mono">
              {formatDate(post.date)}
            </time>
          </div>

          {/* Content */}
          <div className="blog-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Bottom back link */}
          <div className="mt-16 pt-8 border-t theme-border">
            <a
              href="#blog"
              className="inline-flex items-center gap-2 text-sm font-medium accent-text hover:underline group"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all posts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
