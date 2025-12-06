import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
    { icon: Code2, title: 'Frontend Dev', description: 'Building responsive web applications' },
    { icon: Zap, title: 'Performance', description: 'Optimized and fast user experiences' },
    { icon: Heart, title: 'User-Centric', description: 'Design thinking and empathy-driven' },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative bg-[#131313]">
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#939393]">About Me</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight text-white"
        >
          PURPOSE & <span className="text-[var(--primary)]">PASSION</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-[#939393] max-w-3xl mx-auto mb-20 font-light"
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
              className="group relative p-8 bg-[#131313] border border-[#333] hover:border-[var(--primary)] transition-colors duration-300"
            >
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-[#333] group-hover:border-[var(--primary)] transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-[#939393] group-hover:text-[var(--primary)] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wide">{skill.title}</h3>
                <p className="text-sm text-[#939393] leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 bg-[#131313] border border-[#333] relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--primary)]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--primary)]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--primary)]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--primary)]" />
            
            <div className="space-y-6 text-[#939393]">
              <p className="text-lg leading-relaxed font-light">
                I'm a passionate <span className="font-medium text-white">UI/UX designer</span> and{' '}
                <span className="font-medium text-white">frontend developer</span> who believes in the perfect
                synergy between beautiful design and clean code. My work focuses on creating
                interfaces that are not only visually stunning but also intuitive and accessible.
              </p>
              <p className="text-lg leading-relaxed font-light">
                With a keen eye for detail and a deep understanding of user behavior, I craft
                experiences that delight users while solving real problems. Whether it's designing
                a seamless workflow or building a responsive web application, I bring creativity
                and technical expertise to every project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}