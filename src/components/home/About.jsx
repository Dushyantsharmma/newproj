import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, Clock, Users, Quote, ShieldCheck, MapPin, Award, 
  ArrowRight, Car, Fuel, Settings, HelpCircle, ChevronDown 
} from "lucide-react";

// NOTE: Uncomment this if you have the SEO component
// import SEO from "../components/SEO"; 

/* ================= COUNT UP HOOK ================= */
function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return [Math.floor(value), ref];
}

/* ================= DATA ================= */

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Girdhari Lal",
    role: "Senior Instructor",
    image: "/team/Instructor-girdhari-lal-Roadtest-Raj-Ann-Raj-Bhanthal-Karsog-Mandi1.webp",
    tags: ["Hill Specialist", "20+ Years Exp."],
    bio: "The master of mountain roads. Girdhari ensures every student masters the clutch on steep inclines safely."
  },
  {
    id: 2,
    name: "Tarun Wala",
    role: "Clerk",
    image: "/team/tarun-wala-clerk.webp",
    tags: ["Student Support", "RTO Expert"],
    bio: "Ensuring your license process is as smooth as your driving. She handles all RTO documentation and scheduling."
  }
];

const FEATURES = [
  { title: "Patient Instructors", desc: "We specialize in teaching nervous beginners with a calm, friendly approach.", icon: Users },
  { title: "Hill Road Mastery", desc: "Located in Mandi, we teach you the real-world skills needed for complex mountain terrain.", icon: MapPin },
  { title: "Safety First", desc: "Dual-control vehicles and a comprehensive defensive driving curriculum.", icon: ShieldCheck },
  { title: "License Assistance", desc: "Complete guidance through the RTO process so you can focus solely on driving.", icon: Award },
];

const TIMELINE = [
  { year: "2005", title: "The Beginning", desc: "Raj N Raj was founded with a single car and a mission to teach safe driving in Mandi." },
  { year: "2010", title: "Fleet Expansion", desc: "We expanded our fleet to 5 vehicles and introduced specialized hill-training courses." },
  { year: "2018", title: "Top Rated School", desc: "Recognized as one of the highest-rated driving schools in the district for student pass rates." },
  { year: "2025", title: "Digital Era", desc: "Launched our new digital platform to make booking and tracking progress easier for students." },
];

const PROCESS_STEPS = [
  { id: 1, title: "Registration", desc: "Sign up and choose a package that fits your schedule." },
  { id: 2, title: "Theory & Simulator", desc: "Learn traffic rules and car controls before hitting the road." },
  { id: 3, title: "Practical Training", desc: "15-20 days of hands-on driving on highways and hill roads." },
  { id: 4, title: "License Test", desc: "We assist with the RTO test to help you get your license." },
];

/* --- NEW FLEET DATA --- */
const FLEET = [
  {
    name: "Maruti Swift",
    category: "Hatchback",
    desc: "Perfect for learning highway stability and modern vehicle controls.",
    features: ["Dual Control", "Power Steering", "ABS"],
    image: "/fleet/swift-placeholder.webp" // Replace with real image path
  },
  {
    name: "Maruti Alto 800",
    category: "Compact",
    desc: "The best car to master clutch control on steep Himachal roads.",
    features: ["Hill Assist Training", "Manual Transmission", "Dual Control"],
    image: "/fleet/alto-placeholder.webp" // Replace with real image path
  }
];

/* --- NEW FAQ DATA --- */
const FAQS = [
  {
    q: "Do you help with the driving license?",
    a: "Yes, absolutely. We guide you through the entire process, from filling out the learner's license application to scheduling your final driving test at the RTO. While the government issues the license, we ensure you are 100% prepared to pass the test."
  },
  {
    q: "Can I pay in installments?",
    a: "Yes! We understand that learning to drive is an investment. We offer flexible payment plans where you can pay 50% of the fee upon registration and the remaining balance midway through your training course."
  },
  {
    q: "I am very nervous. Can I really learn?",
    a: "It is completely normal to be nervous. 60% of our students start with zero confidence. Our cars have Dual Controls (brakes on the instructor's side), so you are never in danger. Our instructors are trained to be patient and calm."
  },
  {
    q: "What is the duration of the course?",
    a: "Our standard comprehensive course is 26 days. This includes simulator sessions, ground training for parking, and extensive on-road driving practice."
  }
];

