import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { interestsData } from '../data';
import { FiZap } from 'react-icons/fi';
import {
  GiTennisRacket,
  GiMountainRoad,
  GiMusicalNotes,
  GiTrophy,
} from 'react-icons/gi';
import { FiCode, FiHeart } from 'react-icons/fi';

const iconMap = {
  tennis: GiTennisRacket,
  opensource: FiCode,
  outdoor: GiMountainRoad,
  music: GiMusicalNotes,
  innovation: FiZap,
  community: FiHeart,
};

export default function Interests() {
  return (
    <SectionWrapper id="interests">
      <motion.p
        className="text-primary font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        06 — Interests
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance">
        Beyond the <span className="gradient-text">code</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
        {interestsData.map((interest, i) => {
          const Icon = iconMap[interest.icon] || FiZap;
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass glass-hover rounded-2xl p-5 sm:p-6 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-1">
                  {interest.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
