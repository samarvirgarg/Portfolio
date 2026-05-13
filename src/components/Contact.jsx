import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/samarvirgarg', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/samarvir/', label: 'LinkedIn' },
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
          07 — Contact
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
