import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, PhoneCall } from "lucide-react";
import SEO from "../SEO";

const faqs = [
  {
    q: "How many classes are included?",
    a: "26 professional driving sessions are included in one month. Training is provided Monday to Saturday for continuous improvement."
  },
  {
    q: "Is hill driving difficult?",
    a: "Hill driving is challenging, but our instructors train you using real mountain roads so you gain full confidence."
  },
  {
    q: "Which car will I use for the RTO test?",
    a: "You will usually drive the same car you trained on, so you feel fully comfortable during the test."
  },
  {
    q: "Does the instructor have control?",
    a: "Yes, all cars have dual pedals so instructors can brake or clutch instantly for safety."
  },
  {
    q: "Do you help with license process?",
    a: "Yes, we assist with learner’s license, online application, and RTO slot booking."
  },
  {
    q: "Can I choose my own time?",
    a: "Yes. We offer flexible timings between 6 AM and 7 PM."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <SEO schema={faqSchema} />

      {/* Background Decor (Light Theme) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ea580c]/5 blur-3xl rounded-full" />
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a8a]/5 blur-3xl rounded-full" />
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
         />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 rounded-full text-[#ea580c] font-semibold shadow-sm">
            <HelpCircle size={16} />
            Help Center
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mt-8">
            Questions Before You Start Driving?
          </h2>

          <p className="text-slate-600 mt-5 max-w-xl mx-auto text-lg">
            Everything you need to know about training, RTO test and learning to drive in Himachal.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              layout
              className={`
                rounded-2xl p-6 cursor-pointer transition-all duration-300 border
                ${open === i 
                   ? "bg-white border-[#ea580c] shadow-lg shadow-orange-100" 
                   : "bg-white border-slate-200 hover:border-[#ea580c]/50 hover:shadow-md"
                }
              `}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`font-bold text-lg ${open === i ? "text-[#ea580c]" : "text-[#1e3a8a]"}`}>
                  {item.q}
                </h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === i ? "rotate-180 text-[#ea580c]" : "text-slate-400"
                  }`}
                />
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-slate-600 mt-4 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-600 mb-6 font-medium">
            Still confused? Speak directly with our instructor.
          </p>

          <a
            href="tel:+919882034930"
            className="inline-flex items-center gap-3 bg-[#1e3a8a] hover:bg-[#152865] text-white font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <PhoneCall size={20} />
            Call Raj Ann Raj Driving School
          </a>
        </div>

      </div>
    </section>
  );
}