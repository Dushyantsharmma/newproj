import Navigation from "../components/layout/Navigation";
import Courses from "../components/home/Courses";

export default function CoursesPage({ theme, setTheme }) {
  // The 'Courses' component already contains the updated Navy/Orange theme.
  // Added a wrapper to ensure full-screen background consistency.
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navigation theme={theme} setTheme={setTheme} />
      <Courses />
    </div>
  );
}