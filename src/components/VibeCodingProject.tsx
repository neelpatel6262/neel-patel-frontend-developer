import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Sparkles, Zap } from 'lucide-react';

export function VibeCodingProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vibe-project" className="py-24 px-4 md:px-8 relative bg-[#131313]">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#333] bg-[#1a1a1a]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#939393]">Interactive Showcase</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight text-white"
        >
          FEATURED <span className="text-[var(--primary)]">EXPERIENCE</span>
        </motion.h2>

        <motion.a
          href="https://dopamine-menu-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="group block max-w-5xl mx-auto"
        >
          <div className="relative p-12 bg-[#131313] border border-[#333] hover:border-[var(--primary)] transition-all duration-500">
             {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--primary)]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--primary)]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--primary)]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--primary)]" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--primary)] bg-[var(--primary)]/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]">Live System</span>
                </div>

                <h3 className="text-4xl font-bold text-white font-mono uppercase tracking-tight">
                  Dopamine Menu
                </h3>
                
                <p className="text-lg text-[#939393] leading-relaxed font-light">
                  An interactive application designed to optimize user motivation through organized activity discovery. Features precision interactions and data persistence.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind', 'Motion'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-[#333] text-[#939393] bg-[#1a1a1a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <div className="px-8 py-4 border border-[var(--primary)] text-[var(--primary)] font-mono uppercase tracking-widest flex items-center gap-3 hover:bg-[var(--primary)] hover:text-[#131313] transition-all duration-300 cursor-pointer">
                    <span>Initialize</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Visual element */}
              <div className="relative flex items-center justify-center">
                <div className="w-full aspect-square border border-[#333] bg-[#1a1a1a] flex items-center justify-center group-hover:border-[var(--primary)]/30 transition-colors duration-500">
                  <motion.div
                    animate={{
                      rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-[80%] h-[80%] border border-dashed border-[#333] rounded-full"
                  />
                   <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-[60%] h-[60%] border border-dashed border-[#444] rounded-full"
                  />
                  <Zap className="w-16 h-16 text-[var(--primary)]" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#131313] border border-[var(--primary)] text-[var(--primary)] font-mono text-xs uppercase tracking-widest">
                  v2.0
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}