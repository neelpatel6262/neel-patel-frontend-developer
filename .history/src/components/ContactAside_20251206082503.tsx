import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X, Github, Linkedin, MessageSquare } from 'lucide-react';

interface ContactAsideProps {
  theme?: 'light' | 'dark';
}

export function ContactAside({ theme = 'dark' }: ContactAsideProps) {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neelpatel6262', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/uxui-designer-devloper/', label: 'LinkedIn' },
  ];

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        onClick={() => setIsOpen(true)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6 py-8 px-3 border-l border-y transition-all duration-300 group shadow-lg ${theme === 'light' ? 'bg-white border-gray-300 hover:border-[var(--primary)]' : 'bg-[#131313] border-[#333] hover:border-[var(--primary)]'}`}
      >
        <span 
          className={`text-xs font-mono font-medium tracking-[0.2em] transition-colors uppercase rotate-180 whitespace-nowrap ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`}
          style={{ writingMode: 'vertical-rl' }}
        >
          Contact
        </span>
        <div className={`w-[1px] h-8 transition-colors ${theme === 'light' ? 'bg-gray-300 group-hover:bg-[var(--primary)]' : 'bg-[#333] group-hover:bg-[var(--primary)]'}`} />
        <MessageSquare className={`w-4 h-4 transition-colors ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`} />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-md shadow-2xl p-0 flex flex-col ${theme === 'light' ? 'bg-white border-l border-gray-300' : 'bg-[#131313] border-l border-[#333]'}`}
            >
              {/* Header */}
              <div className={`p-8 flex justify-between items-center ${theme === 'light' ? 'border-b border-gray-300' : 'border-b border-[#333]'}`}>
                 <h2 className={`text-2xl font-bold font-mono uppercase tracking-tight ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Initialize <span className="text-[var(--primary)]">Link</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 transition-all group ${theme === 'light' ? 'hover:bg-gray-100 border border-transparent hover:border-gray-300' : 'hover:bg-[#1a1a1a] border border-transparent hover:border-[#333]'}`}
                >
                  <X className={`w-5 h-5 transition-colors ${theme === 'light' ? 'text-gray-700 group-hover:text-black' : 'text-[#939393] group-hover:text-white'}`} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8">
                <p className={`mb-10 font-light leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-[#939393]'}`}>
                  Available for freelance opportunities and technical consultation. Initialize a secure connection below.
                </p>

                {/* Contact Options */}
                <div className="space-y-6">
                  <a
                    href="mailto:patelneel392003@gmail.com"
                    className={`flex items-center gap-4 p-4 border transition-all group ${theme === 'light' ? 'border-gray-300 bg-white hover:border-[var(--primary)]' : 'border-[#333] bg-[#1a1a1a]/50 hover:border-[var(--primary)] hover:bg-[#1a1a1a]'}`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center border transition-colors ${theme === 'light' ? 'border-gray-300 bg-white group-hover:border-[var(--primary)]' : 'border-[#333] bg-[#131313] group-hover:border-[var(--primary)]'}`}>
                      <Mail className={`w-4 h-4 transition-colors ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`} />
                    </div>
                    <div>
                      <div className={`text-xs font-mono uppercase tracking-wider mb-1 ${theme === 'light' ? 'text-gray-700' : 'text-[#939393]'}`}>Direct Link</div>
                      <div className={`font-medium transition-colors ${theme === 'light' ? 'text-black group-hover:text-[var(--primary)]' : 'text-white group-hover:text-[var(--primary)]'}`}>
                        patelneel392003@gmail.com
                      </div>
                    </div>
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-3 p-4 border border-[#333] bg-[#1a1a1a]/50 hover:border-[var(--primary)] hover:bg-[#1a1a1a] transition-all group"
                      >
                        <link.icon className="w-5 h-5 text-[#939393] group-hover:text-[var(--primary)] transition-colors" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#939393] group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mini Form - Workable with Mailto */}
                <form 
                  action="mailto:patelneel392003@gmail.com" 
                  method="post" 
                  enctype="text/plain"
                  className="mt-10 space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[var(--primary)] uppercase tracking-widest">
                      Transmission
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-[#131313] border border-[#333] p-4 text-sm text-white focus:outline-none focus:border-[var(--primary)] transition-all resize-none placeholder:text-[#333] font-mono"
                      placeholder="// TYPE_MESSAGE_HERE..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 border border-[var(--primary)] bg-transparent text-[var(--primary)] font-mono uppercase tracking-widest hover:bg-[var(--primary)] hover:text-[#131313] transition-all duration-300"
                  >
                    Send Transmission
                  </button>
                </form>
              </div>
              
              {/* Footer Status */}
              <div className="p-4 border-t border-[#333] bg-[#1a1a1a]">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#555]">
                  <span>System Status: Online</span>
                  <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/>
                     <span>v2.4.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}