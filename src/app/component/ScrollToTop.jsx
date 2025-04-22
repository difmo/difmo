"use client";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location]); // This will trigger every time the route changes

  return null; // No need to render anything
};

export default ScrollToTop;
