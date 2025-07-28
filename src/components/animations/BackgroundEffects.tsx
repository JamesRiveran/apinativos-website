import React from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, duration, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gray-300 opacity-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  count = 15, 
  className = ""
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          duration={particle.duration}
          delay={particle.delay}
        />
      ))}
    </div>
  );
};

interface GradientOrbProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'blue' | 'purple' | 'orange' | 'gray';
}

export const GradientOrb: React.FC<GradientOrbProps> = ({ 
  className = "",
  size = 'md',
  color = 'gray'
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const colorClasses = {
    green: 'from-green-400 to-emerald-600',
    blue: 'from-blue-400 to-cyan-600',
    purple: 'from-purple-400 to-pink-600',
    orange: 'from-orange-400 to-red-600',
    gray: 'from-gray-200 to-gray-400'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-r ${colorClasses[color]} opacity-10 blur-xl ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
