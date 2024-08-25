"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed bottom-10 right-10 bg-mirage-blue text-pale-blue rounded-[50%] p-4 cursor-pointer z-[1000]",
        "shadow-md border border-water-white",
        "md:hidden",
      )}
    >
      Top
    </button>
  ) : null;
};

export default ScrollTop;
