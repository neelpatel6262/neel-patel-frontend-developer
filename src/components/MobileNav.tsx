import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, Mail, BookOpen, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MobileNavProps {
  theme?: 'light' | 'dark';
  toggleTheme: () => void;
}

export function MobileNav({ theme = 'dark', toggleTheme }: MobileNavProps) {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Work', href: '#vibe-project', icon: Briefcase },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Update active index based on current hash
  useEffect(() => {
    const handleHashChange = () => {
      const currentIndex = navItems.findIndex(item => 
        window.location.hash === item.href
      );
      setActiveIndex(currentIndex);
    };

    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [navItems]);

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 25 }}
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`flex items-center gap-1 px-6 py-4 rounded-full backdrop-blur-xl shadow-2xl ${theme === 'light' ? 'bg-white/90 border border-gray-300' : 'bg-[#131313]/90 border border-[#333]'}`}>
        <div className="flex items-center gap-1 relative">
          <AnimatePresence mode="popLayout">
            {activeIndex >= 0 && (
              <motion.div
                layoutId="mobile-active-pill"
                className="absolute h-12 rounded-full bg-[oklch(0.665_0.213_41.69)] z-0"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 40,
                  mass: 0.4
                }}
              />
            )}
          </AnimatePresence>
          
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative z-10 flex items-center justify-center h-12 min-w-[72px] px-3 rounded-full"
              layout
              onClick={() => setActiveIndex(index)}
              whileHover={{ 
                backgroundColor: 'oklch(0.665 0.213 41.69)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label={`${item.name} navigation item`}
              aria-current={index === activeIndex ? 'page' : undefined}
            >
              <div className="flex items-center gap-2">
                <item.icon 
                  className={`w-4 h-4 transition-colors duration-300 ${
                    index === activeIndex
                      ? 'text-white' 
                      : theme === 'light'
                        ? 'text-gray-700'
                        : 'text-[#939393]'
                  }`} 
                />
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.span
                      initial={{ opacity: 0, x: -5, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -5, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="text-[10px] font-mono uppercase tracking-wide whitespace-nowrap text-white"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>
          ))}
        </div>
        <div className={`pl-3 border-l ${theme === 'light' ? 'border-gray-300' : 'border-[#333]/30'}`}>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              className={theme === 'light' ? 'text-gray-700' : 'text-[#939393]'}
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4" strokeWidth={2} />
              ) : (
                <Sun className="w-4 h-4" strokeWidth={2} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}