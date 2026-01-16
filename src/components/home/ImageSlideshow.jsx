import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}banners/Banner1.webp`,
    title: "Master Hill Driving",
    subtitle: "Learn confident driving on sharp turns and steep slopes."
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}banners/Banner2.webp`,
    title: "Expert Instructors",
    subtitle: "Train with certified professionals who know the local roads."
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}banners/Banner3.webp`,
    title: "Safety First",
    subtitle: "Dual control vehicles ensuring 100% safe learning experience."
  },
];

const ImageSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = SLIDES.length - 1;
      if (next >= SLIDES.length) next = 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1 
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1, 
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 6, ease: "linear" } 
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };



  return (
    /* FIXED: Changed fixed heights to 'h-full' to fill the Hero Section completely */
    <div className="relative w-full h-full overflow-hidden bg-slate-900 group">
      
      {/* 1. SLIDESHOW IMAGES */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Cinematic Overlay - Essential for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXT CONTENT (Only visible if not covered by Hero text) */}
      <div className="absolute inset-0 flex items-center z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Only show this text if you aren't using the text in Home.jsx */}
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl hidden md:block" // Hidden on small screens to avoid clash
          >
            {/* NOTE: If you are using the big text in Home.jsx, 
               you might want to remove this section entirely to avoid duplicate text.
            */}
          </motion.div>
        </div>
      </div>

      {/* 3. NAVIGATION BUTTONS */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20 pointer-events-none">
        {/* Left Button */}
        <button
          onClick={() => paginate(-1)}
          className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ea580c] hover:border-[#ea580c] hover:scale-110 active:scale-95 -translate-x-10 group-hover:translate-x-0"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => paginate(1)}
          className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ea580c] hover:border-[#ea580c] hover:scale-110 active:scale-95 translate-x-10 group-hover:translate-x-0"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 4. PAGINATION INDICATORS */}
      <div className="absolute bottom-8 left-0 right-0 z-20 pointer-events-auto">
        <div className="flex justify-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className="group relative h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: index === current ? '40px' : '12px' }}
            >
              {/* Background track */}
              <div className="absolute inset-0 bg-white/30" />
              
              {/* Filling animation */}
              {index === current && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-[#ea580c]"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ImageSlideshow;