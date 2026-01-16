import React, { useEffect, useRef, useState } from "react";
import { useText } from "../common/useText";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Clock, Users, Quote, ShieldCheck, MapPin, Award, 
  Car, Settings, HelpCircle, ChevronDown, CheckCircle2, ArrowRight,
  X, Fuel
} from "lucide-react";

/* ================= COUNT UP HOOK ================= */
function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  // Optimize duration for small numbers
  const effectiveDuration = target < 100 ? 1000 : duration;

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
    const increment = target / (effectiveDuration / 16);
    
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
  }, [started, target, effectiveDuration]);

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

// FEATURES array will be defined inside the About component for valid hook usage

const TIMELINE = [
  { year: "2005", title: "The Beginning", desc: "Raj Ann Raj was founded with a single car and a mission to teach safe driving in Mandi." },
  { year: "2010", title: "Fleet Expansion", desc: "We expanded our fleet and introduced specialized hill-training courses." },
  { year: "2018", title: "Top Rated School", desc: "Recognized as one of the highest-rated driving schools in the district for student pass rates." },
  { year: "2025", title: "Digital Era", desc: "Launched our new digital platform to make booking and tracking progress easier for students." },
];

const PROCESS_STEPS = [
  { id: 1, title: "Registration", desc: "Sign up and choose a package that fits your schedule." },
  { id: 2, title: "Theory & Simulator", desc: "Learn traffic rules and car controls before hitting the road." },
  { id: 3, title: "Practical Training", desc: "15-20 days of hands-on driving on highways and hill roads." },
  { id: 4, title: "License Test", desc: "We assist with the RTO test to help you get your license." },
];

const FLEET = [
  {
    id: 1,
    name: "Maruti Suzuki Baleno",
    category: "Premium Hatchback",
    desc: "A modern, comfortable, and safe car ideal for learning advanced driving skills and highway stability.",
    features: ["Dual Control", "Power Steering", "ABS", "Spacious Cabin"],
    image: "/courses/Baleno-white.png",
    // Modal Details
    transmission: "5-Speed Manual",
    fuel: "Petrol",
    safety: ["Dual Front Airbags", "ABS with EBD", "Isofix Child Seat Anchors"],
    whyThisCar: "The Baleno offers excellent visibility and a wide stance, making it stable on the sharp curves of Mandi while being easy to maneuver."
  }
];

const FAQS = [
  {
    q: "Do you help with the driving license?",
    a: "Yes, absolutely. We guide you through the entire process, from filling out the learner's license application to scheduling your final driving test at the RTO."
  },
  {
    q: "Can I pay in installments?",
    a: "Yes! We offer flexible payment plans where you can pay 50% of the fee upon registration and the remaining balance midway through your training course."
  },
  {
    q: "I am very nervous. Can I really learn?",
    a: "It is completely normal to be nervous. 60% of our students start with zero confidence. Our cars have Dual Controls so you are never in danger."
  },
  {
    q: "What is the duration of the course?",
    a: "Our standard comprehensive course is 26 days. This includes simulator sessions, ground training for parking, and extensive on-road driving practice."
  }
];

