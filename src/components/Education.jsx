import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { educationData } from '../data';
import { FiBookOpen } from 'react-icons/fi';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <motion.p
        className="accent-text font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Education
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance theme-text">
        My <span className="accent-text">academic</span> journey
      </h2>

      <div className="space-y-6">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass glass-hover rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl theme-bg-subtle flex items-center justify-center shrink-0">
                <FiBookOpen className="w-6 h-6 accent-text" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-display text-xl font-semibold theme-text">
                    {edu.institution}
                  </h3>
                  <span className="text-sm theme-text-quaternary font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm accent-text mb-1">{edu.degree}</p>
                <p className="text-sm theme-text-tertiary">{edu.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
