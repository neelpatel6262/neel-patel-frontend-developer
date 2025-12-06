'use client';

import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export function ThemeToggle({ theme: externalTheme, toggleTheme: externalToggle }: ThemeToggleProps = {}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const html = document.documentElement;
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
    externalToggle?.();
  };

  // Use external theme/toggle if provided, otherwise use internal state
  const currentTheme = externalTheme || theme;
  const toggleFn = externalToggle || handleToggle;

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleFn}
      className="relative w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Moon Icon - Shows in Dark Mode */}
      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === 'dark' ? 0 : 180,
          scale: currentTheme === 'dark' ? 1 : 0,
          opacity: currentTheme === 'dark' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.div>

      {/* Sun Icon - Shows in Light Mode */}
      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === 'light' ? 0 : -180,
          scale: currentTheme === 'light' ? 1 : 0,
          opacity: currentTheme === 'light' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.div>
    </motion.button>
  );
}