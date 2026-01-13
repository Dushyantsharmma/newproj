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
  ChevronRight,
  MapPin,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../common/useLanguage";
import GoogleTranslate from "../common/GoogleTranslate";

const NAV_ITEMS = [
  { name: "Home", to: "/", icon: Home },
  { name: "About Us", to: "/about", icon: Users },
  { name: "Courses", to: "/courses", icon: BookOpen },
  { name: "Students", to: "/student-corner", icon: GraduationCap },
  { name: "Gallery", to: "/gallery", icon: ImageIcon },
  { name: "Contact", to: "/contact", icon: Phone },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const lang = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {/* ================= DESKTOP GLASS CAPSULE ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="fixed top-0 inset-x-0 z-50 hidden lg:flex justify-center"
      >
        <div className="mt-5 w-[95%] max-w-7xl flex items-center justify-between">

          {/* Brand */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.webp`}
              className="w-10 h-10 rounded-full shadow-lg"
              alt="Raj Ann Raj"
            />
            <div>
              <div className="font-bold text-white leading-none">
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </div>
              <div className="text-[10px] tracking-widest text-[#ea580c] font-bold">
                DRIVING SCHOOL
              </div>
            </div>
          </div>

          {/* Glass Capsule */}
          <motion.div
            layout
            className="flex items-center bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-full border border-white/60 ring-1 ring-white/40 px-3 py-2"
          >
            {NAV_ITEMS.map((item, i) => (
              <NavLink key={item.to} to={item.to}>
                {({ isActive }) => (
                  <motion.div layout className="relative flex items-center">
                    <div
                      className={`relative px-5 py-2 rounded-full text-sm font-semibold transition ${
                        isActive
                          ? "text-white"
                          : "text-[#1e3a8a]/90 hover:text-[#ea580c]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-gradient-to-r from-[#ea580c] to-orange-500 rounded-full shadow-[0_8px_30px_rgba(234,88,12,0.6)]"
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <item.icon size={16} />
                        {item.name}
                      </span>
                    </div>

                    {i !== NAV_ITEMS.length - 1 && (
                      <div className="w-px h-6 bg-slate-200 mx-1" />
                    )}
                  </motion.div>
                )}
              </NavLink>
            ))}
          </motion.div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <GoogleTranslate />
            <a
              href="tel:+919882034930"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ea580c] text-white font-bold shadow-[0_10px_30px_rgba(234,88,12,0.6)] hover:scale-105 transition"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE GLASS HEADER ================= */}
      <header
        className={`lg:hidden fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1e3a8a]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(30,58,138,0.5)] py-3"
            : "bg-[#1e3a8a]/95 py-4"
        }`}
      >
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-3" onClick={() => navigate("/")}>
            <img
              src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.webp`}
              className="w-9 h-9 rounded-full shadow-lg"
              alt="Logo"
            />
            <span className="font-bold text-white">
              {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <GoogleTranslate />
            <button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center text-white"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[9999] w-[85vw] max-w-sm bg-[#1e3a8a]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 p-5 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${
                        isActive
                          ? "bg-[#ea580c] text-white shadow-[0_0_20px_rgba(234,88,12,0.6)]"
                          : "bg-white/10 text-blue-100 hover:bg-white/20"
                      }`
                    }
                  >
                    <item.icon size={18} />
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="p-6 border-t border-white/10">
                <a
                  href="tel:+919882034930"
                  className="block text-center py-4 rounded-xl bg-[#ea580c] text-white font-bold shadow-[0_10px_30px_rgba(234,88,12,0.6)]"
                >
                  Call Now
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
