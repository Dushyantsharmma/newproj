import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  FileText,
  User,
  FileBadge,
  Wallet,
  Navigation,
  ShieldCheck,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../SEO";

export default function RTOInfo() {
  const [tab, setTab] = useState("process");

  const rto = {
    code: "HP-30",
    city: "Karsog",
    address: "Mini Secretariat, SDM Office, Karsog, Mandi (HP) – 175011",
    phone: "01907-222236",
    timings: "Mon–Fri 10:00 AM – 5:00 PM",
  };

  const tabs = [
    { id: "process", label: "How to Apply", icon: Navigation },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "fees", label: "Fees", icon: Wallet },
    { id: "rules", label: "Test Rules", icon: ShieldCheck },
    { id: "route", label: "Test Track", icon: MapPin },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Karsog RTO HP-30 | Driving License Guide"
        description="Complete RTO guide for Karsog HP-30. Process, documents, fees, rules and test track."
        canonical="https://rajannrajdrivingschool.com/rto"
      />

      {/* HEADER */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ea580c] px-4 py-2 rounded-full text-xs font-bold mb-4 border border-orange-100">
              RTO Code {rto.code}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a]">
              {rto.city} Regional Transport Office
            </h1>
            <p className="mt-4 text-slate-600 max-w-xl text-lg">
              Official information hub for Learner License & Driving License for Karsog (HP-30).
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-700">
                <MapPin size={16} className="text-[#ea580c]" /> {rto.address}
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-700">
                <Phone size={16} className="text-[#ea580c]" /> {rto.phone}
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-700">
                <Clock size={16} className="text-[#ea580c]" /> {rto.timings}
              </div>
            </div>
          </div>

          <div className="bg-[#1e3a8a] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
             
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#ea580c]">
              <Info size={20} /> Important Notes
            </h3>
            <ul className="space-y-3 text-sm text-blue-100 font-medium">
              <li className="flex items-start gap-2"><span className="text-[#ea580c]">•</span> Slot booking is mandatory</li>
              <li className="flex items-start gap-2"><span className="text-[#ea580c]">•</span> Tests are conducted Mon–Fri</li>
              <li className="flex items-start gap-2"><span className="text-[#ea580c]">•</span> Aadhaar must match application</li>
              <li className="flex items-start gap-2"><span className="text-[#ea580c]">•</span> Original vehicle required for DL test</li>
              <li className="flex items-start gap-2"><span className="text-[#ea580c]">•</span> CCTV monitored test track</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-4 flex overflow-x-auto scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-bold whitespace-nowrap transition-colors ${
                tab === t.id
                  ? "border-[#ea580c] text-[#ea580c]"
                  : "border-transparent text-slate-500 hover:text-[#1e3a8a]"
              }`}
            >
              <t.icon size={18} /> {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* PROCESS */}
            {tab === "process" && (
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Register on parivahan.gov.in",
                  "Apply for Learner License",
                  "Upload Aadhaar & documents",
                  "Pay government fee",
                  "Book RTO slot",
                  "Visit RTO for test",
                  "After 30 days, apply for DL"
                ].map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#ea580c]/50 transition-colors group">
                    <div className="text-[#ea580c] font-bold mb-2 text-sm uppercase tracking-wider">Step {i + 1}</div>
                    <p className="font-semibold text-slate-800 group-hover:text-[#1e3a8a] transition-colors">{step}</p>
                  </div>
                ))}
              </div>
            )}

            {/* DOCUMENTS */}
            {tab === "documents" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-[#1e3a8a]">
                    <User className="text-[#ea580c]" /> Learner License
                  </h3>
                  <ul className="space-y-3 font-medium text-slate-600">
                    <li>• Aadhaar Card</li>
                    <li>• 10th Marksheet / Birth Proof</li>
                    <li>• Passport size photo</li>
                    <li>• Medical Certificate (if above 40)</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-[#1e3a8a]">
                    <FileBadge className="text-[#ea580c]" /> Driving License
                  </h3>
                  <ul className="space-y-3 font-medium text-slate-600">
                    <li>• Original Learner License</li>
                    <li>• Application Form 4</li>
                    <li>• Vehicle RC & Insurance</li>
                    <li>• Driving School Certificate</li>
                  </ul>
                </div>
              </div>
            )}

            {/* FEES */}
            {tab === "fees" && (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-2xl mx-auto">
                {[
                  ["Learner License", "₹150"],
                  ["Learner Test Fee", "₹50"],
                  ["Driving Test", "₹300"],
                  ["Permanent DL", "₹200"],
                  ["Smart Card", "₹200"],
                ].map(([item, price]) => (
                  <div key={item} className="flex justify-between px-8 py-5 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <span className="font-medium text-slate-700">{item}</span>
                    <span className="font-bold text-[#1e3a8a]">{price}</span>
                  </div>
                ))}
                <div className="p-6 bg-orange-50 text-center text-[#ea580c] font-bold text-lg">
                  Total approx: ₹900 – ₹1200
                </div>
              </div>
            )}

            {/* RULES */}
            {tab === "rules" && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-6 text-[#1e3a8a] flex items-center gap-2">
                    <ShieldCheck className="text-[#ea580c]"/> Essential Test Rules
                </h3>
                <ul className="space-y-4">
                    {[
                        "Seat belt mandatory at all times",
                        "No touching yellow/white boundary lines",
                        "Do not put foot on ground while riding two-wheeler",
                        "Helmet strictly mandatory for two-wheeler tests",
                        "Reverse 'S' and steep slope test are included",
                        "If failed, re-test can be booked after 7 days"
                    ].map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                            <span className="text-[#ea580c] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
                            {rule}
                        </li>
                    ))}
                </ul>
              </div>
            )}

            {/* TRACK */}
            {tab === "route" && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 relative">
                    {/* Placeholder for Route Map/Image */}
                    <img
                        src="/symbols/Driving Test Route..webp"
                        alt="Karsog Test Track"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none"></div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Track Overview</h3>
                <p className="text-slate-600 leading-relaxed">
                  The Karsog test track includes an <strong>8-shape driving test</strong> and a <strong>reverse-S slope test</strong>.
                  Candidates must navigate these without stopping the engine or touching the boundary lines.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}