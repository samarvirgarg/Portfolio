import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data';

const DevpostIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6.002 1.2h12.004c2.595 0 3.794 1.51 3.794 3.794v14.012c0 2.285-1.199 3.794-3.794 3.794H6.002c-2.595 0-3.794-1.51-3.794-3.794V4.994c0-2.284 1.199-3.794 3.794-3.794zm6.39 14.9l3.5-4.1-3.5-4.1H9.602l3.5 4.1-3.5 4.1z"/>
  </svg>
);

export default function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: DevpostIcon, href: personalInfo.devpost, label: 'Devpost' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm theme-text-secondary">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="theme-text">Hi, I am </span>
            <span className="accent-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl theme-text-tertiary font-light mb-4"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg theme-text-quaternary max-w-2xl mx-auto mb-10 text-balance"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass glass-hover rounded-xl p-3.5 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 theme-text-secondary group-hover:accent-text transition-colors" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 accent-bg text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 theme-text-muted hover:theme-text-tertiary transition-colors"
          aria-label="Scroll down to about section"
        >
          <span className="text-xs">Scroll</span>
          <FiArrowDown className="w-4 h-4" aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}
