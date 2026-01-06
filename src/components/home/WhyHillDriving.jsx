import React from 'react';
import { Mountain, TrendingUp, AlertTriangle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
    <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
      <Icon size={32} className="text-slate-600 group-hover:text-amber-600 transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const WhyHillDriving = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">Why It's Different</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mastering the Hills</h2>
          <p className="mt-4 text-lg text-slate-600">
            Driving in Himachal isn't just about moving the car. It's about precision, control, and anticipating the road ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={TrendingUp}
            title="Steep Slopes"
            desc="Master clutch control and hill starts without rolling back. Essential for stop-and-go traffic on inclines."
          />
          <FeatureCard 
            icon={AlertTriangle}
            title="Narrow Roads"
            desc="Learn to judge vehicle width perfectly when passing buses and trucks on single-lane mountain roads."
          />
          <FeatureCard 
            icon={Mountain}
            title="Blind Curves"
            desc="Develop the instinct for honking, lane discipline, and speed control on sharp hairpin bends."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHillDriving;
