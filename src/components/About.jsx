import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlowCard from './GlowCard';
import { aboutData, personalInfo, educationData } from '../data';
import { FiDownload, FiFileText, FiBookOpen } from 'react-icons/fi';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        {/* Left - text content */}
        <div className="md:col-span-3">
          <motion.p
            className="text-primary font-mono text-sm mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            01 — About
          </motion.p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            More than just a{' '}
            <span className="gradient-text">developer</span>
          </h2>

          {aboutData.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed mb-4 last:mb-0"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Right - stats grid */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
          {aboutData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <GlowCard className="text-center h-full flex flex-col items-center justify-center">
                <span className="gradient-text text-3xl sm:text-4xl font-display font-bold">
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs sm:text-sm mt-1">
                  {stat.label}
                </span>
              </GlowCard>
            </motion.div>
          ))}

          {/* Location / uni card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="col-span-2"
          >
            <GlowCard className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{personalInfo.university}</p>
                <p className="text-white/50 text-xs">{personalInfo.degree}</p>
                <p className="text-white/40 text-xs">{personalInfo.location}</p>
              </div>
            </GlowCard>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 200 }}
            className="col-span-2"
          >
            <GlowCard className="group">
              <div className="flex items-center gap-2 mb-3">
                <FiBookOpen className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-white text-sm">Education</h3>
              </div>
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.institution + edu.period}>
                    <p className="text-white text-sm font-medium">{edu.institution}</p>
                    <p className="text-white/50 text-xs">{edu.degree}</p>
                    <p className="text-white/30 text-xs font-mono">{edu.period} · {edu.location}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Resume download card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="col-span-2"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="block"
            >
              <GlowCard className="flex items-center justify-between gap-4 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <FiFileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-accent transition-colors">Download Resume</p>
                    <p className="text-white/40 text-xs">{personalInfo.resumeLabel}</p>
                  </div>
                </div>
                <FiDownload className="w-5 h-5 text-white/30 group-hover:text-accent transition-colors" />
              </GlowCard>
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
