import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import StudentCornerPage from "./pages/StudentCornerPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import EnquiryForm from "./components/home/EnquiryForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/student-corner" element={<StudentCornerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Back-compat: old hash-based anchors */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <EnquiryForm />
    </div>
  );
}

export default App;
