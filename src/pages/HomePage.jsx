import React from "react";
import { 
  MapPin, Phone, MessageCircle, Mountain, 
  ShieldCheck, Clock, UserCheck, Car, 
  ArrowRight, CheckCircle2 
} from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlideshow from "../components/home/ImageSlideshow";
import Navigation from "../components/layout/Navigation";
import { useText } from "../components/common/useText";

export default function HomePage() {
  const brandName = useText("brandName");
  const drivingSchool = useText("drivingSchool");
  const flexibleTiming = useText("flexibleTiming");

  return (
    <main className="bg-white overflow-hidden font-sans">
      
      {/* 1. FIXED: Added Navigation here */}
      <Navigation />

      {/* ================= SLIDESHOW SECTION ================= */}
      {/* Note: If you want the text ON TOP of images, this structure needs to change. 
          Currently, this sits above the text section. */}
      <ImageSlideshow />

      {/* ================= HERO SECTION (Light Theme) ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-slate-50 text-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Content - Fixed Padding */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 pt-4 lg:pt-6 text-center">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#ea580c] text-sm font-bold mb-4 shadow-sm animate-fade-in-up">
            <MapPin size={14} /> Karsog • Mandi • Himachal Pradesh
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3 text-[#1e3a8a]">
            Drive with <span className="text-[#ea580c]">Confidence</span>. <br />
            Master the Hills.
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-5 leading-relaxed font-medium">
            Expert car driving training designed for the steep slopes and sharp turns of Himachal. 
            Join <strong className="text-[#1e3a8a]">{brandName} {drivingSchool}</strong> and get your license to freedom.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="tel:+919882034930" className="group px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-orange-200">
              <Phone size={18} className="group-hover:animate-bounce" /> Call to Book
            </a>
            <a href="https://wa.me/919882034930" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent hover:bg-slate-100 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          {/* Quick Stats/Features Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Govt Approved", "Dual Control Cars", "Hill Expert Trainers"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs md:text-sm text-slate-600 font-semibold flex items-center gap-2 shadow-sm">
                <CheckCircle2 size={14} className="text-[#ea580c]" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
              Why Choose <span className="text-[#ea580c]">Raj Ann Raj?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We don't just teach you how to move a car; we teach you how to survive and thrive on mountain roads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <UserCheck className="w-8 h-8 text-[#ea580c]" />, 
                title: "Expert Instructors", 
                desc: "Learn from patient, certified professionals who know the local roads inside out." 
              },
              { 
                icon: <Clock className="w-8 h-8 text-[#ea580c]" />, 
                title: flexibleTiming, 
                desc: "Morning or evening batches available to fit your busy schedule perfectly." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8 text-[#ea580c]" />, 
                title: "Safety First", 
                desc: "We use dual-control vehicles to ensure your learning experience is 100% safe." 
              },
              { 
                icon: <Mountain className="w-8 h-8 text-[#ea580c]" />, 
                title: "Hill Specialization", 
                desc: "Specific training for hairpin bends, steep climbs, and narrow village roads." 
              },
            ].map((feature, idx) => (
              /* FIXED: Added h-full so all boxes are same height */
              <div key={idx} className="h-full p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-[#ea580c]/30 flex flex-col">
                <div className="mb-4 p-3 bg-white rounded-xl shadow-sm w-fit group-hover:bg-orange-50 transition-colors border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-12 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1e3a8a]">How It Works</h2>
            <p className="text-slate-600 text-lg">Get your license in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line - Adjusted percentages for better tablet alignment */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-orange-500/0 via-[#ea580c]/30 to-orange-500/0 border-t border-dashed border-orange-200" />

            {[
              { step: "01", title: "Register", desc: "Call us or fill the form to book your slot." },
              { step: "02", title: "Learn", desc: "15-20 Days of practical training on hill roads." },
              { step: "03", title: "Drive", desc: "Get your license and drive with confidence." },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 outline outline-2 outline-orange-200 rounded-full flex items-center justify-center text-3xl font-black text-[#ea580c] shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">{item.title}</h3>
                <p className="text-slate-600 px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES TEASER ================= */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-2">
                Our <span className="text-[#ea580c]">Courses</span>
              </h2>
              <p className="text-slate-600 text-lg">Tailored packages for every type of learner.</p>
            </div>
            <Link to="/courses" className="hidden md:flex items-center gap-2 text-[#ea580c] font-bold hover:gap-3 transition-all">
              View All Pricing <ArrowRight size={18} />
            </Link>
          </div>

          {/* FIXED: Added items-start and better gap handling */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
            
            {/* Card 1 */}
            <div className="h-full bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 bg-white text-[#1e3a8a] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <Car size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e3a8a]">Beginner Course</h3>
              <p className="text-slate-600 mb-6 text-sm flex-grow">A complete A-to-Z guide for those touching a steering wheel for the first time. Includes theory and practicals.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-[#ea580c]"/> Clutch & Gear Control</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-[#ea580c]"/> Uphill Starts</li>
              </ul>
            </div>

            {/* Card 2 - Highlighted */}
            {/* FIXED: Used md:-translate-y-4 so it doesn't overlap on mobile */}
            <div className="h-full bg-[#1e3a8a] text-white p-8 rounded-3xl shadow-xl transform md:-translate-y-4 border border-blue-900 relative overflow-hidden flex flex-col">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
               
              <div className="w-12 h-12 bg-[#ea580c] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Mountain size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Hill Specialization</h3>
              <p className="text-slate-200 mb-6 text-sm flex-grow">Master the art of driving on narrow mountain roads, hairpin bends, and heavy traffic slopes.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-200"><CheckCircle2 size={16} className="text-[#ea580c]"/> Hairpin Bend Technique</li>
                <li className="flex items-center gap-2 text-sm text-slate-200"><CheckCircle2 size={16} className="text-[#ea580c]"/> Reverse Parking on Slopes</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="h-full bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 bg-white text-[#1e3a8a] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <UserCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e3a8a]">Refresher Training</h3>
              <p className="text-slate-600 mb-6 text-sm flex-grow">Already have a license but lost confidence? We help you get back on the road without fear.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-[#ea580c]"/> Traffic Management</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-[#ea580c]"/> Advanced Steering</li>
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

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-[#ea580c]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to hit the road?
          </h2>
          <p className="text-white/90 text-xl mb-10 font-medium">
            Don't wait. Join the hundreds of students in Karsog & Mandi who have successfully learned with us.
          </p>
          <a href="tel:+919882034930" className="inline-block px-10 py-4 bg-white text-[#ea580c] rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-transform">
            Book Your First Lesson
          </a>
        </div>
      </section>

      {/* ================= HAPPY STUDENTS GALLERY ================= */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
              Join our <span className="text-[#ea580c]">Wall of Fame</span>
            </h2>
            <p className="text-slate-600">
              Over 500+ students from Karsog and Mandi have earned their license with us.
            </p>
          </div>

          {/* Photo Grid - You will replace src with real student photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/gallery/training-01.webp',
              '/gallery/training-02.webp',
              '/gallery/training-03.webp',
              '/gallery/training-04.webp',
            ].map((src) => (
              <div key={src} className="relative group overflow-hidden rounded-2xl shadow-md h-64">
                <img 
                  src={src}
                  alt="Happy Student"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white font-bold text-sm">Passed in 1st Attempt 🎉</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}