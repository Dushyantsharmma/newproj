import { useState, useEffect, useRef } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSignature, X, User, Phone, MapPin, Send, Loader2, 
  CalendarDays, WifiOff, CheckCircle2, Clock, Gauge, Users, Lock, ChevronDown, AlertCircle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// ⚠️ IMPORTANT: REPLACE THIS WITH YOUR NEW DEPLOYED SCRIPT URL
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwHuW54HrmmrB6WiJAU_9uujwDHsy-qUC_EFJRFGU0wrCK13AujMM7rsW8z1ddAenQT/exec";

// --- HELPER: UUID Generator (Idempotency Token) ---
const generateUUID = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// --- CONSTANTS ---
const PICKUP_LOCATIONS = [
  "Bhanthal", "Sanarali", "Baral Bypass", "Mamail",
  "Near GDC Karsog", "Batala Bahali", "Karsog Bus Stand", "Sarkol"
];

// --- SUB-COMPONENTS ---

const GenderPill = ({ label, value, currentValue, onClick }) => {
  const isSelected = currentValue === value;
  return (
    <button
      type="button"
      onClick={() => onClick('gender', value)}
      className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border flex-1 text-center whitespace-nowrap ${
        isSelected
          ? `bg-orange-50 text-[#ea580c] border-[#ea580c] shadow-sm scale-[1.02]`
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      {isSelected && (
        <motion.div
          layoutId="gender-highlight"
          className="absolute inset-0 rounded-xl bg-[#ea580c]/5"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
};

const SkillPill = ({ label, value, currentValue, onClick }) => {
  const isSelected = currentValue === value;
  return (
    <button
      type="button"
      onClick={() => onClick('skillLevel', value)}
      className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border flex-1 sm:flex-none text-center whitespace-nowrap ${
        isSelected
          ? `bg-orange-50 text-[#ea580c] border-[#ea580c] shadow-sm scale-[1.02]`
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      {isSelected && (
        <motion.div
          layoutId="skill-highlight"
          className="absolute inset-0 rounded-xl bg-[#ea580c]/5"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
};

const TimePill = ({ label, value, currentValue, onClick, isFull }) => {
  const isSelected = currentValue === value;
  
  if (isFull) {
    return (
      <div className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed">
        <span className="flex items-center gap-3">
          <Lock size={16} />
          {label}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-bold text-red-600 bg-red-100 px-2 py-1 rounded">Full</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onClick('timeSlot', value)}
      className={`group relative w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
        isSelected
          ? `bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md translate-x-1`
          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
      }`}
    >
      <span className="flex items-center gap-3">
        {isSelected ? <CheckCircle2 size={16} className="text-[#ea580c]" /> : <div className="w-4" />}
        {label}
      </span>
      {isSelected && (
        <motion.div
          layoutId="time-highlight"
          className="absolute right-4 w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"
        />
      )}
    </button>
  );
};

// --- MAIN COMPONENT ---

const EnquiryFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('form'); 
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [error, setError] = useState('');
  
  // Ref for Idempotency Token
  const submissionIdRef = useRef(generateUUID());

  // Default to TRUE to prevent blocking users if API fails
  const [availability, setAvailability] = useState({
    "Morning (8 AM - 11 AM)": true,
    "Afternoon (12 PM - 4 PM)": true,
    "Evening (5 PM - 7 PM)": true
  });

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    gender: '',
    dateOfBirth: '',
    skillLevel: '',
    timeSlot: '',
    pickupLocation: '', 
    website_honey: '' 
  });

  // Reset UUID on open (New Session) & Fetch Availability
  useEffect(() => {
    if (isOpen) {
      submissionIdRef.current = generateUUID();
      
      const fetchAvailability = async () => {
        try {
          // Attempt to fetch availability. If it fails, we catch it and keep defaults (all open).
          const res = await fetch(`${WEBHOOK_URL}?type=availability`);
          
          if (res.ok) {
            const data = await res.json();
            if (data.status === "success" && data.availability) {
              setAvailability(data.availability);
            }
          }
        } catch (e) {
          console.warn("Could not fetch availability, defaulting to all slots open.", e);
          // Fallback is already set in initial state
        }
      };
      
      fetchAvailability();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobileNumber') {
      const numericValue = value.replace(/\D/g, ''); 
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (error) setError('');
  };

  const handlePillChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (error) setError('');
  };

  const validatePhone = (phone) => phone.length === 10;

  const isAdult = (dateString) => {
    if (!dateString) return false;
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age >= 18;
  };

  // Safe Close Handler: Prevents accidental data loss
  const handleClose = () => {
    // If form has data and we are in the 'form' step, ask for confirmation
    if (step === 'form' && (formData.fullName || formData.mobileNumber.length > 3)) {
      if (window.confirm("You have unsaved details. Are you sure you want to close?")) {
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const triggerWhatsApp = () => {
    const RAJ_NUMBER = "919882034930";
    const text = 
`*Driving School Enquiry* 🚗
------------------
👤 *Name:* ${formData.fullName}
🚻 *Gender:* ${formData.gender}
📱 *Mobile:* ${formData.mobileNumber}
🎂 *DOB:* ${formData.dateOfBirth}
🎓 *Skill:* ${formData.skillLevel}
⏰ *Time:* ${formData.timeSlot}
📍 *Location:* ${formData.pickupLocation}
------------------
Please confirm if this slot is available.`;

    window.open(`https://wa.me/${RAJ_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Honeypot Check
    if (formData.website_honey) {
      setStep('success'); 
      return; 
    }

    // Validation Steps
    if (!validatePhone(formData.mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!isAdult(formData.dateOfBirth)) { 
      setError('You must be at least 18 years old to enroll.'); 
      return; 
    }

    if (!formData.pickupLocation) {
        setError('Please select a pickup location.');
        return;
    }
    
    if (!formData.timeSlot) {
        setError('Please select a time slot.');
        return;
    }
    
    if (!formData.skillLevel) {
        setError('Please select your experience level.');
        return;
    }

    setStep('submitting');
    setIsOfflineMode(false);

    const payload = {
      fullName: formData.fullName,
      mobile: formData.mobileNumber,
      gender: formData.gender || "Not Specified",
      dateOfBirth: formData.dateOfBirth,
      skillLevel: formData.skillLevel,
      timeSlot: formData.timeSlot,
      pickupLocation: formData.pickupLocation,
      submissionId: submissionIdRef.current, // Sending Unique ID
      honeypot: formData.website_honey 
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      // mode: 'no-cors' is necessary for Google Scripts
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      // Because of no-cors, we assume success if no network error occurred
      setStep('success');

    } catch (err) {
      console.warn("Submission failed (likely network):", err);
      setIsOfflineMode(true);
      setStep('success');
    }
  };

  return (
    <>
      {/* FAB Placeholder */}
      <div
        className="fixed bottom-16 right-6 z-50"
        style={{ width: 160, height: 44, pointerEvents: 'none', opacity: 0 }}
        aria-hidden="true"
      />
      <div className="fixed bottom-16 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="group flex items-center justify-center h-11 w-40 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-full shadow-[0_8px_30px_rgb(234,88,12,0.4)] pr-5 pl-3 gap-2 transition-all"
          style={{ minWidth: 160, minHeight: 44 }}
        >
          <div className="relative">
            <span className="absolute inset-0 bg-white/40 rounded-full animate-ping opacity-75" />
            <FileSignature size={18} className="relative z-10" />
          </div>
          <span className="font-bold text-xs tracking-wide uppercase">Enroll Now</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // Updated height classes for mobile compatibility
              className="relative w-full max-w-lg bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 h-[85vh] sm:h-auto sm:max-h-[90vh]"
            >
              {/* HEADER: Navy Blue */}
              <div className="px-6 py-5 border-b border-slate-100 bg-[#1e3a8a] flex justify-between items-start shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#ea580c] text-white p-1.5 rounded-lg">
                      <Gauge size={18} />
                    </span>
                    <h2 className="text-xl font-bold text-white tracking-tight">Driving Admission</h2>
                  </div>
                  <p className="text-xs font-medium text-blue-200 ml-1">Secure your training slot today</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar bg-slate-50 flex-grow">
                {step === 'form' && (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    <input 
                      type="text" 
                      name="website_honey" 
                      value={formData.website_honey}
                      onChange={handleChange}
                      style={{ display: 'none', position: 'absolute', left: '-9999px' }} 
                      tabIndex={-1} 
                      autoComplete="off"
                    />

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                          <User size={12} className="text-[#ea580c]" /> Candidate Name
                        </label>
                        <div className="relative group">
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            autoComplete="off"
                            className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] outline-none transition-all placeholder:text-slate-400 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                            <Phone size={12} className="text-[#ea580c]" /> WhatsApp
                          </label>
                          <div className="relative group">
                            <input
                              type="tel"
                              name="mobileNumber"
                              required
                              maxLength={10}
                              inputMode="numeric"
                              pattern="[0-9]{10}"
                              value={formData.mobileNumber}
                              onChange={handleChange}
                              autoComplete="off"
                              className={`w-full bg-white border ${error && !validatePhone(formData.mobileNumber) ? 'border-red-500 ring-2 ring-red-50' : 'border-slate-200'} text-slate-800 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] outline-none transition-all placeholder:text-slate-400 font-medium tracking-wider`}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                            <CalendarDays size={12} className="text-[#ea580c]" /> Birth Date
                          </label>
                          <div className="relative group">
                            <input
                              type="date"
                              name="dateOfBirth"
                              required
                              max={new Date().toISOString().split("T")[0]}
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                              className={`w-full bg-white border ${error && formData.dateOfBirth && !isAdult(formData.dateOfBirth) ? 'border-red-500 ring-2 ring-red-50' : 'border-slate-200'} text-slate-800 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] outline-none transition-all font-medium`}
                            />
                          </div>
                          {/* Immediate Age Validation Error */}
                          {formData.dateOfBirth && !isAdult(formData.dateOfBirth) && (
                            <motion.div 
                              initial={{ opacity: 0, y: -5 }} 
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[11px] font-bold text-red-500 flex items-center gap-1 pl-1"
                            >
                              <AlertCircle size={10} /> Must be 18+ years old
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                          <Users size={12} className="text-[#ea580c]" /> Gender
                        </label>
                        <div className="flex gap-3">
                          <GenderPill label="Male" value="Male" currentValue={formData.gender} onClick={handlePillChange} />
                          <GenderPill label="Female" value="Female" currentValue={formData.gender} onClick={handlePillChange} />
                          <GenderPill label="Other" value="Other" currentValue={formData.gender} onClick={handlePillChange} />
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-200 w-full" />

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                          <Gauge size={12} className="text-[#ea580c]" /> Experience Level
                        </label>
                        <div className="flex flex-wrap gap-3">
                          <SkillPill label="Beginner" value="Beginner (Never Driven)" currentValue={formData.skillLevel} onClick={handlePillChange} />
                          <SkillPill label="Learner" value="Some Experience" currentValue={formData.skillLevel} onClick={handlePillChange} />
                          <SkillPill label="Refresher" value="Refresher (Long Break)" currentValue={formData.skillLevel} onClick={handlePillChange} />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                          <Clock size={12} className="text-[#ea580c]" /> Preferred Time
                        </label>
                        <div className="space-y-3">
                          <TimePill 
                            label="Morning (8 AM - 11 AM)" 
                            value="Morning (8 AM - 11 AM)" 
                            currentValue={formData.timeSlot}
                            onClick={handlePillChange}
                            isFull={!availability["Morning (8 AM - 11 AM)"]}
                          />
                          <TimePill 
                            label="Afternoon (12 PM - 4 PM)" 
                            value="Afternoon (12 PM - 4 PM)" 
                            currentValue={formData.timeSlot}
                            onClick={handlePillChange}
                            isFull={!availability["Afternoon (12 PM - 4 PM)"]}
                          />
                          <TimePill 
                            label="Evening (5 PM - 7 PM)" 
                            value="Evening (5 PM - 7 PM)" 
                            currentValue={formData.timeSlot}
                            onClick={handlePillChange}
                            isFull={!availability["Evening (5 PM - 7 PM)"]}
                          />
                        </div>
                      </div>

                      {/* PICKUP LOCATION DROPDOWN */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 flex items-center gap-1">
                          <MapPin size={12} className="text-[#ea580c]" /> Pickup Location
                        </label>
                        <div className="relative group">
                          <select
                            name="pickupLocation"
                            required
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3.5 pl-4 pr-10 focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] outline-none transition-all font-medium appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="text-slate-400">Select a location</option>
                            {PICKUP_LOCATIONS.map((loc) => (
                              <option key={loc} value={loc} className="text-slate-900">
                                {loc}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ChevronDown size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* UPDATED ERROR DISPLAY */}
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2"
                      >
                        <AlertCircle size={18} className="shrink-0 text-red-500" />
                        {error}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#1e3a8a] hover:bg-[#152865] text-white font-extrabold py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 group"
                    >
                      <span>Confirm Booking</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform text-[#ea580c]" />
                    </button>
                  </form>
                )}

                {step === 'submitting' && (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 h-full">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#ea580c]/20 blur-xl rounded-full" />
                      <Loader2 size={64} className="text-[#ea580c] animate-spin relative z-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#1e3a8a]">Saving Registration...</h3>
                      <p className="text-slate-500 text-sm">Please wait while we record your details securely.</p>
                    </div>
                  </div>
                )}

                {step === 'success' && (
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-8 h-full">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`w-24 h-24 rounded-full flex items-center justify-center border-4 shadow-xl ${
                        isOfflineMode 
                          ? 'bg-orange-50 border-orange-100 text-[#ea580c]' 
                          : 'bg-green-50 border-green-100 text-green-500'
                      }`}
                    >
                      {isOfflineMode ? <WifiOff size={40} /> : <FaWhatsapp size={48} />}
                    </motion.div>
                    
                    <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200 w-full shadow-sm">
                      <h3 className={`text-2xl font-bold ${isOfflineMode ? 'text-[#ea580c]' : 'text-[#1e3a8a]'}`}>
                        {isOfflineMode ? "Connection Weak" : "Registration Saved!"}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {isOfflineMode 
                          ? "We couldn't reach the server, but your data is safe. Please click below to send the details directly via WhatsApp." 
                          : "We have received your details in our system. Please click below to send the final confirmation via WhatsApp."}
                      </p>
                    </div>
                    
                    <div className="w-full space-y-4">
                      <button
                        onClick={triggerWhatsApp}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
                      >
                        <FaWhatsapp size={24} />
                        <span>Open WhatsApp Now</span>
                      </button>

                      <button 
                        onClick={() => setIsOpen(false)}
                        className="text-slate-500 text-sm font-medium hover:text-[#1e3a8a] transition-colors py-2"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnquiryFab;