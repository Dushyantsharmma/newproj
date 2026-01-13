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
    <footer className="bg-[#1e3a8a] text-blue-100 font-sans border-t border-blue-900">
      
      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. BRAND & SOCIAL */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white p-1 shadow-lg">
              <img
                src="/branding/raj-ann-raj-logo.webp"
                alt={brand}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">{brand}</h3>
              <p className="text-xs font-bold tracking-widest text-[#ea580c] uppercase bg-white/10 px-2 py-0.5 rounded mt-1 inline-block">
                Driving School
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
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10 py-6 bg-[#172e6e]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300 gap-3 font-medium">
          <p>© {new Date().getFullYear()} {brand} Driving School. All rights reserved.</p>
          <p className="flex items-center gap-2">
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