import React from 'react';

const MOBILE_WIDTH = 640;
export default function useResizer() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < MOBILE_WIDTH);

  function handleSizeChange() {
    return setIsMobile(window.innerWidth < MOBILE_WIDTH);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleSizeChange);

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, [isMobile]);

  return isMobile;
}
