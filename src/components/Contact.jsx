import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const EMAILJS_SERVICE_ID = 'service_h3rsq8v';
const EMAILJS_TEMPLATE_ID = 'template_5wtmzfh';
const EMAILJS_PUBLIC_KEY = 'mcqbkIrA0EQjoTZYf';
const EMAILJS_SCRIPT_ID = 'emailjs-sdk-script';
const EMAILJS_SCRIPT_SRC = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
const EMAILJS_PLACEHOLDER_PREFIX = 'YOUR_';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isEmailJsReady, setIsEmailJsReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const isEmailJsConfigured = ![
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
  ].some((value) => value.startsWith(EMAILJS_PLACEHOLDER_PREFIX));

  useEffect(() => {
    let isMounted = true;

    const markReady = () => {
      if (isMounted && window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        setIsEmailJsReady(true);
      }
    };

    const handleError = () => {
      if (isMounted) {
        setStatus({
          type: 'error',
          message: 'Unable to load the contact form right now. Please try again later.',
        });
      }
    };

    if (window.emailjs) {
      markReady();
      return () => {
        isMounted = false;
      };
    }

    const existingScript = document.getElementById(EMAILJS_SCRIPT_ID);

    if (existingScript) {
      existingScript.addEventListener('load', markReady);
      existingScript.addEventListener('error', handleError);

      return () => {
        isMounted = false;
        existingScript.removeEventListener('load', markReady);
        existingScript.removeEventListener('error', handleError);
      };
    }

    const script = document.createElement('script');
    script.id = EMAILJS_SCRIPT_ID;
    script.src = EMAILJS_SCRIPT_SRC;
    script.async = true;
    script.onload = markReady;
    script.onerror = handleError;
    document.body.appendChild(script);

    return () => {
      isMounted = false;
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!isEmailJsConfigured) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Add your service ID, template ID, and public key to enable delivery.',
      });
      return;
    }

    if (!window.emailjs || !isEmailJsReady) {
      setStatus({
        type: 'error',
        message: 'Unable to send message right now. Please try again in a moment.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
      );

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setStatus({ type: 'success', message: 'Message sent successfully!' });
    } catch (error) {
      const errorText = typeof error?.text === 'string' && error.text.trim()
        ? error.text
        : 'Something went wrong while sending your message. Please try again.';

      setStatus({
        type: 'error',
        message: errorText,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Let us <span className="gradient-text">connect</span>
        </h2>
        <p className="text-white/50 text-base sm:text-lg mb-10">
          Have an idea, opportunity, or just want to chat? I would love to hear from you.
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8 text-left mb-12"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <label className="block">
              <span className="block text-white/70 text-sm font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary/40 focus:bg-white/10"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="block text-white/70 text-sm font-medium mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary/40 focus:bg-white/10"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block mb-5">
            <span className="block text-white/70 text-sm font-medium mb-2">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary/40 focus:bg-white/10 resize-y min-h-[160px]"
              placeholder="Tell me a bit about your project or message"
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <motion.button
              type="submit"
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-medium px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <FiSend className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.message ? (
              <p className={`text-sm ${status.type === 'success' ? 'text-accent' : 'text-pink-300'}`}>
                {status.message}
              </p>
            ) : null}
          </div>
        </motion.form>

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
