import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight';
  delay?: number;
}

function AnimatedSection({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';

    const baseClass = 'transition-all duration-1000 ease-out';
    switch (variant) {
      case 'fadeUp':
        return `${baseClass} opacity-100 translate-y-0`;
      case 'fadeIn':
        return `${baseClass} opacity-100`;
      case 'slideLeft':
        return `${baseClass} opacity-100 translate-x-0`;
      case 'slideRight':
        return `${baseClass} opacity-100 translate-x-0`;
      default:
        return `${baseClass} opacity-100`;
    }
  };

  const getInitialClass = () => {
    switch (variant) {
      case 'fadeUp':
        return 'translate-y-8';
      case 'fadeIn':
        return '';
      case 'slideLeft':
        return 'translate-x-8';
      case 'slideRight':
        return '-translate-x-8';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${!isVisible ? getInitialClass() : ''} ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
