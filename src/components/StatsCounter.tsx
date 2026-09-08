import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label?: string;
  className?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  label,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * value;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, value, duration]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <div ref={ref} className={`inline-flex flex-col items-center ${className}`}>
      <span className="font-display font-bold tracking-tight">
        {prefix}
        {formattedCount}
        {suffix}
      </span>
      {label && <span className="text-slate-400 text-xs sm:text-sm font-medium mt-1">{label}</span>}
    </div>
  );
};
