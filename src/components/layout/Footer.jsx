import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, Github, 
  ArrowRight, Send, MessageCircle, Globe, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useText } from "../common/useText";

const Footer = () => {
  const brand = useText("brandName");
  const drivingSchool = useText("drivingSchool");

  // Animation variants for smooth scroll reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <footer className="relative bg-[#1e3a8a] text-blue-100 border-t border-white/10 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND DECOR - Matches Nav Gradient Vibe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-40" />
          <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#ea580c]/10 rounded-full blur-[100px]" />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
          {/* 1. BRAND IDENTITY (Col Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              {/* Logo Box - Matches Nav Logo Style */}
              <div className="relative w-14 h-14 rounded-full bg-white/5 p-1 border border-white/10 shadow-lg overflow-hidden group-hover:border-orange-500/50 transition-colors">
                  <img
                    src="/branding/raj-ann-raj-logo.webp"
                    alt={brand}
                    className="w-full h-full object-cover rounded-full"
                  />
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-2xl font-extrabold text-white leading-none group-hover:text-orange-400 transition-colors">
                    {brand}
                </h3>
                <span className="text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase mt-1">
                  {drivingSchool}
                </span>
              </div>
            </Link>

            <p className="text-sm text-blue-200/80 leading-relaxed font-medium max-w-sm">
              Himachal's premier driving institute. We don't just teach you to drive; we train you to master the mountains with confidence and safety.
            </p>
            
            {/* Social Icons - Clean & Pill Shaped */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: "#", color: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                { icon: Instagram, href: "#", color: "hover:bg-[#E4405F] hover:border-[#E4405F]" },
                { icon: Youtube, href: "#", color: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className={`
                    w-10 h-10 rounded-full bg-white/5 border border-white/10 
                    flex items-center justify-center text-white 
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:text-white
                    ${social.color}
                  `}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. QUICK LINKS (Col Span 2) */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                Explore <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            </h4>
            <ul className="space-y-3">
              {[ 
                { name: "Home", to: "/" }, 
                { name: "About Us", to: "/about" },
                { name: "Our Courses", to: "/courses" }, 
                { name: "Gallery", to: "/gallery" }, 
                { name: "Student Corner", to: "/student-corner" }, 
                { name: "Contact", to: "/contact" }, 
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. CONTACT INFO (Col Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
             <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                Visit Us <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            </h4>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Location", text: "Karsog, Mandi, HP", subtext: "Near GDC Karsog" },
                { icon: Mail, label: "Email", text: "rajannraj.dts@gmail.com", isLink: true, href: "mailto:rajannraj.dts@gmail.com" },
                { icon: Phone, label: "Phone", text: "+91 98820 34930", isLink: true, href: "tel:+919882034930" }
              ].map((item, idx) => (
                 <div key={idx} className="flex gap-4 items-start group">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors shadow-sm">
                       <item.icon className="text-blue-200 group-hover:text-white transition-colors" size={16} />
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-blue-300/60 uppercase mb-0.5 tracking-wider">{item.label}</span>
                       {item.isLink ? (
                         <a href={item.href} className="text-sm font-bold text-white hover:text-orange-400 transition-colors">{item.text}</a>
                       ) : (
                         <span className="text-sm font-bold text-white block">
                           {item.text}
                           {item.subtext && <span className="block text-xs text-blue-200 font-normal mt-0.5">{item.subtext}</span>}
                         </span>
                       )}
                    </div>
                 </div>
              ))}
            </div>
          </motion.div>

          {/* 4. CTA CARD (Col Span 3) - Glass Effect */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
             <div className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group hover:border-white/20 transition-all">
                {/* Glow Effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-all" />
                
                <h4 className="text-white font-bold text-lg mb-2 relative z-10">Start Driving Today!</h4>
                <p className="text-xs text-blue-200 mb-6 relative z-10 leading-relaxed">
                  Ready to take the wheel? Book your slot now and get a free assessment session.
                </p>
                
                <div className="flex flex-col gap-3 relative z-10">

                   <div className="grid grid-cols-2 gap-3">
                      <a
                        href="tel:+919882034930"
                        className="flex items-center justify-center gap-2 py-2.5 bg-white text-[#1e3a8a] font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
                      >
                        <Phone size={14} /> Call
                      </a>
                      <a
                        href="https://wa.me/919882034930"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#20bd5a] transition-colors shadow-sm"
                      >
                        <MessageCircle size={14} /> WhatsApp
                      </a>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ===== SERVING LOCATIONS BAR ===== */}
      <div className="relative z-10 border-t border-white/10 bg-[#172554]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <span className="flex items-center gap-2 font-bold text-orange-400">
            <Globe size={14} /> Serving Areas:
          </span>
          <p className="text-blue-200/80 font-medium leading-relaxed">
            Bhanthal • Sanarali • Baral Bypass • Mamail • Near GDC Karsog • Batala Bahali • Karsog Bus Stand • Sarkol
          </p>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="relative z-10 border-t border-white/10 bg-[#0f172a]/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-blue-300/70">
          
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">{brand}</span>. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            
            <a 
                href="https://github.com/Dushyantsharmma" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all group"
            >
               <Github size={12} className="text-gray-400 group-hover:text-white transition-colors"/> 
               <span>Dev by Dushyant</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;