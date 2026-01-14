import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, Github 
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const brand = lang === "hi" ? "राज एन राज" : "Raj Ann Raj";

  return (
    <footer className="bg-[#1e3a8a] text-blue-100 font-sans border-t border-blue-900 w-full">
      
      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
        
          {/* 1. BRAND & SOCIAL */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white p-1 shadow-lg">
                <img
                  src="/branding/raj-ann-raj-logo.webp"
                  alt={brand}
                  className="w-full h-full object-cover scale-[1.5] rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold" style={{ color: '#ea580c', textTransform: 'none' }}>{brand}</h3>
                <p className="text-sm font-bold tracking-widest text-white px-3 py-0.5 rounded mt-1 inline-block">
                  Driving Training School
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed font-medium">
              Professional hill driving training in Himachal Pradesh. 
              Learn to drive safely, confidently, and independently on steep terrains.
            </p>
            
            {/* FIXED: Social Icons rendered directly to avoid ESLint error */}
            <div className="flex gap-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="YouTube"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm font-medium">
                {[ 
                  { name: "Home", to: "/" }, 
                  { name: "About", to: "/about" },
                  { name: "Courses", to: "/courses" }, 
                  { name: "Gallery", to: "/gallery" }, 
                  { name: "Students", to: "/student-corner" }, 
                  { name: "Contact", to: "/contact" }, 
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="hover:text-[#ea580c] hover:translate-x-1 transition-all inline-flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#ea580c] opacity-0 hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex gap-3 items-start">
                <MapPin className="text-[#ea580c] shrink-0 mt-0.5" size={18} />
                <a
                  href="https://goo.gl/maps/YOUR_MAP_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white text-blue-200 transition-colors"
                >
                  Bhanthal, Karsog,<br/> Mandi, Himachal Pradesh
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-[#ea580c] shrink-0" size={18} />
                <a href="mailto:rajannraj.dts@gmail.com" className="hover:text-white text-blue-200 transition-colors">
                  rajannraj.dts@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-[#ea580c] shrink-0" size={18} />
                <a href="tel:+919882034930" className="hover:text-white text-blue-200 transition-colors">
                  +91 98820 34930
                </a>
              </div>
            </div>
          </div>

          {/* 4. CALL TO ACTION */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Book a Lesson</h4>
            <p className="text-sm text-blue-200">
              Ready to hit the road? Schedule your first training session today.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919882034930"
                className="flex items-center justify-center gap-2 bg-white text-[#1e3a8a] font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/919882034930"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#1ebd59] transition-colors shadow-lg"
              >
                WhatsApp Us
              </a>
            </div>
            <a
              href="https://www.google.com/maps/place/Bhanthal,+Karsog,+Mandi,+Himachal+Pradesh+175011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow text-[#1e3a8a] font-bold text-base cursor-pointer hover:bg-blue-50 transition mb-4"
              style={{ boxShadow: "0 2px 8px 0 rgba(16,30,54,0.08)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Live Location
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10 py-6 bg-[#172e6e] w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300 gap-3 font-medium w-full">
          <p className="text-center md:text-left w-full md:w-auto">© {new Date().getFullYear()} {brand} Driving School. All rights reserved.</p>
          <p className="flex items-center gap-2 justify-center md:justify-end w-full md:w-auto">
            Built by
            <a href="https://github.com/Dushyantsharmma" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white hover:text-[#ea580c] transition-colors">
              <Github size={12} /> Dushyant Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;