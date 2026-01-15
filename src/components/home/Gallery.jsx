import { useState, useMemo } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SEO from "../SEO";
import { MapPin, ZoomIn, Image as ImageIcon } from "lucide-react"; // Updated icons import if you use lucide

const CATEGORY_ORDER = ["Training", "Classroom", "Road Test", "Other"];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState("Training");

  const detectCategory = (name) => {
    const f = name.toLowerCase();
    if (f.includes("classroom")) return "Classroom";
    if (f.includes("road-test") || f.includes("roadtest")) return "Road Test";
    if (f.includes("training")) return "Training";
    return "Other";
  };

  const images = useMemo(() => {
    // Note: Ensure this path matches your project structure
    const modules = import.meta.glob("/gallery/**/*.{jpg,jpeg,png,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    });

    return Object.entries(modules).map(([path, src]) => {
      const file = path.split("/").pop();
      const category = detectCategory(file);

      return {
        src,
        id: file,
        category,
        title:
          category === "Training"
            ? "Hill Driving Session"
            : category === "Classroom"
            ? "Theory Class"
            : category === "Road Test"
            ? "RTO Track Test"
            : "Gallery Moment",
        location:
          category === "Training"
            ? "Karsog Valley"
            : category === "Classroom"
            ? "Training Center"
            : category === "Road Test"
            ? "Mandi RTO"
            : "Himachal Pradesh",
        alt: `Raj Ann Raj Driving School ${category}`,
      };
    });
  }, []);

  const categories = useMemo(() => {
    const set = new Set(images.map((i) => i.category));
    return CATEGORY_ORDER.filter((c) => set.has(c));
  }, [images]);

  const active = categories.includes(activeCategory)
    ? activeCategory
    : categories[0];

  const filtered = useMemo(
    () => images.filter((i) => i.category === active),
    [images, active]
  );

  return (
    <>
      <SEO title="Gallery | Raj Ann Raj Driving School" />

      {/* HEADER - White/Slate Theme */}
      <div className="bg-slate-50 pt-16 lg:pt-24 pb-8 lg:pb-12 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1e3a8a] break-words leading-tight">
          Raj Ann Raj <span className="text-[#ea580c]">Gallery</span>
        </h1>
        <p className="text-center text-slate-500 mt-3 break-words leading-relaxed">
          Glimpses of our training, students, and events.
        </p>
      </div>

      {/* FILTERS - Sticky Bar */}
      <div className="sticky top-[80px] bg-slate-50/95 backdrop-blur-sm z-30 p-4 border-b border-slate-200 shadow-sm">
        <div className="flex gap-3 overflow-x-auto justify-center max-w-screen-xl mx-auto px-4 scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                c === active
                  ? "bg-[#ea580c] text-white shadow-lg shadow-orange-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#ea580c] hover:text-[#ea580c]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* VIRTUAL GRID */}
      <div className="bg-slate-50 min-h-screen">
        <VirtuosoGrid
          useWindowScroll
          totalCount={filtered.length}
          listClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto"
          itemContent={(i) => {
            const img = filtered[i];
            return (
              <div
                onClick={() => setIndex(i)}
                className="group cursor-pointer bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay Color: Navy Blue tint */}
                  <div className="absolute inset-0 bg-[#1e3a8a]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <ZoomIn className="text-white drop-shadow-md" size={32} />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#1e3a8a] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                    {img.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-[#1e3a8a] text-lg mb-1 line-clamp-1 break-words">{img.title}</h3>
                  <p className="text-xs text-[#ea580c] flex gap-1 items-center font-medium break-words">
                    <MapPin size={12} /> {img.location}
                  </p>
                </div>
              </div>
            );
          }}
        />
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={filtered.map((i) => ({
          src: i.src,
          title: i.title,
          description: i.location
        }))}
        styles={{ 
            container: { backgroundColor: "rgba(30, 58, 138, 0.95)" } // Navy blue background for lightbox
        }}
      />
    </>
  );
}