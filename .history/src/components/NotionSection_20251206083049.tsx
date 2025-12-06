import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Gift, Sparkles, Download, ArrowRight, Database, Layout, Code } from 'lucide-react';

export function NotionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-[#131313]">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 bg-[#131313] border border-[#333] shadow-lg"
        >
           {/* Decorative pattern */}
           <div className="absolute inset-0 opacity-[0.02]" 
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
           />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon and badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-16 h-16 bg-[#1a1a1a] border border-[#333] flex items-center justify-center group hover:border-[var(--primary)] transition-colors duration-300">
                <Gift className="w-8 h-8 text-[var(--primary)]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1 border border-[#333] bg-[#1a1a1a] mb-8"
            >
              <Sparkles className="w-3 h-3 text-[var(--primary)]" />
              <span className="text-xs font-mono font-semibold text-[#939393] uppercase tracking-widest">Free Resource</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
            >
              WORKFLOW <span className="text-[var(--primary)]">SYSTEM</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-[#939393] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            >
              Enhance your operational efficiency. Streamline projects, design systems, and code snippets in a unified workspace.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { label: 'Project Templates', icon: Layout },
                { label: 'Design Systems', icon: Database },
                { label: 'Code Snippets', icon: Code },
              ].map((feature, index) => (
                <div
                  key={feature.label}
                  className="p-6 bg-[#1a1a1a] border border-[#333] flex flex-col items-center gap-4 hover:border-[var(--primary)] transition-all duration-300 group"
                >
                  <feature.icon className="w-6 h-6 text-[#939393] group-hover:text-[var(--primary)] transition-colors" />
                  <div className="font-mono text-sm uppercase tracking-wider text-[#939393] group-hover:text-white transition-colors">{feature.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="https://uiuxdevloper.notion.site/Boost-Your-Workflow-Design-x-Dev-22e85c5cc87280f3ac6bc6152dc9ef0b?pvs=74"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--primary)] bg-transparent text-[var(--primary)] font-mono uppercase tracking-widest hover:bg-[var(--primary)] hover:text-[#131313] transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Access My Notion Template</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 text-xs text-[#555] font-mono uppercase tracking-widest"
            >
              Direct Access • No Authentication • Open Source
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}