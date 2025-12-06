import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="hidden md:flex fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className={`max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4 rounded-sm backdrop-blur-sm shadow-lg ${theme === 'light' ? 'bg-white/90 border border-gray-300' : 'bg-[#131313]/90 border border-[#333333]'}`}>
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="relative group flex items-center gap-4"
        >
          <span className={`text-xl font-bold font-mono tracking-tighter ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            NP<span className="text-[var(--primary)]">.</span>
          </span>
          
          {/* Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </div>
            <span className={`text-xs font-mono uppercase tracking-widest ${theme === 'light' ? 'text-gray-700/70' : 'text-white/70'}`}>Available</span>
          </div>
        </motion.a>
        
        {/* Nav Items */}
        <div className="flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-mono transition-colors group uppercase tracking-wider ${theme === 'light' ? 'text-gray-700 hover:text-[var(--primary)]' : 'text-[#939393] hover:text-[var(--primary)]'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          
          <div className={`pl-6 border-l ${theme === 'light' ? 'border-gray-300' : 'border-[#333333]'}`}>
             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}