import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  AlertTriangle, 
  ClipboardCheck, 
  HelpCircle, 
  GraduationCap,
  ChevronRight,
  BookOpen,
  Download // Only keep icons needed for Navigation or Header
} from 'lucide-react';
import SEO from '../components/SEO';
import Navigation from "../components/layout/Navigation";

// Import Sub-Components
import RTOInfo from "../components/student/RTOInfo";
import MockTest from "../components/student/MockTest";
import FAQ from "../components/student/FAQ";
import DashboardTrainer from "../components/student/DashboardTrainer";
import TrafficFines from "../components/student/TrafficFines";
import DrivingSymbols from "../components/student/DrivingSymbols";
import StudentResources from "../components/student/StudentResources"; // <-- Import the new component

export default function StudentCornerPage({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState('rto');

  // Scroll to top of content on tab switch (Mobile UX)
  useEffect(() => {
    const contentElement = document.getElementById('content-area');
    if (contentElement && window.innerWidth < 768) {
        contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const menuItems = [
    {
      id: 'rto',
      title: 'RTO & License',
      icon: FileText,
      color: 'bg-blue-500',
      description: 'Process & Fees'
    },
    {
      id: 'learning-hub',
      title: 'Learning Hub',
      icon: BookOpen,
      color: 'bg-pink-500',
      description: 'Dashboard & Rules'
    },
    {
      id: 'resources',
      title: 'Library',
      icon: Download,
      color: 'bg-yellow-500',
      description: 'PDFs & Downloads'
    },
    {
      id: 'symbols',
      title: 'Road Signs',
      icon: AlertTriangle,
      color: 'bg-amber-500',
      description: 'Traffic Symbols'
    },
    {
      id: 'mock-test',
      title: 'Mock Test',
      icon: ClipboardCheck,
      color: 'bg-green-500',
      description: 'Practice Exams'
    },
    {
      id: 'faq',
      title: 'Student FAQs',
      icon: HelpCircle,
      color: 'bg-purple-500',
      description: 'Common Questions'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'rto': return <RTOInfo />;
      case 'learning-hub': return (
          <div className="space-y-8">
             <div className="grid lg:grid-cols-2 gap-8">
                <DashboardTrainer />
                <TrafficFines />
             </div>
          </div>
        );
      case 'resources': return <StudentResources />; // <-- Clean usage
      case 'symbols': return <DrivingSymbols />;
      case 'mock-test': return <MockTest />;
      case 'faq': return <FAQ />;
      default: return <RTOInfo />;
    }
  };

  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} />
      
      <div className="min-h-screen bg-[#F8FAFC] pt-24 lg:pt-32 pb-12 font-sans">
        <SEO 
          title="Student Corner | Raj Ann Raj Driving School"
          description="Resources for driving students: RTO info, Road Signs, Mock Tests, and PDFs."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center mb-12 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 shadow-sm rotate-3 transform hover:rotate-6 transition-transform">
                <GraduationCap size={32} className="text-[#ea580c]" />
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-orange-500">Corner</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Everything you need to pass confidently.
              <span className="hidden sm:inline"> Access study materials, practice tests, and license information all in one place.</span>
            </p>
          </motion.div>

          {/* GRID NAVIGATION */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 mb-12">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative group overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-5 text-left transition-all duration-300 border
                    ${isActive 
                      ? 'bg-white border-[#ea580c] shadow-xl ring-1 ring-orange-100 -translate-y-1 z-10' 
                      : 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-md'
                  }`}
                >
                  {/* Background Decor */}
                  <div className={`absolute top-0 right-0 p-16 -mr-8 -mt-8 rounded-full opacity-[0.08] transition-transform group-hover:scale-150 ${item.color}`} />
                  
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${item.color} text-white flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  
                  <h3 className={`text-sm md:text-base font-bold mb-1 leading-tight ${isActive ? 'text-[#1e3a8a]' : 'text-slate-800'}`}>
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-500 mb-2 font-medium line-clamp-1">
                    {item.description}
                  </p>

                  <div className={`flex items-center text-[10px] md:text-xs font-bold mt-auto ${isActive ? 'text-[#ea580c]' : 'text-slate-400 group-hover:text-[#1e3a8a]'}`}>
                    <span>View</span>
                    <ChevronRight size={12} className={`ml-1 transition-transform ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* CONTENT AREA */}
          <div id="content-area" className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden min-h-[500px]">
            <div className="p-6 md:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}