import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const MountainDivider = ({ className = "text-slate-50" }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg
      className="relative block w-full h-[40px] md:h-[60px]"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-current"
      />
    </svg>
  </div>
);

const ContactCard = ({ icon: Icon, title, desc, action, primary = false, href = "#" }) => (
  <a 
    href={href}
    className={`flex flex-col items-center text-center p-5 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1
      ${primary 
        ? 'bg-green-50 border-green-200 shadow-lg shadow-green-100' 
        : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
      }`}
  >
    <div className={`p-4 rounded-full mb-4 ${primary ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    <p className="text-sm text-slate-600 mt-2 mb-6">{desc}</p>
    <span className={`font-medium text-sm ${primary ? 'text-green-700' : 'text-slate-900'}`}>
      {action}
    </span>
  </a>
);

const ContactPage = () => {
  return (
    <div className="bg-white font-sans">

      {/* 1️⃣ CONTACT HERO */}
      <section className="bg-slate-50 pt-24 md:pt-32 pb-12 md:pb-20 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Get in Touch</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Raj Ann Raj Driving Training School, located in
            <strong className="text-slate-900"> Karsog, Mandi (Himachal Pradesh)</strong>.
            Reach out to start your driving journey in the hills.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
           <MountainDivider className="text-white" />
        </div>
      </section>

      {/* 2️⃣ QUICK CONTACT OPTIONS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 -mt-6 md:-mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            desc="Instant chat & quick response"
            action="Chat on WhatsApp"
            primary
            href="https://wa.me/919882034930"
          />
          <ContactCard
            icon={Phone}
            title="Call Us"
            desc="Speak directly with instructor"
            action="+91 98820 34930"
            href="tel:+919882034930"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            desc="Send us your enquiry"
            action="Send Email"
            href="mailto:contact@rajannraj.com"
          />
        </div>
      </section>

      {/* 3️⃣ LOCATION + MAP */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-4">
              <MapPin size={14} />
              LOCATED IN HIMACHAL
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Visit Our Training Center</h2>
            <p className="mt-3 md:mt-4 text-slate-600 text-base md:text-lg">
              Bhanthal, Karsog, Mandi<br />
              Himachal Pradesh, 175011
            </p>

            <div className="mt-6 md:mt-8 space-y-6">
              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Opening Hours</h3>
                  <div className="grid grid-cols-[40px_1fr] gap-y-1 text-sm">
                    <span className="font-medium text-green-600">Mon:</span> <span className="text-green-600">08:00 AM – 07:00 PM</span>
                    <span className="font-medium text-green-600">Tue:</span> <span className="text-green-600">08:00 AM – 07:00 PM</span>
                    <span className="font-medium text-green-600">Wed:</span> <span className="text-green-600">08:00 AM – 07:00 PM</span>
                    <span className="font-medium text-green-600">Thu:</span> <span className="text-green-600">08:00 AM – 07:00 PM</span>
                    <span className="font-medium text-green-600">Fri:</span> <span className="text-green-600">08:00 AM – 07:00 PM</span>
                    <span className="font-medium text-green-600">Sat:</span> <span className="text-green-600">08:00 AM – 07:00 PM</span>
                    <span className="font-medium text-red-500">Sun:</span> <span className="text-red-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Training Areas */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Training Areas</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    We provide pickup & training in:
                    <br />
                    <span className="font-medium text-slate-900">
                      Bhanthal, Karsog, Sanarali, Mandi & Nearby Villages.
                    </span>
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-yellow-50 border border-yellow-100 text-xs font-medium text-yellow-800">
                    <span>⛰️</span>
                    We train on actual hill roads
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] md:h-full min-h-[300px] md:min-h-[500px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative group">
            {/* Map Iframe */}
            <iframe 
              src="https://maps.google.com/maps?q=31.40456268940523,77.21467239387066&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raj Ann Raj Driving School Location"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>

            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
              <div className="flex items-start gap-3">
                 <div className="bg-red-50 p-2 rounded-full text-red-500 shrink-0">
                    <MapPin size={24} fill="currentColor" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Driving School Location</h4>
                    <p className="text-xs text-slate-500 mt-1 mb-3">Bhanthal, Karsog, Himanchal Pradesh</p>
                    <a 
                      href="https://maps.app.goo.gl/qWVbQqygU2NrrrV2A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full justify-center md:w-auto"
                    >
                      Open in Google Maps <MapPin size={12} />
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
