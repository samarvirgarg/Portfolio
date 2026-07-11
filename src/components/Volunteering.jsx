import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { volunteeringData } from '../data';
import { FiHeart, FiCode, FiUsers } from 'react-icons/fi';

const iconMap = {
  community: FiUsers,
  code: FiCode,
  heart: FiHeart,
};

export default function Volunteering() {
  return (
    <SectionWrapper id="volunteering">
      <motion.p
        className="accent-text font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Volunteering
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance theme-text">
        Giving <span className="accent-text">back</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteeringData.map((item, i) => {
          const Icon = iconMap[item.icon] || FiHeart;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full accent-bg opacity-10 blur-2xl group-hover:opacity-15 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br accent-bg opacity-20 flex items-center justify-center mb-4 group-hover:opacity-30 transition-all">
                  <Icon className="w-5 h-5 accent-text transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold theme-text mb-1">
                  {item.role}
                </h3>
                <p className="text-sm accent-text mb-3">{item.organization}</p>
                <p className="text-xs theme-text-quaternary font-mono mb-3">{item.period}</p>
                <p className="text-sm theme-text-tertiary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
