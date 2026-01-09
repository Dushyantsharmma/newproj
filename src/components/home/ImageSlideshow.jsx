import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}banners/Banner1.webp`,
    title: "Master the Art of Hill Driving",
    subtitle: "Navigate Himachal's toughest roads with confidence and precision.",
    cta: "Start Learning"
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}banners/Banner2.webp`,
    title: "Expert Guidance, Every Mile",
    subtitle: "Learn from seasoned instructors with 20+ years of experience.",
    cta: "Meet Instructors"
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}banners/Banner3.webp`,
    title: "Safety is Our Priority",
    subtitle: "Dual-control vehicles and comprehensive safety training.",
    cta: "View Courses"
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
      scale: 1.1 // Slight zoom out on enter
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1, // Settles at normal scale
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 6, ease: "linear" } // Ken Burns effect duration
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[85vh] overflow-hidden bg-slate-900 group">
      
      {/* 1. SLIDESHOW CONTAINER */}
      <AnimatePresence initial={false} custom={direction}>
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
          <motion.img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="w-full h-full object-cover"
            loading="lazy"
            width="1200"
            height="600"
            // The Key Burns Effect (Slow Zoom)
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 8, ease: "linear" }}
          />
          
          {/* Cinematic Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            key={current} // Re-animate text on slide change
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div 
              variants={textVariants} 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm"
            >
              Driving Excellence
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={textVariants}
              transition={{ delay: 0.1 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 xs:mb-5 md:mb-6 leading-snug xs:leading-tight md:leading-tight drop-shadow-lg break-words"
            >
              {SLIDES[current].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={textVariants}
              transition={{ delay: 0.2 }}
              className="text-base xs:text-lg sm:text-xl md:text-xl text-slate-200 mb-6 xs:mb-7 md:mb-8 leading-normal xs:leading-relaxed max-w-xs xs:max-w-md sm:max-w-lg drop-shadow-md"
            >
              {SLIDES[current].subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={textVariants}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/40 active:scale-95"
            >
              <span className="relative z-10">{SLIDES[current].cta}</span>
              <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 3. CONTROLS */}
      {/* Arrows (Hidden on mobile, visible on desktop hover) */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-between px-4 pointer-events-none">
        <button 
          onClick={() => paginate(-1)}
          className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-110 active:scale-95 -translate-x-10 group-hover:translate-x-0"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => paginate(1)}
          className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-110 active:scale-95 translate-x-10 group-hover:translate-x-0"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Progress Bars (Bottom Center) */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: index === current ? '40px' : '20px' }}
            >
              {/* Background track */}
              <div className="absolute inset-0 bg-white/30" />
              
              {/* Filling animation */}
              {index === current && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-amber-500"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ImageSlideshow;