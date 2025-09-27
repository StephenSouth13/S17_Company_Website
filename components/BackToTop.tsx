"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Hiển thị khi scroll > 100px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lên trên smooth
  const scrollToTop = () => {
    setIsClicking(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsClicking(false), 500); // reset hiệu ứng xoay
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center
        w-12 h-12 rounded-full shadow-lg bg-blue-600 text-white
        transition-all duration-300 transform
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        hover:bg-blue-700 hover:shadow-xl
        ${isClicking ? "animate-bounce" : ""}`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
