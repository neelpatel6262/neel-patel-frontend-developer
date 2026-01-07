import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

interface AboutProps {
  theme?: 'light' | 'dark';
}

export function About({ theme = 'dark' }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { icon: Code2, title: 'REACT DEVELOPMENT', description: 'Scalable components, clean architecture' },
    { icon: Palette, title: 'FIGMA TO CODE', description: 'Pixel-perfect design implementation' },
    { icon: Zap, title: 'RESPONSIVE & FAST', description: 'Optimized for performance, fast load times' },
    { icon: Heart, title: 'USER-CENTRIC', description: 'Beautiful interfaces that solve real problems' },
  ];

  return (
    <section id="about" className={`py-24 px-4 md:px-8 relative ${theme === 'light' ? 'bg-white' : 'bg-[#131313]'}`}>
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 border ${theme === 'light' ? 'border-gray-300 bg-gray-50' : 'border-[#333] bg-[#1a1a1a]'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            <span className={`text-xs font-mono uppercase tracking-widest ${theme === 'light' ? 'text-gray-700' : 'text-[#939393]'}`}>About Me</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          PURPOSE & <span className="text-[var(--primary)]">PASSION</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 font-light ${theme === 'light' ? 'text-gray-700' : 'text-[#939393]'}`}
        >
          Bridging the gap between raw logic and creative expression.
        </motion.p>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 ${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-[#131313] border border-[#333]'} hover:border-[var(--primary)] transition-colors duration-300`}
            >
              <div className="relative">
                <div className={`w-12 h-12 flex items-center justify-center mb-6 border ${theme === 'light' ? 'border-gray-300 group-hover:border-[var(--primary)]' : 'border-[#333] group-hover:border-[var(--primary)]'} transition-colors duration-300`}>
                  <skill.icon className={`w-6 h-6 ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'} transition-colors duration-300`} />
                </div>
                <h3 className={`text-lg font-bold mb-3 font-mono uppercase tracking-wide ${theme === 'light' ? 'text-black' : 'text-white'}`}>{skill.title}</h3>
                <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-[#939393]'}`}>{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}