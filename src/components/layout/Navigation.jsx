import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom"; // Changed useNavigate to Link for SEO/Access
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
  Clock,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { useText } from "../common/useText"; // Removed duplicate import
import TranslateComponent from "../common/TranslateComponent";

import { useText } from "../common/useText";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
    const brandName = useText("brandName");
    const drivingSchool = useText("drivingSchool");
    const homeText = useText("home");
    const aboutText = useText("about");
    const NAV_ITEMS = [
        { name: homeText, to: "/", icon: Home },
        { name: aboutText, to: "/about", icon: Users },
        { name: "Courses", to: "/courses", icon: BookOpen },
        { name: "Students", to: "/student-corner", icon: GraduationCap },
        { name: "Gallery", to: "/gallery", icon: ImageIcon },
        { name: "Contact", to: "/contact", icon: Phone },
    ];

  // 1. OPTIMIZED SCROLL HANDLER
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      // Only update state if it actually changes to prevent re-renders
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // 2. SEPARATE BODY LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
            fixed top-0 inset-x-0 z-[50] transition-all duration-300 ease-in-out
            ${scrolled 
                ? "bg-[#1e3a8a]/95 backdrop-blur-xl shadow-lg py-3 border-b border-white/10" 
                : "bg-gradient-to-b from-[#1e3a8a]/90 to-transparent py-5"
            }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            
            {/* 1. BRAND IDENTITY - Fixed Accessibility & Layout Shift */}
            <Link 
                to="/" 
                className="flex items-center gap-3 group relative z-50"
                aria-label="Raj Ann Raj Home"
            >
                <img 
                    src="/branding/raj-ann-raj-logo.webp" 
                    className="w-12 h-12 object-cover rounded-full" 
                    alt="Raj Ann Raj Logo" 
                />
                <div className="flex flex-col justify-center h-12"> {/* Fixed height to prevent text jump */}
                    <span className="font-extrabold text-[#ea580c] text-lg leading-none tracking-wide drop-shadow-md">
                        {brandName}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                        <Star size={8} className="text-orange-400 fill-orange-400" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                            {drivingSchool}
                        </span>
                    </div>
                </div>
            </Link>

            {/* 2. NAVIGATION (Desktop) */}
            <nav 
                className={`
                    hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500
                    ${scrolled ? "bg-black/20" : "bg-white/10 backdrop-blur-md border border-white/10"}
                `}
                onMouseLeave={() => setHoveredTab(null)}
            >
                {NAV_ITEMS.map((item) => (
                    <NavLink key={item.to} to={item.to}>
                        {({ isActive }) => (
                            <div 
                                className="relative px-5 py-2 rounded-full cursor-pointer z-10"
                                onMouseEnter={() => setHoveredTab(item.name)}
                            >
                                {(isActive || hoveredTab === item.name) && (
                                    <motion.div
                                        layoutId="nav-bg"
                                        className="absolute inset-0 bg-white rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                
                                <span className={`
                                    relative z-10 text-sm font-bold transition-colors duration-200 flex items-center gap-2
                                    ${isActive || hoveredTab === item.name ? "text-[#1e3a8a]" : "text-white"}
                                `}>
                                    {item.name}
                                </span>
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* 3. ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
                 <div className="scale-90 text-white opacity-90 hover:opacity-100 transition">
                    <TranslateComponent />
                 </div>
                 
                 <a 
                    href="tel:+919882034930"
                    className="group relative px-5 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full overflow-hidden shadow-lg shadow-orange-900/30 transition-transform active:scale-95 hover:scale-105"
                 >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="relative flex items-center gap-2 text-white font-bold text-sm">
                        <Phone size={16} />
                        <span>Call Now</span>
                    </div>
                 </a>
            </div>

            {/* 4. MOBILE HAMBURGER */}
            <div className="flex lg:hidden items-center gap-3">
                 <div className="scale-75 text-white origin-right"><TranslateComponent /></div>
                 <button 
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/10 active:bg-white/20 transition-colors"
                 >
                    <Menu size={24} />
                 </button>
            </div>

        </div>
      </motion.header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
            <>
                {/* Backdrop - High Z-Index to cover everything */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm lg:hidden"
                />

                {/* Drawer Panel */}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed top-0 bottom-0 right-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
                >
                    {/* Drawer Header */}
                    <div className="bg-[#1e3a8a] relative p-6 flex flex-col justify-end overflow-hidden shrink-0">
                        
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-20"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-center gap-3 relative z-10 mt-8">
                            <img 
                                src="/branding/raj-ann-raj-logo.webp" 
                                className="w-12 h-12 rounded-full border-2 border-white bg-white" 
                                alt={brandName + ' Logo'} 
                            />
                            <div>
                                <h2 className="text-[#ea580c] font-bold text-xl leading-none">{brandName}</h2>
                                <p className="text-white text-xs font-bold uppercase tracking-widest mt-1">{drivingSchool}</p>
                            </div>
                        </div>
                    </div>

                    {/* Links - Scrollable Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-1">
                        {NAV_ITEMS.map((item, index) => (
                            <NavLink 
                                key={item.to} 
                                to={item.to} 
                                onClick={() => setIsOpen(false)}
                            >
                                {({ isActive }) => (
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`
                                            flex items-center gap-4 p-4 rounded-xl transition-all border
                                            ${isActive 
                                                ? "bg-blue-50 border-blue-100 text-[#1e3a8a] shadow-sm" 
                                                : "bg-transparent border-transparent text-slate-500 hover:bg-slate-50"
                                            }
                                        `}
                                    >
                                        <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-orange-500" : "text-slate-400"} />
                                        <span className={`text-lg font-bold ${isActive ? "text-[#1e3a8a]" : "text-slate-600"}`}>{item.name}</span>
                                        {isActive && <ChevronRight size={20} className="ml-auto text-orange-400" />}
                                    </motion.div>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Footer Info - Sticky at bottom */}
                    <div className="p-6 bg-slate-50 border-t border-slate-100 shrink-0 safe-area-bottom">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase">
                                    <MapPin size={12} /> Location
                                </div>
                                <span className="text-sm font-bold text-slate-700">Karsog, Mandi</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase">
                                    <Clock size={12} /> Open
                                </div>
                                <span className="text-sm font-bold text-slate-700">09:00 - 18:00</span>
                            </div>
                        </div>

                        <a 
                            href="tel:+919882034930" 
                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1e3a8a] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 active:scale-95 transition"
                        >
                            <Phone size={20} />
                            Call Driving School
                        </a>
                    </div>

                </motion.div>
            </>
        )}
      </AnimatePresence>
    </>
  );
}