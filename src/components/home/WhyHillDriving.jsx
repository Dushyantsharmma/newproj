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
    <section className="bg-slate-50 py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            Himachal Pradesh
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a] mt-6 leading-tight">
            Why Hill Driving <br />
            <span className="text-[#ea580c]">
              Is Different
            </span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg max-w-xl leading-relaxed">
            Driving in the mountains is not the same as driving on highways.
            We train you to handle steep slopes, blind curves, and real hill
            traffic with confidence and control.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-[#ea580c] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-[#c2410c] hover:-translate-y-1 transition-all duration-300"
          >
            Talk to an Instructor
          </a>
        </div>

        {/* RIGHT FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#ea580c] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#ea580c] transition-colors duration-300">
                <f.icon className="text-[#ea580c] group-hover:text-white transition-colors duration-300" size={28} />
              </div>

              <h3 className="text-[#1e3a8a] font-bold text-xl mb-2">
                {f.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
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