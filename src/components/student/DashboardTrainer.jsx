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
    icon: AlertTriangle, // Replaced Oil with AlertTriangle
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
  critical: "bg-red-500 text-white",
  warning: "bg-amber-500 text-white",
  info: "bg-blue-500 text-white"
};

const DashboardTrainer = () => {
  const [active, setActive] = useState(null);

  const getIcon = (type) => {
    if (type === "critical") return <XCircle className="text-red-500" />;
    if (type === "warning") return <AlertCircle className="text-amber-500" />;
    return <Info className="text-blue-500" />;
  };

  return (
    <section className="bg-[#EFEDE0] rounded-3xl p-6 md:p-10">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Gauge className="text-amber-500" /> Dashboard Warning Lights
          </h3>
          <p className="text-sm text-slate-500">
            Tap a symbol to understand what it means.
          </p>
        </div>
      </div>

      {/* SYMBOL GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 bg-slate-900 p-6 rounded-2xl shadow-xl">
        {SIGNS.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-lg hover:scale-105 transition-all ${colorMap[s.type]}`}
            >
              <Icon size={36} />
              <span className="mt-2 text-xs font-bold">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* DETAILS PANEL */}
      <div className="mt-8 min-h-[140px]">
        {active ? (
          <div
            className={`p-6 rounded-2xl border-l-4 ${
              active.type === "critical"
                ? "bg-red-50 border-red-500"
                : active.type === "warning"
                ? "bg-amber-50 border-amber-500"
                : "bg-blue-50 border-blue-500"
            }`}
          >
            <div className="flex gap-4">
              <div className="p-3 bg-white rounded-full shadow">
                {getIcon(active.type)}
              </div>
              <div>
                <h4 className="text-lg font-bold">{active.label}</h4>
                <p className="text-sm text-slate-700 mb-2">{active.meaning}</p>
                <p className="text-sm font-bold text-slate-900">
                  Action: {active.action}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-100 p-6 rounded-xl text-center text-slate-500">
            Select a warning symbol above to learn what it means.
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardTrainer;