/* ================= MAIN COMPONENT ================= */
export default function About({ variant = "full" }) {
  const brandName = useText("brandName");
  const drivingSchool = useText("drivingSchool");
  const flexibleTiming = useText("flexibleTiming");
  const FEATURES = [
    { title: "Patient Instructors", desc: "We specialize in teaching nervous beginners with a calm, friendly approach.", icon: Users },
    { title: "Hill Road Mastery", desc: "Located in Mandi, we teach you the real-world skills needed for complex mountain terrain.", icon: MapPin },
    { title: flexibleTiming, desc: "Dual-control vehicles and a comprehensive defensive driving curriculum.", icon: Clock },
    { title: "Safety First", desc: "Dual-control vehicles and a comprehensive defensive driving curriculum.", icon: ShieldCheck },
    { title: "License Assistance", desc: "Complete guidance through the RTO process so you can focus solely on driving.", icon: Award },
  ];
  const stats = [
    { label: "Years Experience", number: 20, icon: Clock },
    { label: "Happy Students", number: 5000, icon: Users },
    { label: "Google Rating", number: 5, icon: Star }
  ];

  const [yearsCount, yearsRef] = useCountUp(stats[0].number, 2500);
  const [studentsCount, studentsRef] = useCountUp(stats[1].number, 2500);
  const [ratingCount, ratingRef] = useCountUp(stats[2].number, 2500);

  // Modal State
  const [selectedCar, setSelectedCar] = useState(null);

  /* ===== BRIEF VARIANT (FOR HOMEPAGE) ===== */
  if (variant === "brief") {
    return (
      <section className="relative py-24 bg-white overflow-hidden font-sans">
        <div className="absolute inset-0 bg-slate-50 skew-y-3 origin-top-left translate-y-20 -z-10 pointer-events-none" />
        
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
              <span
                className="inline-block bg-blue-100 px-2 py-1 leading-normal"
                style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
              >
                आत्मविश्वास के साथ गाड़ी चलाएं।
                <br />
                पहाड़ियों पर महारत हासिल करें।
              </span>
            </h2>
            
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              At <strong>{brandName} {drivingSchool}</strong>, we believe that learning to drive is about more than just passing a test—it is about building the confidence to navigate the roads safely for a lifetime.
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
              alt="Pushap Raj"
              className="relative rounded-[2rem] shadow-2xl w-full max-w-md mx-auto object-cover z-10 border-4 border-white max-h-[320px] sm:max-h-[420px]"
            />
          </motion.div>
        </div>
      </section>
    );
  }

  /* ===== FULL PAGE VARIANT ===== */
  return (
    <div className="bg-slate-50 font-sans pt-10 lg:pt-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-10 pb-32 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e3a8a] mb-6 leading-tight">
              Your Journey <span className="text-[#ea580c]">Starts Here.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              At <strong>{brandName} {drivingSchool}</strong>, we don't just teach you how to operate a car; we teach you road etiquette, safety rules, and the split-second decision-making skills required for real-world driving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-[#1e3a8a] rounded-3xl shadow-2xl shadow-blue-900/20 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-800 p-6 md:p-10 text-white">
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
        <div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ea580c] to-orange-400 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500"></div>
                <img
                  src="/team/owner-pushap-raj.webp"
                  alt="Pushap Raj Founder"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
             </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Quote className="text-orange-200 mb-6" size={64} />
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">Pushap Raj</h2>
            <p className="text-[#ea580c] font-bold uppercase text-sm tracking-wide mb-6">Founder & Managing Director</p>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                {`"I started ${brandName} with a simple mission: to make our roads safer, one driver at a time. Located in the heart of Himachal, we understand the unique challenges of hill driving."`}
              </p>
              <p>
                {`"At ${brandName} ${drivingSchool}, you aren't just another student; you are family. We take the stress out of learning by offering a calm, supportive environment where questions are encouraged and safety is paramount."`}
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
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm bg-white/10 px-3 py-1 rounded-full">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">A Legacy of Safe Driving</h2>
          </div>

          <div className="relative border-l border-blue-800 ml-4 md:ml-12 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#ea580c] ring-4 ring-[#1e3a8a] z-10"></div>
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="md:col-span-1 md:text-right">
                    <span className="text-2xl font-bold text-[#ea580c] block mb-1">{item.year}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS STEPS */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
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
                   <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
                {idx !== PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR FLEET */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">Our Training <span className="text-[#ea580c]">Fleet</span></h2>
            <p className="mt-4 text-slate-600">Learn on well-maintained, dual-control vehicles tailored for hill terrain.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {FLEET.map((car, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2rem] p-4 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 flex flex-col md:flex-row gap-6 group overflow-hidden w-full max-w-2xl"
              >
                <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[250px] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100">
                   <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-[#ea580c] text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-sm border border-orange-100 flex items-center gap-1.5">
                        <Award size={12} className="stroke-[3px]" />
                        {car.category}
                      </span>
                   </div>
                   
                   <img 
                     src={car.image} 
                     alt={car.name} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center py-2 md:pr-4">
                  <h3 className="text-2xl font-extrabold text-[#1e3a8a] mb-3 group-hover:text-[#ea580c] transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 border-l-2 border-orange-200 pl-4">
                    {car.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {car.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-orange-100/50 transition-colors">
                        <div className={`p-1.5 rounded-full ${i % 2 === 0 ? 'bg-blue-100 text-[#1e3a8a]' : 'bg-orange-100 text-[#ea580c]'}`}>
                           {f === "Dual Control" ? <Settings size={12} strokeWidth={2.5}/> : <CheckCircle2 size={12} strokeWidth={2.5}/>}
                        </div>
                        <span className="text-xs font-bold text-slate-700">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedCar(car)}
                    className="mt-6 flex items-center gap-2 text-[#1e3a8a] text-xs font-bold uppercase tracking-wider group/btn cursor-pointer hover:text-[#ea580c] transition-colors text-left"
                  >
                    View Details 
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-[#ea580c] group-hover/btn:text-white transition-all duration-300">
                        <ArrowRight size={12} strokeWidth={3} />
                    </div>
                  </button>
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
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a]">Meet The <span className="text-[#ea580c]">Experts</span></h2>
            <p className="mt-4 text-slate-500 max-w-xl font-medium">
               Our instructors are certified, patient, and experienced in both highway and city driving conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-2 w-full md:w-2 md:h-auto bg-gradient-to-r md:bg-gradient-to-b from-[#ea580c] to-orange-400" />
                
                <div className="flex-shrink-0 flex items-center justify-center p-6 md:p-0 md:pl-6 md:pr-0 md:w-48">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500 bg-slate-100"
                  />
                </div>
                
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

      {/* 9. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-500">Common questions about licenses, payments, and training.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-orange-200 transition-all">
                <summary className="flex justify-between items-center font-bold text-[#1e3a8a] text-lg select-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[#ea580c] flex-shrink-0" />
                    {faq.q}
                  </div>
                  <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-[#ea580c] shadow-sm group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
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
              Join thousands of happy students who learned to drive with Raj Ann Raj. Book your first lesson today.
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

      {/* ================= CAR DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedCar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCar(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/20 backdrop-blur-md rounded-full text-white md:text-slate-500 hover:bg-white hover:text-red-500 transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              {/* Modal Image - Clean & Full */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-100">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="w-full md:w-3/5 p-8 overflow-y-auto">
                <div className="space-y-6">
                  
                  {/* Header */}
                  <div>
                    <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">{selectedCar.category}</p>
                    <h3 className="text-3xl font-extrabold text-[#1e3a8a]">{selectedCar.name}</h3>
                  </div>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                        <Settings size={14} /> Transmission
                      </div>
                      <p className="text-[#1e3a8a] font-bold">{selectedCar.transmission}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                        <Fuel size={14} /> Fuel Type
                      </div>
                      <p className="text-[#1e3a8a] font-bold">{selectedCar.fuel}</p>
                    </div>
                  </div>

                  {/* Why this car */}
                  <div>
                    <h4 className="text-[#1e3a8a] font-bold mb-2 flex items-center gap-2">
                      <Star size={18} className="text-orange-500 fill-orange-500" /> Instructor's Note
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed border-l-4 border-orange-200 pl-4 italic">
                      "{selectedCar.whyThisCar}"
                    </p>
                  </div>

                  {/* Safety Features */}
                  <div>
                    <h4 className="text-[#1e3a8a] font-bold mb-3 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-blue-500" /> Safety Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedCar.safety?.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-slate-100">
                    <a 
                      href="tel:+919882034930"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-[#ea580c] text-white font-bold rounded-xl hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-200"
                    >
                      <Car size={20} /> Book Training with this Car
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}