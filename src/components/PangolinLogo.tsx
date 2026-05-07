import { motion } from 'motion/react';

export default function PangolinLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative w-12 h-12 flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C5A059]">
        <path 
          d="M50 10L10 30L10 70L50 90L90 70L90 30L50 10Z" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="opacity-20"
        />
        <path 
          d="M50 20L20 35L20 65L50 80L80 65L80 35L50 20Z" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="opacity-40"
        />
        {/* Abstract Pangolin Scale Pattern */}
        <path d="M50 40L40 50L50 60L60 50L50 40Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M50 30L35 45L50 60L65 45L50 30Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        <path d="M50 50L30 70M50 50L70 70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
      <div className="absolute inset-0 bg-gold-400/10 blur-xl rounded-full" />
    </motion.div>
  );
}
