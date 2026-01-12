import { useState } from "react";
import { MapPin, Phone, Clock, FileText, User, FileBadge, ArrowRight, Wallet, Navigation, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../SEO";

export default function RTOInfo() {
  const [tab, setTab] = useState("process");

  const rto = {
    code: "HP-30",
    city: "Karsog",
    address: "Mini Secretariat, SDM Office, Karsog, Mandi, HP – 175011",
    phone: "01907-222236",
    timings: "10:00 AM – 5:00 PM",
  };

  const tabs = [
    { id: "process", label: "Step-by-Step Process", icon: Navigation },
    { id: "documents", label: "Required Documents", icon: FileText },
    { id: "fees", label: "Fee Structure", icon: Wallet },
    { id: "route", label: "Test Track Map", icon: MapPin },
  ];

  return (
    <div className="bg-[#FDFCF8] min-h-screen font-sans text-slate-800 selection:bg-amber-200">
      <SEO
        title="Karsog RTO (HP-30) – Ultimate License Guide"
        description="Complete guide for Learner & Driving License at SDM Office Karsog (HP-30). Fees, documents, and test track details."
        canonical="https://rajannrajdrivingschool.com/rto"
      />

      {/* 1. MODERN HEADER WITH GLASS EFFECT */}
      <div className="relative bg-white pt-20 pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-50/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl shadow-slate-200"
          >
            Official Code • {rto.code}
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            {rto.city} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">RTO Guide</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Your comprehensive handbook for obtaining a driving license at the <strong>Registering & Licensing Authority, {rto.city}</strong>.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-12">
            {[
              { icon: MapPin, label: "Location", val: "Mini Secretariat" },
              { icon: Phone, label: "Helpline", val: rto.phone },
              { icon: Clock, label: "Hours", val: rto.timings },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 font-medium uppercase">{stat.label}</div>
                  <div className="font-semibold text-slate-900">{stat.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. FLOATING TAB NAVIGATION */}
      <div className="sticky top-4 z-40 px-4 mb-12">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200/60 p-1.5 rounded-full shadow-lg shadow-slate-200/50 flex justify-between overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                tab === t.id ? "text-slate-900" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {tab === t.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-amber-400 rounded-full shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <t.icon className={`w-4 h-4 ${tab === t.id ? "text-slate-900" : "text-slate-400"}`} />
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="max-w-4xl mx-auto px-6 pb-24 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            
            {/* --- PROCESS TAB --- */}
            {tab === "process" && (
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100 hidden md:block"></div>
                <div className="space-y-8">
                  {[
                    { title: "Online Registration", text: "Visit parivahan.gov.in -> Online Services -> Driving License Related Services. Select state 'Himachal Pradesh'." },
                    { title: "Fill Application", text: "Choose 'Apply for Learner License'. Fill in your details matching your Aadhaar card exactly." },
                    { title: "Upload Documents", text: "Upload scanned copies of Address Proof (Aadhaar) and Age Proof. Photo & Signature must be clear." },
                    { title: "Fee Payment", text: "Pay the government fees online via the cyber treasury portal linked in the application." },
                    { title: "Slot Booking", text: "Book an appointment slot for scrutiny. Without a slot, the SDM office will not accept your file." },
                    { title: "Visit RTO Office", text: "Go to SDM Office Karsog (Room No. 4) with original documents for physical verification." },
                    { title: "Computer Test", text: "Take the test. 10 questions about road signs. You need 6 correct answers to pass." },
                  ].map((step, i) => (
                    <div key={i} className="relative md:pl-24 group">
                      <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border border-slate-100 rounded-2xl items-center justify-center font-bold text-xl text-slate-300 group-hover:text-amber-500 group-hover:border-amber-500 transition-colors shadow-sm z-10">
                        {i + 1}
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- DOCUMENTS TAB --- */}
            {tab === "documents" && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Learner Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Learner License</h3>
                  <ul className="space-y-4">
                    {[
                      "Aadhaar Card (Address + Age)",
                      "10th Marksheet (Date of Birth)",
                      "Passport Size Photo (x2)",
                      "Medical Certificate (Form 1A)"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 bg-blue-50/50 rounded-xl text-sm text-blue-800 font-medium">
                    💡 Tip: If you are above 40 years old, Medical Certificate is mandatory.
                  </div>
                </div>

                {/* DL Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                    <FileBadge className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Driving License</h3>
                  <ul className="space-y-4">
                    {[
                      "Original Learner License",
                      "Online Application Form 4",
                      "Valid RC & Insurance of Vehicle",
                      "Driving School Certificate (Form 5)"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* --- FEES TAB --- */}
            {tab === "fees" && (
              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
                <div className="bg-slate-900 text-white p-8 text-center">
                  <h3 className="text-2xl font-bold">Official Fee Structure</h3>
                  <p className="text-slate-400 mt-2">Fees valid for non-transport vehicles (MCWG/LMV)</p>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { item: "Learner License (New)", cost: "150" },
                    { item: "LL Test Fee", cost: "50" },
                    { item: "Permanent License Issue", cost: "200" },
                    { item: "Driving Test (Per Class)", cost: "300" },
                    { item: "Smart Card Fee", cost: "200" },
                    { item: "Renewal of DL", cost: "200" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                      <span className="font-medium text-slate-700">{row.item}</span>
                      <span className="text-xl font-bold text-slate-900">₹{row.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-amber-50 text-center">
                  <p className="text-amber-800 text-sm font-semibold flex items-center justify-center gap-2">
                    <Info className="w-4 h-4" /> Total estimated cost for New DL: ₹900 - ₹1200
                  </p>
                </div>
              </div>
            )}

            {/* --- ROUTE TAB --- */}
            {tab === "route" && (
              <div className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                 <div className="relative rounded-[2rem] overflow-hidden bg-slate-100 group">
                    <img 
                      src="/symbols/Driving Test Route..webp" 
                      alt="Karsog Driving Test Track" 
                      className="w-full h-auto object-cover md:min-h-[500px]"
                    />
                    
                    {/* Overlay Details */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">The "8" and "H" Track</h3>
                      <p className="text-slate-200 max-w-lg">
                        The test at Karsog involves a Forward-8 maneuver followed by a Reverse-S or Gradient test. Ensure you do not touch the yellow lines.
                      </p>
                    </div>
                 </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}