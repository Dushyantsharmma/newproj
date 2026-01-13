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
      {/* ================= DESKTOP NAV ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 inset-x-0 z-50 hidden lg:flex justify-center"
      >
        <div className="mt-5 w-[95%] max-w-7xl flex items-center justify-between bg-[#1e3a8a]/95 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-6 py-3">

          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white p-1 shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.webp`}
                alt="Raj Ann Raj"
                className="w-full h-full object-cover scale-110 rounded-full"
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="font-extrabold text-[#ea580c] text-lg lg:text-2xl">
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </div>
              <div className="text-xs lg:text-base tracking-widest text-white font-bold mt-0.5">
                DRIVING TRAINING SCHOOL
              </div>
            </div>
          </div>

          {/* Nav Capsule */}
          <div className="flex items-center bg-white/95 rounded-full px-3 py-2 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {({ isActive }) => (
                  <div className={`px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition ${
                    isActive
                      ? "bg-[#ea580c] text-white shadow-lg"
                      : "text-[#1e3a8a] hover:text-[#ea580c]"
                  }`}>
                    <item.icon size={16} />
                    {item.name}
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <GoogleTranslate />
            <a
              href="tel:+919882034930"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ea580c] text-white font-bold shadow-lg hover:scale-105 transition"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-[#1e3a8a]/95 backdrop-blur-xl shadow-xl py-3">
        <div className="flex justify-between items-center px-4">
          <div onClick={() => navigate("/")} className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.webp`}
              className="w-9 h-9 rounded-full"
              alt="Logo"
            />
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-[#ea580c]">
                {lang === "hi" ? "राज एन राज" : "Raj Ann Raj"}
              </span>
              <span className="text-[9px] text-white tracking-widest font-bold mt-0.5">
                DRIVING TRAINING SCHOOL
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GoogleTranslate />
            <button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
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
              className="fixed right-0 top-0 bottom-0 z-[9999] w-[80vw] max-w-sm bg-[#1e3a8a] p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-[#ea580c] font-bold text-lg">
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
                    className="block px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-[#ea580c]"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <a
                href="tel:+919882034930"
                className="mt-8 block text-center py-4 bg-[#ea580c] text-white font-bold rounded-xl"
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
