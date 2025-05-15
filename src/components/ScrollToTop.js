import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 

// ScrollToTop component ensures the window scrolls to the top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation(); 

  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, [pathname]);
  return null; 
};

export default ScrollToTop; 
