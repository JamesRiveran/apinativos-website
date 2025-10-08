import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  variant?: 'rectangular' | 'circular' | 'text';
  animation?: 'pulse' | 'wave' | 'none';
  lines?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width = '100%',
  height = '1rem',
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1
}) => {
  const baseClasses = 'bg-gray-200';
  
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  };

  const variantClasses = {
    rectangular: 'rounded',
    circular: 'rounded-full',
    text: 'rounded'
  };

  const getVariantStyles = () => {
    const baseStyle: React.CSSProperties = {
      width,
      height: variant === 'circular' ? width : height,
    };

    if (variant === 'circular') {
      baseStyle.aspectRatio = '1';
    }

    return baseStyle;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={`
              ${baseClasses} 
              ${animationClasses[animation]} 
              ${variantClasses[variant]}
              ${index === lines - 1 ? 'w-3/4' : 'w-full'}
            `}
            style={{
              height,
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`
        ${baseClasses} 
        ${animationClasses[animation]} 
        ${variantClasses[variant]}
        ${className}
      `}
      style={getVariantStyles()}
    />
  );
};

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({ 
  size = 40, 
  className = '' 
}) => (
  <Skeleton 
    variant="circular" 
    width={size} 
    height={size} 
    className={className} 
  />
);

export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
  width?: string | number;
}> = ({ 
  lines = 3, 
  className = '',
  width = '100%'
}) => (
  <Skeleton 
    variant="text" 
    lines={lines} 
    width={width}
    height="0.875rem"
    className={className} 
  />
);

export const SkeletonCard: React.FC<{ className?: string }> = ({ 
  className = '' 
}) => (
  <div className={`space-y-4 ${className}`}>
    <Skeleton height="12rem" className="rounded-lg" />
    <div className="space-y-2">
      <Skeleton height="1.25rem" width="75%" />
      <SkeletonText lines={2} />
    </div>
  </div>
);

export const SkeletonImage: React.FC<{ 
  width?: number | string;
  height?: number | string;
  className?: string;
}> = ({ 
  width = '100%', 
  height = '12rem',
  className = ''
}) => (
  <div 
    className={`relative overflow-hidden bg-gray-200 ${className}`}
    style={{ width, height }}
  >
    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]" />
    <div className="absolute inset-0 flex items-center justify-center">
      <svg 
        className="w-8 h-8 text-gray-400" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    </div>
  </div>
);

export default Skeleton;