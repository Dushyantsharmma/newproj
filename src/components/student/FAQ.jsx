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
    <section className="relative py-24 bg-gradient-to-br from-[#070B16] via-[#0B1222] to-[#111A2E] overflow-hidden">
      <SEO schema={faqSchema} />

      {/* glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full text-amber-400 font-semibold">
            <HelpCircle size={16} />
            Help Center
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-8">
            Questions Before You Start Driving?
          </h2>

          <p className="text-slate-400 mt-5 max-w-xl mx-auto">
            Everything you need to know about training, RTO test and learning to drive in Himachal.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              layout
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-amber-500/50 transition"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-lg">
                  {item.q}
                </h3>
                <ChevronDown
                  className={`text-amber-400 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-slate-300 mt-4 leading-relaxed"
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
          <p className="text-slate-400 mb-6">
            Still confused? Speak directly with our instructor.
          </p>

          <a
            href="tel:+919882034930"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-xl shadow-lg shadow-amber-500/30 transition"
          >
            <PhoneCall size={20} />
            Call Raj Ann Raj Driving School
          </a>
        </div>

      </div>
    </section>
  );
}
