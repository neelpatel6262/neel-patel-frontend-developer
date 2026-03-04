import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import AetherfieldSaaS from '../assets/Aetherfield SaaS.jpg';

interface AetherfieldProjectProps {
  theme?: 'light' | 'dark';
}
export function AetherfieldProject({ theme = 'dark' }: AetherfieldProjectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const tech = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Framer Motion',
    'React Router DOM',
    'Vercel',
  ];
  return (
    <section
      id="aetherfield-project"
      className={`py-24 px-4 md:px-8 relative ${
        theme === 'light' ? 'bg-white' : 'bg-[#131313]'
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 border ${
            theme === 'light' ? 'border-gray-300 bg-gray-50' : 'border-[#333] bg-[#1a1a1a]'
          }`}>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            <span className={`text-xs font-mono uppercase tracking-widest ${
              theme === 'light' ? 'text-gray-700' : 'text-[#939393]'
            }`}>Interactive Showcase</span>
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          FEATURED <span className="text-[var(--primary)]">EXPERIENCE</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className={`relative ${
            theme === 'light'
              ? 'bg-white border border-gray-300'
              : 'bg-[#131313] border border-[#333]'
          } hover:border-[var(--primary)] transition-all duration-500`}>
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--primary)] z-10" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--primary)] z-10" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--primary)] z-10" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--primary)] z-10" />
            <div className="group relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <motion.img
                src={AetherfieldSaaS}
                alt="Aetherfield SaaS landing page"
                className="w-full h-full object-cover object-top transition-all duration-[3500ms] ease-in-out group-hover:object-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className={`p-8 flex flex-col gap-0 border-t ${
              theme === 'light' ? 'border-gray-200' : 'border-[#222]'
            }`}>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <p className={`text-xs font-mono uppercase tracking-widest mb-2 ${
                    theme === 'light' ? 'text-gray-400' : 'text-[#555]'
                  }`}>
                    SaaS Website
                  </p>
                  <h3 className={`text-xl font-bold font-mono uppercase tracking-tight ${
                    theme === 'light' ? 'text-black' : 'text-white'
                  }`}>
                    Aetherfield<span className="text-[var(--primary)]"> SaaS</span>
                  </h3>
                </div>
                <ArrowUpRight className={`w-5 h-5 flex-shrink-0 mt-1 ${
                  theme === 'light' ? 'text-gray-700' : 'text-[#939393]'
                }`} />
              </div>
              <p className={`leading-relaxed mb-8 font-light ${
                theme === 'light' ? 'text-gray-700' : 'text-[#939393]'
              }`}>
                No tutorials. No starter kits. Picked a random Figma SaaS template, opened a blank Vite project, and shipped a full multi-page marketing site — scroll animations, dynamic routing, signup form with validation, mobile menu, and 7 live routes — entirely independently.
              </p>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/neelpatel6262/Aetherfield-SaaS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${
                    theme === 'light'
                      ? 'border-gray-300 text-gray-700 hover:bg-[var(--primary)] hover:text-[#131313]'
                      : 'border-[#333] text-[#939393] hover:bg-[var(--primary)] hover:text-[#131313]'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase tracking-wider">Code</span>
                </a>
                <a
                  href="https://aetherfield-saa-s.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${
                    theme === 'light'
                      ? 'border-gray-300 text-gray-700 hover:bg-[var(--primary)] hover:text-[#131313]'
                      : 'border-[#333] text-[#939393] hover:bg-[var(--primary)] hover:text-[#131313]'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase tracking-wider">Live</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                    className={`px-2 py-1 text-xs font-mono uppercase tracking-wider border ${
                      theme === 'light'
                        ? 'border-gray-300 text-gray-700 bg-gray-50'
                        : 'border-[#333] text-[#939393] bg-[#1a1a1a]'
                    }`}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}