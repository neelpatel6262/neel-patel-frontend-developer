import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 group ${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-[#1a1a1a] border border-[#333]'} hover:border-[var(--primary)]`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Moon className={`w-4 h-4 transition-colors ${theme === 'light' ? 'text-gray-700 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Sun className={`w-4 h-4 transition-colors ${theme === 'light' ? 'text-orange-500 group-hover:text-[var(--primary)]' : 'text-[#939393] group-hover:text-[var(--primary)]'}`} />
      </motion.div>
    </motion.button>
  );
}