import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Gavel, 
  AlertTriangle, 
  Bike, 
  Car, 
  FileText, 
  Zap, 
  ShieldAlert, 
  Volume2, 
  Truck, 
  Siren 
} from "lucide-react";

// DATA SOURCE: Himachal Pradesh Transport Department Notification (July 20, 2021)
//
const HP_FINES = [
  { 
    id: "helmet",
    section: "194D", 
    offense: "Driving without Helmet", 
    fine: "₹1,500", 
    details: "Applies to both rider and pillion.",
    category: "Safety",
    icon: Bike
  },
  { 
    id: "seatbelt",
    section: "194B(1)", 
    offense: "Not Wearing Seat Belt", 
    fine: "₹1,500", 
    details: "Applies to driver and passengers.",
    category: "Safety",
    icon: Car
  },
  { 
    id: "license",
    section: "181", 
    offense: "Driving Without License", 
    fine: "₹7,500", 
    details: "Violating Section 3 or 4 of MV Act.",
    category: "Documents",
    icon: FileText
  },
  { 
    id: "insurance",
    section: "196", 
    offense: "Driving Without Insurance", 
    fine: "₹3,000", 
    subsequent: "₹6,000",
    details: "Driving uninsured vehicle.",
    category: "Documents",
    icon: ShieldAlert
  },
  { 
    id: "speed_light",
    section: "183(1)(i)", 
    offense: "Over Speeding (Light Vehicle)", 
    fine: "₹1,500 - ₹3,000", 
    details: "For Cars, Jeeps, etc.",
    category: "Speed",
    icon: Zap
  },
  { 
    id: "speed_heavy",
    section: "183(1)(ii)", 
    offense: "Over Speeding (Medium/Heavy)", 
    fine: "₹3,000 - ₹6,000", 
    details: "For Trucks, Buses, etc.",
    category: "Speed",
    icon: Truck
  },
  { 
    id: "dangerous",
    section: "184", 
    offense: "Dangerous Driving / Mobile Use", 
    fine: "₹1,500 - ₹7,500", 
    subsequent: "₹15,000",
    details: "Using handheld devices while driving.",
    category: "Major",
    icon: AlertTriangle
  },
  { 
    id: "racing",
    section: "189", 
    offense: "Racing / Speed Trials", 
    fine: "₹7,500", 
    subsequent: "₹15,000",
    details: "Unauthorized racing in public places.",
    category: "Major",
    icon: Zap
  },
  { 
    id: "disobedience",
    section: "179", 
    offense: "Disobedience of Orders", 
    fine: "₹3,000", 
    details: "Refusal to share information or obey authorities.",
    category: "General",
    icon: Gavel
  },
  { 
    id: "unauthorized",
    section: "180", 
    offense: "Allowing Unauthorized Driver", 
    fine: "₹7,500", 
    details: "Vehicle owner allowing unlicensed person to drive.",
    category: "Major",
    icon: Car
  },
  { 
    id: "pollution",
    section: "190(2)", 
    offense: "Pollution / Safety Violation", 
    fine: "₹15,000", 
    details: "Violating air/noise standards.",
    category: "Major",
    icon: AlertTriangle
  },
  { 
    id: "emergency",
    section: "194E", 
    offense: "Blocking Emergency Vehicle", 
    fine: "₹15,000", 
    details: "Not giving way to Ambulance/Fire Brigade.",
    category: "Major",
    icon: Siren
  },
  { 
    id: "reg",
    section: "192", 
    offense: "Vehicle Without Registration", 
    fine: "₹3,000 - ₹7,500", 
    subsequent: "₹7,500 - ₹15,000",
    details: "Driving unregistered vehicle.",
    category: "Documents",
    icon: FileText
  },
  { 
    id: "permit",
    section: "192A", 
    offense: "Permit Violation", 
    fine: "₹15,000", 
    details: "Commercial vehicle without valid permit.",
    category: "Commercial",
    icon: FileText
  },
  { 
    id: "overload_goods",
    section: "194(1)", 
    offense: "Overloading (Goods)", 
    fine: "₹30,000", 
    details: "+ ₹3,000 per extra tonne.",
    category: "Commercial",
    icon: Truck
  },
  { 
    id: "overload_pass",
    section: "194A", 
    offense: "Overloading (Passengers)", 
    fine: "₹300 / passenger", 
    details: "Fine per excess passenger.",
    category: "Commercial",
    icon: Truck
  },
  { 
    id: "two_wheeler",
    section: "194C", 
    offense: "Triple Riding / Safety", 
    fine: "₹1,500", 
    details: "Safety violation on two-wheelers.",
    category: "Safety",
    icon: Bike
  },
  { 
    id: "noise",
    section: "194F", 
    offense: "Unnecessary Horn / Noise", 
    fine: "₹1,500", 
    subsequent: "₹3,000",
    details: "Honking in silence zones or noisy exhaust.",
    category: "General",
    icon: Volume2
  },
  { 
    id: "general",
    section: "177", 
    offense: "General Offense", 
    fine: "₹750", 
    subsequent: "₹2,250",
    details: "Any offense not specified elsewhere.",
    category: "General",
    icon: FileText
  }
];

const TrafficFines = () => {
  const [query, setQuery] = useState("");

  const filtered = HP_FINES.filter(item =>
    item.offense.toLowerCase().includes(query.toLowerCase()) || 
    item.section.includes(query) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-[#EFEDE0] relative overflow-hidden py-12 px-4 md:px-8 min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-red-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <AlertTriangle size={14} className="fill-current" />
            Strictly Enforced
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Himachal Pradesh <br className="md:hidden" />
            <span className="text-amber-600">Challan Rates</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Updated fines as per HP Govt Notification (July 2021) under Motor Vehicles (Amendment) Act.
          </p>
        </div>

        {/* Search Bar */}
        <div className="sticky top-4 z-20 mb-8">
          <div className="relative max-w-2xl mx-auto shadow-xl shadow-slate-200/50 rounded-2xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="text-slate-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by offense (e.g. 'Helmet', '184', 'Speed')"
              className="block w-full pl-12 pr-5 py-4 bg-white border-0 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 transition-all font-medium text-lg"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Fines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                      <item.icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">
                          {item.offense}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-wide whitespace-nowrap">
                          Sec {item.section}
                        </span>
                      </div>
                      
                      <p className="text-sm text-slate-500 mb-3 line-clamp-1">
                        {item.details}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-block bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-red-100">
                          {item.fine}
                        </div>
                        {item.subsequent && (
                          <div className="text-xs text-slate-400 font-medium">
                            <span className="font-bold text-slate-600">{item.subsequent}</span> (2nd Offense)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No fines found</h3>
                <p className="text-slate-500">Try searching for a different keyword or section.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-400 font-medium max-w-2xl mx-auto">
            * <strong className="text-slate-600">Note:</strong> These rates are based on the Himachal Pradesh Government Notification No. TPT-A(3)-5/2020 dated 20th July 2021. Court challans may vary based on the magistrate's discretion.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrafficFines;