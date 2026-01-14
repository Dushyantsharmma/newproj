import React, { useRef, useEffect, useState } from "react";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { FaGoogle, FaStar, FaQuoteRight, FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";

/* ================= DATA ================= */

const reviews = [
  {
    name: "Aniket Kamra",
    text: "Best driving school in Mandi. Very experienced instructor and excellent guidance. Passed in first attempt.",
    date: "3 months ago",
    initial: "A",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Vinay Kumar",
    text: "Professional and patient teaching. Strong focus on safety and real driving skills.",
    date: "2 months ago",
    initial: "V",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Priya Thakur",
    text: "Perfect for beginners. Calm instructor and very supportive environment.",
    date: "1 month ago",
    initial: "P",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Rohit Sharma",
    text: "Excellent driving techniques and traffic rule explanation. Highly recommended.",
    date: "4 months ago",
    initial: "R",
    color: "bg-blue-100 text-blue-700",
  },
];

const openingHours = [
  { day: "Monday", time: "08:00 - 19:00" },
  { day: "Tuesday", time: "08:00 - 19:00" },
  { day: "Wednesday", time: "08:00 - 19:00" },
  { day: "Thursday", time: "08:00 - 19:00" },
  { day: "Friday", time: "08:00 - 19:00" },
  { day: "Saturday", time: "08:00 - 19:00" },
  { day: "Sunday", time: "Closed", isClosed: true },
];

/* ================= COMPONENTS ================= */

// FIXED: Properly accepting and rendering the 'icon' prop
function ContactCard({ icon: Icon, title, subtext, action, highlight, className }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col h-full ${
        highlight 
          ? "bg-[#1e3a8a] border-[#1e3a8a] text-white shadow-xl shadow-blue-900/20" 
          : "bg-white border-slate-100 text-slate-800 shadow-lg shadow-slate-200/50"
      } ${className || ""}`}
    >
      <div className="flex-1">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-xl ${
          highlight ? "bg-white/10 text-white" : "bg-orange-50 text-[#ea580c]"
        }`}>
          {/* FIXED: Conditional rendering for the icon */}
          {Icon && <Icon size={24} />}
        </div>
        <h3 className={`font-bold text-lg mb-3 ${highlight ? "text-white" : "text-slate-800"}`}>{title}</h3>
        <div className={`text-sm font-medium leading-relaxed ${highlight ? "text-blue-200" : "text-slate-500"}`}>
          {subtext}
        </div>
      </div>
      {action && <div className="mt-6">{action}</div>}
    </motion.div>
  );
}

/* ================= MAIN PAGE ================= */

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
        transition: { duration: 45, ease: "linear", repeat: Infinity, repeatType: "loop" },
      });
    }
  }, [width, controls]);

  return (
    <section className="bg-slate-50 min-h-screen py-24 pt-32 px-4 relative overflow-hidden font-sans selection:bg-orange-100">
      <SEO 
        title="Contact Us | Raj Ann Raj Driving School" 
        description="Get in touch for driving lessons, RTO inquiries, and bookings in Mandi, HP." 
      />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/20 blur-[100px] rounded-full" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm text-[#ea580c] font-bold text-xs uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
            Open for New Admissions
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#1e3a8a] mb-6 tracking-tight">
            Let's Start <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-orange-500">Driving.</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Visit our training center in <span className="text-[#1e3a8a] font-bold underline decoration-orange-300 decoration-2 underline-offset-4">Karsog, Mandi</span> or give us a call to book your slot.
          </p>
        </div>

        {/* ================= NEW LAYOUT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* 1. Visit Us (Top Left) */}
          <div className="col-span-1 h-full">
            <ContactCard 
              icon={MapPin}
              title="Visit Us"
              subtext={<>Bhanthal, Karsog<br/>District Mandi<br/>Himachal Pradesh – 175011</>}
              action={
                <a href="#map" className="inline-flex items-center text-sm font-bold text-[#ea580c] hover:underline">
                  View on Map <ArrowRight size={16} className="ml-1" />
                </a>
              }
            />
          </div>

          {/* 2. Map (Top & Middle Right - Spans 2 cols, 2 rows) */}
          <motion.div 
            id="map"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 md:row-span-2 min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white ring-1 ring-slate-900/5 group"
          >
            {/* FIXED: Working Google Maps Embed for 'Raj Ann Raj Driving School Karsog' */}
            <iframe 
              src="https://maps.google.com/maps?q=Raj%20Ann%20Raj%20Driving%20School%20Karsog%20Mandi&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Raj N Raj Location"
            ></iframe>
            
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-[#1e3a8a] text-sm">Live Location</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Opening Hours (Middle Left) */}
          <div className="col-span-1 row-span-2">
            <ContactCard 
              icon={Clock}
              title="Opening Hours"
              subtext={
                <div className="space-y-3 mt-2">
                  {openingHours.map((item, idx) => (
                    <div key={idx} className={`flex justify-between items-center text-sm border-b border-slate-50 pb-2 last:border-0 last:pb-0 ${item.isClosed ? 'text-red-500 font-bold' : ''}`}>
                      <span className="font-semibold opacity-80">{item.day}</span>
                      <span className="font-mono bg-slate-50 px-2 py-0.5 rounded text-xs">{item.time}</span>
                    </div>
                  ))}
                </div>
              }
            />
          </div>

          {/* 4. WhatsApp (Bottom Middle) */}
          <div className="col-span-1 md:col-span-1">
             <ContactCard 
              icon={FaWhatsapp}
              title="Chat Now"
              subtext="Quick replies on WhatsApp"
              action={
                <a href="https://wa.me/919882034930" target="_blank" rel="noreferrer" className="block w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-center hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20">
                  Message Us
                </a>
              }
            />
          </div>

          {/* 5. Call Us (Bottom Right) */}
          <div className="col-span-1 md:col-span-1">
             <ContactCard 
              highlight={true}
              icon={Phone}
              title="Call Us"
              subtext="Mon-Sat from 8am to 7pm"
              action={
                <a href="tel:+919882034930" className="block w-full bg-white text-[#1e3a8a] py-3 rounded-xl font-bold text-center hover:bg-blue-50 transition-colors">
                  +91 98820 34930
                </a>
              }
            />
          </div>

        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Student Stories</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-[#ea580c]">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <span className="text-slate-500 font-medium">4.9/5 Rating on Google</span>
              </div>
            </div>
            <button 
              /* FIXED: Added your specific Google Review Link */
              onClick={() => window.open('https://g.page/r/CRs-bHNzGHITEAE/review', '_blank')}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors flex items-center gap-2"
            >
              <FaGoogle /> Write a Review
            </button>
          </div>

          {/* Review Carousel */}
          <div className="relative overflow-hidden -mx-8 md:-mx-12">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <motion.div ref={carousel} className="flex gap-6 pl-12 cursor-grab active:cursor-grabbing">
              <motion.div animate={controls} className="flex gap-6">
                {[...reviews, ...reviews, ...reviews].map((r, i) => (
                  <div key={i} className="w-[350px] flex-shrink-0 bg-slate-50 p-6 rounded-3xl border border-slate-100 relative group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <FaQuoteRight className="absolute top-6 right-6 text-slate-200 text-4xl group-hover:text-orange-100 transition-colors" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm ${r.color}`}>
                        {r.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1e3a8a]">{r.name}</h4>
                        <span className="text-xs text-slate-400 font-bold uppercase">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed relative z-10">"{r.text}"</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}