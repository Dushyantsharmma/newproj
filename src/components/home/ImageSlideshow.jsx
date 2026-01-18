import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/banners/Banner1.webp",
    title: "Master Hill Driving",
    subtitle: "Learn confident driving on sharp turns and steep slopes.",
  },
  {
    id: 2,
    image: "/banners/Banner2.webp",
    title: "Expert Instructors",
    subtitle: "Train with certified professionals who know the local roads.",
  },
  {
    id: 3,
    image: "/banners/Banner3.webp",
    title: "Safety First",
    subtitle: "Dual control vehicles ensuring 100% safe learning experience.",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const resumeTimeout = useRef(null);

  const paginate = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
    },
    []
  );

  // Pause autoplay after user interaction
  const handleUserNavigate = (dir) => {
    setPaused(true);
    paginate(dir);

    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      setPaused(false);
    }, 10000);
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => paginate(1), AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [paginate, paused]);

  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { opacity: { duration: 0.5 }, scale: { duration: 0.5 } },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { opacity: { duration: 0.5 }, scale: { duration: 0.5 } },
    },
  };

  return (
    <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[520px] overflow-hidden">
      {/* SLIDES */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            loading={current === 0 ? "eager" : "lazy"}
            fetchpriority={current === 0 ? "high" : undefined}
            className="w-full h-full object-cover"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* TEXT OVERLAY */}
      <div className="absolute left-0 top-0 w-full flex justify-start items-start px-1 pt-1 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="px-6 py-4 rounded-xl shadow-2xl pointer-events-auto text-left mb-2 bg-transparent"
            style={{ maxWidth: '90vw', minWidth: '320px' }}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white">
              {SLIDES[current].title}
            </h2>
            <p className="text-sm md:text-base max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white">
              {SLIDES[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20">
        <button
          aria-label="Previous slide"
          onClick={() => handleUserNavigate(-1)}
          className="p-2 rounded-full bg-black/30 backdrop-blur border border-white/10 text-white hover:bg-[#ea580c] transition"
        >
          <ChevronLeft />
        </button>

        <button
          aria-label="Next slide"
          onClick={() => handleUserNavigate(1)}
          className="p-2 rounded-full bg-black/30 backdrop-blur border border-white/10 text-white hover:bg-[#ea580c] transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            onClick={() => {
              setPaused(true);
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className="relative h-1.5 rounded-full overflow-hidden bg-white/30"
            style={{ width: index === current ? 32 : 12 }}
          >
            {index === current && (
              <motion.div
                className="absolute inset-0 bg-[#ea580c]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
