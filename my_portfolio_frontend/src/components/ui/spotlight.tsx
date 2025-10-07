// src/components/ui/Spotlight.tsx
import React from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({ className, fill = "#fff" }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full  pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
      }}
    />
  );
};
