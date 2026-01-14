import { useState, useEffect } from "react";

export function useLanguage() {
  // 1. Initialize from localStorage immediately (Fastest)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    const readLang = () => {
      // 2. Check Cookie (The "Source of Truth" for Google)
      const match = document.cookie.match(/googtrans=([^;]+)/);
      
      if (!match) {
        // Double check localStorage if cookie is missing/expired
        const stored = localStorage.getItem("lang");
        return setLang(stored || "en");
      }

      // Extract 'hi' or 'en' from cookie format like "/en/hi"
      const l = match[1].split("/").pop();
      const detectedLang = l === "hi" ? "hi" : "en";
      
      setLang(detectedLang);

      // Keep localStorage in sync with the actual cookie
      if (localStorage.getItem("lang") !== detectedLang) {
         localStorage.setItem("lang", detectedLang);
      }
    };

    // Run immediately on mount
    readLang();

    // 3. FEATURE PRESERVED: Watch for Google DOM changes
    // Optimized: Only watch the <html> tag for class changes (translated-ltr)
    const observer = new MutationObserver(readLang);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class', 'lang'] 
    });

    return () => observer.disconnect();
  }, []);

  return lang;
}