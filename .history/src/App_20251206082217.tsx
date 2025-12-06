import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { VibeCodingProject } from './components/VibeCodingProject';
import { NotionSection } from './components/NotionSection';
import { Contact } from './components/Contact';
import { ContactAside } from './components/ContactAside';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark theme
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <Toaster position="top-center" richColors theme={theme} />
      <CustomCursor />
      
      <div className="relative min-h-screen overflow-x-hidden bg-[#131313] text-foreground selection:bg-[var(--primary)]/30 selection:text-[var(--primary)] transition-colors duration-300">
        
        {/* Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <MobileNav />
        <ContactAside />

        {/* Main Content */}
        <main className="relative z-10 flex flex-col gap-0 md:gap-0 pb-24">
          <Hero />
          <div className="border-t border-[#333]" />
          <About />
          <div className="border-t border-[#333]" />
          <Projects />
          <div className="border-t border-[#333]" />
          <VibeCodingProject />
          <div className="border-t border-[#333]" />
          <NotionSection />
          <div className="border-t border-[#333]" />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative py-12 px-4 md:px-8 border-t border-[#333] bg-[#131313]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-[#939393] font-mono uppercase tracking-widest"
            >
              © 2025 Neel Patel. <span className="text-[#555]">All Systems Nominal.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6"
            >
                {[
                    { icon: Github, href: "https://github.com/neelpatel6262" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/uxui-designer-devloper/" },
                    { icon: Mail, href: "mailto:patelneel392003@gmail.com" }
                ].map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.href}
                        target={social.href.startsWith('mailto') ? undefined : "_blank"}
                        rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                        className="text-[#939393] hover:text-[var(--primary)] transition-colors duration-300"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  );
}