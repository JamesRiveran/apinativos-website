import React from "react";
import { motion } from "framer-motion";
import { FloatingParticles, GradientOrb } from "../animations/BackgroundEffects";
import { FloatingElement } from "../animations/SpecialEffects";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: "small" | "medium" | "large";
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = "/src/assets/images/placeholder.jpg",
  height = "medium",
  overlay = true,
}) => {
  const heightClass = {
    small: "h-64",
    medium: "h-96",
    large: "h-screen",
  }[height];

  return (
    <div
      className={`relative flex items-center justify-center ${heightClass} w-full bg-cover bg-center overflow-hidden`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Effects */}
      <FloatingParticles count={20} />
      <GradientOrb className="absolute top-10 left-10" size="lg" color="gray" />
      <GradientOrb className="absolute bottom-10 right-10" size="md" color="gray" />
      
      {overlay && (
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      <div className="relative z-10 text-center px-4 w-full">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <FloatingElement duration={4} delay={1}>
            <motion.p 
              className="text-xl md:text-2xl text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {subtitle}
            </motion.p>
          </FloatingElement>
        )}
      </div>
    </div>
  );
};

export default Hero;
