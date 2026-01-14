import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Phone,
  Menu,
  Home,
  BookOpen,
  GraduationCap,
  Image as ImageIcon,
  Users,
  X,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../common/useLanguage";
import TranslateComponent from "../common/TranslateComponent";

const NAV_ITEMS = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: Users },
  { name: "Courses", to: "/courses", icon: BookOpen },
  { name: "Students", to: "/student-corner", icon: GraduationCap },
  { name: "Gallery", to: "/gallery", icon: ImageIcon },
  { name: "Contact", to: "/contact", icon: Phone },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Custom hook to check current language (code provided below)
  const lang = useLanguage(); 

  // Detect scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-[100] hidden lg:flex justify-center transition-all duration-300 ${
          scrolled ? "py-2" : "py-5"
        }`}
      >
        <div 
          className={`
            w-[95%] max-w-7xl 
            bg-[#1e3a8a]/90 backdrop-blur-md 
            border border-white/10 
            shadow-lg shadow-blue-900/20
            flex items-center justify-between 
            px-6 transition-all duration-300
            ${scrolled ? "h-16 rounded-xl" : "h-20 rounded-2xl"}
          `}
        >
          
          {/* LEFT: LOGO */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-orange-500/50 transition-transform group-hover:scale-110">
              <img
                src="/branding/raj-ann-raj-logo.webp" // Make sure this path is correct
                className="w-full h-full object-cover scale-125"
                alt="Raj Ann Raj Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none tracking-wide group-hover:text-orange-400 transition-colors">
                {/* Dynamically change text based on language */}
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </span>
              <span className="text-[10px] text-blue-200 tracking-[0.2em] font-medium uppercase opacity-70">
                Driving School
              </span>
            </div>
          </div>

          {/* CENTER: NAVIGATION LINKS */}
          <nav className="flex items-center gap-1 bg-black/20 rounded-full p-1 px-2 border border-white/5">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {({ isActive }) => (
                  <div
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                      ${isActive 
                        ? "text-white bg-white/10 shadow-inner" 
                        : "text-blue-100 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    <item.icon size={15} className={isActive ? "text-orange-400" : "opacity-70"} />
                    {item.name}
                    
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-4">
            {/* The Cookie-based Translate Component */}
            <div className="scale-90 opacity-90 hover:opacity-100 transition">
              <TranslateComponent />
            </div>

            <a
              href="tel:+919882034930"
              className="group flex items-center gap-2 pl-1 pr-4 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-orange-900/20"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 group-hover:rotate-12 transition-transform">
                <Phone size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-bold">Call Now</span>
            </a>
          </div>

        </div>
      </motion.header>

      {/* ================= MOBILE HEADER ================= */}
      <header className={`lg:hidden fixed top-0 inset-x-0 z-[100] bg-[#1e3a8a]/95 backdrop-blur-xl shadow-xl border-b border-white/5 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex justify-between items-center px-4">
          <div onClick={() => navigate("/")} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-inner overflow-hidden">
              <img
                src="/branding/raj-ann-raj-logo.webp"
                className="w-full h-full object-cover scale-[1.35]"
                alt="Logo"
              />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-lg">
                 {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="scale-75 origin-right">
              <TranslateComponent />
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-orange-600 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[9990] backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{type: "spring", damping: 25, stiffness: 200}}
              className="fixed right-0 top-0 bottom-0 z-[9999] w-[80vw] max-w-xs bg-[#1e3a8a] border-l border-white/10 p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-orange-500 font-extrabold text-xl tracking-wide">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                        <div className={`
                            group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 border border-transparent
                            ${isActive 
                              ? "bg-orange-600 text-white shadow-lg shadow-orange-900/20" 
                              : "text-blue-100 hover:bg-white/5 hover:border-white/5"
                            }
                        `}>
                            <div className="flex items-center gap-3">
                                <item.icon size={18} />
                                <span className="font-medium">{item.name}</span>
                            </div>
                            <ChevronRight size={16} className={`opacity-50 group-hover:translate-x-1 transition ${isActive ? "text-white" : ""}`} />
                        </div>
                    )}
                  </NavLink>
                ))}
              </div>

              <a
                href="tel:+919882034930"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-white text-[#1e3a8a] font-bold rounded-xl shadow-lg active:scale-95 transition"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}