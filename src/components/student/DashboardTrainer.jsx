import { useState } from "react";
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
  Car
} from "lucide-react";

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
    action: "Stop engine and check oil level.",
    type: "critical"
  },
  {
    id: "brake",
    label: "Brake",
    icon: AlertCircle,
    meaning: "Handbrake on or brake fluid low.",
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
    action: "Stop and let engine cool.",
    type: "critical"
  },
  {
    id: "battery",
    label: "Battery",
    icon: Battery,
    meaning: "Battery charging fault.",
    action: "Check alternator or battery.",
    type: "warning"
  },
  {
    id: "fuel",
    label: "Low Fuel",
    icon: Fuel,
    meaning: "Fuel level is low.",
    action: "Refuel soon.",
    type: "info"
  },
  {
    id: "engine",
    label: "Check Engine",
    icon: Car,
    meaning: "Engine or emission fault.",
    action: "Visit service center.",
    type: "warning"
  }
];

const colorMap = {
  critical: "bg-red-500 text-white shadow-red-500/50",
  // Using Brand Orange for Warnings
  warning: "bg-[#ea580c] text-white shadow-orange-500/50",
  info: "bg-blue-500 text-white shadow-blue-500/50"
};

const DashboardTrainer = () => {
  const [active, setActive] = useState(null);

  const getIcon = (type) => {
    if (type === "critical") return <XCircle className="text-red-500" />;
    if (type === "warning") return <AlertCircle className="text-[#ea580c]" />;
    return <Info className="text-blue-500" />;
  };

  return (
    <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-slate-200 shadow-xl">
      <div className="mb-8 flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-extrabold flex items-center gap-3 text-[#1e3a8a]">
          <Gauge className="text-[#ea580c]" size={32} /> 
          Dashboard Warning Lights
        </h3>
        <p className="text-sm text-slate-600 pl-1">
          Tap a symbol below to understand what it means and what action to take.
        </p>
      </div>

      {/* SYMBOL GRID (Dark Dashboard Look) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 bg-[#0f172a] p-8 rounded-3xl shadow-inner border border-slate-800 relative overflow-hidden">
        {/* Decorative Gloss Effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        {SIGNS.map((s) => {
          const Icon = s.icon;
          const isActive = active?.id === s.id;
          
          return (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className={`
                relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300
                ${isActive 
                  ? `${colorMap[s.type]} scale-110 shadow-lg ring-2 ring-white/50` 
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                }
              `}
            >
              <Icon size={32} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`mt-3 text-[10px] font-bold uppercase tracking-wider ${isActive ? "opacity-100" : "opacity-60"}`}>
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* DETAILS PANEL */}
      <div className="mt-8 min-h-[160px]">
        {active ? (
          <div
            className={`p-6 rounded-2xl border-l-8 shadow-lg transition-all duration-300 animate-fade-in-up ${
              active.type === "critical"
                ? "bg-red-50 border-red-500"
                : active.type === "warning"
                ? "bg-orange-50 border-[#ea580c]"
                : "bg-blue-50 border-blue-500"
            }`}
          >
            <div className="flex gap-5 items-start">
              <div className="p-4 bg-white rounded-full shadow-sm shrink-0">
                {getIcon(active.type)}
              </div>
              <div>
                <h4 className={`text-xl font-extrabold mb-1 ${
                    active.type === "critical" ? "text-red-600" : active.type === "warning" ? "text-[#ea580c]" : "text-blue-600"
                }`}>
                    {active.label}
                </h4>
                <p className="text-slate-700 font-medium mb-3">{active.meaning}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-slate-200 text-sm font-bold text-[#1e3a8a] shadow-sm">
                   <span className="uppercase text-[10px] tracking-wider text-slate-400">Action:</span> 
                   {active.action}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center flex flex-col items-center justify-center h-full text-slate-400 dashed-border">
            <Info size={32} className="mb-2 opacity-50" />
            <p>Select a warning symbol above to view details.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardTrainer;