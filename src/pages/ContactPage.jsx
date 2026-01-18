import React, { useRef, useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  Mail,
  ChevronDown,
} from "lucide-react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import SEO from "../components/SEO";
import Navigation from "../components/layout/Navigation";

/* ================= DATA ================= */

const openingHours = [
  { day: "Monday", time: "08:00 AM - 07:00 PM" },
  { day: "Tuesday", time: "08:00 AM - 07:00 PM" },
  { day: "Wednesday", time: "08:00 AM - 07:00 PM" },
  { day: "Thursday", time: "08:00 AM - 07:00 PM" },
  { day: "Friday", time: "08:00 AM - 07:00 PM" },
  { day: "Saturday", time: "08:00 AM - 07:00 PM" },
  { day: "Sunday", isClosed: true },
];

const faqs = [
  {
    question: "What documents do I need for a learner's license?",
    answer: "You typically need your Aadhar card, proof of age (10th marksheet or birth certificate), proof of address, and passport-sized photographs. We will guide you through the exact process at the office."
  },
  {
    question: "Do you provide pick-up and drop-off services?",
    answer: "Yes, we offer pick-up and drop-off services within a 5km radius of Karsog. For distances beyond that, please contact us to discuss arrangements."
  },
  {
    question: "How long does the driving course take?",
    answer: "Our standard beginner course is 15 days (30 minutes daily). However, we offer customized refresher courses ranging from 7 to 10 days depending on your current skill level."
  },
  {
    question: "Can I choose my lesson timings?",
    answer: "Absolutely! We have flexible slots available from 6:00 AM to 7:00 PM. You can choose a slot that fits your work or college schedule."
  }
];

/* ================= COMPONENTS ================= */

const ContactCard = ({
  icon: Icon,
  title,
  sub,
  status,
  statusColor,
  gradient,
  link,
  delay,
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="relative overflow-hidden p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 group hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
  >
    <div
      className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${gradient}`}
    />

    <div className="flex items-start justify-between relative z-10">
      <div className="flex gap-4">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md ${gradient} group-hover:scale-110 transition-transform duration-300`}
        >
          {Icon && <Icon size={26} />}
        </div>

        <div>
          <h3 className="font-bold text-slate-800 text-lg group-hover:text-[#1e3a8a] transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-sm font-medium mb-2">{sub}</p>

          <div
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md ${statusColor} bg-opacity-10 border border-opacity-20 text-xs font-bold`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${statusColor.replace(
                "text-",
                "bg-"
              )} animate-pulse`}
            />
            {status}
          </div>
        </div>
      </div>

      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
        <ArrowRight size={16} />
      </div>
    </div>
  </motion.a>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");

  function isValidPhone(num) {
    return /^\+91 \d{10}$/.test(num);
  }

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setError("Phone number must be 10 digits and start with +91");
      return;
    }
    setError("");
    const message = encodeURIComponent(
      `Hello Raj Ann Raj,\nMy name is ${name}.\nPhone: ${phone}.\nI am interested in: ${interest}`
    );
    window.open(`https://wa.me/919882034930?text=${message}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setError("Phone number must be 10 digits and start with +91");
      return;
    }
    setError("");
    // Fallback if JS is disabled or for semantics, but button uses handleWhatsApp
    handleWhatsApp(e);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 mb-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
      <div className="relative z-10">
        <h3 className="font-bold text-2xl text-slate-800 mb-2">Send a Message</h3>
        <p className="text-slate-500 text-sm mb-6">Fill out the form below and we'll reply on WhatsApp.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
            />
            <input 
              type="tel" 
              placeholder="+91 XXXXXXXXXX" 
              value={phone}
              maxLength={14}
              onChange={e => {
                let val = e.target.value;
                // Allow deletion, but always restore '+91 ' if blank or less than 4 chars
                if (val.length < 4) {
                  val = '';
                }
                // If user types, always start with '+91 '
                if (val && !val.startsWith("+91 ")) {
                  val = "+91 " + val.replace(/[^\d]/g, "");
                }
                // Only allow digits after '+91 '
                if (val.startsWith("+91 ")) {
                  val = "+91 " + val.slice(4).replace(/[^\d]/g, "");
                }
                // Limit to 14 chars
                if (val.length > 14) val = val.slice(0, 14);
                // If user leaves it blank, restore '+91 '
                if (val === '') val = '+91 ';
                setPhone(val);
              }}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <textarea 
            rows="3" 
            placeholder="I am interested in..." 
            value={interest}
            onChange={e => setInterest(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
          ></textarea>
          {error && (
            <div className="text-red-600 text-sm font-semibold mb-2">{error}</div>
          )}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-green-400/20 transform active:scale-95 transition-all flex items-center justify-center gap-2" onClick={handleWhatsApp} type="button">
              <FaWhatsapp size={18} /> Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-4 flex justify-between items-center text-left font-bold text-slate-700 hover:text-blue-900 transition-colors"
      >
        <span className="pr-4">{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ================= PAGE ================= */

export default function ContactPage({ theme, setTheme }) {
  const marqueeRef = useRef(null);
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  // Link to Search Results for Raj Ann Raj Driving School Karsog
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Raj+Ann+Raj+Driving+School+Karsog+Mandi";

  useEffect(() => {
    if (!marqueeRef.current) return;
    const update = () => {
      setWidth(
        marqueeRef.current.scrollWidth -
          marqueeRef.current.offsetWidth
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: -width,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [width, controls]);

  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} />
      <SEO
        title="Contact Us | Raj Ann Raj Driving School"
        description="Get in touch for driving lessons in Karsog, Mandi, Himachal Pradesh. Call us or visit our office."
      />
      <main className="bg-[#F8FAFC] min-h-screen font-sans pt-24 lg:pt-32 pb-12 relative overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(to right, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN - Contact Info */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-[#1e3a8a] mb-6 leading-tight">
                  Start Your Journey <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-orange-500">
                    With Confidence
                  </span>
                </h1>
                <p className="text-slate-600 text-lg mb-6 max-w-lg">
                  Have questions about our packages or schedule? Call, WhatsApp, or visit us. We are here to help you drive safely.
                </p>

                {/* Social Media Links */}
                <div className="flex gap-4 mb-10">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:-translate-y-1 shadow-sm border border-slate-100 transition-all">
                    <FaInstagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 shadow-sm border border-slate-100 transition-all">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="mailto:contact@rajannraj.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white hover:-translate-y-1 shadow-sm border border-slate-100 transition-all">
                    <Mail size={18} />
                  </a>
                </div>
              </motion.div>

              <div className="grid gap-4 mb-16">
                <ContactCard
                  icon={Phone}
                  title="+91 98820 34930"
                  sub="For bookings & inquiries"
                  status="Available Now"
                  statusColor="text-green-600 border-green-200"
                  gradient="bg-gradient-to-br from-blue-600 to-blue-800"
                  link="tel:+919882034930"
                  delay={0.1}
                />
                <ContactCard
                  icon={FaWhatsapp}
                  title="WhatsApp Support"
                  sub="Get brochure & pricing instantly"
                  status="Replies in ~5 min"
                  statusColor="text-green-600 border-green-200"
                  gradient="bg-gradient-to-br from-green-500 to-green-600"
                  link="https://wa.me/919882034930"
                  delay={0.2}
                />
                <ContactCard
                  icon={MapPin}
                  title="Visit Our Office"
                  sub="Near Deep Raj Bhanthal (MLA), Karsog"
                  status="Get Directions"
                  statusColor="text-blue-600 border-blue-200"
                  gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
                  link={googleMapsLink} 
                  delay={0.3}
                />
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                 <h3 className="font-bold text-xl text-[#1e3a8a] mb-6 flex items-center gap-2">
                   Frequently Asked Questions
                 </h3>
                 <div>
                    {faqs.map((faq, i) => (
                      <FaqItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                 </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Form & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* 1. Contact Form */}
              <ContactForm />

              {/* 2. Map Card (UPDATED WITH PROVIDED IFRAME) */}
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.3531689226766!2d77.21124627560694!3d31.404394324267273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905a08da5cd688b%3A0x13721873736c3e1b!2sRaj%20%22Ann%22%20Raj%20Driving%20Training%20School%20Bhanthal!5e0!3m2!1sen!2sin!4v1768711680686!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full grayscale-[10%]"
                    loading="lazy"
                    title="Location Map"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pointer-events-none p-4">
                    <a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg pointer-events-auto hover:scale-105 transition-transform text-[#1e3a8a]"
                    >
                      <ExternalLink size={16} /> Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. Weekly Schedule Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden p-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <Clock size={14} /> Weekly Schedule
                </h3>
                <div className="space-y-3">
                  {openingHours.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex justify-between items-center text-sm"
                    >
                      <span
                        className={`font-medium ${
                          slot.isClosed
                            ? "text-red-500"
                            : "text-green-600"
                        }`}
                      >
                        {slot.day}
                      </span>
                      <span
                        className={`font-bold px-2 py-0.5 rounded ${
                          slot.isClosed
                            ? "text-red-500 bg-red-50"
                            : "text-green-700 bg-green-50"
                        }`}
                      >
                        {slot.isClosed ? "Closed" : slot.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="mt-20 border-t py-6 bg-white overflow-hidden opacity-40 pb-24 lg:pb-6">
          <motion.div ref={marqueeRef} className="flex gap-12 pl-4">
            <motion.div
              animate={controls}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-white"
                  style={{ WebkitTextStroke: "1px #cbd5e1" }}
                >
                  RAJ ANN RAJ DRIVING TRAINING SCHOOL
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* STICKY MOBILE BAR (Added Feature) */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 lg:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <a 
            href="tel:+919882034930" 
            className="flex-1 bg-blue-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <Phone size={18} /> Call Now
          </a>
          <a 
            href="https://wa.me/919882034930" 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}