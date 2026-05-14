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
        className="text-primary font-mono text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Volunteering
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance">
        Giving <span className="gradient-text">back</span>
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
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/20 transition-all">
                  <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-sm text-primary/70 mb-3">{item.organization}</p>
                <p className="text-xs text-white/40 font-mono mb-3">{item.period}</p>
                <p className="text-sm text-white/50 leading-relaxed">
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
