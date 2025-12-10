import { motion } from 'motion/react';
import { Home, User, Briefcase, Mail, BookOpen } from 'lucide-react';

interface MobileNavProps {
  theme?: 'light' | 'dark';
}

export function MobileNav({ theme = 'dark' }: MobileNavProps) {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Work', href: '#vibe-project', icon: Briefcase },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50"
    >
      <div className={`flex items-center justify-around px-4 py-4 rounded-lg backdrop-blur-xl shadow-2xl ${theme === 'light' ? 'bg-white/90 border border-gray-300' : 'bg-[#131313]/90 border border-[#333]'}`}>
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center gap-1 relative"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.icon className={`w-5 h-5 transition-colors duration-300 relative z-10 ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`} />
            <span className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 relative z-10 ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`}>
              {item.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}