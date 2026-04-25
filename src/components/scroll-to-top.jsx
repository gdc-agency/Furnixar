import  { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
        {isVisible && (
            <button onClick={scrollToTop} className="bg-[#BB976D] text-white hover:bg-black p-3 shadow-lg transition duration-300">
              <FiArrowUp/>
            </button>
        )}
    </div>
  );
};

export default ScrollToTop;
