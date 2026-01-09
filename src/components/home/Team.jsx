import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BadgeCheck, Star, Users, Trophy, Sparkles } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Girdhari Lal",
    role: "Senior Instructor",
    image: "team/Instructor-girdhari-lal-Roadtest-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1.webp",
    tags: ["Hill Specialist", "20+ Years Exp."],
    isFounder: false,
    icon: Star,
    accent: "text-blue-600 bg-blue-50 border-blue-100"
  },
  {
    id: 2,
    name: "Pushp Raj",
    role: "Founder & Director",
    image: "team/owner-pushp-raj.webp",
    quote: "Our mission is to build a generation of drivers who respect the road.",
    isFounder: true,
    icon: Trophy,
    accent: "text-amber-600 bg-amber-50 border-amber-100"
  },
  {
    id: 3,
    name: "Tarun Bala",
    role: "Head of Operations",
    image: "team/tarun-bala-clerk.webp",
    tags: ["Student Support", "RTO Expert"],
    isFounder: false,
    icon: Users,
    accent: "text-purple-600 bg-purple-50 border-purple-100"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
};

const Team = () => {
  return (
    <section id="team" className="relative py-20 lg:py-28 bg-[#EFEDE0] overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="fill-current" />
            Meet The Experts
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Experience</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Learn from the most trusted professionals in Mandi & Karsog. 
            <br className="hidden sm:block" /> Dedicated to your safety and success.
          </p>
        </div>

        {/* 2. TEAM GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              className={`
                group relative flex flex-col bg-white rounded-[2.5rem] p-3 transition-all duration-500
                ${member.isFounder 
                  ? 'md:-mt-8 shadow-2xl shadow-amber-500/10 border-2 border-white ring-1 ring-slate-100 z-10' 
                  : 'shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2'
                }
              `}
            >
              {/* Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <img 
                  src={`${import.meta.env.BASE_URL}${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-sm">
                  <member.icon size={20} className={member.isFounder ? "text-amber-500" : "text-slate-400"} />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${member.isFounder ? 'text-amber-600' : 'text-slate-500'}`}>
                  {member.role}
                </p>

                {/* Founder Quote or Staff Tags */}
                {member.isFounder ? (
                  <div className="relative bg-amber-50 rounded-2xl p-5 mt-2 border border-amber-100">
                    <Quote size={24} className="text-amber-300 absolute -top-3 left-1/2 -translate-x-1/2 fill-current bg-white rounded-full p-1 border border-amber-50" />
                    <p className="text-slate-700 text-sm font-medium italic leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {member.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${member.accent}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Team;