import React, { useState } from "react";
import {
  Info,
  AlertCircle,
  XCircle,
  Gauge,
  Battery,
  Fuel,
  DoorOpen,
  Lock,
  Thermometer,
  AlertTriangle,
  Car,
  ShieldCheck,
  Download,
  CheckCircle2,
  Smartphone,
  Wine,
  XOctagon
} from "lucide-react";

// --- DATA: Dashboard Signs ---
const SIGNS = [
  {
    id: "seatbelt",
    label: "Seat Belt",
    icon: AlertTriangle,
    meaning: "Seat belt is not fastened.",
    action: "Fasten seat belt immediately.",
    type: "critical"
  },
  {
    id: "abs",
    label: "ABS",
    icon: Gauge,
    meaning: "Anti-lock braking system fault.",
    action: "Drive carefully and visit service center.",
    type: "warning"
  },
  {
    id: "oil",
    label: "Oil Pressure",
    icon: AlertTriangle,
    meaning: "Low engine oil pressure.",
    action: "Stop engine immediately and check oil level.",
    type: "critical"
  },
  {
    id: "brake",
    label: "Brake System",
    icon: AlertCircle,
    meaning: "Handbrake on or low brake fluid.",
    action: "Release handbrake or check fluid.",
    type: "critical"
  },
  {
    id: "door",
    label: "Door Open",
    icon: DoorOpen,
    meaning: "One or more doors are open.",
    action: "Close all doors before driving.",
    type: "critical"
  },
  {
    id: "lock",
    label: "Security",
    icon: Lock,
    meaning: "Immobilizer or security system active.",
    action: "Use correct key or consult dealer.",
    type: "info"
  },
  {
    id: "temp",
    label: "Engine Temp",
    icon: Thermometer,
    meaning: "Engine overheating.",
    action: "Stop safely and let engine cool.",
    type: "critical"
  },
  {
    id: "battery",
    label: "Battery",
    icon: Battery,
    meaning: "Battery charging system fault.",
    action: "Check alternator or battery.",
    type: "warning"
  },
  {
    id: "fuel",
    label: "Low Fuel",
    icon: Fuel,
    meaning: "Fuel level is running low.",
    action: "Refuel at the nearest station.",
    type: "info"
  },
  {
    id: "engine",
    label: "Check Engine",
    icon: Car,
    meaning: "Engine or emission system fault.",
    action: "Visit service center for diagnosis.",
    type: "warning"
  }
];

const colorMap = {
  critical: "bg-red-500 text-white shadow-red-500/50",
  warning: "bg-[#ea580c] text-white shadow-orange-500/50",
  info: "bg-blue-500 text-white shadow-blue-500/50"
};

// --- SUB-COMPONENTS ---
const RuleItem = ({ title, desc }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50/50 border border-green-100">
    <CheckCircle2 className="shrink-0 text-green-600 mt-0.5" size={18} />
    <div>
      <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
      <p className="text-xs text-slate-600">{desc}</p>
    </div>
  </div>
);

const MistakeItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow bg-white">
    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
      {icon && React.createElement(icon, { size: 20 })}
    </div>
    <div>
      <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const DashboardTrainer = () => {
  const [active, setActive] = useState(null);

  const getIcon = (type) => {
    if (type === "critical") return <XCircle className="text-red-500" />;
    if (type === "warning") return <AlertCircle className="text-[#ea580c]" />;
    return <Info className="text-blue-500" />;
  };

  return (
    <div className="space-y-8">
      
      {/* 1. DASHBOARD TRAINER SECTION */}
      <section className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 shadow-xl overflow-hidden">
        <div className="mb-6 flex flex-col gap-2">
          <h3 className="text-2xl font-black flex items-center gap-3 text-[#1e3a8a]">
            <Gauge className="text-[#ea580c]" size={28} /> 
            Know Your Dashboard
          </h3>
          <p className="text-sm text-slate-600">
            Tap a symbol below to learn what it means.
          </p>
        </div>

        {/* SYMBOL GRID (Dark Mode Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-[#0f172a] p-6 rounded-3xl shadow-inner border border-slate-800 relative overflow-hidden">
          {/* Gloss Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {SIGNS.map((s) => {
            const Icon = s.icon;
            const isActive = active?.id === s.id;
            
            return (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`
                  relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? `${colorMap[s.type]} scale-110 shadow-lg ring-2 ring-white/50` 
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                  }
                `}
              >
                <Icon size={28} strokeWidth={isActive ? 2.5 : 2} className="mb-2" />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "opacity-100" : "opacity-60"}`}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* DETAILS PANEL */}
        <div className="mt-6 min-h-[140px]">
          {active ? (
            <div
              className={`p-6 rounded-2xl border-l-8 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                active.type === "critical"
                  ? "bg-red-50 border-red-500"
                  : active.type === "warning"
                  ? "bg-orange-50 border-[#ea580c]"
                  : "bg-blue-50 border-blue-500"
              }`}
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-full shadow-sm shrink-0">
                  {getIcon(active.type)}
                </div>
                <div>
                  <h4 className={`text-lg font-extrabold mb-1 ${
                    active.type === "critical" ? "text-red-600" : active.type === "warning" ? "text-[#ea580c]" : "text-blue-600"
                  }`}>
                      {active.label}
                  </h4>
                  <p className="text-slate-700 font-medium text-sm mb-3">{active.meaning}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs font-bold text-[#1e3a8a] shadow-sm">
                     <span className="uppercase tracking-wider text-slate-400">Action:</span> 
                     {active.action}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-6 rounded-2xl text-center flex flex-col items-center justify-center h-full text-slate-400">
              <Info size={24} className="mb-2 opacity-50" />
              <p className="text-sm">Select a warning light above to see details.</p>
            </div>
          )}
        </div>
      </section>

      {/* 2. GOLDEN RULES & SAFETY TIPS (From Documents) */}
      <section className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-white" /> 
            10 Golden Rules of Road Safety
          </h2>
          <p className="text-emerald-100 text-xs mt-1">
             [cite_start]Essential rules for every driver [cite: 322-328]
          </p>
        </div>
        
        <div className="p-6 grid gap-3">
            <RuleItem title="Stop at Zebra Crossing" desc="Give way to pedestrians first." />
            <RuleItem title="Wear Seatbelt" desc="Reduces risk of fatal injury by 60%." />
            <RuleItem title="Obey Traffic Lights" desc="Never jump a red light." />
            <RuleItem title="Respect Speed Limits" desc="30 km/h in residential areas." />
            <RuleItem title="Never Drink & Drive" desc="Alcohol slows reaction time." />
            <RuleItem title="Wear Helmet" desc="Reduces head injury risk by 70%." />
            <RuleItem title="No Mobile Phones" desc="Distraction causes accidents." />
        </div>
      </section>

      {/* 3. COMMON MISTAKES */}
      <section className="space-y-4">
        <h3 className="font-bold text-slate-800 flex items-center gap-2 px-2">
           <XOctagon className="text-red-500" size={20} /> Mistakes to Avoid
        </h3>
        <div className="grid gap-3">
           <MistakeItem 
             icon={Smartphone} 
             title="Distraction (ध्यान बंटना)" 
             desc="Keep eyes on road. Park phone before driving." 
           />
           <MistakeItem 
             icon={Wine} 
             title="Driving Under Influence" 
             desc="Strictly prohibited. Penalties are severe." 
           />
        </div>
      </section>

      {/* 4. RESOURCES & PLEDGE */}
      <section className="grid gap-4">

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <img 
            src="/Student Corner/images/road_safety_pledge.png" 
            alt="Safety Pledge" 
            className="w-full h-auto object-cover"
            onError={(e) => e.target.style.display = 'none'} 
          />
        </div>
      </section>

    </div>
  );
};

export default DashboardTrainer;