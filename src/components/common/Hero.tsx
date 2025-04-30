import React from "react";

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
      className={`relative flex items-center justify-center ${heightClass} w-full bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      <div className="relative z-10 text-center px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
