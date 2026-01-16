import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const LANGS = [
  { code: "en", label: "EN", flag: "", full: "English" },
  { code: "hi", label: "HI", flag: "", full: "Hindi" },
];

const setGoogleCookies = (langCode) => {
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  document.cookie = `googtrans=/en/${langCode};`;
};

export default function GoogleTranslate({ className = "" }) {
  // 1. Initialize state from localStorage
  const [currentLang] = useState(() => localStorage.getItem("lang") || "en");
  const [targetLang, setTargetLang] = useState(null);

  // 2. Handle the switching logic with visual feedback
  useEffect(() => {
    if (!targetLang) return;
    
    // Save & Set Cookie
    localStorage.setItem("lang", targetLang);
    setGoogleCookies(targetLang);
    
    // Reload after a short animation delay
    const t = setTimeout(() => window.location.reload(), 800);
    return () => clearTimeout(t);
  }, [targetLang]);

  const handleSwitch = (code) => {
    if (code === currentLang) return;
    setTargetLang(code);
  };

  return (
    <>
      {/* FULL SCREEN LOADING OVERLAY */}
      {targetLang &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-[#1e3a8a]/95 backdrop-blur-xl flex flex-col items-center justify-center">
            {/* Pulsing Flag Icon */}
            <div className="text-6xl mb-6 animate-bounce">
                {LANGS.find(l => l.code === targetLang)?.flag}
            </div>
            
            <div className="flex items-center gap-3">
                <Loader2 className="w-6 h-6 text-orange-400 animate-spin" />
                <h2 className="text-white font-bold text-xl tracking-wide">
                  Switching to {LANGS.find(l => l.code === targetLang)?.full}...
                </h2>
            </div>
          </div>,
          document.body
        )}

      {/* THE TOGGLE COMPONENT */}
      <div 
        className={`relative inline-flex bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/10 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {LANGS.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => handleSwitch(lang.code)}
              className={`
                relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors duration-300
                ${isActive ? "text-[#1e3a8a]" : "text-white/80 hover:text-white"}
              `}
            >
              {/* Flag Emoji removed */}
              
              {/* Text Label */}
              <span className="text-xs font-bold tracking-wide">{lang.label}</span>
              
              {/* The Sliding Background (Only renders for active item) */}
              {isActive && (
                <motion.div
                  layoutId="active-lang-bg"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ zIndex: -1 }} 
                />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}