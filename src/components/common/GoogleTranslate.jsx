import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Languages, ChevronDown, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LANGS = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "Hindi", flag: "🇮🇳" },
];

// Helper defined OUTSIDE component to satisfy strict linter rules
const setGoogleCookies = (langCode) => {
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  document.cookie = `googtrans=/en/${langCode};`;
};

export default function GoogleTranslate({ className = "" }) {
  // 1. Initialize State
  const [currentLang] = useState(() => localStorage.getItem("lang") || "en");
  const [isOpen, setIsOpen] = useState(false);
  
  // "targetLang" acts as our "Is Loading" switch. 
  // If it's not null, we are in the middle of switching.
  const [targetLang, setTargetLang] = useState(null);

  // 2. SIDE EFFECT: Handle Language Switch
  useEffect(() => {
    // Only proceed if a user has actually clicked a language
    if (!targetLang) return;

    // A. Update Local Storage so next load reads correct lang
    localStorage.setItem("lang", targetLang);

    // B. Set Cookies (using helper)
    setGoogleCookies(targetLang);

    // C. Reload Page
    // We do NOT update 'currentLang' state here because the page is about to reload.
    // This avoids the ESLint "set-state-in-effect" error.
    const timer = setTimeout(() => {
      window.location.reload();
    }, 100);

    return () => clearTimeout(timer);
  }, [targetLang]);

  // 3. Handler
  const handleLanguageClick = (langCode) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    // Trigger the effect by setting targetLang
    setTargetLang(langCode);
  };

  // 4. Close dropdown on outside click
  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    if (isOpen) window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [isOpen]);

  return (
    <>
      {/* LOADING OVERLAY - Shows when targetLang is set */}
      {targetLang &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-[#1e3a8a]/95 backdrop-blur-md flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-[#ea580c] animate-spin mb-4" />
            <h2 className="text-white font-bold text-2xl tracking-tight">
              {currentLang === "en" ? "Switching to Hindi..." : "Switching to English..."}
            </h2>
            <p className="text-slate-200 text-sm mt-2">Updating content...</p>
          </div>,
          document.body
        )}

      {/* COMPONENT */}
      <div className={`relative z-40 ${className}`} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all active:scale-95"
        >
          <Languages size={16} className={`transition-colors ${isOpen ? "text-white" : "text-[#ea580c] group-hover:text-white"}`} />
          <span className="text-sm font-bold uppercase tracking-wide">
            {currentLang}
          </span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5"
            >
              <div className="p-1">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageClick(l.code)}
                    className={`w-full px-3 py-2.5 rounded-lg text-left flex items-center justify-between gap-3 transition-colors ${
                      currentLang === l.code
                        ? "bg-orange-50 text-[#ea580c] font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg leading-none">{l.flag}</span>
                      <span className="text-sm">{l.label}</span>
                    </div>
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