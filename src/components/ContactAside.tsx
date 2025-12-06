import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X, Github, Linkedin, MessageSquare } from 'lucide-react';

interface ContactAsideProps {
  theme?: 'light' | 'dark';
}

export function ContactAside({ theme = 'dark' }: ContactAsideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neelpatel6262', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/uxui-designer-devloper/', label: 'LinkedIn' },
    { 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 4.5h5.5c1.5 0 2.7 1.2 2.7 2.7 0 1-.5 1.9-1.3 2.4 1.2.4 2 1.5 2 2.8 0 1.6-1.3 2.9-2.9 2.9H6.5V4.5zm2 4.3h3c.6 0 1-.4 1-1s-.4-1-1-1h-3v2zm0 4.5h3.5c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2H8.5v2.4zM15.5 6.5h5v1h-5v-1zm1.6 8.6c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2c-2.2 0-4.2-1.9-4.2-4.2zm6.4 0c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2 1 2.2 2.2 2.2 2.2-1 2.2-2.2z"/>
        </svg>
      ),
      href: 'https://www.behance.net/neelpatel110',
      label: 'Behance'
    },
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
                        className={`flex flex-col items-center justify-center gap-3 p-4 border transition-all group ${theme === 'light' ? 'border-gray-300 bg-white hover:border-[var(--primary)]' : 'border-[#333] bg-[#1a1a1a]/50 hover:border-[var(--primary)] hover:bg-[#1a1a1a]'}`}
                      >
                        <link.icon className={`w-5 h-5 transition-colors ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`} />
                        <span className={`text-[10px] font-mono uppercase tracking-wider transition-colors ${theme === 'light' ? 'text-gray-700 group-hover:text-black' : 'text-[#939393] group-hover:text-white'}`}>
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mini Form - Web3Forms Integration */}
                <form 
                  ref={formRef}
                  className="mt-10 space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!message.trim() || isSending) return;
                    
                    setIsSending(true);
                    setSendStatus('idle');
                    
                    const formData = new FormData(e.currentTarget);
                    
                    fetch('https://api.web3forms.com/submit', {
                      method: 'POST',
                      body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                      if (data.success) {
                        setSendStatus('success');
                        setMessage('');
                        setTimeout(() => setSendStatus('idle'), 3000);
                      } else {
                        setSendStatus('error');
                        setTimeout(() => setSendStatus('idle'), 3000);
                      }
                    })
                    .catch(() => {
                      setSendStatus('error');
                      setTimeout(() => setSendStatus('idle'), 3000);
                    })
                    .finally(() => {
                      setIsSending(false);
                    });
                  }}
                >
                  <input type="hidden" name="access_key" value="ca8e992e-3270-474c-9f39-a4a53bc11a92" />
                  <input type="hidden" name="subject" value="New Portfolio Transmission" />
                  <input type="hidden" name="from_name" value="Portfolio Visitor" />
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[var(--primary)] uppercase tracking-widest">
                      Transmission
                    </label>
                    <textarea
                      ref={textareaRef}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                      className={`w-full p-4 text-sm focus:outline-none transition-all resize-none font-mono ${theme === 'light' ? 'bg-white border border-gray-300 text-black focus:border-[var(--primary)] placeholder:text-gray-300' : 'bg-[#131313] border border-[#333] text-white focus:border-[var(--primary)] placeholder:text-[#333]'}`}
                      placeholder="Type your message here..."
                      disabled={isSending}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending || !message.trim()}
                    className={`w-full py-4 border font-mono uppercase tracking-widest transition-all duration-300 ${isSending || !message.trim() ? 'opacity-50 cursor-not-allowed' : ''} ${theme === 'light' ? 'border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-white' : 'border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-[#131313]'}`}
                  >
                    {isSending ? 'SENDING...' : 'SEND TRANSMISSION'}
                  </button>
                  {sendStatus === 'success' && (
                    <div className="text-green-500 text-sm font-mono tracking-wider text-center">
                      ✓ Transmission received successfully!
                    </div>
                  )}
                  {sendStatus === 'error' && (
                    <div className="text-red-500 text-sm font-mono tracking-wider text-center">
                      ✗ Failed to send. Please try again.
                    </div>
                  )}
                </form>
              </div>
              
              {/* Footer Status */}
              <div className={`p-4 ${theme === 'light' ? 'border-t border-gray-300 bg-white' : 'border-t border-[#333] bg-[#1a1a1a]'}`}>
                <div className={`flex items-center justify-between text-[10px] font-mono uppercase ${theme === 'light' ? 'text-gray-500' : 'text-[#555]'}`}>
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