import { motion } from 'framer-motion';

export default function GlowCard({ children, className = '', hoverEffect = true }) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass glass-hover rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
