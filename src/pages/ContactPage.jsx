import React, { useRef, useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
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
    className="relative overflow-hidden p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 group hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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

/* ================= PAGE ================= */

export default function ContactPage({ theme, setTheme }) {
  const marqueeRef = useRef(null);
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

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
        description="Get in touch for driving lessons in Karsog, Mandi, Himachal Pradesh."
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
            {/* LEFT */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-black text-[#1e3a8a] mb-6">
                Start Your Journey <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-orange-500">
                  With Confidence
                </span>
              </h1>
              <p className="text-slate-600 text-lg mb-10 max-w-lg">
                Have questions about our packages or schedule? Call or WhatsApp
                us for the fastest response.
              </p>
              <div className="grid gap-4 mb-10">
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
              </div>
            </div>
            {/* RIGHT */}
            <div className="lg:col-span-5">
              {/* Map Card */}
              <div className="bg-white rounded-3xl shadow-2xl border overflow-hidden sticky top-32 mb-8">
                <div className="relative h-64">
                  <iframe
                    src="https://maps.google.com/maps?q=Raj%20Ann%20Raj%20Driving%20School%20Karsog%20Mandi&z=14&output=embed"
                    className="absolute inset-0 w-full h-full grayscale-[30%]"
                    loading="lazy"
                    title="Location Map"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <a
                      href="https://goo.gl/maps/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
              {/* Weekly Schedule Card */}
              <div className="bg-white rounded-3xl shadow-2xl border overflow-hidden p-8">
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
                            : "text-slate-600"
                        }`}
                      >
                        {slot.day}
                      </span>
                      <span
                        className={`font-bold ${
                          slot.isClosed
                            ? "text-red-500"
                            : "text-slate-800"
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
        <div className="mt-20 border-t py-6 bg-white overflow-hidden opacity-40">
          <motion.div ref={marqueeRef} className="flex gap-12 pl-4">
            <motion.div
              animate={controls}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-white"
                  style={{ WebkitTextStroke: "1px #e2e8f0" }}
                >
                  DRIVE SAFE
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
