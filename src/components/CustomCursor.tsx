import { useEffect, useState } from 'react';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useVelocity, 
  useTransform, 
  useAnimationFrame 
} from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth following cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Velocity for "liquid" deformation
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);

  // Calculate rotation and stretch based on velocity
  const rotate = useMotionValue(0);
  const scaleX = useTransform([velocityX, velocityY], ([vx, vy]) => {
    const speed = Math.sqrt(vx * vx + vy * vy);
    return Math.min(1 + speed / 1000, 1.25); // Stretch up to 1.25x
  });
  const scaleY = useTransform(scaleX, (s) => 1 / s); // Squash to preserve volume

  // Update rotation on every frame based on velocity direction
  useAnimationFrame(() => {
    const vx = velocityX.get();
    const vy = velocityY.get();
    
    if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      rotate.set(angle);
    }
  });

  useEffect(() => {
    // Only show on desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Update target position
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      // Check for interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
        
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        style={{
          rotate,
          scaleX,
          scaleY,
        }}
        className="relative -ml-5 -mt-5 w-10 h-10 flex items-center justify-center"
      >
        {/* Main Liquid Cursor */}
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 0.8,
            backgroundColor: isHovering ? "rgba(255, 98, 0, 0.1)" : "transparent",
            borderColor: isHovering ? "rgba(255, 98, 0, 0.5)" : "rgba(147, 147, 147, 0.5)",
            borderWidth: "1px",
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full"
        >
        </motion.div>

        {/* Center Dot */}
        <motion.div
            animate={{ 
              scale: isHovering ? 0.5 : 1,
              backgroundColor: isHovering ? "rgb(255, 98, 0)" : "rgb(147, 147, 147)"
            }}
            className="absolute w-1.5 h-1.5 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}