import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
      setIsHovering(isClickable);
      setIsVisible(true);

      // Update CSS variables
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      document.documentElement.style.setProperty('--cursor-scale', isClickable ? '0.5' : '1');
      document.documentElement.style.setProperty('--cursor-opacity', '1');
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      document.documentElement.style.setProperty('--cursor-opacity', '0');
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      document.documentElement.style.setProperty('--cursor-opacity', '1');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    document.body.classList.add('cursor-glow');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      document.body.classList.remove('cursor-glow');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className={`cursor-dot ${isHovering ? 'hover' : ''}`} />
      <div className={`cursor-outline ${isHovering ? 'hover' : ''}`} />
    </>
  );
};

export default CustomCursor; 