import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  AlertTriangle, 
  FileText, 
  ClipboardCheck, 
  Image as ImageIcon, 
  Download, 
  Eye, 
  X 
} from 'lucide-react';

// --- DATA ---
const resourcesData = [
  {
    id: 1,
    title: "Pledge Poem",
    description: "A poetic reminder of our duties on the road.",
    type: "image",
    url: "/Student Corner/Poem-Pleadge.webp",
    icon: ImageIcon,
    color: "indigo"
  },
  {
    id: 2,
    title: "Challan Rates & Fines",
    description: "Updated list of traffic violation penalties per Motor Vehicle Act.",
    type: "pdf",
    url: "/Student Corner/Challan Rate.pdf",
    icon: AlertTriangle,
    color: "red"
  },
  {
    id: 3,
    title: "Road Safety & Signage",
    description: "Official guide on road safety protocols and traffic signs.",
    type: "pdf",
    url: "/Student Corner/Road Safety, Signs & Signage Booklet.pdf",
    icon: FileText,
    color: "green"
  },
  {
    id: 4,
    title: "Visual Road Signs Chart",
    description: "Quick reference chart for all mandatory and cautionary road signs.",
    type: "pdf",
    url: "/Student Corner/Road Sign.pdf",
    icon: AlertTriangle,
    color: "orange"
  },
  {
    id: 5,
    title: "Mock Test Papers",
    description: "Collection of practice questions for your Learner's License exam.",
    type: "pdf",
    url: "/Student Corner/mock-test.pdf",
    icon: ClipboardCheck,
    color: "purple"
  },
  {
    id: 6,
    title: "Safety Pledge",
    description: "Take the vow to be a responsible driver.",
    type: "image",
    url: "/Student Corner/Pleadge.webp",
    icon: ImageIcon,
    color: "pink"
  }
];

// --- MODAL COMPONENT (Internal) ---
const ResourceModal = ({ resource, onClose }) => {
  if (!resource) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} 
        className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-${resource.color}-50 text-${resource.color}-600`}>
              <resource.icon size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{resource.title}</h3>
              <p className="text-xs text-slate-500 capitalize">{resource.type} Viewer</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={resource.url} 
              download 
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Download size={16} /> <span className="hidden sm:inline">Download</span>
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="flex-1 bg-slate-50 relative overflow-hidden flex items-center justify-center">
          {resource.type === 'pdf' ? (
            <iframe 
              src={`${resource.url}#toolbar=0&navpanes=0`} 
              className="w-full h-full"
              title={resource.title}
            />
          ) : (
            <div className="w-full h-full overflow-auto p-4 flex items-center justify-center">
              <img 
                src={resource.url} 
                alt={resource.title} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN EXPORT ---
export default function StudentResources() {
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <>
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] flex items-center gap-2">
              <BookOpen className="text-yellow-500" /> Student Library
            </h2>
            <p className="text-slate-500 mt-1">Access all your study materials, guides, and safety pledges here.</p>
          </div>
          <div className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg border border-blue-100 whitespace-nowrap">
            {resourcesData.length} Documents Available
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((res) => (
            <div 
              key={res.id}
              className="group bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Icon & Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-110 transition-transform`}>
                  <res.icon size={24} />
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${
                  res.type === 'pdf' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-purple-50 text-purple-600 border-purple-100'
                }`}>
                  {res.type}
                </span>
              </div>

              {/* Card Text */}
              <div className="flex-1 mb-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {res.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {res.description}
                </p>
              </div>

              {/* Card Actions */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                <button 
                  onClick={() => setSelectedResource(res)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1e3a8a] text-white text-sm font-bold hover:bg-blue-800 active:scale-95 transition-all shadow-lg shadow-blue-900/20"
                >
                  <Eye size={16} /> Read Now
                </button>
                {res.type === 'image' ? (
                  <a
                    href={res.url}
                    download={res.title.replace(/\s+/g, '_') + '.jpg'}
                    className="flex items-center justify-center p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] hover:border-[#1e3a8a] transition-all"
                    title="Download JPG"
                  >
                    <Download size={18} />
                  </a>
                ) : (
                  <a
                    href={res.url}
                    download
                    className="flex items-center justify-center p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] hover:border-[#1e3a8a] transition-all"
                    title="Download File"
                  >
                    <Download size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedResource && (
          <ResourceModal 
            resource={selectedResource} 
            onClose={() => setSelectedResource(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}