import { useState } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../SEO";

/* ============================
  SIGN FILE LISTS (VITE SAFE)
============================ */

const MANDATORY = Array.from({ length: 32 }, (_, i) => `/symbols/mandatory/${i + 1}.jpg`);
const CAUTIONARY = Array.from({ length: 36 }, (_, i) => `/symbols/cautionary/${i + 1}.jpg`);
const INFORMATORY = Array.from({ length: 19 }, (_, i) => `/symbols/informatory/${i + 1}.jpg`);

const SIGNS = {
  mandatory: MANDATORY.map((src, i) => ({
    img: src,
    name: `Mandatory Sign ${i + 1}`,
    desc: "Mandatory road regulation sign."
  })),
  cautionary: CAUTIONARY.map((src, i) => ({
    img: src,
    name: `Cautionary Sign ${i + 1}`,
    desc: "Warning sign indicating road condition."
  })),
  informatory: INFORMATORY.map((src, i) => ({
    img: src,
    name: `Informatory Sign ${i + 1}`,
    desc: "Information sign for road users."
  })),
};

const TABS = [
  { key: "mandatory", label: "Mandatory" },
  { key: "cautionary", label: "Cautionary" },
  { key: "informatory", label: "Informatory" }
];

/* ============================
      COMPONENT
============================ */

export default function DrivingSymbolsPage() {
  const [tab, setTab] = useState("mandatory");
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#EFEDE0] min-h-screen">
      <SEO title="Indian Road Signs | Raj Ann Raj Driving School" />

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0B1220] to-[#1E293B] text-white py-12 text-center rounded-b-3xl shadow-xl">
        <h1 className="text-4xl font-bold mb-3">Indian Road Signs</h1>
        <p className="text-slate-300">Official RTO learning guide</p>

        <img
          src="/symbols/Symbol-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1indian-road-signs.webp"
          alt="Indian Road Signs Chart"
          className="mx-auto my-6 max-w-xs w-full rounded-lg shadow-md"
        />

        <a
          href="/symbols/Symbol-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1indian-road-signs.webp"
          download
          className="inline-flex mt-2 px-6 py-3 bg-amber-500 text-black font-bold rounded-xl shadow-lg hover:bg-amber-400 transition"
        >
          <Download className="mr-2" /> Download Chart
        </a>
      </div>

      {/* TABS */}
      <div className="sticky top-0 bg-[#EFEDE0] z-10 p-4 flex flex-col items-center">
        <div className="flex gap-4 mb-3">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setSearch(""); }}
              className={`px-5 py-2 rounded-full font-bold ${
                tab === t.key ? "bg-amber-500 text-black" : "bg-white border"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search sign..."
          className="w-full max-w-md px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-300"
        />
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {SIGNS[tab]
          .filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
          .map((sign, i) => (
            <button
              key={i}
              onClick={() => setActive(sign)}
              className="bg-white rounded-xl p-4 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <img src={sign.img} className="w-20 h-20 mx-auto mb-3 object-contain" />
                            <img src={sign.img} className="w-20 h-20 mx-auto mb-3 object-contain" loading="lazy" width="80" height="80" />
              <p className="text-xs font-bold text-center">{sign.name}</p>
            </button>
          ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">{active.name}</h3>
                <button onClick={() => setActive(null)}><X /></button>
              </div>

              <img src={active.img} className="w-32 h-32 mx-auto mb-4 object-contain" />
                            <img src={active.img} className="w-32 h-32 mx-auto mb-4 object-contain" loading="lazy" width="128" height="128" />
              <p className="text-center text-slate-600">{active.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
