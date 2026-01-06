import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Keeps navigation predictable with a fixed header:
// - When navigating to /path#hash, scrolls to the element with that id
// - Otherwise scrolls to the top
export default function ScrollToTop({ offset = 96 }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash ? location.hash.slice(1) : "";

    // Let the new route render first.
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
          window.scrollTo({ top, behavior: "smooth" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }, [location.pathname, location.hash, offset]);

  return null;
}
