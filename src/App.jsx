import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EnquiryFab from './components/EnquiryFab';
import About from "./pages/About";

const HomePage = lazy(() => import("./pages/HomePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const StudentCornerPage = lazy(() => import("./pages/StudentCornerPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    // Updated background to bg-slate-50 for the clean light theme
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#ea580c] selection:text-white">
      
      <Navigation />
      <ScrollToTop />
      
      {/* Main Content */}
      <main className="flex-1 pt-[64px] lg:pt-0">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center text-[#1e3a8a] font-bold">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/student-corner" element={<StudentCornerPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
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

export default App;