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
        className="text-primary font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance">
        Things I've <span className="gradient-text">built</span>
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
            {/* Project image placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-glow-pink/10 flex items-center justify-center border-b border-white/5">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <FiGithub className="w-7 h-7 text-white/30 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-white/20 text-sm">PLACEHOLDER: Project screenshot</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.award && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <FiAward className="w-3 h-3" /> {project.award}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60"
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
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-accent transition-colors"
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
                <h3 className="font-display font-semibold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <FiGithub className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-white/50"
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
