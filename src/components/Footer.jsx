import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm text-center sm:text-left">
          Designed & built by{' '}
          <span className="text-white/50 font-medium">{personalInfo.name}</span>
        </p>
        <p className="text-white/20 text-xs">
          React · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
