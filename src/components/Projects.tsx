import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'AGNCI Webflow Template',
      description: 'A minimal and elegant portfolio website featuring smooth transitions and responsive design.',
      tech: ['HTML', 'CSS', 'Webflow'],
      link: 'https://agnci-webflow-html-template.vercel.app/',
    },
    {
      title: 'ElectrifyLabs Landing Page',
      description: 'Modern landing page with glassmorphism effects and stunning visual hierarchy.',
      tech: ['HTML', 'CSS', 'Design'],
      link: 'https://electrifylabs-home-page.vercel.app/',
    },
    {
      title: 'Task Manager',
      description: 'Dynamic dashboard with interactive charts and real-time data visualization.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://task-manager-eight-wheat-77.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative bg-[#131313]">
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#939393]">Selected Works</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight text-white"
        >
          FEATURED <span className="text-[var(--primary)]">PROJECTS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group block h-full"
            >
              <div className="relative h-full p-8 bg-[#131313] border border-[#333] hover:border-[var(--primary)] transition-all duration-300 flex flex-col">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300 font-mono uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#939393] group-hover:text-[var(--primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                  
                  <p className="text-[#939393] leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono uppercase tracking-wider border border-[#333] text-[#939393] bg-[#1a1a1a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}