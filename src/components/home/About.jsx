import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
  Quote,
  Building2,
  Award,
  CheckCircle2,
  MapPin
} from "lucide-react";
import SEO from "../SEO";

// ================= ANIMATION VARIANTS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// ================= COMPONENT =================
const About = ({ variant = "full" }) => {
  const stats = [
    { label: "Years Experience", value: "20+", icon: Clock },
    { label: "Happy Students", value: "5k+", icon: Users },
    { label: "Google Rating", value: "5.0", icon: Star },
  ];

  const values = [
    "Govt. Approved Institute",
    "Dual Control Safety Cars",
    "ISO Certified Training",
    "Lady Friendly Environment"
  ];

  // ================= BRIEF VARIANT (Home Page) =================
  if (variant === "brief") {
    return (
      <section id="about" className="relative py-20 lg:py-28 bg-[#EFEDE0] overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left: Text Content */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                <Building2 size={14} />
                Who We Are
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Driving Confidence. <br />
                <span className="text-amber-600">Since 2005.</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-4 border-amber-300 pl-6">
                We are Mandi's premier driving institute. We don't just teach you to pass a test; 
                we wire your brain for safety, patience, and skill on the challenging hill roads of Himachal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-white/50">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-green-600" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex-1 min-w-[100px] bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                    <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-2 opacity-80" />
                    <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image Layering */}
            <motion.div variants={imageVariants} className="relative hidden lg:block">
              {/* Main Image */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl rotate-2">
                <img 
                  src={`${import.meta.env.BASE_URL}team/owner-pushp-raj.webp`} 
                  alt="Founder" 
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Floating Glass Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-lg">
                  <div className="flex gap-4">
                    <Quote className="text-amber-500 shrink-0 fill-amber-100" size={40} />
                    <div>
                      <p className="text-slate-800 font-medium italic leading-relaxed">
                        "Safety isn't expensive, it's priceless. We train you for the unexpected."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-slate-300"></div>
                        <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Pushp Raj, Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blob */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-400 rounded-full blur-[80px] opacity-40 mix-blend-multiply pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ================= FULL VARIANT (About Page) =================
  return (
    <section id="about" className="relative py-24 bg-[#EFEDE0] overflow-hidden">
      <SEO
        title="About Raj Ann Raj Driving School"
        description="20+ years of trusted driving education in Himachal Pradesh."
        canonical="https://rajannrajdrivingschool.com/#about"
      />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 1. HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Award size={14} />
            Est. 2005
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            Driving Education <br />
            <span className="text-amber-600 relative inline-block">
              Reimagined.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed font-medium">
            More than just a driving school. We are a community of safety-conscious drivers built on 20 years of trust.
          </p>
        </motion.div>

        {/* 2. FOUNDER PROFILE (Editorial Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white rounded-[3rem] p-3 shadow-2xl shadow-slate-200/50"
          >
            <div className="h-full bg-[#FAFAF9] rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              {/* Text Side */}
              <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
                <Quote className="text-amber-500 mb-8 fill-amber-100" size={48} />
                
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Pushp Raj</h3>
                <p className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">Founder & Managing Director</p>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-serif italic mb-10">
                  "My mission is simple: to build a generation of drivers who value safety over speed. At Raj Ann Raj, we don't just teach you to operate a machine; we teach you to respect the road."
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <ShieldCheck size={18} className="text-green-600" />
                    <span className="text-sm font-bold text-slate-700">Master Instructor</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <Clock size={18} className="text-blue-600" />
                    <span className="text-sm font-bold text-slate-700">20+ Years Exp.</span>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:w-[45%] relative min-h-[300px]">
                <img 
                  src={`${import.meta.env.BASE_URL}team/owner-pushp-raj.webp`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Pushp Raj"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* STATS COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col justify-center items-start shadow-lg shadow-slate-200/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="bg-amber-50 p-4 rounded-2xl mb-4 text-amber-600">
                  <stat.icon size={28} />
                </div>
                <div className="text-5xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3. TEAM MEMBERS (Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Tarun Bala",
              role: "Clerk & Coordinator",
              desc: "Expert in RTO documentation, license processing, and scheduling.",
              img: `${import.meta.env.BASE_URL}team/tarun-bala-clerk.webp`,
              color: "bg-purple-50 text-purple-600"
            },
            {
              name: "Girdhari Lal",
              role: "Senior Instructor",
              desc: "Specialist in hill driving, heavy traffic navigation, and precision parking.",
              img: `${import.meta.env.BASE_URL}team/Instructor-girdhari-lal-Roadtest-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1.webp`,
              color: "bg-blue-50 text-blue-600"
            }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 + (i * 0.1) }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-6 flex items-center gap-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
                <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-3 mt-2 ${member.color}`}>
                  {member.role}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;