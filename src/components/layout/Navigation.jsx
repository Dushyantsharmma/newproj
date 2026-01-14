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
  X
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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const lang = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 inset-x-0 z-50 hidden lg:flex justify-center"
      >
        <div className="mt-6 w-[95%] max-w-7xl bg-[#1e3a8a]/95 backdrop-blur-xl border border-white/10 rounded-[2.2rem] shadow-[0_20px_60px_rgba(0,0,0,0.35)] px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div onClick={() => navigate("/")} className="flex items-center gap-4 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] overflow-hidden flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.webp`}
                className="w-full h-full object-cover scale-[1.5]"
                alt="Raj Ann Raj"
              />
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-extrabold text-[#ea580c] tracking-wide">
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </div>
              <div className="text-[12px] tracking-[0.28em] text-white font-bold">
                DRIVING TRAINING SCHOOL
              </div>
            </div>
          </div>

          {/* NAV CAPSULE */}
          <div className="flex items-center bg-white rounded-full p-1 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {({ isActive }) => (
                  <div
                    className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#ea580c] text-white shadow-[0_10px_30px_rgba(234,88,12,0.6)]"
                        : "text-[#1e3a8a] hover:text-[#ea580c]"
                    }`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <GoogleTranslate />

            <a
              href="tel:+919882034930"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ea580c] to-orange-500 text-white font-bold shadow-[0_10px_40px_rgba(234,88,12,0.7)] hover:scale-105 transition"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE ================= */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-[#1e3a8a]/95 backdrop-blur-xl shadow-xl py-4">
        <div className="flex justify-between items-center px-4">

          <div onClick={() => navigate("/")} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white shadow-inner overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.webp`}
                className="w-full h-full object-cover scale-[1.35]"
                alt="Logo"
              />
            </div>
            <div className="leading-tight">
              <div className="text-[#ea580c] font-extrabold text-lg">
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </div>
              <div className="text-[9px] tracking-[0.3em] text-white font-bold">
                DRIVING TRAINING SCHOOL
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GoogleTranslate />
            <button
              onClick={() => setIsOpen(true)}
              className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[9990]"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 z-[9999] w-[80vw] max-w-sm bg-[#1e3a8a] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-[#ea580c] font-extrabold text-xl">
                  {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <X className="text-white" />
                </button>
              </div>

              <div className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-[#ea580c]"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <a
                href="tel:+919882034930"
                className="mt-10 block text-center py-4 bg-gradient-to-r from-[#ea580c] to-orange-500 text-white font-bold rounded-xl shadow-xl"
              >
                Call Now
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
