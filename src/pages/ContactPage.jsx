import React, { useRef, useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Car, ShieldCheck } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { FaGoogle, FaStar, FaQuoteRight } from "react-icons/fa";
import { CheckCircle2, Star } from "lucide-react";
import SEO from "../components/SEO";

/* ================= GOOGLE REVIEWS DATA ================= */

const reviews = [
  {
    name: "Aniket Kamra",
    text: "Best driving school in Mandi. Very experienced instructor and excellent guidance. Passed in first attempt.",
    date: "3 months ago",
    initial: "A",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Vinay Kumar",
    text: "Professional and patient teaching. Strong focus on safety and real driving skills.",
    date: "2 months ago",
    initial: "V",
    color: "bg-orange-50 text-orange-700",
  },
  {
    name: "Priya Thakur",
    text: "Perfect for beginners. Calm instructor and very supportive environment.",
    date: "1 month ago",
    initial: "P",
    color: "bg-slate-100 text-slate-700",
  },
  {
    name: "Rohit Sharma",
    text: "Excellent driving techniques and traffic rule explanation. Highly recommended.",
    date: "4 months ago",
    initial: "R",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Sneha Patel",
    text: "Very professional training. Got my license easily after learning here.",
    date: "3 weeks ago",
    initial: "S",
    color: "bg-orange-50 text-orange-700",
  },
];

/* ================= INFO CARD ================= */

function Info({ title, icon, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#ea580c]">{icon}</div>
        <h3 className="font-bold text-[#1e3a8a]">{title}</h3>
      </div>
      <div className="text-slate-600 text-sm leading-relaxed font-medium">{children}</div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function ContactPage() {
  const carousel = useRef();
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: -width,
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [width, controls]);

  return (
    <section className="bg-slate-50 min-h-screen py-24 pt-32 px-4 relative overflow-hidden font-sans">
      <SEO 
        title="Contact Us | Raj Ann Raj Driving School" 
        description="Get in touch for driving lessons, RTO inquiries, and bookings in Mandi, HP." 
      />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-40 right-0 w-96 h-96 bg-[#ea580c]/5 blur-3xl rounded-full" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3a8a]/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HERO ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4">
            Contact <span className="text-[#ea580c]">Us</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Trusted driving institute in <b className="text-[#1e3a8a]">Karsog, Mandi (HP-30)</b> for hill road training, RTO test and license support.
          </p>
        </div>

        {/* ================= GOOGLE REVIEWS ================= */}
        <div className="mb-20">

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-[#ea580c] font-bold text-xs uppercase tracking-wider">
              <Star size={14} className="fill-current" /> Student Reviews
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a8a] mt-6">
              Trusted by Drivers Across Himachal
            </h2>

            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm mt-6 hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.open('https://g.page/r/YOUR_LINK', '_blank')}>
              <FaGoogle className="text-xl text-slate-700" />
              <div className="flex items-center gap-1 text-[#ea580c]">
                <span className="font-bold text-[#1e3a8a] text-lg">5.0</span>
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <span className="text-xs text-slate-500 font-bold border-l border-slate-200 pl-4 ml-2">120+ Reviews</span>
            </div>
          </div>

          <div className="relative overflow-hidden -mx-4 md:-mx-0">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
            
            <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing pl-4">
              <motion.div animate={controls} className="flex gap-6">
                {[...reviews, ...reviews].map((r, i) => (
                  <div
                    key={i}
                    className="w-[320px] bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-shrink-0 relative hover:border-[#ea580c]/30 hover:shadow-lg transition-all"
                  >
                    <FaQuoteRight className="absolute top-6 right-6 text-slate-100 text-3xl" />
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-sm ${r.color}`}>
                        {r.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1e3a8a]">{r.name}</h4>
                        <div className="flex text-[#ea580c] text-xs mt-0.5">
                          {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium relative z-10">"{r.text}"</p>
                    <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wide pt-4 border-t border-slate-50">
                      <span>{r.date}</span>
                      <span className="text-green-600 flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ================= CONTACT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-6">
            <Info title="Training Center" icon={<MapPin />}>
              Bhanthal, Karsog<br />District Mandi, Himachal Pradesh – 175011
            </Info>

            <Info title="Opening Hours" icon={<Clock />}>
              Mon–Sat: <b className="text-green-600">08:00 AM – 7:00 PM</b><br />
              Sunday: <b className="text-red-500">Closed</b>
            </Info>

            <Info title="Coverage Area" icon={<Car />}>
              Bhanthal, Karsog, Sanarli, Baral Bypass & nearby villages
            </Info>

            <Info title="Why Choose Us?" icon={<ShieldCheck />}>
              Dual control cars, hill training, RTO test routes & high pass rate
            </Info>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[350px]">
              <iframe
                title="Raj Ann Raj Driving School Map"
                src="https://maps.google.com/?q=Raj+Ann+Raj+Driving+School+Karsog"
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Direct Contact</h3>
              
              <div className="space-y-4">
                <a href="tel:+919882034930" className="flex gap-4 font-bold text-slate-700 hover:text-[#1e3a8a] transition-colors items-center group">
                  <div className="p-3 bg-orange-50 rounded-xl text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors"><Phone size={20} /></div>
                  <span className="text-lg">+91 98820 34930</span>
                </a>
                <a href="mailto:rajannraj.dts@gmail.com" className="flex gap-4 font-bold text-slate-700 hover:text-[#1e3a8a] transition-colors items-center group">
                  <div className="p-3 bg-orange-50 rounded-xl text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors"><Mail size={20} /></div>
                  <span className="text-lg">rajannraj.dts@gmail.com</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                <a href="tel:+919882034930" className="flex-1 bg-[#1e3a8a] text-white py-3.5 rounded-xl font-bold text-center hover:bg-[#152865] transition-colors shadow-lg shadow-blue-900/20 active:scale-95">
                  Call Now
                </a>
                <a href="https://wa.me/919882034930" className="flex-1 bg-[#ea580c] text-white py-3.5 rounded-xl font-bold text-center hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-500/20 active:scale-95">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}