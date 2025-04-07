import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.classList.add('cursor-glow');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.classList.remove('cursor-glow');
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isPointer ? 0.5 : 1})`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor; 