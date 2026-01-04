import { ReactNode, useState } from 'react';
import { useCursorPosition } from '../hooks/useCursorPosition';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

function FloatingCard({ children, className = '' }: FloatingCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cursorPos = useCursorPosition();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (cursorPos.y - centerY) * 0.02;
    const rotateY = (cursorPos.x - centerX) * -0.02;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className={`${className}`}
    >
      {children}
    </div>
  );
}

export default FloatingCard;
