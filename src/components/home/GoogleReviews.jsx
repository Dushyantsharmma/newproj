import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaGoogle, FaStar, FaQuoteRight } from "react-icons/fa";
import { CheckCircle2, Star, User } from "lucide-react";

const reviews = [
  {
    name: 'Aniket Kamra',
    rating: 5,
    text: 'Best driving school in Mandi. Very experienced instructor and excellent guidance. Passed in first attempt.',
    date: '3 months ago',
    initial: 'A',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    name: 'Vinay Kumar',
    rating: 5,
    text: 'Professional and patient teaching. Strong focus on safety and real driving skills.',
    date: '2 months ago',
    initial: 'V',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Priya Thakur',
    rating: 5,
    text: 'Perfect for beginners. Calm instructor and very supportive environment.',
    date: '1 month ago',
    initial: 'P',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    name: 'Rohit Sharma',
    rating: 5,
    text: 'Excellent driving techniques and traffic rule explanation. Highly recommended.',
    date: '4 months ago',
    initial: 'R',
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'Sneha Patel',
    rating: 5,
    text: 'Very professional training. Got my license easily after learning here.',
    date: '3 weeks ago',
    initial: 'S',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    name: 'Arun Singh',
    rating: 5,
    text: 'Amazing experience! The instructor is very knowledgeable and teaching style is really effective. Highly satisfied.',
    date: '2 weeks ago',
    initial: 'A',
    color: 'bg-indigo-100 text-indigo-700'
  },
];

const GoogleReviews = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const controls = useAnimationControls();

  useEffect(() => {
    // Calculate total width for seamless loop
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    // Start infinite scroll animation
    const startAnimation = async () => {
      await controls.start({
        x: -width,
        transition: {
          duration: 40, // Adjust speed here (higher = slower)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (width > 0) {
      startAnimation();
    }
  }, [width, controls]);

  return (
    <section className="relative py-20 bg-[#EFEDE0] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Star size={14} className="fill-current" />
            Student Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="text-amber-600">Himachal's Drivers</span>
          </h2>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <FaGoogle className="text-2xl text-slate-700" />
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500 text-lg">
                <span className="font-bold text-slate-900">5.0</span>
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-xs text-slate-500 font-medium">Based on 120+ Reviews</p>
            </div>
          </div>
        </div>

        {/* MARQUEE CAROUSEL */}
        <div className="relative -mx-6 md:-mx-0">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#EFEDE0] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#EFEDE0] to-transparent z-20 pointer-events-none" />

          <motion.div 
            ref={carousel} 
            className="flex gap-6 pl-6 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => controls.stop()} // Pause on hover
            onMouseLeave={() => controls.start({ // Resume on leave
              x: -width,
              transition: { duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }
            })}
          >
            <motion.div 
              animate={controls}
              className="flex gap-6"
            >
              {[...reviews, ...reviews].map((review, idx) => ( // Duplicate for seamless loop
                <div 
                  key={idx}
                  className="w-[320px] md:w-[380px] bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0 relative group"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-slate-100 group-hover:text-amber-50 transition-colors duration-300">
                    <FaQuoteRight size={40} />
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg leading-tight">{review.name}</h4>
                      <div className="flex gap-0.5 text-amber-400 text-xs mt-1">
                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-base leading-relaxed mb-6 min-h-[80px]">
                    "{review.text}"
                  </p>

                  {/* Footer */}
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      {review.date}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                      <CheckCircle2 size={12} />
                      Verified
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/YOUR_GOOGLE_MAPS_LINK" // Replace with actual link
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 font-medium transition-colors text-sm border-b border-slate-300 hover:border-amber-600 pb-0.5"
          >
            Read all reviews on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;