import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlowCard from './GlowCard';
import { aboutData, personalInfo } from '../data';
import { FiDownload, FiFileText, FiEye, FiPlus, FiMinus, FiX } from 'react-icons/fi';

const MIN_RESUME_ZOOM = 0.8;
const MAX_RESUME_ZOOM = 1.6;
const RESUME_ZOOM_STEP = 0.1;
const RESUME_PREVIEW_URL = `${personalInfo.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`;

export default function About() {
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);
  const [resumeZoom, setResumeZoom] = useState(1);

  useEffect(() => {
    if (!isResumePreviewOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsResumePreviewOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumePreviewOpen]);

  const openResumePreview = () => {
    setResumeZoom(1);
    setIsResumePreviewOpen(true);
  };

  const closeResumePreview = () => setIsResumePreviewOpen(false);
  const zoomIn = () => setResumeZoom((currentZoom) => Math.min(currentZoom + RESUME_ZOOM_STEP, MAX_RESUME_ZOOM));
  const zoomOut = () => setResumeZoom((currentZoom) => Math.max(currentZoom - RESUME_ZOOM_STEP, MIN_RESUME_ZOOM));

  return (
    <>
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
              About
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
            {/**
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
            */}

            {/* Resume download card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="col-span-2"
            >
              <GlowCard className="group">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <FiFileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-accent transition-colors">Resume</p>
                      <p className="text-white/40 text-xs">{personalInfo.resumeLabel}</p>
                    </div>
                  </div>
                  <FiDownload className="w-5 h-5 text-white/30 group-hover:text-accent transition-colors shrink-0" />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-medium px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-shadow text-sm"
                  >
                    <FiDownload className="w-4 h-4" />
                    Download Resume
                  </a>

                  <button
                    type="button"
                    onClick={openResumePreview}
                    className="inline-flex items-center justify-center gap-2 glass glass-hover rounded-xl px-4 py-3 text-white/80 hover:text-white text-sm"
                  >
                    <FiEye className="w-4 h-4 text-primary" />
                    Preview Resume
                  </button>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {isResumePreviewOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-surface/90 backdrop-blur-xl px-4 pt-24 pb-6 md:px-8 md:pt-28 md:pb-8"
          >
            <div className="absolute inset-0" onClick={closeResumePreview} />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 h-full max-w-6xl mx-auto glass rounded-2xl border border-white/10 shadow-2xl shadow-black/30 overflow-hidden flex flex-col"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-white/10 bg-surface/40">
                <div>
                  <p className="text-primary font-mono text-xs sm:text-sm">Resume Preview</p>
                  <p className="text-white text-sm sm:text-base font-medium">{personalInfo.resumeLabel}</p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={zoomOut}
                    className="glass glass-hover rounded-xl p-3 text-white/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom out"
                    disabled={resumeZoom <= MIN_RESUME_ZOOM}
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={zoomIn}
                    className="glass glass-hover rounded-xl p-3 text-white/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom in"
                    disabled={resumeZoom >= MAX_RESUME_ZOOM}
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-medium px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-shadow text-sm"
                  >
                    <FiDownload className="w-4 h-4" />
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={closeResumePreview}
                    className="glass glass-hover rounded-xl p-3 text-white/80 hover:text-white"
                    aria-label="Close resume preview"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto bg-black/20 p-3 sm:p-4 md:p-6">
                <div
                  className="mx-auto origin-top transition-transform duration-200 ease-out"
                  style={{
                    transform: `scale(${resumeZoom})`,
                    width: `${100 / resumeZoom}%`,
                    minHeight: '100%',
                  }}
                >
                  <iframe
                    src={RESUME_PREVIEW_URL}
                    title={personalInfo.resumeLabel}
                    className="w-full h-[70vh] md:h-[78vh] rounded-xl bg-white"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
