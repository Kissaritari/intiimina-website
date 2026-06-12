"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // show after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
    fixed bottom-20 lg:bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-background shadow-lg 
    hover:bg-primary-hover transition-opacity duration-300
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      aria-label="Back to top"
    >
        ↑ Ylös ↑ 
    </button>
  );
}
