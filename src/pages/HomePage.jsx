


import React, { Suspense, lazy, useRef, useState, useEffect } from "react";

const ImageSlideshow = lazy(() => import("../components/home/ImageSlideshow"));
const Home = lazy(() => import("../components/home/Home"));
const Team = lazy(() => import("../components/home/Team"));
const WhyHillDriving = lazy(() => import("../components/home/WhyHillDriving"));
const About = lazy(() => import("../components/home/About"));
const Courses = lazy(() => import("../components/home/Courses"));
const GoogleReviews = lazy(() => import("../components/home/GoogleReviews"));


export default function HomePage() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const slideshowRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!showSlideshow && slideshowRef.current) {
        const rect = slideshowRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) setShowSlideshow(true);
      }
      if (!showReviews && reviewsRef.current) {
        const rect = reviewsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) setShowReviews(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [showSlideshow, showReviews]);

  return (
    <>
      <div ref={slideshowRef} style={{ minHeight: 320 }}>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          {showSlideshow && <ImageSlideshow />}
        </Suspense>
      </div>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Home />
        <Team />
        <WhyHillDriving />
        <About variant="brief" />
        <Courses />
      </Suspense>
      <div ref={reviewsRef} style={{ minHeight: 320 }}>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          {showReviews && <GoogleReviews />}
        </Suspense>
      </div>
    </>
  );
}
