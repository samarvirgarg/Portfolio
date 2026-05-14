import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data';

const categories = [
  { key: 'languages', label: 'Languages', color: 'from-primary to-primary-light' },
  { key: 'frameworks', label: 'Frameworks & Libraries', color: 'from-accent to-accent-light' },
  { key: 'tools', label: 'Tools & Platforms', color: 'from-glow-pink to-primary' },
  { key: 'concepts', label: 'Concepts & Practices', color: 'from-primary to-accent' },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.p
        className="text-primary font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance">
        My <span className="gradient-text">toolkit</span>
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
              <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.color}`} />
              <h3 className="font-display font-semibold text-white text-lg">
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
                  className="px-3 py-1.5 rounded-lg text-sm font-mono bg-white/5 text-white/70 border border-white/5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
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
