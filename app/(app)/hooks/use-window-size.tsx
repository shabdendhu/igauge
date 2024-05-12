import { useState, useEffect } from 'react';

const useWindowSize = (debounceDelay: number = 250): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, debounceDelay);
    };
    handleResize();
    if (typeof window !== 'undefined') {
      // Only attach the event listener on the client side
      window.addEventListener('resize', handleResize);

      return () => {
        clearTimeout(resizeTimeout);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [debounceDelay]);

  return windowSize;
};

export default useWindowSize;
