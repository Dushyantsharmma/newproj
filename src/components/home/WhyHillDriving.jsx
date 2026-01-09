import { Mountain, TrendingUp, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Real Hill Roads",
    desc: "Train on actual mountain roads of Himachal, not flat city tracks."
  },
  {
    icon: TrendingUp,
    title: "Slopes & Curves",
    desc: "Master steep climbs, sharp curves, and downhill control."
  },
  {
    icon: AlertTriangle,
    title: "Safety First",
    desc: "Learn how to handle landslides, fog, and tight roads safely."
  },
  {
    icon: Mountain,
    title: "Local Instructors",
    desc: "Trainers born and raised in Mandi hills with real-world experience."
  }
];

const WhyHillDriving = () => {
  return (
    <section className="bg-[#0B1222] py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-amber-500 font-bold tracking-widest uppercase">
            Himachal Pradesh
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            Why Hill Driving <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Is Different
            </span>
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-xl">
            Driving in the mountains is not the same as driving on highways.
            We train you to handle steep slopes, blind curves, and real hill
            traffic with confidence and control.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-amber-500 text-[#0B1222] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-amber-600 transition"
          >
            Talk to an Instructor
          </a>
        </div>

        {/* RIGHT FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#141B2E] p-8 rounded-2xl border border-white/5 hover:border-amber-500/50 transition group"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition">
                <f.icon className="text-amber-500 group-hover:text-[#0B1222]" size={28} />
              </div>

              <h3 className="text-white font-bold text-xl mb-2">
                {f.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyHillDriving;
