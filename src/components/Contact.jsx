import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const DevpostIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M6.002 1.2h12.004c2.595 0 3.794 1.51 3.794 3.794v14.012c0 2.285-1.199 3.794-3.794 3.794H6.002c-2.595 0-3.794-1.51-3.794-3.794V4.994c0-2.284 1.199-3.794 3.794-3.794zm6.39 14.9l3.5-4.1-3.5-4.1H9.602l3.5 4.1-3.5 4.1z"/>
  </svg>
);

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/samarvirgarg', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/samarvir/', label: 'LinkedIn' },
  { icon: DevpostIcon, href: 'https://devpost.com/samarvirgarg', label: 'Devpost' },
  { icon: FiMail, href: 'mailto:samarvir.garg@mail.utoronto.ca', label: 'Email' },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <motion.p
          className="text-primary font-mono text-sm mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
          Let's <span className="gradient-text">connect</span>
        </h2>
        <p className="text-white/50 text-base sm:text-lg mb-10">
          Have an idea, opportunity, or just want to chat? I'd love to hear from you.
        </p>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-medium px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-shadow text-lg mb-12"
        >
          <FiSend className="w-5 h-5" />
          Say Hello
        </motion.a>

        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="glass glass-hover rounded-xl p-4 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>

        <p className="text-white/30 text-sm">
          {personalInfo.email}
        </p>
      </div>
    </SectionWrapper>
  );
}
