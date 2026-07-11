import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { getBlogPosts, formatDate } from '../blogs';

export default function BlogList() {
  const posts = getBlogPosts();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="accent-text font-mono text-sm mb-2">Blog</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance theme-text">
            My <span className="accent-text">writings</span>
          </h1>
          <p className="theme-text-tertiary text-base sm:text-lg mb-12">
            Thoughts on engineering, projects, and things I am learning along the way.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-16"
          >
            <p className="theme-text-tertiary text-lg">No blog posts yet. Check back soon!</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => {
                  window.location.hash = `#blog/${post.slug}`;
                }}
              >
                <div className="p-6 sm:p-8">
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
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
                  <h2 className="font-display text-xl sm:text-2xl font-bold theme-text group-hover:accent-text transition-colors mb-2">
                    {post.title}
                  </h2>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <FiCalendar className="w-3.5 h-3.5 theme-text-quaternary" />
                    <time className="text-sm theme-text-quaternary font-mono">
                      {formatDate(post.date)}
                    </time>
                  </div>

                  {/* Excerpt */}
                  <p className="theme-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read more link */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium accent-text group-hover:gap-2.5 transition-all">
                    Read more <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
