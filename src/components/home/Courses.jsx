import { useState } from "react";
import {
  GraduationCap,
  RefreshCw,
  Heart,
  CheckCircle2,
  MessageCircle,
  Shield,
  Mountain,
  Users,
  Route,
  Zap,
  Star
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
    <section id="courses" className="bg-[#F8F9FA] py-24">
      <SEO
        title="Driving Courses | Raj Ann Raj Driving School"
        description="Hill driving courses for beginners, refresher drivers and nervous learners in Karsog, Mandi."
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-amber-600 text-xs font-bold mb-6">
            <Zap size={14} /> Pricing & Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Master the <span className="text-amber-600">Mountain Roads</span>
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
              className={`px-5 py-2 mx-1 rounded-full text-sm font-bold ${
                activeTab === c.id
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600"
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
              className={`p-8 rounded-3xl border shadow-lg bg-white ${
                activeTab !== course.id ? "hidden md:block" : ""
              } ${course.highlight ? "border-amber-400" : "border-slate-100"}`}
            >
              <course.icon className="text-amber-600 mb-6" size={40} />

              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-slate-600 mb-6">{course.description}</p>

              <ul className="space-y-3 mb-8">
                {course.features.map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mb-6">
                <span className="font-bold">{course.duration}</span>
                <span className="text-slate-500">Practical + Theory</span>
              </div>

              <button
                onClick={() => handleWhatsApp(course.title)}
                className="w-full py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800"
              >
                <MessageCircle className="inline mr-2" size={18} />
                {course.cta}
              </button>
            </div>
          ))}
        </div>

        {/* COMPARISON */}
        <div className="mt-24 hidden md:block">
          <h3 className="text-center text-3xl font-bold mb-8">
            Compare Programs
          </h3>
          <table className="w-full bg-white rounded-xl overflow-hidden border">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4">Beginner</th>
                <th className="p-4">Refresher</th>
                <th className="p-4">Nervous</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{r.feature}</td>
                  {["beginner", "refresher", "nervous"].map((k) => (
                    <td key={k} className="p-4 text-center">
                      {r[k] ? (
                        <CheckCircle2 className="mx-auto text-green-600" />
                      ) : (
                        "—"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FINAL CTA */}
        <div className="mt-24 text-center bg-slate-900 text-white p-16 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-slate-300 mb-8">
            Start your hill driving journey today
          </p>
          <button
            onClick={() => handleWhatsApp("Consultation")}
            className="bg-green-500 px-10 py-4 rounded-full text-lg font-bold"
          >
            <MessageCircle className="inline mr-2" />
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
