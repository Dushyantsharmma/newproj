import React from "react";
import { MapPin, Phone, MessageCircle, Mountain } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* ================= LCP IMAGE (Maintained as per your setup) ================= */}
      {/* Kept hidden/preload logic as per your original code */}
      <img
        src="/banners/Banner1.webp"
        srcSet="
          /banners/Banner1-400.webp 400w,
          /banners/Banner1-800.webp 800w,
          /banners/Banner1-1600.webp 1600w
        "
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 1200px"
        width="1600"
        height="600"
        alt="Raj Ann Raj Driving School Hill Driving Training"
        fetchPriority="high"
        decoding="async"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* ================= BACKGROUND EFFECTS (Light Theme) ================= */}
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      {/* Top Orange Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.15),transparent_70%)]" />
      {/* Bottom Blue Glow */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#1e3a8a]/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Card: White Glassmorphism */}
        <div className="mx-auto max-w-4xl text-center backdrop-blur-xl bg-white/60 border border-white/60 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-900/5">

          {/* ================= LOCATION BADGE ================= */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-[#ea580c] text-xs sm:text-sm font-bold tracking-wide shadow-sm mb-8 break-words"
          >
            <MapPin size={14} />
            Karsog • Mandi • Himachal Pradesh
          </div>

          {/* ================= HEADING ================= */}
          <h1
            className="font-extrabold leading-[1.1] text-[#1e3a8a] tracking-tight break-words"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {/* Example: Use a span for the highlighted part, with box-decoration-break: clone for multi-line */}
            <span
              className="inline-block bg-blue-100 px-2 py-1"
              style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
            >
              आत्मविश्वास के साथ गाड़ी चलाएं।
              <br />
              पहाड़ियों पर महारत हासिल करें।
            </span>
          </h1>

          {/* ================= SUBTITLE ================= */}
          <p
            className="mt-6 text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium break-words"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.25rem)" }}
          >
            Learn safe and confident driving on real hill roads with
            <span className="text-[#1e3a8a] font-bold">
              {" "}Raj Ann Raj Driving School
            </span>.
            <br className="hidden md:block"/> Trusted across Himachal Pradesh since 2005.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button: Orange */}
            <a
              href="tel:+919882034930"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
              rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-lg
              transition-all shadow-lg shadow-orange-200 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Phone size={20} />
              Call Now
            </a>

            {/* Secondary Button: Navy Outline */}
            <a
              href="https://wa.me/919882034930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
              rounded-xl bg-transparent hover:bg-[#1e3a8a] text-[#1e3a8a] hover:text-white font-bold text-lg
              border-2 border-[#1e3a8a] transition-all w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          {/* ================= FEATURES ================= */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center gap-3">
            {[
              "Hairpin Bends",
              "Steep Climbs",
              "Downhill Control",
              "Narrow Roads",
              "Hill Start Practice",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold shadow-sm break-words"
              >
                {/* Icon in Brand Orange */}
                <Mountain size={14} className="text-[#ea580c]" />
                {feature}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;