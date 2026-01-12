import { useEffect, useState } from "react";

export function useLanguage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const readLang = () => {
      const match = document.cookie.match(/googtrans=([^;]+)/);
      if (!match) return setLang("en");
      const l = match[1].split("/").pop();
      setLang(l === "hi" ? "hi" : "en");
    };

    readLang();

    const observer = new MutationObserver(readLang);
    observer.observe(document.documentElement, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, []);

  return lang;
}
