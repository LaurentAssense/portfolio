import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 py-4 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-2 text-sm">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <a
              href="mailto:laurentassense.pro@gmail.com"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={14} />
              <span>laurentassense.pro@gmail.com</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://linkedin.com/in/laurentassense/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://github.com/LaurentAssense"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>

          <p className="text-slate-500">© 2026 Laurent Assensé - Portfolio - Saint-Quentin</p>
        </div>
      </div>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}
