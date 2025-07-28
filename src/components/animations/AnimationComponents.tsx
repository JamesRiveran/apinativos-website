import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FadeInLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInLeft: React.FC<FadeInLeftProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={hasBeenInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FadeInRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInRight: React.FC<FadeInRightProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={hasBeenInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={hasBeenInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({ 
  children, 
  className = "",
  staggerDelay = 0.1
}) => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasBeenInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
