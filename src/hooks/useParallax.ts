import { useEffect, useRef } from 'react';

export const useParallax = () => {
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrolled = window.scrollY;
          const rate = scrolled * 0.3;
          
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.style.transform = `translateY(${rate}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return parallaxRefs;
};