/* ================= MAIN COMPONENT ================= */
export default function About({ variant = "full" }) {
  const stats = [
    { label: "Years Experience", number: 20, icon: Clock },
    { label: "Happy Students", number: 5000, icon: Users },
    { label: "Google Rating", number: 5, icon: Star }
  ];

  const [yearsCount, yearsRef] = useCountUp(stats[0].number, 2500);
  const [studentsCount, studentsRef] = useCountUp(stats[1].number, 2500);
  const [ratingCount, ratingRef] = useCountUp(stats[2].number, 2500);

  /* ===== BRIEF VARIANT (FOR HOMEPAGE) ===== */
  if (variant === "brief") {
    return (
      <section className="relative py-24 bg-white overflow-hidden font-sans">
        <div className="absolute inset-0 bg-slate-50 skew-y-3 origin-top-left translate-y-20 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#ea580c] border border-orange-100 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} className="fill-current" /> Since 2005
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] leading-tight">
              Driving Confidence, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-orange-500">
                Delivered Safely.
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              At <strong>Raj N Raj Driving School</strong>, we believe that learning to drive is about more than just passing a test—it is about building the confidence to navigate the roads safely for a lifetime.
            </p>
            
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-[#1e3a8a]">5000+</div>
                <div className="text-sm text-slate-500 font-medium">Students Trained</div>
              </div>
              <div className="w-px bg-slate-200 h-12"></div>
              <div>
                <div className="text-3xl font-bold text-[#1e3a8a]">98%</div>
                <div className="text-sm text-slate-500 font-medium">Pass Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#ea580c] rounded-[2rem] rotate-3 opacity-10"></div>
            <img
              src="/team/owner-pushap-raj.webp"
              alt="Pushp Raj"
              className="relative rounded-[2rem] shadow-2xl w-full max-w-md mx-auto object-cover z-10 border-4 border-white"
            />
          </motion.div>
        </div>
      </section>
    );
  }

  /* ===== FULL PAGE VARIANT ===== */
  return (
    <div className="bg-slate-50 font-sans pt-20">
      {/* <SEO title="About Us - Raj N Raj Driving School" description="Over 20 years of experience teaching safe driving in Himachal Pradesh." /> */}

      {/* 1. HERO HEADER */}
      <section className="pt-20 pb-24 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e3a8a] mb-6">
              Your Journey <span className="text-[#ea580c]">Starts Here.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We don't just teach you how to operate a car; we teach you road etiquette, safety rules, and the split-second decision-making skills required for real-world driving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-[#1e3a8a] rounded-3xl shadow-2xl shadow-blue-900/20 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-800 p-8 md:p-12 text-white">
          <div ref={yearsRef} className="text-center p-4">
            <Clock className="text-[#ea580c] mx-auto mb-3" size={32} />
            <div className="text-5xl font-bold mb-1">{yearsCount}+</div>
            <div className="text-blue-200 uppercase text-xs tracking-widest font-bold">Years Experience</div>
          </div>
          <div ref={studentsRef} className="text-center p-4">
            <Users className="text-[#ea580c] mx-auto mb-3" size={32} />
            <div className="text-5xl font-bold mb-1">{studentsCount}+</div>
            <div className="text-blue-200 uppercase text-xs tracking-widest font-bold">Happy Students</div>
          </div>
          <div ref={ratingRef} className="text-center p-4">
            <Star className="text-[#ea580c] mx-auto mb-3 fill-current" size={32} />
            <div className="text-5xl font-bold mb-1">{ratingCount}.0</div>
            <div className="text-blue-200 uppercase text-xs tracking-widest font-bold">Google Rating</div>
          </div>
        </div>
      </div>

      {/* 3. FOUNDER SPOTLIGHT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ea580c] to-orange-400 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500"></div>
                <img
                  src="/team/owner-pushap-raj.webp"
                  alt="Pushp Raj Founder"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
             </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Quote className="text-orange-200 mb-6" size={64} />
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">Pushp Raj</h2>
            <p className="text-[#ea580c] font-bold uppercase text-sm tracking-wide mb-6">Founder & Managing Director</p>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                "I started Raj Ann Raj with a simple mission: to make our roads safer, one driver at a time. Located in the heart of Himachal, we understand the unique challenges of hill driving."
              </p>
              <p>
                "At our school, you aren't just another student; you are family. We take the stress out of learning by offering a calm, supportive environment where questions are encouraged and safety is paramount."
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
               <p className="font-serif italic text-2xl text-slate-400">Drive with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HISTORY TIMELINE */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm bg-white/10 px-3 py-1 rounded-full">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">A Legacy of Safe Driving</h2>
          </div>

          <div className="relative border-l border-blue-800 ml-4 md:ml-1/2 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="absolute -left-[5px] top-1 w-3 h-3 rounded-full bg-[#ea580c] ring-4 ring-[#1e3a8a]"></div>
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="md:col-span-1 md:text-right">
                    <span className="text-2xl font-bold text-[#ea580c]">{item.year}</span>
                  </div>
                  <div className="md:col-span-4 mt-1 md:mt-0">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-200">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS STEPS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">How You'll Learn</h2>
             <p className="mt-4 text-slate-600">From your first day to your driving test.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className="relative group">
                <div className="text-6xl font-bold text-slate-100 absolute -top-8 -left-4 -z-10 group-hover:text-blue-50 transition-colors">{step.id}</div>
                <div className="bg-slate-50 p-6 rounded-2xl h-full border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                   <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#ea580c] mb-4 font-bold border border-orange-100">
                     {step.id}
                   </div>
                   <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{step.title}</h3>
                   <p className="text-slate-600 text-sm font-medium">{step.desc}</p>
                </div>
                {idx !== PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR FLEET (NEW SECTION) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">Our Training <span className="text-[#ea580c]">Fleet</span></h2>
            <p className="mt-4 text-slate-600">Learn on well-maintained, dual-control vehicles tailored for hill terrain.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FLEET.map((car, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Car Icon/Image Placeholder */}
                <div className="w-full md:w-2/5 h-40 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 relative overflow-hidden group">
                  <Car size={48} className="text-[#1e3a8a]/40" />
                  {/* UNCOMMENT BELOW LINE IF YOU HAVE REAL IMAGES */}
                  {/* <img src={car.image} alt={car.name} className="absolute inset-0 w-full h-full object-cover" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="w-full md:w-3/5 text-left">
                  <div className="inline-block px-2 py-1 bg-orange-50 text-[#ea580c] text-[10px] font-bold uppercase tracking-wider rounded mb-2 border border-orange-100">
                    {car.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">{car.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{car.desc}</p>
                  
                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                        {f === "Dual Control" ? <Settings size={12} className="text-[#ea580c]"/> : <Fuel size={12} className="text-blue-500"/>}
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">Why Choose Us?</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-medium">
              We specialize in making learning easy, safe, and stress-free for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="w-12 h-12 bg-white text-[#ea580c] rounded-xl flex items-center justify-center mb-4 border border-orange-100 shadow-sm">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MEET THE TEAM */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a]">Meet The <span className="text-[#ea580c]">Experts</span></h2>
              <p className="mt-4 text-slate-500 max-w-xl font-medium">
                Our instructors are certified, patient, and experienced in both highway and city driving conditions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Accent bar */}
                <div className="h-2 w-full md:w-2 md:h-auto bg-gradient-to-b md:bg-gradient-to-r from-[#ea580c] to-orange-400 md:from-[#ea580c] md:to-orange-400" />
                {/* Image */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 md:p-0 md:pl-6 md:pr-0 md:w-56">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500 bg-slate-100"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {m.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-orange-50 text-[#ea580c] rounded border border-orange-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-1">{m.name}</h3>
                  <p className="text-[#ea580c] text-xs md:text-sm font-bold mb-2 md:mb-4">{m.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ (NEW SECTION) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-500">Common questions about licenses, payments, and training.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-orange-200 transition-all">
                <summary className="flex justify-between items-center font-bold text-[#1e3a8a] text-lg">
                  <div className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[#ea580c]" />
                    {faq.q}
                  </div>
                  <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-[#ea580c] shadow-sm group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={16} />
                  </span>
                </summary>
                <div className="mt-4 ml-8 text-slate-600 leading-relaxed border-l-2 border-orange-100 pl-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION */}
      <section className="py-20 bg-[#1e3a8a] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c] opacity-20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Car size={48} className="mx-auto mb-6 text-[#ea580c]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to hit the road?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy students who learned to drive with Raj N Raj. Book your first lesson today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919882034930" className="px-8 py-4 bg-white text-[#1e3a8a] rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
              Book a Lesson
            </a>
            <a href="mailto:rajannraj.dts@gmail.com" className="px-8 py-4 bg-[#ea580c] text-white rounded-xl font-bold text-lg hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-900/30">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}