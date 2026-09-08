import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  glowColor?: 'blue' | 'emerald' | 'indigo' | 'none';
  onClick?: () => void;
  id?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  perspective = 1000,
  glowColor = 'none',
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Cursor position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation: mouse X moves Y-axis tilt, mouse Y moves X-axis tilt
    const rotateX = -mouseY * maxTilt * 2;
    const rotateY = mouseX * maxTilt * 2;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const getGlowClass = () => {
    if (!isHovered) return '';
    switch (glowColor) {
      case 'blue':
        return 'shadow-[0_20px_40px_-15px_rgba(37,99,235,0.35)] border-blue-500/40';
      case 'emerald':
        return 'shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)] border-emerald-500/40';
      case 'indigo':
        return 'shadow-[0_20px_40px_-15px_rgba(99,102,241,0.35)] border-indigo-500/40';
      default:
        return 'shadow-2xl border-slate-700/60';
    }
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: `${perspective}px`,
      }}
      className={`relative select-none transition-transform duration-200 ease-out ${className}`}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`w-full h-full relative rounded-2xl overflow-hidden glass-panel transition-colors duration-300 ${getGlowClass()}`}
      >
        {/* Specular Glare Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 70%)`,
          }}
        />

        {/* Content with 3D Depth */}
        <div className="relative z-10 w-full h-full transform-style-3d">
          {children}
        </div>
      </div>
    </div>
  );
};
