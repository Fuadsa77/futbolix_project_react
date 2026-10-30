import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  // Extracts the current pathname from the URL
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top-left of the viewport
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the route pathname changes

  return null; // This component doesn't need to render any HTML
};

export default ScrollTop;
