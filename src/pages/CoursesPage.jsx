import Courses from "../components/home/Courses";

export default function CoursesPage() {
  // The 'Courses' component already contains the updated Navy/Orange theme.
  // Added a wrapper to ensure full-screen background consistency.
  return (
    <div className="bg-slate-50 min-h-screen">
      <Courses />
    </div>
  );
}