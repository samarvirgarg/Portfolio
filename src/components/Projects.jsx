import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { projectsData } from '../data';
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi';

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const other = projectsData.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <motion.p
        className="accent-text font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance theme-text">
        Things I have <span className="accent-text">built</span>
      </h2>

      {/* Featured projects */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover rounded-2xl overflow-hidden group"
          >
            {/* Project image area */}
            <div className="h-48 theme-bg-subtle flex items-center justify-center border-b theme-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl glass flex items-center justify-center mb-3">
                  <span className="text-2xl font-display font-bold accent-text">{project.title.charAt(0)}</span>
                </div>
                <p className="theme-text-muted text-xs font-mono">Project Preview</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold theme-text group-hover:accent-text transition-colors">
                  {project.title}
                </h3>
                {project.award && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <FiAward className="w-3 h-3" /> {project.award}
                  </span>
                )}
              </div>
              <p className="text-sm theme-text-tertiary leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md theme-bg-subtle theme-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm theme-text-tertiary hover:accent-text transition-colors"
                  >
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm theme-text-tertiary hover:accent-text transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects */}
      {other.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {other.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass glass-hover rounded-xl p-5 group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-semibold theme-text group-hover:accent-text transition-colors">
                  {project.title}
                </h3>
                <FiGithub className="w-4 h-4 theme-text-muted group-hover:accent-text transition-colors" />
              </div>
              <p className="text-sm theme-text-tertiary leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded theme-bg-subtle theme-text-tertiary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
