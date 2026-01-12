import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ensure AnimatePresence is imported
import {
  CheckCircle2, XCircle, Clock, RotateCcw, ChevronRight, ChevronLeft,
  Award, Download, ShieldAlert, Signal, Gauge, Eye, ArrowLeft,
  User, Zap, Loader2
} from 'lucide-react';
import html2canvas from 'html2canvas';

// FIX: Added extra '../' to go up two folders
import { QUESTION_BANK } from '../../data/mockTestQuestions';
// --- SUB-COMPONENT: Confetti Particle ---
const ConfettiParticle = ({ delay }) => {
  const [randomValues] = useState(() => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    return {
      x: Math.random() * 200 - 100,
      rotate: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  });

  return (
    <motion.div
      initial={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
      animate={{ opacity: 0, y: 200, x: randomValues.x, rotate: randomValues.rotate }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={`absolute top-0 left-1/2 w-3 h-3 rounded-sm ${randomValues.color}`}
    />
  );
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
  const [reviewMode, setReviewMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const certificateRef = useRef(null);
  const questionCardRef = useRef(null);

  // --- LOGIC HELPERS ---
  
  const resetTestState = () => {
    setDetailsFilled(false);
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(1200);
    setTestComplete(false);
    setReviewMode(false);
    setIsGenerating(false);
  };

  // Fisher-Yates Shuffle for true randomness
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startTestSetup = (level) => {
    resetTestState();
    setSelectedLevel(level);
    
    // Fallback to medium if level doesn't exist, though your data covers all 3
    const levelQuestions = QUESTION_BANK[level] || QUESTION_BANK.medium;
    
    // Randomly select 20 questions from your large dataset
    const count = Math.min(20, levelQuestions.length);
    setQuestions(shuffleArray([...levelQuestions]).slice(0, count));
  };

  const proceedToTest = () => {
    if (!studentName.trim()) return;
    setDetailsFilled(true);
    setTestStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(1200); // 20 minutes
    setTestComplete(false);
  };

  const finishTest = useCallback(() => {
    setTestComplete(true);
  }, []);

  // --- MEMOIZED ACTIONS ---

  const selectAnswer = useCallback((answerIndex) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answerIndex;
      return newAnswers;
    });
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      finishTest();
    }
  }, [currentQuestion, questions.length, finishTest]);

  const previousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }, [currentQuestion]);

  // --- EFFECTS ---

  useEffect(() => {
    if (testStarted && !testComplete && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [testStarted, testComplete, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && testStarted && !testComplete) {
      finishTest();
    }
  }, [timeLeft, testStarted, testComplete, finishTest]);

  // Keyboard Shortcuts
  useEffect(() => {
    if (!testStarted || testComplete) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextQuestion();
      if (e.key === 'ArrowLeft') previousQuestion();
      if (['1', '2', '3', '4'].includes(e.key)) {
        selectAnswer(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testStarted, testComplete, nextQuestion, previousQuestion, selectAnswer]);

  // Scroll to top of question on change
  useEffect(() => {
    if (questionCardRef.current) {
        questionCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentQuestion]);

  // --- RENDER HELPERS ---

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (questions[index] && answer === questions[index].correct) score++;
    });
    return score;
  };

  const getResult = (score) => {
    const totalQ = questions.length || 20; 
    const passMark = Math.ceil(totalQ * 0.7); // 70% to pass (14/20)
    const passed = score >= passMark;
    
    if (passed) {
      const highMark = Math.ceil(totalQ * 0.9);
      if (score >= highMark) return { grade: 'Excellent!', color: 'text-green-600', passed: true, msg: "You're a pro! Ready for the RTO exam.", bg: 'bg-green-500', passMark };
      return { grade: 'Passed', color: 'text-blue-600', passed: true, msg: "Good job! A bit more practice won't hurt.", bg: 'bg-blue-500', passMark };
    }
    return { grade: 'Failed', color: 'text-red-600', passed: false, msg: "Don't worry. Review the signs and try again.", bg: 'bg-red-500', passMark };
  };

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      setIsGenerating(true);
      try {
        const canvas = await html2canvas(certificateRef.current, {
            scale: 3, 
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
        });
        const link = document.createElement('a');
        link.download = `RajAnnRaj_Certificate_${studentName.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (err) {
        console.error("Certificate generation failed", err);
        alert("Could not generate certificate. Please try again.");
      } finally {
        setIsGenerating(false);
      }
    }
  };

  // ================= VIEW 1: LEVEL SELECTION =================
  if (!selectedLevel) {
    return (
      <div className="min-h-[600px] bg-[#EFEDE0] flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                  <Zap size={14} className="fill-current" />
                  RTO Exam Prep
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Choose Your Challenge</h2>
               <p className="text-slate-600 text-lg">Select a difficulty level to begin your practice test.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { id: 'easy', title: 'Beginner', icon: Signal, color: 'text-green-500', bg: 'bg-green-50', border: 'hover:border-green-500' },
                    { id: 'medium', title: 'Intermediate', icon: ShieldAlert, color: 'text-amber-500', bg: 'bg-amber-50', border: 'hover:border-amber-500' },
                    { id: 'hard', title: 'Expert', icon: Gauge, color: 'text-red-500', bg: 'bg-red-50', border: 'hover:border-red-500' }
                ].map((level, idx) => (
                    <motion.button
                        key={level.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => startTestSetup(level.id)}
                        className={`group relative bg-white rounded-3xl p-8 text-left border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${level.border}`}
                    >
                        <div className={`w-14 h-14 ${level.bg} ${level.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                            <level.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{level.title}</h3>
                        <p className="text-slate-500 mb-6 text-sm">20 Questions • 20 Minutes</p>
                        
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                            Start Now <ChevronRight size={16} />
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STUDENT DETAILS =================
  if (!detailsFilled) {
    return (
      <div className="min-h-[600px] bg-[#EFEDE0] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50"
        >
          <button 
            onClick={() => setSelectedLevel(null)}
            className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Change Level
          </button>

          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <User size={32} />
             </div>
             <h2 className="text-2xl font-bold text-slate-900">One Last Step</h2>
             <p className="text-slate-500 mt-2">Enter your name for the certificate.</p>
          </div>

          <div className="space-y-6">
            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                <input
                    type="text"
                    placeholder="e.g. Rahul Verma"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-amber-400 focus:outline-none transition-all text-lg"
                    autoFocus
                />
            </div>

            <button
                disabled={!studentName.trim()}
                onClick={proceedToTest}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2 text-lg"
            >
                Start Test <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ================= VIEW 3: TEST IN PROGRESS =================
  if (!testComplete) {
    const question = questions[currentQuestion];
    
    // Safety check in case questions are empty
    if (!question) return null;

    const selectedAnswer = answers[currentQuestion];

    return (
      <div className="min-h-screen bg-[#EFEDE0] py-8 px-4 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex items-center gap-4">
                <div className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-bold text-slate-600 uppercase tracking-wider hidden sm:block">
                    {selectedLevel}
                </div>
                <div className="text-slate-400 font-medium text-sm">
                    Question <span className="text-slate-900 font-bold">{currentQuestion + 1}</span> / {questions.length}
                </div>
             </div>
             <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-colors duration-500 ${timeLeft < 60 ? 'bg-red-50 border-red-100 text-red-600' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
               <Clock size={18} className={timeLeft < 60 ? "animate-pulse" : ""} /> {formatTime(timeLeft)}
             </div>
          </div>

          {/* Question Card */}
          <div ref={questionCardRef} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden relative transition-all">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
                <motion.div 
                    className="h-full bg-amber-500"
                    initial={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <div className="p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-snug">
                {question.q}
                </h3>

                {question.image && (
                    <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex justify-center">
                        <img
                            // Dynamically loads images from public folder based on your data paths
                            src={question.image.startsWith('/') ? `${import.meta.env.BASE_URL}${question.image.substring(1)}` : question.image}
                            alt="Traffic Sign"
                            className="h-40 md:h-48 object-contain drop-shadow-sm"
                        />
                    </div>
                )}

                <div className="grid gap-3">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => selectAnswer(index)}
                        className={`group relative p-5 rounded-xl text-left border-2 transition-all duration-200 flex items-center gap-4 ${
                            selectedAnswer === index 
                            ? 'border-amber-400 bg-amber-50 shadow-md transform scale-[1.01] z-10' 
                            : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                        <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                            selectedAnswer === index ? 'bg-amber-400 border-amber-400 text-white' : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-400'
                        }`}>
                            {String.fromCharCode(65 + index)}
                        </div>
                        <span className={`text-base font-medium ${selectedAnswer === index ? 'text-slate-900' : 'text-slate-600'}`}>
                            {option}
                        </span>
                    </button>
                ))}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="bg-slate-50 p-6 flex justify-between items-center border-t border-slate-100">
                <button
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    className="text-slate-400 font-bold text-sm hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors flex items-center gap-2 px-4 py-2"
                >
                    <ChevronLeft size={18} /> Prev
                </button>
                
                <button
                    onClick={nextQuestion}
                    disabled={selectedAnswer === undefined}
                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:shadow-none hover:bg-slate-800 transition-all flex items-center gap-2 transform active:scale-95"
                >
                    {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next'}
                    <ChevronRight size={18} />
                </button>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-slate-400 font-medium">
             Pro Tip: Use <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 mx-1">1-4</span> keys to select, <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 mx-1">← →</span> to navigate
          </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 4: REVIEW MODE =================
  if (reviewMode) {
    return (
      <div className="min-h-screen bg-[#EFEDE0] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="sticky top-4 z-20 flex items-center justify-between mb-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
            <button 
              onClick={() => setReviewMode(false)}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={18} /> Back to Results
            </button>
            <h2 className="text-lg md:text-2xl font-bold text-slate-900">Review Answers</h2>
          </div>

          <div className="space-y-6">
            {questions.map((q, qIndex) => {
              const userAnswer = answers[qIndex];
              const isCorrect = userAnswer === q.correct;

              return (
                <div key={qIndex} className={`bg-white rounded-2xl p-6 border-l-8 shadow-sm ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                  <div className="flex gap-5">
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white mt-1 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                      {qIndex + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">{q.q}</h3>
                      
                      {q.image && (
                        <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 inline-block">
                          <img src={q.image.startsWith('/') ? `${import.meta.env.BASE_URL}${q.image.substring(1)}` : q.image} className="h-32 object-contain" alt="Sign" />
                        </div>
                      )}

                      <div className="grid gap-2">
                        {q.options.map((opt, oIndex) => {
                          const isSelected = userAnswer === oIndex;
                          const isTheCorrectOption = q.correct === oIndex;
                          
                          let style = "border-transparent bg-slate-50 text-slate-500";
                          if (isTheCorrectOption) style = "bg-green-50 text-green-700 font-bold ring-1 ring-green-500";
                          else if (isSelected && !isCorrect) style = "bg-red-50 text-red-700 font-bold ring-1 ring-red-500";
                          
                          return (
                            <div key={oIndex} className={`px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${style}`}>
                              <span>{opt}</span>
                              {isTheCorrectOption && <CheckCircle2 size={18} className="text-green-600" />}
                              {isSelected && !isTheCorrectOption && <XCircle size={18} className="text-red-600" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
           <div className="mt-10 text-center pb-10">
             <button 
              onClick={() => setReviewMode(false)}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all"
             >
               Return to Summary
             </button>
           </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 5: RESULTS & CERTIFICATE =================
  const score = calculateScore();
  const result = getResult(score);

  return (
    <div className="min-h-screen bg-[#EFEDE0] py-12 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
        >
          {/* Result Header */}
          <div className={`${result.bg} p-10 text-white text-center relative overflow-hidden`}>
            {/* Confetti Animation */}
            {result.passed && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <ConfettiParticle key={i} delay={i * 0.1} />
                    ))}
                </div>
            )}

            <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    {result.passed ? <Award size={48} className="text-white" /> : <ShieldAlert size={48} className="text-white" />}
                </div>
                <h2 className="text-4xl font-extrabold mb-2">{result.passed ? 'Excellent Work!' : 'Keep Practicing'}</h2>
                <p className="text-white/90 text-lg font-medium max-w-md mx-auto">{result.msg}</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/50">
            <div className="p-6 text-center">
               <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Your Score</p>
               <p className={`text-4xl font-black ${result.color}`}>{score}</p>
            </div>
            <div className="p-6 text-center">
               <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Status</p>
               <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${result.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {result.grade}
               </div>
            </div>
            <div className="p-6 text-center">
               <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Pass Score</p>
               <p className="text-4xl font-black text-slate-900">{result.passMark}</p>
            </div>
          </div>

          {/* Certificate Area */}
          {result.passed && (
             <div className="p-10 bg-slate-50 flex flex-col items-center">
                
                {/* Visual Certificate Container */}
                <div 
                    ref={certificateRef}
                    className="w-full max-w-xl bg-[#FDFBF7] p-8 md:p-12 rounded-xl border-[8px] border-double border-[#C5A059] text-center shadow-lg relative overflow-hidden"
                >
                    {/* Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                       <Award size={300} />
                    </div>

                    <div className="relative z-10">
                        {/* Logo Placeholder */}
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#C5A059] p-1">
                           <img 
                            src={`${import.meta.env.BASE_URL}branding/raj-ann-raj-logo.jpeg`} 
                            className="w-full h-full rounded-full object-cover" 
                            alt="Logo"
                            crossOrigin="anonymous" 
                           />
                        </div>
                        
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Certificate of Completion</h1>
                        <p className="text-slate-500 text-sm italic mb-6">Proudly presented to</p>
                        
                        <h2 className="text-4xl font-serif font-bold text-[#C5A059] mb-2 border-b-2 border-slate-100 inline-block pb-2 px-10">
                            {studentName}
                        </h2>
                        
                        <p className="text-slate-600 text-sm mt-6 leading-relaxed">
                            For successfully passing the <strong className="text-slate-900">RTO Driving Mock Test</strong> <br/> with a score of <strong>{score}/20</strong>.
                        </p>

                        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-end text-xs text-slate-400 font-bold uppercase tracking-widest">
                            <span>{new Date().toLocaleDateString()}</span>
                            <span>Raj Ann Raj Driving School</span>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={downloadCertificate}
                    disabled={isGenerating}
                    className="mt-8 flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-bold shadow-xl shadow-slate-900/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-wait"
                >
                    {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                    {isGenerating ? 'Generating...' : 'Download High-Res Certificate'}
                </button>
             </div>
          )}

          {/* Action Footer */}
          <div className="p-8 bg-white flex flex-col sm:flex-row justify-center gap-4">
            <button 
                onClick={() => setReviewMode(true)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-100 text-slate-600 rounded-xl hover:border-amber-400 hover:text-amber-500 font-bold transition-all"
            >
                <Eye size={18} /> Review Mistakes
            </button>
             <button
               onClick={() => { resetTestState(); setSelectedLevel(null); }}
               className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 font-bold transition-all"
             >
               <RotateCcw size={18} /> New Test
             </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MockTest;