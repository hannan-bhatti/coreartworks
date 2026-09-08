import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number; // duration in ms
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Parse value string: e.g. "1,450+", "99.4%", "120+", "28"
    const cleaned = value.replace(/,/g, '');
    const match = cleaned.match(/([\d.]+)/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const prefix = value.slice(0, value.indexOf(match[1][0]));
    const suffix = value.slice(value.lastIndexOf(match[1][match[1].length - 1]) + 1);
    const hasComma = value.includes(',');
    const isDecimal = match[1].includes('.');
    const decimalPlaces = isDecimal ? match[1].split('.')[1].length : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out expo formula: 1 - Math.pow(2, -10 * progress)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentNum = targetNum * easeProgress;

            let formattedNumber: string;
            if (isDecimal) {
              formattedNumber = currentNum.toFixed(decimalPlaces);
            } else {
              const rounded = Math.round(currentNum);
              formattedNumber = hasComma ? rounded.toLocaleString() : rounded.toString();
            }

            setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
};
