import { motion } from 'motion/react';

export function CodingDoodle() {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background circle */}
      <motion.circle
        cx="200"
        cy="200"
        r="180"
        fill="url(#gradient1)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Desk */}
      <motion.rect
        x="80"
        y="280"
        width="240"
        height="15"
        rx="7"
        fill="currentColor"
        className="text-foreground/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />

      {/* Laptop base */}
      <motion.rect
        x="130"
        y="240"
        width="140"
        height="8"
        rx="2"
        fill="currentColor"
        className="text-foreground/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />

      {/* Laptop screen */}
      <motion.rect
        x="135"
        y="140"
        width="130"
        height="100"
        rx="4"
        fill="currentColor"
        className="text-foreground/10"
        stroke="currentColor"
        strokeWidth="3"
        className="text-foreground/30"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Code lines on screen */}
      <motion.line
        x1="150"
        y1="160"
        x2="210"
        y2="160"
        stroke="url(#gradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />
      <motion.line
        x1="150"
        y1="175"
        x2="240"
        y2="175"
        stroke="url(#gradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      <motion.line
        x1="150"
        y1="190"
        x2="195"
        y2="190"
        stroke="url(#gradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      />
      <motion.line
        x1="150"
        y1="205"
        x2="230"
        y2="205"
        stroke="url(#gradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />
      <motion.line
        x1="150"
        y1="220"
        x2="185"
        y2="220"
        stroke="url(#gradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      />

      {/* Person - Head */}
      <motion.circle
        cx="200"
        cy="100"
        r="25"
        fill="currentColor"
        className="text-foreground/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
      />

      {/* Person - Body */}
      <motion.path
        d="M 200 125 L 200 180"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="text-foreground/20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      />

      {/* Person - Left arm typing */}
      <motion.path
        d="M 200 140 Q 170 150 160 170"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        className="text-foreground/20"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.85, duration: 0.4 }}
      />

      {/* Person - Right arm typing */}
      <motion.path
        d="M 200 140 Q 230 150 240 170"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        className="text-foreground/20"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.85, duration: 0.4 }}
      />

      {/* Floating code brackets */}
      <motion.text
        x="80"
        y="120"
        fontSize="24"
        fill="url(#gradient2)"
        fontFamily="IBM Plex Mono, monospace"
        fontWeight="500"
        animate={{
          y: [120, 115, 120],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'</>'}
      </motion.text>

      <motion.text
        x="290"
        y="180"
        fontSize="20"
        fill="url(#gradient2)"
        fontFamily="IBM Plex Mono, monospace"
        fontWeight="500"
        animate={{
          y: [180, 175, 180],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        {'{ }'}
      </motion.text>

      {/* Floating dots */}
      <motion.circle
        cx="100"
        cy="200"
        r="3"
        fill="url(#gradient2)"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.circle
        cx="300"
        cy="220"
        r="3"
        fill="url(#gradient2)"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      />
      <motion.circle
        cx="320"
        cy="140"
        r="2.5"
        fill="url(#gradient2)"
        animate={{
          y: [0, -8, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />

      {/* Coffee cup */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        {/* Cup body */}
        <rect
          x="90"
          y="260"
          width="25"
          height="20"
          rx="2"
          fill="currentColor"
          className="text-foreground/15"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/30"
        />
        {/* Handle */}
        <path
          d="M 115 265 Q 125 265 125 270 Q 125 275 115 275"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/30"
        />
        {/* Steam */}
        <motion.path
          d="M 97 255 Q 97 250 99 248"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground/20"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M 107 255 Q 107 250 105 248"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground/20"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
      </motion.g>
    </motion.svg>
  );
}
