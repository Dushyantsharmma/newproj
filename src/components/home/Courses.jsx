import { useState } from "react";
import {
  GraduationCap,
  RefreshCw,
  Heart,
  CheckCircle2,
  MessageCircle,
  Zap,
} from "lucide-react";
import SEO from "../SEO";

const PHONE = import.meta.env.VITE_PHONE || "+919882034930";
const WHATSAPP_TEXT = import.meta.env.VITE_WHATSAPP_TEXT || "I want to learn driving";

const COURSES = [
  {
    id: "beginner",
    title: "Beginner Hill Driving",
    icon: GraduationCap,
    badge: "Most Popular",
    description:
      "Start your journey with confidence. Comprehensive training for first-time learners.",
    features: [
      "Master vehicle controls",
      "Hill starts made easy",
      "Narrow road navigation",
      "Dual control safety",
    ],
    duration: "26 Days",
    cta: "Start Learning",
    highlight: true,
  },
  {
    id: "refresher",
    title: "Refresher Course",
    icon: RefreshCw,
    badge: "Skill Booster",
    description:
      "Polish your skills and conquer hill driving fears. For license holders.",
    features: [
      "Advanced parking techniques",
      "Traffic management skills",
      "Uphill/Downhill mastery",
      "Night driving confidence",
    ],
    duration: "26 Days",
    cta: "Boost Skills",
    highlight: false,
  },
  {
    id: "nervous",
    title: "Nervous Driver",
    icon: Heart,
    badge: "Stress Free",
    description:
      "Gentle, patient coaching designed specifically for anxious drivers.",
    features: [
      "Calm, zero-shouting environment",
      "Learn at your own pace",
      "Psychology-based approach",
      "Quiet roads first",
    ],
    duration: "Flexible",
    cta: "Drive Calmly",
    highlight: false,
  },
];

const COMPARISON = [
  { feature: "Dual Control Car", beginner: true, refresher: true, nervous: true },
  { feature: "Hill Start Practice", beginner: true, refresher: true, nervous: true },
  { feature: "Traffic Training", beginner: true, refresher: true, nervous: true },
  { feature: "Theory Classes", beginner: true, refresher: false, nervous: true },
  { feature: "License Assistance", beginner: true, refresher: true, nervous: true },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState("beginner");

  const handleWhatsApp = (course) => {
    const phone = PHONE.replace(/\D/g, "");
    const msg = encodeURIComponent(`${WHATSAPP_TEXT} – Interested in ${course}`);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <section id="courses" className="bg-slate-50 py-24">
      <SEO
        title="Driving Courses | Raj Ann Raj Driving School"
        description="Hill driving courses for beginners, refresher drivers and nervous learners in Karsog, Mandi."
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#ea580c] text-xs font-bold mb-6 shadow-sm">
            <Zap size={14} /> Pricing & Plans
          </div>
          {/* Main Headline: Navy Blue */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4">
            Master the <span className="text-[#ea580c]">Mountain Roads</span>
          </h2>
          <p className="text-slate-600">
            Choose the right driving course designed for Himachal roads
          </p>
        </div>

        {/* MOBILE TABS */}
        <div className="flex md:hidden justify-center mb-10">
          {COURSES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-2 mx-1 rounded-full text-sm font-bold transition-colors ${
                activeTab === c.id
                  ? "bg-[#1e3a8a] text-white"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {c.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* COURSE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className={`p-8 rounded-3xl border bg-white transition-all duration-300 ${
                activeTab !== course.id ? "hidden md:block" : ""
              } ${
                course.highlight 
                  ? "border-[#ea580c] shadow-xl shadow-orange-100 ring-1 ring-[#ea580c]/20" 
                  : "border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Icon in Brand Orange */}
              <course.icon className="text-[#ea580c] mb-6" size={40} />

              {/* Title in Navy Blue */}
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">{course.title}</h3>
              <p className="text-slate-600 mb-6">{course.description}</p>

              <ul className="space-y-3 mb-8">
                {course.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    {/* Checkmark in Navy Blue */}
                    <CheckCircle2 size={18} className="text-[#1e3a8a] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mb-6 pb-6 border-b border-slate-100">
                <span className="font-bold text-[#1e3a8a]">{course.duration}</span>
                <span className="text-slate-500">Practical + Theory</span>
              </div>

              {/* Primary Button: Orange */}
              <button
                onClick={() => handleWhatsApp(course.title)}
                className="w-full py-3 bg-[#ea580c] text-white font-bold rounded-xl hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {course.cta}
              </button>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-24 hidden md:block">
          <h3 className="text-center text-3xl font-bold mb-8 text-[#1e3a8a]">
            Compare Programs
          </h3>
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 text-left text-[#1e3a8a] font-bold">Feature</th>
                  <th className="p-6 text-[#1e3a8a] font-bold">Beginner</th>
                  <th className="p-6 text-[#1e3a8a] font-bold">Refresher</th>
                  <th className="p-6 text-[#1e3a8a] font-bold">Nervous</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-700">{r.feature}</td>
                    {["beginner", "refresher", "nervous"].map((k) => (
                      <td key={k} className="p-6 text-center">
                        {r[k] ? (
                          <CheckCircle2 className="mx-auto text-[#ea580c]" size={20} />
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FINAL CTA SECTION (Navy Blue Background) */}
        <div className="mt-24 text-center bg-[#1e3a8a] text-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5"></div>
           <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#ea580c] opacity-20"></div>

          <h3 className="text-3xl font-bold mb-4 relative z-10">Ready to Start?</h3>
          <p className="text-blue-100 mb-8 relative z-10">
            Start your hill driving journey today with Raj Ann Raj Driving School.
          </p>
          <button
            onClick={() => handleWhatsApp("Consultation")}
            className="bg-[#ea580c] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#c2410c] transition-all shadow-xl shadow-orange-900/20 relative z-10 flex items-center justify-center gap-2 mx-auto"
          >
            <MessageCircle />
            Chat on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}