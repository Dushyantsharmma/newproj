import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Languages, ChevronDown, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LANGS = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "Hindi", flag: "🇮🇳" },
];

const setGoogleCookies = (langCode) => {
  const domain = window.location.hostname;
  // Set all variations to ensure it sticks
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  document.cookie = `googtrans=/en/${langCode};`;
};

export default function GoogleTranslate({ className = "" }) {
  // Read initial language from localStorage or default to English
  const [currentLang] = useState(() => localStorage.getItem("lang") || "en");
  const [isOpen, setIsOpen] = useState(false);
  const [targetLang, setTargetLang] = useState(null);

  // Handle the language switch
  useEffect(() => {
    if (!targetLang) return;
    
    // 1. Save preference
    localStorage.setItem("lang", targetLang);
    
    // 2. Set the Google cookies
    setGoogleCookies(targetLang);
    
    // 3. Reload page to apply translation
    // Short delay gives the cookie time to be written
    const t = setTimeout(() => window.location.reload(), 100);
    return () => clearTimeout(t);
  }, [targetLang]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => setIsOpen(false);
    if (isOpen) window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [isOpen]);

  const handleClick = (code) => {
    if (code === currentLang) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    setTargetLang(code);
  };

  return (
    <>
      {/* Loading Overlay when switching */}
      {targetLang &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-[#1e3a8a]/95 backdrop-blur-md flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-[#ea580c] animate-spin mb-4" />
            <h2 className="text-white font-bold text-2xl">
              Switching to {LANGS.find(l => l.code === targetLang)?.label}...
            </h2>
          </div>,
          document.body
        )}

      <div
        className={`relative z-50 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 border border-white/30 text-white backdrop-blur-md hover:bg-[#ea580c] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea580c]"
        >
          <Languages size={16} className="text-white" />
          <span className="text-sm font-bold uppercase">{currentLang}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5"
            >
              <div className="py-1">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleClick(l.code)}
                    className={`w-full px-4 py-2 flex justify-between items-center text-sm transition-colors ${
                      currentLang === l.code
                        ? "bg-orange-50 text-[#ea580c] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{l.flag}</span>
                      {l.label}
                    </span>
                    {currentLang === l.code && <Check size={14} />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}