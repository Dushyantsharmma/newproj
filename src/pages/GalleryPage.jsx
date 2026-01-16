import { useMemo, useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import Navigation from "../components/layout/Navigation";

// ---------- IMAGE CONFIGURATION ----------
const images = [
  ...Array.from({ length: 6 }, (_, i) => `/gallery/car-${String(i + 1).padStart(2, "0")}.webp`),
  "/gallery/Car-07.webp",
  "/gallery/Car-08.webp",
  "/gallery/Car-09.webp",
  "/gallery/Car10.webp",
  "/gallery/Car11.webp",
  "/gallery/Car12.webp",
  "/gallery/Car13.webp",
  "/gallery/Classroom-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1-.webp",
  "/gallery/Classroom-Raj-Ann-Raj-Bhanthal-Karsog-Mandi2.webp",
  "/gallery/Classroom-Raj-Ann-Raj-Bhanthal-Karsog-Mandi3.webp",
  "/gallery/Classroom-Raj-Ann-Raj-Bhanthal-Karsog-Mandi4.webp",
  "/gallery/Classroom-Raj-Ann-Raj-Bhanthal-Karsog-Mandi5.webp",
  "/gallery/Classroom-Raj-Ann-Raj-Bhanthal-Karsog-Mandi6.webp",
  "/gallery/Roadtest-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1.webp",
  "/gallery/Roadtest-Raj-Ann-Raj-Bhanthal-Karsog-Mandi2.webp",
  ...Array.from({ length: 18 }, (_, i) => `/gallery/training-${String(i + 1).padStart(2, "0")}.webp`),
];

// ---------- CATEGORY LOGIC ----------
const metaFromName = (src) => {
  const name = src.toLowerCase();
  if (name.includes("car")) return { category: "Cars", caption: "Training Vehicles" };
  if (name.includes("classroom")) return { category: "Classroom", caption: "Classroom Session" };
  if (name.includes("roadtest")) return { category: "Road Test", caption: "On-Road Test" };
  if (name.includes("training")) return { category: "Training", caption: "Practical Training" };
  return { category: "Other", caption: "Gallery Image" };
};

export default function GalleryPage({ theme, setTheme }) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const processed = useMemo(() => images.map((src) => ({ src, ...metaFromName(src) })), []);
  const categories = useMemo(() => ["All", ...new Set(processed.map((i) => i.category))], [processed]);
  const filtered = useMemo(() =>
    active === "All" ? processed : processed.filter((i) => i.category === active),
  [active, processed]);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setLightbox(null);
    if (lightbox) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [lightbox]);

  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} />
      <section className="max-w-7xl mx-auto px-2 py-16 mt-10 bg-slate-50 min-h-screen">
        <div className="mb-12 text-center px-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] tracking-tight mb-3">
            Our <span className="text-[#ea580c]">Gallery</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                active === cat
                  ? "bg-[#ea580c] text-white shadow-lg shadow-orange-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative cursor-zoom-in rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200 hover:shadow-xl hover:border-[#ea580c]/30 transition-all duration-300"
              onClick={() => setLightbox(img)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay: Navy Blue Tint */}
                <div className="absolute inset-0 bg-[#1e3a8a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 duration-300">
                  <div className="bg-white/30 backdrop-blur-md p-3 rounded-full text-white border border-white/40">
                      <ZoomIn size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {lightbox && (
          <div className="fixed inset-0 z-[100] bg-[#1e3a8a]/95 backdrop-blur-sm flex items-center justify-center p-2" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <img src={lightbox.src} alt={lightbox.caption} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
          </div>
        )}
      </section>
    </>
  );
}
