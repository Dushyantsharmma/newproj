import { useState } from "react";
import { Download, X, Search, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../SEO";

/* ============================
   1. DATA CONFIGURATION
   (Keep existing data)
============================ */

const SIGN_DATA = {
  mandatory: {
    1: { name: "No Entry", desc: "Entry prohibited for all vehicles." },
    2: { name: "One Way", desc: "Traffic allowed in one direction only." },
    3: { name: "One Way", desc: "Traffic allowed in the direction of the arrow." },
    4: { name: "Vehicles Prohibited", desc: "Vehicles prohibited in both directions." },
    5: { name: "All Motor Vehicles Prohibited", desc: "No motor vehicles allowed." },
    6: { name: "Trucks Prohibited", desc: "Entry of trucks and heavy vehicles is restricted." },
    7: { name: "Bullock & Hand Carts Prohibited", desc: "Animal and hand-drawn carts are prohibited." },
    8: { name: "Bullock Carts Prohibited", desc: "Entry of bullock carts is restricted." },
    9: { name: "Tongas Prohibited", desc: "Horse-drawn carriages are prohibited." },
    10: { name: "Hand Carts Prohibited", desc: "Entry of hand carts is restricted." },
    11: { name: "Cycles Prohibited", desc: "Bicycles are not allowed on this road." },
    12: { name: "Pedestrians Prohibited", desc: "Walking on this road is dangerous and prohibited." },
    13: { name: "Right Turn Prohibited", desc: "Do not take a right turn." },
    14: { name: "Left Turn Prohibited", desc: "Do not take a left turn." },
    15: { name: "U-Turn Prohibited", desc: "Taking a U-turn is illegal here." },
    16: { name: "Overtaking Prohibited", desc: "Do not overtake other vehicles." },
    17: { name: "Horn Prohibited", desc: "Silent zone. Do not honk." },
    18: { name: "No Parking", desc: "You may stop briefly, but parking is prohibited." },
    19: { name: "Speed Limit 50", desc: "Maximum speed limit is 50 km/h." },
    20: { name: "No Stopping", desc: "No stopping or standing at any time." },
    21: { name: "Load Limit 5T", desc: "Vehicles heavier than 5 tonnes are prohibited." },
    22: { name: "Restriction Ends", desc: "Previous prohibitions end here." },
    23: { name: "Compulsory Turn Left", desc: "You must turn left." },
    24: { name: "Compulsory Turn Right", desc: "You must turn right." },
    25: { name: "Compulsory Ahead", desc: "Drive straight only." },
    26: { name: "Compulsory Ahead or Right", desc: "Go straight or turn right." },
    27: { name: "Compulsory Ahead or Left", desc: "Go straight or turn left." },
    28: { name: "Compulsory Keep Left", desc: "Stay to the left side of the road." },
    29: { name: "Compulsory Cycle Track", desc: "Lane reserved for bicycles only." },
    30: { name: "Compulsory Sound Horn", desc: "You must sound your horn here." },
    31: { name: "Stop", desc: "Come to a complete stop and check for traffic." },
    32: { name: "Give Way", desc: "Yield to traffic on the main road." }
  },
  cautionary: {
    1: { name: "Right Hand Curve", desc: "Road bends to the right ahead." },
    2: { name: "Left Hand Curve", desc: "Road bends to the left ahead." },
    3: { name: "Right Hairpin Bend", desc: "Sharp U-turn to the right ahead." },
    4: { name: "Left Hairpin Bend", desc: "Sharp U-turn to the left ahead." },
    5: { name: "Right Reverse Bend", desc: "Zig-zag road, first right then left." },
    6: { name: "Left Reverse Bend", desc: "Zig-zag road, first left then right." },
    7: { name: "Steep Ascent", desc: "Steep upward slope ahead." },
    8: { name: "Steep Descent", desc: "Steep downward slope ahead." },
    9: { name: "Narrow Road Ahead", desc: "The road gets narrower ahead." },
    10: { name: "Road Widens Ahead", desc: "The road gets wider ahead." },
    11: { name: "Narrow Bridge", desc: "Bridge ahead is narrower than the road." },
    12: { name: "Slippery Road", desc: "Road may be slippery, drive carefully." },
    13: { name: "Loose Gravel", desc: "Gravel may fly; drive slowly." },
    14: { name: "Cycle Crossing", desc: "Watch out for cyclists crossing." },
    15: { name: "Pedestrian Crossing", desc: "Slow down for people crossing." },
    16: { name: "School Ahead", desc: "Children may be on the road. Drive slowly." },
    17: { name: "Men at Work", desc: "Construction workers ahead." },
    18: { name: "Cattle", desc: "Watch for animals on the road." },
    19: { name: "Falling Rocks", desc: "Risk of landslides or falling stones." },
    20: { name: "Ferry", desc: "Ferry crossing ahead." },
    21: { name: "Cross Road", desc: "Intersection ahead." },
    22: { name: "Gap in Median", desc: "U-turn or crossing gap ahead." },
    23: { name: "Side Road Right", desc: "Side road entering from the right." },
    24: { name: "Y-Intersection", desc: "Road forks ahead." },
    25: { name: "Y-Intersection", desc: "Road forks ahead." },
    26: { name: "Y-Intersection", desc: "Road forks ahead." },
    27: { name: "Staggered Intersection", desc: "Turns available left then right." },
    28: { name: "Staggered Intersection", desc: "Turns available right then left." },
    29: { name: "T-Intersection", desc: "Road ends, must turn left or right." },
    30: { name: "Major Road Ahead", desc: "You are approaching a main road." },
    31: { name: "Roundabout", desc: "Traffic circle ahead." },
    32: { name: "Dangerous Dip", desc: "Sudden depression in the road." },
    33: { name: "Hump or Rough Road", desc: "Uneven road surface ahead." },
    34: { name: "Barrier Ahead", desc: "Checkpost or toll barrier ahead." },
    35: { name: "Quayside or River Bank", desc: "Road ends at water, be careful." },
    36: { name: "Speed Breaker", desc: "Speed bump ahead, slow down." }
  },
  informatory: {
    1: { name: "Public Telephone", desc: "Telephone booth available nearby." },
    2: { name: "Petrol Pump", desc: "Fuel station ahead." },
    3: { name: "Hospital", desc: "Medical facility nearby." },
    4: { name: "First Aid Post", desc: "Emergency medical aid available." },
    5: { name: "Eating Place", desc: "Restaurant or food available." },
    6: { name: "Light Refreshment", desc: "Tea/Coffee and snacks available." },
    7: { name: "Resting Place", desc: "Area to park and rest." },
    8: { name: "No Through Road", desc: "Dead end." },
    9: { name: "No Through Side Road", desc: "Side road is a dead end." },
    10: { name: "Parking", desc: "Parking allowed here." },
    11: { name: "Parking (Both Sides)", desc: "Parking allowed on both sides." },
    12: { name: "Parking (Scooters)", desc: "Parking for scooters and motorcycles." },
    13: { name: "Parking (Cycles)", desc: "Parking for bicycles." },
    14: { name: "Parking (Cars)", desc: "Parking for cars and taxis." },
    15: { name: "Parking (Autos)", desc: "Parking for auto-rickshaws." },
    16: { name: "Parking (Rickshaws)", desc: "Parking for cycle rickshaws." },
    17: { name: "Flood Gauge", desc: "Indicates water depth." },
    18: { name: "Destination Sign", desc: "Directions to nearby towns." },
    19: { name: "Direction Sign", desc: "Route confirmation sign." }
  }
};

/* ============================
   2. IMAGE LOADING & MERGING
============================ */

const MANDATORY = Array.from({ length: 32 }, (_, i) => `/symbols/mandatory/${i + 1}.jpg`);
const CAUTIONARY = Array.from({ length: 36 }, (_, i) => `/symbols/cautionary/${i + 1}.jpg`);
const INFORMATORY = Array.from({ length: 19 }, (_, i) => `/symbols/informatory/${i + 1}.jpg`);

const createSignList = (images, type, defaultDesc) => {
  return images.map((src, i) => {
    const id = i + 1;
    const info = SIGN_DATA[type][id] || { 
      name: `Sign ${id}`, 
      desc: defaultDesc 
    };

    return {
      img: src,
      name: info.name,
      desc: info.desc
    };
  });
};

const SIGNS = {
  mandatory: createSignList(MANDATORY, "mandatory", "Mandatory road regulation sign."),
  cautionary: createSignList(CAUTIONARY, "cautionary", "Warning sign indicating road condition."),
  informatory: createSignList(INFORMATORY, "informatory", "Information sign for road users."),
};

// Updated Tab Config for modern look
const TABS = [
  { key: "mandatory", label: "Mandatory", activeBg: "bg-blue-50", activeText: "text-blue-700", ring: "ring-blue-200" },
  { key: "cautionary", label: "Cautionary", activeBg: "bg-amber-50", activeText: "text-amber-700", ring: "ring-amber-200" },
  { key: "informatory", label: "Informatory", activeBg: "bg-green-50", activeText: "text-green-700", ring: "ring-green-200" }
];

/* ============================
      3. MAIN COMPONENT
============================ */

export default function DrivingSymbolsPage() {
  const [tab, setTab] = useState("mandatory");
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const activeTabTheme = TABS.find(t => t.key === tab);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEO title="Indian Road Signs | Raj N Raj Driving School" />

      {/* MODERN HERO SECTION (White Background) */}
      <div className="bg-white pt-12 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-6">
              <Info className="w-4 h-4" /> RTO Official Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Master Indian <br className="hidden md:block"/> Road Signs.
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl">
              Browse the complete official database of Mandatory, Cautionary, and Informatory traffic symbols essential for driving in India.
            </p>

            <a
              href="/symbols/Symbol-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1indian-road-signs.webp"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" /> Download Full Chart
            </a>
          </div>

          {/* Right Image Content */}
          <div className="md:w-5/12 hidden md:block relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-amber-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
             <img
              src="/symbols/Symbol-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1indian-road-signs.webp"
              alt="Indian Road Signs Chart Preview"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white z-10 relative"
            />
          </div>
        </div>
      </div>

      {/* STICKY NAVIGATION BAR */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Modern Tabs as Pills */}
          <div className="flex p-1 bg-slate-100/80 rounded-full">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setSearch(""); }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  tab === t.key 
                    ? `bg-white text-slate-900 shadow-sm ring-1 ring-slate-200` 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Modern Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={`Search ${tab} signs...`}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-100 border-transparent focus:border-slate-300 focus:bg-white focus:ring-2 focus:ring-slate-200/50 focus:outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>
      </div>

      {/* CLEAN SIGNS GRID */}
      <div className="max-w-7xl mx-auto p-6 py-12 min-h-[60vh]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {SIGNS[tab]
            .filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
            .map((sign, i) => (
              <button
                key={i}
                onClick={() => setActive(sign)}
                className={`group bg-white rounded-3xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full text-center ring-1 ring-slate-100 hover:ring-${activeTabTheme.ring.split('-')[1]}-300`}
              >
                <div className="h-28 w-full flex items-center justify-center mb-5 relative">
                  {/* Subtle glow behind image on hover */}
                  <div className={`absolute inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-full ${activeTabTheme.activeBg}`}></div>
                  <img 
                    src={sign.img} 
                    className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy" 
                    alt={sign.name} 
                  />
                </div>
                <p className="text-sm font-bold text-slate-800 leading-snug group-hover:text-slate-900">
                  {sign.name}
                </p>
              </button>
            ))}
        </div>
        
        {/* Empty State */}
        {SIGNS[tab].filter(s => s.name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex p-4 bg-slate-100 rounded-full mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <p className="text-xl font-semibold text-slate-700 mb-2">No signs found matching "{search}"</p>
            <p className="text-slate-500">Try checking your spelling or switch categories.</p>
            <button onClick={() => setSearch("")} className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition">
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CLEAN POPUP MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
               <button 
                  onClick={() => setActive(null)}
                  className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition z-10"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>

              <div className="p-8 pb-6 flex flex-col items-center text-center pt-12">
                <div className="relative mb-8">
                   <div className={`absolute inset-0 opacity-30 blur-2xl rounded-full ${activeTabTheme.activeBg}`}></div>
                  <img 
                    src={active.img} 
                    className="h-40 w-auto object-contain relative z-10 drop-shadow-sm" 
                    alt={active.name}
                  />
                </div>
                
                <span className={`mb-4 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${activeTabTheme.activeBg} ${activeTabTheme.activeText} ring-1 ${activeTabTheme.ring}`}>
                  {tab} Sign
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3 leading-tight">{active.name}</h3>
                <p className="text-slate-600 text-lg leading-relaxed px-4">{active.desc}</p>
              </div>

              <div className="p-6 bg-slate-50/50 border-t border-slate-100">
                <button 
                  className="w-full py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                  onClick={() => setActive(null)}
                >
                  Understood
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}