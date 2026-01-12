import { useState } from "react";
import { Languages, ChevronDown, Loader2 } from "lucide-react";

const LANGS = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "Hindi", flag: "🇮🇳" },
];

// Helper to set cookie safely
function setGoogleCookie(lang) {
  document.cookie = `googtrans=/en/${lang}; path=/`;
}

// Helper to get initial language
function getInitialLang() {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("lang") || "en";
}

export default function GoogleTranslate() {
  // Initialize state directly (Optimal performance)
  const [lang] = useState(getInitialLang);
  const [open, setOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleLanguageChange = (newLang) => {
    if (newLang === lang) {
      setOpen(false);
      return;
    }

    // 1. Show Loading Screen
    setIsTranslating(true);
    setOpen(false);

    // 2. Set Preferences
    localStorage.setItem("lang", newLang);
    setGoogleCookie(newLang);

    // 3. Reload Page
    // This resets the React App so Google Translate can work on a "fresh" page
    setTimeout(() => {
      window.location.reload();
    }, 500); 
  };

  return (
    <>
      {/* FULL SCREEN LOADING OVERLAY */}
      {isTranslating && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300">
          <Loader2 className="w-12 h-12 text-amber-600 animate-spin mb-4" />
          <p className="text-slate-800 font-bold text-xl tracking-wide">
            {lang === "en" ? "हिंदी में बदल रहा है..." : "Switching to English..."}
          </p>
          <p className="text-slate-500 text-sm mt-2">Please wait...</p>
        </div>
      )}

      {/* DROPDOWN BUTTON */}
      <div className="relative z-50">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all shadow-sm"
        >
          <Languages size={18} />
          <span className="text-sm font-semibold">
            {lang === "hi" ? "Hindi" : "English"}
          </span>
          <ChevronDown size={14} className={open ? "rotate-180" : ""} />
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute right-0 mt-3 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden ring-1 ring-white/10">
              <div className="py-1">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code)}
                    className={`w-full px-5 py-3 text-left flex items-center gap-4 transition-colors ${
                      lang === l.code
                        ? "text-amber-500 bg-white/10 font-bold"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="text-xl">{l.flag}</span>
                    <span className="text-sm">{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}