import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const articles = [
    {
      title: 'How I Built My Developer Portfolio in the AI Era Without Starting From Scratch',
      description: 'A detailed walkthrough of how I leveraged AI tools to create a standout developer portfolio without starting from a blank canvas.',
      link: 'https://medium.com/@patelneel392003/how-i-built-my-developer-portfolio-in-the-ai-era-without-starting-from-scratch-d872a7280cb3',
      date: 'Dec 10, 2025',
      readTime: '5 min read'
    }
  ];

  return (
    <section id="blog" className="py-24 px-4 md:px-8 relative bg-[#131313]">
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#939393]">Thoughts & Insights</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight text-white"
        >
          FEATURED <span className="text-[var(--primary)]">ARTICLES</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group block"
            >
              <div className="relative p-8 bg-[#131313] border border-[#333] hover:border-[var(--primary)] transition-all duration-300">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300 font-mono uppercase tracking-tight">
                      {article.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-[#939393] group-hover:text-[var(--primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                  
                  <p className="text-[#939393] leading-relaxed mb-8 flex-grow font-light">
                    {article.description}
                  </p>
                  
                  {/* Article metadata */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 text-xs font-mono uppercase tracking-wider border border-[#333] text-[#939393] bg-[#1a1a1a]">
                      {article.date}
                    </span>
                    <span className="px-2 py-1 text-xs font-mono uppercase tracking-wider border border-[#333] text-[#939393] bg-[#1a1a1a]">
                      {article.readTime}
                    </span>
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