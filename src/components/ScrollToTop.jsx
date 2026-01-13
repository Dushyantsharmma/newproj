import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  Smart scroll handler for Raj Ann Raj Driving School
  Works with:
  - Fixed animated navbar
  - Hash links (#gallery, #contact, etc)
  - Mobile Safari
  - Vite / React Router
*/

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scroll = () => {
      // Get navbar height dynamically
      const header = document.querySelector("header");
      const offset = header ? header.offsetHeight + 12 : 110;

      // If hash exists → scroll to section
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            offset;
          window.requestAnimationFrame(() => {
            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          });
          return;
        }
      }

      // Otherwise scroll to top
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    };

    // Delay ensures layout is fully rendered (Vite + Framer Motion fix)
    setTimeout(scroll, 60);
  }, [pathname, hash]);

  return null;
}