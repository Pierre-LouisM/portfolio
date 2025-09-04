'use client';

import { motion } from 'framer-motion';

interface TechGridProps {
  className?: string;
  variant?: 'default' | 'hero' | 'section';
}

export default function TechGrid({ className = "", variant = 'default' }: TechGridProps) {
  const getBackgroundPattern = () => {
    switch (variant) {
      case 'hero':
        return {
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(34, 211, 238, 0.03) 0%, transparent 40%),
            linear-gradient(rgba(100,100,100,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,100,100,0.02) 1px, transparent 1px),
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.015) 0%, transparent 30%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.015) 0%, transparent 30%)
          `,
          backgroundSize: '60px 60px, 80px 80px, 100px 100px, 20px 20px, 20px 20px, 120px 120px, 140px 140px'
        };
      case 'section':
        return {
          backgroundImage: `
            linear-gradient(45deg, rgba(99, 102, 241, 0.01) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(99, 102, 241, 0.01) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(168, 85, 247, 0.01) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(168, 85, 247, 0.01) 75%)
          `,
          backgroundSize: '20px 20px, 20px 20px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        };
      default:
        return {
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        };
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Enhanced gradient overlay - VERY VISIBLE FOR TESTING */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-purple-50/40 to-green-100/50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-red-50/20 via-transparent to-yellow-50/30" />
      
      {/* Pattern overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={getBackgroundPattern()}
      />
      
      {/* AI/Data visualization elements */}
      {variant === 'hero' && (
        <>
          {/* Floating data nodes - VERY VISIBLE FOR TESTING */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500/80 rounded-full border-2 border-blue-600 shadow-lg"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500/70 rounded-full border-2 border-purple-600 shadow-lg"
            animate={{ 
              y: [0, 12, 0],
              x: [0, 8, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-500/30 rounded-full border border-green-500/40"
            animate={{ 
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear",
              delay: 3
            }}
          />
          <motion.div
            className="absolute top-1/6 left-1/2 w-1.5 h-1.5 bg-cyan-500/25 rounded-full"
            animate={{ 
              opacity: [0.25, 0.65, 0.25],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Circuit lines */}
          <motion.div
            className="absolute top-1/3 left-1/2 w-20 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
            animate={{
              opacity: [0, 0.7, 0],
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/2 w-16 h-px bg-gradient-to-l from-transparent via-purple-500/20 to-transparent rotate-45"
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          <motion.div
            className="absolute top-1/5 left-1/3 w-12 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent rotate-12"
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Mathematical symbols - VERY VISIBLE FOR TESTING */}
          <motion.div
            className="absolute top-1/5 right-1/5 text-red-500 text-6xl font-mono select-none font-bold"
            animate={{
              opacity: [0.15, 0.35, 0.15],
              rotate: [0, 8, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ∑
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-1/6 text-green-500 text-4xl font-mono select-none font-bold"
            animate={{
              opacity: [0.12, 0.32, 0.12],
              y: [0, -8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            λ
          </motion.div>
          <motion.div
            className="absolute top-3/5 left-1/3 text-gray-500/18 text-lg font-mono select-none"
            animate={{
              opacity: [0.10, 0.28, 0.10],
              scale: [0.9, 1.15, 0.9]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            ∂
          </motion.div>
          <motion.div
            className="absolute top-2/5 right-1/3 text-gray-500/15 text-base font-mono select-none"
            animate={{
              opacity: [0.08, 0.25, 0.08],
              x: [0, 3, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            ƒ
          </motion.div>
        </>
      )}
      
      {/* Section variant elements */}
      {variant === 'section' && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500/25 rounded-full border border-blue-500/30"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-12 h-px bg-gradient-to-r from-transparent via-gray-500/15 to-transparent"
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-500/20 rounded-full"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}
      
      {/* Add VERY VISIBLE dot matrix pattern for testing */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,0,0,0.3) 2px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
}