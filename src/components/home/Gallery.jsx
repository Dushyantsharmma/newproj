
import { useState, useMemo } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SEO from "../SEO";
import { MapPin, ZoomIn } from "../icons";

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

      {/* HEADER */}
      <div className="bg-[#F9F8F3] pt-[140px] pb-12 border-b">
        <h1 className="text-4xl font-extrabold text-center">
          Raj Ann Raj <span className="text-amber-500">Gallery</span>
        </h1>
      </div>

      {/* FILTERS */}
      <div className="sticky top-[90px] bg-[#F9F8F3] z-30 p-4 flex gap-3 overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-5 py-2 rounded-full ${
              c === active ? "bg-amber-500 text-white" : "bg-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* VIRTUAL GRID */}
      <VirtuosoGrid
        style={{ height: "80vh" }}
        totalCount={filtered.length}
        listClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        itemContent={(i) => {
          const img = filtered[i];
          return (
            <div
              onClick={() => setIndex(i)}
              className="group cursor-pointer bg-white rounded-3xl shadow hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{img.title}</h3>
                <p className="text-xs text-amber-600 flex gap-1 items-center">
                  <MapPin size={12} /> {img.location}
                </p>
              </div>
            </div>
          );
        }}
      />

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={filtered.map((i) => ({
          src: i.src,
          title: i.title,
        }))}
      />
    </>
  );
}
