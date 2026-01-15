import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EnquiryFab from './components/EnquiryFab';
import About from "./pages/About";

export default function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const CoursesPage = lazy(() => import("./pages/CoursesPage"));
  const StudentCornerPage = lazy(() => import("./pages/StudentCornerPage"));
  const GalleryPage = lazy(() => import("./pages/GalleryPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage"));

  // Theme state and effect
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Helper to inject theme/setTheme into lazy pages
  // eslint-disable-next-line no-unused-vars
  const withTheme = (Component) => (props) => <Component {...props} theme={theme} setTheme={setTheme} />;

  return (
    <div className={
      `min-h-screen flex flex-col font-sans selection:bg-[#ea580c] selection:text-white ` +
      (theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900')
    }>
      <Navigation theme={theme} setTheme={setTheme} />
      <ScrollToTop />
      <main className="flex-1 pt-24 lg:pt-32">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center text-[#1e3a8a] font-bold">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={withTheme(HomePage)({})} />
            <Route path="/about" element={withTheme(About)({})} />
            <Route path="/courses" element={withTheme(CoursesPage)({})} />
            <Route path="/student-corner" element={withTheme(StudentCornerPage)({})} />
            <Route path="/gallery" element={withTheme(GalleryPage)({})} />
            <Route path="/contact" element={withTheme(ContactPage)({})} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <EnquiryFab />
      <Footer />
    </div>
  );
}