import React from "react";
import { MapPin, Phone, MessageCircle, Mountain } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]">

      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15),transparent_55%)]" />
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center backdrop-blur-xl
            bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl"
        >

          {/* LOCATION */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/10 border border-white/20 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
            <MapPin size={14} />
            Karsog • Mandi • Himachal Pradesh
          </div>

          {/* HEADING */}
          <h1 className="mt-6 font-extrabold leading-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
            Master the Art of
            <span className="block text-amber-400">
              Hill Driving
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-slate-300 leading-relaxed max-w-xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
            Learn safe and confident driving on real hill roads with
            <span className="text-white font-semibold"> Raj Ann Raj Driving School</span>.
            Trusted across Himachal Pradesh since 2005.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919882034930"
              className="inline-flex items-center justify-center gap-2 px-8 py-3
                rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold
                transition shadow-lg w-full sm:w-auto"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919882034930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3
                rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold
                border border-white/20 transition w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* FEATURES */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Hairpin Bends",
              "Steep Climbs",
              "Downhill Control",
              "Narrow Roads",
              "Hill Start Practice",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/5 border border-white/10 text-slate-200 text-sm font-medium"
              >
                <Mountain size={14} className="text-amber-400" />
                {feature}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
