// LoadingProgress.js
import { useEffect } from "react";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress CSS

const LoadingProgress = () => {
  useEffect(() => {
    NProgress.start(); // Start the progress bar
    return () => {
      NProgress.done(); // Finish the progress bar on component unmount
    };
  }, []);

  return null; // This component does not render anything
};

export default LoadingProgress;
