import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data';

const categories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & Libraries' },
  { key: 'tools', label: 'Tools & Platforms' },
  { key: 'concepts', label: 'Concepts & Practices' },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.p
        className="accent-text font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance theme-text">
        My <span className="accent-text">toolkit</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-8 rounded-full accent-bg" />
              <h3 className="font-display font-semibold theme-text text-lg">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData[cat.key].map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + j * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-mono theme-bg-subtle theme-text-secondary border theme-border hover:accent-text hover:border-[color:var(--accent)] hover:opacity-100 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
