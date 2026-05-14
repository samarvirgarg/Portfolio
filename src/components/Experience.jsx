import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { experienceData } from '../data';
import { FiBriefcase, FiUsers } from 'react-icons/fi';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.p
        className="text-primary font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Experience & Leadership
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance">
        Where I've <span className="gradient-text">grown</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

        <div className="space-y-8 md:space-y-12">
          {experienceData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 border-primary bg-surface md:-translate-x-1.5 z-10" />

              {/* Content card */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <div className={`flex items-center gap-2 mb-2 ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      {item.type === 'leadership' ? (
                        <FiUsers className="w-4 h-4 text-accent" />
                      ) : (
                        <FiBriefcase className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <span className="text-xs text-white/40 font-mono">{item.period}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm text-primary/80 mb-2">{item.company} · {item.location}</p>
                  <p className="text-sm text-white/50 leading-relaxed mb-3">{item.description}</p>
                  <div className={`flex flex-wrap gap-2 ${
                    i % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
