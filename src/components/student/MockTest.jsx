import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Clock,
  Trophy,
  RotateCcw,
  Play,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Award,
  Download,
  ShieldAlert,
  Signal,
  Gauge
} from 'lucide-react';
import html2canvas from 'html2canvas';

// --- QUESTION BANK (90 Total Questions) ---
const QUESTION_BANK = {
  easy: [
    { q: "What does a red traffic light mean?", options: ["Go", "Stop", "Slow down", "Caution"], correct: 1 },
    { q: "What is the minimum age for a learner's license (car)?", options: ["16", "18", "21", "25"], correct: 1 },
    { q: "When should you use the horn?", options: ["To greet friends", "In silence zones", "To alert of danger", "Always"], correct: 2 },
    { q: "What is the shape of a mandatory sign?", options: ["Circle", "Triangle", "Square", "Rectangle"], correct: 0 },
    { q: "What does a yellow traffic light mean?", options: ["Stop if safe", "Speed up", "Go", "Turn left"], correct: 0 },
    { q: "Which side of the road must you drive on in India?", options: ["Left", "Right", "Middle", "Any"], correct: 0 },
    { q: "What do zebra crossings indicate?", options: ["Parking zone", "Pedestrian crossing", "No stopping", "Speed breaker"], correct: 1 },
    { q: "When approaching a roundabout, who has right of way?", options: ["Traffic entering", "Traffic already in roundabout", "Bigger vehicles", "Motorcycles"], correct: 1 },
    { q: "You should overtake a vehicle from which side?", options: ["Left", "Right", "Any safe side", "Never overtake"], correct: 1 },
    { q: "What does a continuous yellow line mean?", options: ["Overtaking allowed", "No overtaking", "Parking allowed", "End of road"], correct: 1 },
    { q: "Identify this sign:", image: "/symbols/mandatory/1.jpg", options: ["No Entry", "One Way", "Stop", "No Parking"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/31.jpg", options: ["Stop", "Give Way", "No Entry", "Speed Limit"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/15.jpg", options: ["School Ahead", "Men at Work", "Pedestrian Crossing", "Park"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/19.jpg", options: ["Speed Limit 50", "Route 50", "Distance 50km", "Weight 50 tons"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/17.jpg", options: ["No Horn", "Sound Horn", "Music Prohibited", "Silence Zone End"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/36.jpg", options: ["Speed Breaker", "Hump", "Rough Road", "Bridge"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/informatory/2.jpg", options: ["Petrol Pump", "Parking", "Hospitcal", "Garage"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/16.jpg", options: ["Overtaking Prohibited", "No Entry", "Two Way Traffic", "U-Turn Prohibited"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/18.jpg", options: ["No Parking", "No Stopping", "No Entry", "Speed Limit"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/1.jpg", options: ["Right Hand Curve", "Left Hand Curve", "U-Turn", "Roundabout"], correct: 0 },
    { q: "What is the validity of a learner's license?", options: ["3 months", "6 months", "1 year", "Permanent"], correct: 1 },
    { q: "Can you reverse on a one-way street?", options: ["Yes", "No", "Only if empty", "At night"], correct: 1 },
    { q: "What document must be in the car?", options: ["RC & Insurance", "Passport", "Voter ID", "Electricity Bill"], correct: 0 },
    { q: "What is 'Tailgating'?", options: ["Driving too close behind", "Driving continuously", "Overtaking", "Parking backward"], correct: 0 },
    { q: "When can you use high beam?", options: ["Always at night", "When no oncoming traffic", "In city", "During rain"], correct: 1 },
    { q: "What does 'ABS' stand for?", options: ["Anti-lock Braking System", "Auto Brake Setup", "All Brake System", "Active Brake Safety"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/23.jpg", options: ["Compulsory Left Turn", "No Left Turn", "One Way", "Left Curve"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/20.jpg", options: ["Cross Road", "Hospital", "First Aid", "Church"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/12.jpg", options: ["Pedestrians Prohibited", "School Ahead", "Men at Work", "Crossing"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/11.jpg", options: ["Narrow Bridge", "Narrow Road", "Road Widens", "Gap in Median"], correct: 0 },
  ],
  medium: [
    { q: "What is the legal blood alcohol limit?", options: ["30mg/100ml", "0mg", "50mg/100ml", "100mg/100ml"], correct: 0 },
    { q: "When parking uphill with a curb, wheels should face:", options: ["Away from curb", "Towards curb", "Straight", "Any direction"], correct: 0 },
    { q: "What is the maximum speed in residential areas (if not marked)?", options: ["30 km/h", "50 km/h", "80 km/h", "No limit"], correct: 1 },
    { q: "When causing an accident, you must report to police within:", options: ["12 hours", "24 hours", "48 hours", "7 days"], correct: 1 },
    { q: "What does a flashing red light mean?", options: ["Stop, look, proceed", "Go fast", "Wait for green", "Do not enter"], correct: 0 },
    { q: "The '3-second rule' applies to:", options: ["Following distance", "Parking time", "Traffic light waiting", "Engine warmup"], correct: 0 },
    { q: "Blue road signs usually indicate:", options: ["Information/Service", "Ordering/Mandatory", "Warning", "Prohibition"], correct: 0 },
    { q: "Triangular signs with red borders are:", options: ["Cautionary", "Mandatory", "Informatory", "Tourist"], correct: 0 },
    { q: "Circular signs with Blue background are:", options: ["Compulsory/Mandatory", "Cautionary", "Informatory", "Destinations"], correct: 0 },
    { q: "What does a broken white line mean?", options: ["Overtaking allowed with care", "No Overtaking", "Stop line", "Parking zone"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/22.jpg", options: ["Restriction Ends", "No Entry", "No Parking", "End of Road"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/2.jpg", options: ["One Way", "Keep Left", "Go Straight", "No Entry"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/4.jpg", options: ["Left Hairpin Bend", "Left Reverse Bend", "Left Curve", "Narrow Road"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/7.jpg", options: ["Steep Ascent", "Steep Descent", "Falling Rocks", "Hump"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/35.jpg", options: ["Loose Gravel", "Slippery Road", "Falling Rocks", "Men at Work"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/informatory/3.jpg", options: ["Hospital", "First Aid", "Doctor", "Pharmacy"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/21.jpg", options: ["Load Limit (Axle)", "Height Limit", "Width Limit", "Speed Limit"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/6.jpg", options: ["Trucks Prohibited", "Cars Prohibited", "All Vehicles Prohibited", "Heavy Vehicles Only"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/18.jpg", options: ["Falling Rocks", "Landslide", "Hill Area", "Quarry"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/22.jpg", options: ["Side Road Right", "Turn Right", "Y Intersection", "Merge"], correct: 0 },
    { q: "Seat belts are mandatory for:", options: ["Driver only", "Front passengers", "All passengers", "Front & Rear passengers"], correct: 3 },
    { q: "Using mobile while driving attracts:", options: ["Fine & License Suspension", "Warning only", "No penalty", "Small fine"], correct: 0 },
    { q: "What to do if brakes fail?", options: ["Pump brakes & downshift", "Pull handbrake hard", "Switch off engine", "Jump out"], correct: 0 },
    { q: "Where is parking prohibited?", options: ["Near road corners", "In parking lots", "On one-way streets", "In front of shops"], correct: 0 },
    { q: "Meaning of 'Give Way' sign:", options: ["Yield to other traffic", "Stop completely", "Go fast", "Parking allowed"], correct: 0 },
    { q: "Minimum tread depth for tires:", options: ["1.6mm", "0.5mm", "3mm", "5mm"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/27.jpg", options: ["Compulsory Ahead or Left", "Left Turn Only", "No Right Turn", "Keep Left"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/32.jpg", options: ["Dangerous Dip", "Hump", "Rough Road", "River"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/19.jpg", options: ["Ferry", "Boat House", "Swimming", "Port"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/informatory/8.jpg", options: ["No Through Road", "Dead End", "T-Point", "Red Light"], correct: 0 },
  ],
  hard: [
    { q: "When skidding on a wet road, you should:", options: ["Steer in direction of skid", "Brake hard", "Accelerate", "Turn opposite to skid"], correct: 0 },
    { q: "What is 'Defensive Driving'?", options: ["Anticipating hazards", "Driving slowly", "Driving aggressively", "Obeying signals only"], correct: 0 },
    { q: "What is the penalty for driving without insurance?", options: ["Fine and/or Imprisonment", "Warning", "Community Service", "License Cancel"], correct: 0 },
    { q: "In a manual car, 'riding the clutch' means:", options: ["Resting foot on clutch pedal", "Pressing clutch fully", "Releasing clutch fast", "Ignoring clutch"], correct: 0 },
    { q: "What is 'engine braking'?", options: ["Slowing using gears", "Switching off engine", "Using handbrake", "Jamming brakes"], correct: 0 },
    { q: "At an uncontrolled intersection, right of way belongs to:", options: ["Vehicle on the right", "Vehicle on the left", "Faster vehicle", "Larger vehicle"], correct: 0 },
    { q: "When towing a vehicle, the tow rope max length is:", options: ["5 meters", "10 meters", "2 meters", "15 meters"], correct: 0 },
    { q: "A PUC certificate is valid for (new car):", options: ["1 year", "6 months", "3 months", "2 years"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/10.jpg", options: ["Handcart Prohibited", "Bullock Cart Prohibited", "Cycle Prohibited", "Pedestrian Prohibited"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/25.jpg", options: ["Compulsory Ahead Only", "One Way", "No Turns", "Airport"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/26.jpg", options: ["Staggered Intersection", "Cross Road", "Z-Bend", "Zig Zag"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/8.jpg", options: ["Steep Descent", "Steep Ascent", "Low Gear Area", "Slope"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/17.jpg", options: ["Cattle", "Wild Animals", "Zoo", "Farm"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/informatory/19.jpg", options: ["Direction Sign", "Destination Sign", "Highway", "Toll Plaza"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/28.jpg", options: ["Compulsory Keep Left", "Turn Left", "Overtake from Left", "Lane Merge"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/33.jpg", options: ["Hump or Rough Road", "Speed Breaker", "Gravel", "Construction"], correct: 0 },
    { q: "Identifying a 'Blind Spot':", options: ["Area not seen in mirrors", "Dark tunnel", "Foggy area", "Night time driving"], correct: 0 },
    { q: "Aquaplaning occurs when:", options: ["Tires lose contact with road due to water", "Driving in snow", "Brakes overhead", "Engine floods"], correct: 0 },
    { q: "Hand signal for slowing down:", options: ["Arm extended, palm down, moving up/down", "Arm straight out", "Arm rotating", "Palm facing forward"], correct: 0 },
    { q: "What does 'MSM' routine stand for?", options: ["Mirror - Signal - Maneuver", "Make - Signal - Move", "Mirror - Speed - Move", "Motor - Start - Move"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/32.jpg", options: ["Give Way", "Stop", "Merge", "No Entry"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/28.jpg", options: ["Side Road Left", "Turn Left", "Merge Left", "Junction"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/15.jpg", options: ["U-Turn Prohibited", "Right Turn Prohibited", "No Return", "End of Road"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/31.jpg", options: ["Roundabout", "Circle", "U-Turn", "Recycle"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/14.jpg", options: ["Pedestrian Crossing", "School", "Park", "Walkway"], correct: 0 },
    { q: "Ideally, tire pressure should be checked when:", options: ["Tires are cold", "After long drive", "While refueling", "Monthly"], correct: 0 },
    { q: "Driving with clutch depressed (Coasting) refers to:", options: ["Disconnecting engine from wheels", "Reversing", "Parking", "Braking"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/30.jpg", options: ["Compulsory Sound Horn", "No Horn", "Music Allowed", "Speaker"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/cautionary/24.jpg", options: ["Y-Intersection", "Fork", "Merge", "Split"], correct: 0 },
    { q: "Identify this sign:", image: "/symbols/mandatory/4.jpg", options: ["Vehicles Prohibited Both Directions", "No Car", "Empty Road", "Private Road"], correct: 0 },
  ]
};

const MockTest = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [detailsFilled, setDetailsFilled] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); 
  const [timeLeft, setTimeLeft] = useState(1200); 
  const [testComplete, setTestComplete] = useState(false);
  
  const certificateRef = useRef(null);

  // Helper: Shuffle Array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const startTestSetup = (level) => {
    setSelectedLevel(level);
    const levelQuestions = QUESTION_BANK[level] || QUESTION_BANK.medium;
    // Pick random 20
    const shuffled = shuffleArray([...levelQuestions]).slice(0, 20);
    setQuestions(shuffled);
  };

  const proceedToTest = () => {
    if (!studentName.trim()) return;
    setDetailsFilled(true);
    setTestStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(1200);
    setTestComplete(false);
  };

  useEffect(() => {
    if (testStarted && timeLeft > 0 && !testComplete) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !testComplete) {
      finishTest();
    }
  }, [timeLeft, testStarted, testComplete]);

  const selectAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishTest();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishTest = () => {
    setTestComplete(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) score++;
    });
    return score;
  };

  const getResult = (score) => {
    const passed = score >= 14; // 70% of 20 = 14
    if (passed) {
      if (score >= 18) return { grade: 'Excellent!', color: 'text-green-600', passed: true, msg: "You're fully ready for the RTO test." };
      return { grade: 'Passed', color: 'text-blue-600', passed: true, msg: "Good job! A little more practice will help." };
    }
    return { grade: 'Failed', color: 'text-red-600', passed: false, msg: "Practice required. Please study the signs again." };
  };

  const downloadCertificate = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = `RajAnnRaj_Certificate_${studentName.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  // --- 1. LEVEL SELECTION ---
  if (!selectedLevel) {
    return (
      <div className="p-4 md:p-8 bg-white flex items-center justify-center min-h-[500px]">
        <div className="max-w-4xl w-full text-center">
            <div className="mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    <Trophy size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Select Difficulty</h2>
                <p className="text-slate-500">Choose a level to start your RTO Mock Test</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { id: 'easy', title: 'Learner', icon: Signal, color: 'bg-green-500' },
                    { id: 'medium', title: 'Standard', icon: ShieldAlert, color: 'bg-amber-500' },
                    { id: 'hard', title: 'Expert', icon: Gauge, color: 'bg-red-500' }
                ].map((level) => (
                    <button
                        key={level.id}
                        onClick={() => startTestSetup(level.id)}
                        className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 hover:border-blue-500 p-8 transition-all hover:shadow-xl text-left"
                    >
                        <div className={`w-12 h-12 ${level.color} text-white rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                            <level.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{level.title}</h3>
                        <p className="text-sm text-slate-500">20 Questions • 20 Mins</p>
                    </button>
                ))}
            </div>
        </div>
      </div>
    );
  }

  // --- 2. STUDENT DETAILS ---
  if (!detailsFilled) {
    return (
      <div className="p-4 md:p-8 bg-slate-50 flex items-center justify-center min-h-[500px]">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl"
        >
          <div className="text-center mb-6">
             <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-900/20">
                <HelpCircle size={32} className="text-[#fbbf24]" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900">Enter Your Details</h3>
             <p className="text-slate-500 text-sm mt-1">This name will appear on your certificate</p>
          </div>

          <div className="space-y-4">
            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input
                    type="text"
                    placeholder="e.g. Rahul Verma"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all"
                />
            </div>

            <button
                disabled={!studentName.trim()}
                onClick={proceedToTest}
                className="w-full bg-[#fbbf24] text-[#0f172a] font-bold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 mt-4"
            >
                Start Mock Test <ChevronRight size={18} />
            </button>
            
            <button 
                onClick={() => setSelectedLevel(null)}
                className="w-full text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
            >
                Back to Difficulty Selection
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- 3. TEST IN PROGRESS ---
  if (!testComplete) {
    const question = questions[currentQuestion];
    const selectedAnswer = answers[currentQuestion];

    return (
      <div id="mock-test" className="p-4 md:p-8 bg-white flex items-center justify-center min-h-[600px]">
        <div className="max-w-3xl w-full">
          
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase">
                    {selectedLevel}
                </span>
                <span className="text-sm font-bold text-slate-400">
                    Q {currentQuestion + 1} / {questions.length}
                </span>
             </div>
             <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${timeLeft < 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-50 text-blue-600'}`}>
               <Clock size={16} /> {formatTime(timeLeft)}
             </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-100 absolute top-0 left-0">
                <motion.div 
                    className="h-full bg-[#fbbf24]"
                    initial={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
            </div>

            <div className="p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                {question.q}
                </h3>

                {question.image && (
                    <div className="mb-8 flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <img
                            src={question.image}
                            alt="Traffic sign"
                            className="h-40 w-auto object-contain drop-shadow-md"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => selectAnswer(index)}
                        className={`relative p-4 rounded-xl text-left border-2 transition-all duration-200 group ${
                            selectedAnswer === index 
                            ? 'border-[#fbbf24] bg-yellow-500/5 shadow-md' 
                            : 'border-slate-100 hover:border-yellow-500/50 hover:bg-slate-50'
                        }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                                selectedAnswer === index ? 'bg-[#fbbf24] border-[#fbbf24] text-[#0f172a]' : 'bg-white border-slate-200 text-slate-400 group-hover:border-[#fbbf24]'
                            }`}>
                                {String.fromCharCode(65 + index)}
                            </div>
                            <span className={`text-sm font-medium ${selectedAnswer === index ? 'text-slate-900' : 'text-slate-600'}`}>
                                {option}
                            </span>
                        </div>
                    </button>
                ))}
                </div>
            </div>

            <div className="bg-slate-50 p-4 px-8 border-t border-slate-100 flex justify-between items-center">
                <button
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    className="text-slate-400 hover:text-slate-900 font-bold text-sm disabled:opacity-30 flex items-center gap-1 transition-colors"
                >
                    <ChevronLeft size={16} /> Previous
                </button>
                
                <button
                    onClick={nextQuestion}
                    disabled={selectedAnswer === undefined}
                    className="bg-[#0f172a] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:shadow-none hover:bg-[#0f172a]/90 transition-all flex items-center gap-2"
                >
                    {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next'}
                    {currentQuestion !== questions.length - 1 && <ChevronRight size={16} />}
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 4. RESULT SCREEN ---
  const score = calculateScore();
  const result = getResult(score);

  return (
    <div className="p-4 md:p-8 bg-white flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
        >
          {/* Header */}
          <div className="bg-[#0f172a] p-8 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl ${result.passed ? 'bg-green-500' : 'bg-red-500'}`}>
                    {result.passed ? <Trophy size={40} className="text-white" /> : <ShieldAlert size={40} className="text-white" />}
                </div>
                <h2 className="text-3xl font-bold mb-2">{result.passed ? 'Test Passed!' : 'Test Failed'}</h2>
                <p className="text-slate-300 max-w-lg mx-auto">{result.msg}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
            <div className="p-6 text-center">
               <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Score</p>
               <p className={`text-3xl font-extrabold ${result.color}`}>{score}/20</p>
            </div>
            <div className="p-6 text-center">
               <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Result</p>
               <div className={`inline-flex px-3 py-1 rounded-full text-sm font-bold ${result.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {result.grade}
               </div>
            </div>
            <div className="p-6 text-center">
               <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Pass Mark</p>
               <p className="text-3xl font-extrabold text-slate-900">14</p>
            </div>
          </div>

          {/* --- CERTIFICATE SECTION --- */}
          {result.passed && (
             <div className="p-8 bg-slate-50 border-b border-slate-100 flex flex-col items-center">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="text-amber-500" /> Your Certificate
                </h3>
                
                {/* Certificate Preview Element */}
                <div 
                    ref={certificateRef}
                    className="w-full max-w-2xl bg-white p-10 py-12 rounded-xl border-4 border-double border-amber-200 text-center shadow-sm mx-auto relative overflow-hidden"
                >
                    {/* Watermark/BG */}
                    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                        <img src="/branding/raj-ann-raj-logo.jpeg" className="w-96 grayscale" />
                    </div>

                    <div className="relative z-10">
                        <img src="/branding/raj-ann-raj-logo.jpeg" className="w-20 h-20 mx-auto mb-4 border-4 border-white shadow-sm rounded-full" />
                        
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-1">Certificate of Completion</h2>
                        <div className="h-1 w-24 bg-amber-400 mx-auto mb-6"></div>
                        
                        <p className="text-slate-500 mb-2 italic">This is to certify that</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 font-serif border-b border-slate-200 inline-block px-8 pb-1">
                            {studentName}
                        </h3>
                        
                        <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
                            Has successfully passed the <strong className="text-slate-900">RTO Mock Test ({selectedLevel} Level)</strong> prescribed by <br/>Raj Ann Raj Driving School.
                        </p>

                        <div className="mt-8 flex justify-center gap-12 text-left">
                           <div>
                              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Score</p>
                              <p className="text-xl font-bold text-slate-900">{score} / 20</p>
                           </div>
                           <div>
                              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Date</p>
                              <p className="text-xl font-bold text-slate-900">{new Date().toLocaleDateString()}</p>
                           </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-slate-100">
                             <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Raj Ann Raj Driving Training School, Mandi (H.P.)</p>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={downloadCertificate}
                    className="mt-6 flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-bold shadow-lg shadow-slate-900/20"
                >
                    <Download size={18} /> Download Certificate
                </button>
             </div>
          )}

          {/* Action Footer */}
          <div className="p-6 bg-white text-center">
             <button
                onClick={() => setSelectedLevel(null)}
                className="text-slate-500 hover:text-slate-900 font-bold text-sm flex items-center gap-2 mx-auto transition-colors"
             >
               <RotateCcw size={16} /> Take Another Test
             </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MockTest;