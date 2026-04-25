import { useEffect, useState } from "react";

export default function NavScroll() {
    const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY; 
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute top-full left-0 h-[3px] w-0 bg-primary" id="indicator" style={{ width: `${scrollWidth}%` }}></div>
  )
}
