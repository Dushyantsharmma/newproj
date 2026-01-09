/* cSpell:ignore roadtest */

import { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ZoomIn } from "lucide-react";
import SEO from "../SEO";

const CATEGORY_ORDER = ["Training", "Classroom", "Road Test", "Other"];

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState("Training");

  const detectCategoryFromFilename = (filename) => {
    const f = filename.toLowerCase();
    if (f.includes("classroom")) return "Classroom";
    if (f.includes("road-test") || f.includes("roadtest")) return "Road Test";
    if (f.includes("training")) return "Training";
    return "Other";
  };

  const formatTitle = (filename, category) => {
    if (category === "Training") return "Hill Driving Session";
    if (category === "Classroom") return "Theory Class";
    if (category === "Road Test") return "RTO Track Test";
    return "Gallery Moment";
  };

  const getLocation = (category) => {
    if (category === "Training") return "Karsog Valley";
    if (category === "Classroom") return "Training Center";
    if (category === "Road Test") return "Mandi RTO";
    return "Himachal Pradesh";
  };

  const allImages = useMemo(() => {
    const modules = import.meta.glob(
      [
        "/gallery/**/*.{jpg,jpeg,png,webp,svg}",
        "../../../public/gallery/**/*.{jpg,jpeg,png,webp,svg}",
      ],
      { eager: true, query: "?url", import: "default" }
    );

    return Object.entries(modules).map(([path, url]) => {
      const filename = path.split("/").pop() || "";
      const category = detectCategoryFromFilename(filename);

      const safeUrl =
        typeof url === "string" &&
        url.startsWith("/") &&
        !url.startsWith(import.meta.env.BASE_URL)
          ? `${import.meta.env.BASE_URL}${url.substring(1)}`
          : url;

      return {
        src: safeUrl,
        title: formatTitle(filename, category),
        category,
        location: getLocation(category),
        alt: `Raj Ann Raj Driving School - ${category}`,
        id: filename,
      };
    });
  }, []);

  const categories = useMemo(() => {
    const set = new Set(allImages.map((img) => img.category));
    const ordered = CATEGORY_ORDER.filter((c) => set.has(c));
    set.forEach((c) => {
      if (!CATEGORY_ORDER.includes(c)) ordered.push(c);
    });
    return ordered;
  }, [allImages]);

  const safeActiveCategory =
    categories.includes(activeCategory) ? activeCategory : categories[0];

  const filteredImages = useMemo(() => {
    return allImages.filter((img) => img.category === safeActiveCategory);
  }, [allImages, safeActiveCategory]);

  return (
    <>
      <SEO
        title="Gallery | Raj Ann Raj Driving Training School"
        description="Training vehicles, classroom sessions and road driving in Himachal Pradesh."
      />

      {/* ===== GALLERY HEADER ===== */}
      <div className="bg-[#F9F8F3] pt-[140px] pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Raj Ann Raj{" "}
            <span className="text-amber-500">Driving School</span>{" "}
            Gallery
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Professional Training • Himachal Roads • Modern Infrastructure
          </p>
        </div>
      </div>

      {/* ===== FILTERS ===== */}
      <div className="sticky top-[90px] z-30 bg-[#F9F8F3]/90 backdrop-blur-md py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition
              ${
                safeActiveCategory === cat
                  ? "bg-amber-500 text-white shadow"
                  : "bg-white border border-slate-300 text-slate-600 hover:border-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ===== GALLERY GRID ===== */}
      <section className="bg-[#F9F8F3] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIndex(i)}
                className="group cursor-zoom-in"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-100 hover:border-amber-400">
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <ZoomIn className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900">{img.title}</h3>
                    <p className="text-xs text-amber-600 flex items-center gap-1">
                      <MapPin size={12} /> {img.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={filteredImages.map((img) => ({
          src: img.src,
          title: img.title,
          description: img.location,
        }))}
      />
    </>
  );
};

export default Gallery;
