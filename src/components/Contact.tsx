import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/neelpatel6262',
      handle: '@neelpatel6262',
      description: 'Check out my code'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/uxui-designer-devloper/',
      handle: 'Connect with me',
      description: 'Let\'s network'
    },
    { 
      name: 'Behance', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 4.5h5.5c1.5 0 2.7 1.2 2.7 2.7 0 1-.5 1.9-1.3 2.4 1.2.4 2 1.5 2 2.8 0 1.6-1.3 2.9-2.9 2.9H6.5V4.5zm2 4.3h3c.6 0 1-.4 1-1s-.4-1-1-1h-3v2zm0 4.5h3.5c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2H8.5v2.4zM15.5 6.5h5v1h-5v-1zm1.6 8.6c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2c-2.2 0-4.2-1.9-4.2-4.2zm6.4 0c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2 1 2.2 2.2 2.2 2.2-1 2.2-2.2z"/>
        </svg>
      ),
      href: 'https://www.behance.net/neelpatel110',
      handle: '@neelpatel110',
      description: 'View my designs'
    },
    { 
      name: 'Gmail', 
      icon: Mail, 
      href: 'mailto:patelneel392003@gmail.com',
      handle: 'patelneel392003@gmail.com',
      description: 'Send me an email'
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative bg-[#131313]">
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#939393]">Communication</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 text-white tracking-tight"
        >
          INITIATE <span className="text-[var(--primary)]">CONTACT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-[#939393] max-w-3xl mx-auto mb-20 font-light"
        >
          Open channels for collaboration and inquiry.
        </motion.p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative block"
            >
              <div className="relative h-full p-8 bg-[#131313] border border-[#333] hover:border-[var(--primary)] transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-[#333] bg-[#1a1a1a] group-hover:bg-[var(--primary)] group-hover:text-[#131313] group-hover:border-[var(--primary)] transition-all duration-300">
                  <link.icon className="w-5 h-5 text-[#939393] group-hover:text-[#131313]" />
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-bold text-white font-mono uppercase">{link.name}</h3>
                  <p className="text-sm text-[#939393]">{link.description}</p>
                  <p className="text-xs font-mono text-[var(--primary)] mt-2 opacity-70 group-hover:opacity-100 transition-opacity">{link.handle}</p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-[var(--primary)]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}