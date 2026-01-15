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

export default function Navigation({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const lang = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 inset-x-0 z-[100] hidden lg:flex justify-center"
      >
        <div
          className={`w-[94%] max-w-7xl flex items-center px-6 transition-all duration-300
          ${scrolled ? "h-16" : "h-20"}
          bg-[#1e3a8a]/95 backdrop-blur-xl 
          rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.25)]
          border border-white/10`}
        >
          {/* LOGO */}
          <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
              <img src="/branding/raj-ann-raj-logo.webp" className="w-full h-full object-cover scale-125" />
            </div>
            <div>
              <div className="text-white font-semibold tracking-wide">
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-blue-200">
                Driving School
              </div>
            </div>
          </div>

          {/* NAV */}
          <nav className="flex-1 flex justify-center">
            <div className="flex gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {({ isActive }) => (
                    <div className="relative group">
                      <div
                        className={`px-2 py-1 text-sm transition font-medium
                        ${isActive ? "text-white" : "text-blue-200 hover:text-white"}`}
                      >
                        {item.name}
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-500 rounded-full"
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <TranslateComponent />

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            <a
              href="tel:+919882034930"
              className="px-5 py-2 bg-orange-600 hover:bg-orange-500 transition text-white rounded-full font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-[100] bg-[#1e3a8a]/95 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-4 py-3">
          <div onClick={() => navigate("/")} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
              <img src="/branding/raj-ann-raj-logo.webp" className="w-full h-full object-cover scale-125" />
            </div>
            <div className="text-white font-semibold">
              {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <TranslateComponent />
            <button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
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
              className="fixed inset-0 bg-black/60 z-[9990]"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 bottom-0 z-[9999] w-[80vw] max-w-xs bg-[#1e3a8a] p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-orange-500 font-bold text-xl">MENU</span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition
                        ${
                          isActive
                            ? "bg-orange-600 text-white"
                            : "text-blue-100 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={18} />
                          {item.name}
                        </div>
                        <ChevronRight size={16} />
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>

              <a
                href="tel:+919882034930"
                className="mt-6 w-full py-3 bg-white text-[#1e3a8a] rounded-xl flex justify-center items-center gap-2 font-bold"
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
