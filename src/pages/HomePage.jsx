import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Clock,
  UserCheck,
  Car,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlideshow from "../components/home/ImageSlideshow";
import Navigation from "../components/layout/Navigation";
import { useText } from "../components/common/useText";

/* =======================
   CONSTANT DATA
======================= */
const FEATURES = [
  {
    icon: UserCheck,
    title: "Expert Instructors",
    desc: "Learn from patient, certified professionals who know local roads inside out.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    desc: "Morning or evening batches available to fit your busy schedule perfectly.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "We use dual-control vehicles to ensure your learning experience is 100% safe.",
  },
  {
    icon: Mountain,
    title: "Hill Specialization",
    desc: "Specific training for hairpin bends, steep climbs, and narrow village roads.",
  },
];

const GALLERY_IMAGES = [
  "/gallery/training-01.webp",
  "/gallery/training-02.webp",
  "/gallery/training-03.webp",
  "/gallery/training-04.webp",
];

/* =======================
   COMPONENT
======================= */
export default function HomePage() {
  const brandName = useText("brandName");
  const drivingSchool = useText("drivingSchool");

  return (
    <main className="bg-white font-sans overflow-hidden">
      {/* ================= NAVIGATION ================= */}
      <Navigation />

      {/* ================= SLIDESHOW ================= */}
      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <ImageSlideshow />
      </section>

      {/* ================= HERO TEXT ================= */}
      <section className="relative py-12 lg:py-20 bg-slate-50 text-center">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#1e3a8a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-orange-600 text-sm font-bold mb-6 shadow-sm">
            <MapPin size={14} /> Karsog • Mandi • Himachal Pradesh
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-blue-900">
            Drive with <span className="text-orange-600">Confidence</span>.
            <br />
            Master the Hills.
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Expert car driving training designed for steep slopes and sharp turns.
            Join{" "}
            <strong className="text-blue-900">
              {brandName} {drivingSchool}
            </strong>{" "}
            and get your license to freedom.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="tel:+919882034930"
              aria-label="Call to book driving classes"
              className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-orange-200"
            >
              <Phone size={18} /> Call to Book
            </a>

            <a
              href="https://wa.me/919882034930"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="px-8 py-4 bg-white hover:bg-slate-100 border-2 border-blue-900 text-blue-900 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Govt Approved", "Dual Control Cars", "Hill Expert Trainers"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs md:text-sm text-slate-600 font-semibold flex items-center gap-2 shadow-sm"
                >
                  <CheckCircle2 size={14} className="text-orange-600" />
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Why Choose <span className="text-orange-600">Raj Ann Raj?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We don’t just teach driving — we teach survival and confidence on
              mountain roads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="mb-4 p-3 bg-white rounded-xl shadow-sm w-fit border">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. HOW IT WORKS (TWEAKED) */}
      <section className="py-12 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1e3a8a] tracking-tight">How It Works</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">Get your license in 3 simple steps. Our process is designed for your confidence and success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 relative">
            {/* Vertical line for mobile (centered, modern) */}
            <div className="absolute md:hidden left-1/2 -translate-x-1/2 top-16 bottom-16 w-2 bg-gradient-to-b from-[#fbbf24]/0 via-[#ea580c] to-[#1e3a8a]/80 rounded-full blur-[2px] opacity-80 shadow-lg z-0" />
            {/* Horizontal line for desktop (centered, modern) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-[#fbbf24]/0 via-[#ea580c] to-[#1e3a8a]/80 rounded-full blur-[2px] opacity-80 shadow-lg z-0 transform -translate-y-1/2" />

            {/* Steps with icons and improved layout */}
            {[{
              step: "01",
              title: "Register",
              desc: "Call us or fill the form to book your slot.",
              icon: <svg className="w-10 h-10 mx-auto text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V7" /></svg>
            }, {
              step: "02",
              title: "Learn",
              desc: "15-20 Days of practical training on hill roads.",
              icon: <svg className="w-10 h-10 mx-auto text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5" /></svg>
            }, {
              step: "03",
              title: "Drive",
              desc: "Get your license and drive with confidence.",
              icon: <svg className="w-10 h-10 mx-auto text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            }].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center group flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 py-8 px-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-50 mb-4 border-2 border-[#ea580c]/20 shadow">
                  {item.icon}
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ea580c] text-white font-bold text-lg absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-white shadow-md">{item.step}</div>
                <h3 className="text-2xl font-bold mb-2 mt-8 text-[#1e3a8a]">{item.title}</h3>
                <p className="text-slate-600 px-2 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* 6. SERVICES TEASER */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="text-center md:text-left w-full md:w-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight">
                  Our <span className="text-[#ea580c]">Courses</span>
                </h2>
                <p className="text-slate-600 text-lg">Tailored packages for every type of learner.</p>
              </div>
              <Link to="/courses" className="hidden md:flex items-center gap-2 text-[#ea580c] font-bold hover:gap-3 transition-all">
                View All Pricing <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
              {/* Beginner */}
              <div className="h-full bg-white p-8 rounded-3xl shadow-md border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-50 text-[#1e3a8a] rounded-full flex items-center justify-center mb-6 shadow border-2 border-[#ea580c]/20">
                  <Car size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a] tracking-tight">Beginner Course</h3>
                <p className="text-slate-600 mb-6 text-base flex-grow">A complete A-to-Z guide for beginners. Includes theory and practicals.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle2 size={18} className="text-[#ea580c]"/> Clutch & Gear Control</li>
                  <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle2 size={18} className="text-[#ea580c]"/> Uphill Starts</li>
                </ul>
              </div>

              {/* Hill Specialization */}
              <div className="h-full bg-gradient-to-br from-[#1e3a8a] to-[#233876] text-white p-8 rounded-3xl shadow-xl transform md:-translate-y-4 border border-blue-900 relative overflow-hidden flex flex-col items-center text-center">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="w-16 h-16 bg-[#ea580c] text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-white/20">
                  <Mountain size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Hill Specialization</h3>
                <p className="text-slate-200 mb-6 text-base flex-grow">Master the art of driving on narrow mountain roads and hairpin bends.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-base text-slate-200"><CheckCircle2 size={18} className="text-[#ea580c]"/> Hairpin Bend Technique</li>
                  <li className="flex items-center gap-2 text-base text-slate-200"><CheckCircle2 size={18} className="text-[#ea580c]"/> Reverse Parking on Slopes</li>
                </ul>
              </div>

              {/* Refresher */}
              <div className="h-full bg-white p-8 rounded-3xl shadow-md border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-50 text-[#1e3a8a] rounded-full flex items-center justify-center mb-6 shadow border-2 border-[#ea580c]/20">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a] tracking-tight">Refresher Training</h3>
                <p className="text-slate-600 mb-6 text-base flex-grow">Already have a license but lost confidence? We help you get back on the road.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle2 size={18} className="text-[#ea580c]"/> Traffic Management</li>
                  <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle2 size={18} className="text-[#ea580c]"/> Advanced Steering</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center md:hidden">
               <Link to="/courses" className="text-[#ea580c] font-bold flex justify-center items-center gap-2">
                 View All Pricing <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </section>
      {/* ================= GALLERY ================= */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Join our <span className="text-orange-600">Wall of Fame</span>
            </h2>
            <p className="text-slate-600">
              7000+ students have earned their license with us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((src) => (
              <div
                key={src}
                className="relative group overflow-hidden rounded-2xl shadow-md h-64"
              >
                <img
                  src={src}
                  alt="Driving student success"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white font-bold text-sm">
                    Passed in 1st Attempt
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
