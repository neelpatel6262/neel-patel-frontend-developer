import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code2, Palette } from 'lucide-react';

interface HeroProps {
  theme?: 'light' | 'dark';
}

export function Hero({ theme = 'dark' }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-[#131313]'}`}
    >
      {/* Grid Background */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-10`} 
           style={{ 
             backgroundImage: theme === 'light' ? 'linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)' : 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex mb-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-[var(--primary)]/30 bg-[var(--primary)]/5 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </div>
              <span className="text-xs font-mono text-[var(--primary)] uppercase tracking-widest">Open for Collaboration</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter text-white">
              <span className="block">NEEL PATEL</span>
              <span className="block text-[#939393] text-4xl md:text-6xl lg:text-7xl mt-4 font-normal">
                DESIGN & ENGINEERING
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 text-[#939393]">
              <Palette className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-lg font-mono">UI/UX Designer</span>
            </div>
            <div className="w-1 h-1 bg-[#333]" />
            <div className="flex items-center gap-3 text-[#939393]">
              <Code2 className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-lg font-mono">Frontend Developer</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-[#939393] max-w-2xl mx-auto mb-16 leading-relaxed font-light"
          >
            Forging digital products with precision and purpose.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 border border-[var(--primary)] bg-transparent text-[var(--primary)] rounded-sm font-mono uppercase tracking-widest hover:bg-[var(--primary)] hover:text-[#131313] transition-all duration-300 min-w-[200px]"
            >
              <div className="flex items-center justify-center gap-3">
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 border border-[#333] bg-transparent text-white rounded-sm font-mono uppercase tracking-widest hover:border-white transition-all duration-300 min-w-[200px]"
            >
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-4 h-4 text-[#939393] group-hover:text-white transition-colors" />
                <span>Contact</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}