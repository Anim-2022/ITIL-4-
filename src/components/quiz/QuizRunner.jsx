import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { OPTION_LABELS } from '../../data/constants.js';

/* ─── Quiz Runner ─────────────────────────────────────────────────── */
const QuizRunner = ({ questions, initialDuration, onFinish, onCancel, t, lang }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(initialDuration * 60);

  useEffect(() => {
    if (initialDuration === 0 || timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(s => s - 1), 1000);
    return () => clearInterval(interval);
  }, [initialDuration, timeLeft]);

  useEffect(() => {
    if (initialDuration > 0 && timeLeft === 0) {
      let score = 0;
      userAnswers.forEach((ans, i) => { if (ans === questions[i].correct) score++; });
      onFinish(score, questions.length, userAnswers);
    }
  }, [timeLeft, initialDuration, onFinish, userAnswers, questions]);

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((ans, i) => { if (ans === questions[i].correct) score++; });
    return score;
  };

  const handleSelect = (idx) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQ] = idx;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ === questions.length - 1) {
      onFinish(calculateScore(), questions.length, userAnswers);
    } else { 
      setCurrentQ(q => q + 1); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const q = questions[currentQ];

  return (
    <div className="bg-slate-800 p-6 md:p-10 rounded-3xl border border-slate-700 flex flex-col w-full min-h-[580px] max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onCancel} className="text-slate-500 hover:text-slate-300 transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-700/50"><ArrowLeft className="w-5 h-5"/></button>
        {initialDuration > 0 && (
          <div className={`flex items-center gap-2 rounded-xl px-4 py-1.5 text-sm font-bold transition-colors ${timeLeft < (initialDuration * 60 * 0.1) ? 'bg-red-900/60 border border-red-700 text-red-200 animate-pulse' : 'bg-slate-900/60 border border-slate-700 text-slate-400'}`}>
            <Clock className="w-4 h-4" /> {formatTime(timeLeft)}
            {timeLeft < (initialDuration * 60 * 0.1) && <span className="ml-2 hidden sm:inline">{lang === 'de' ? '⚠ Wenig Zeit!' : '⚠ Мало времени!'}</span>}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-indigo-400">{t.question} {currentQ + 1} {t.from} {questions.length}</span>
        <span className="text-xs font-bold bg-slate-900 border border-slate-700 text-slate-400 py-1 px-3 rounded-full uppercase tracking-wider">{t.mockExam}</span>
      </div>
      
      <div className="w-full bg-slate-900 rounded-full h-2 mb-6 overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-300 bg-fuchsia-500`} style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-8 leading-relaxed flex-1 whitespace-pre-wrap">{q.q}</h3>
      
      <div className="space-y-3 mb-8">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => handleSelect(i)}
            className={`w-full flex items-start text-left p-4 md:p-5 rounded-2xl border-2 transition-all text-base ${userAnswers[currentQ] === i ? 'border-fuchsia-500 bg-fuchsia-900/30 text-fuchsia-50 font-bold' : 'border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-700 text-slate-300'}`}>
            <span className={`shrink-0 w-7 h-7 rounded-lg mr-4 flex items-center justify-center text-sm font-black border ${userAnswers[currentQ] === i ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>{OPTION_LABELS[i]}</span>
            <span className="mt-0.5 leading-snug">{opt}</span>
          </button>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
        <button onClick={() => setCurrentQ(q => q - 1)} disabled={currentQ === 0} className={`font-bold py-3 px-6 rounded-xl transition-all flex items-center ${currentQ > 0 ? 'bg-slate-700 text-white hover:bg-slate-600' : 'opacity-0 cursor-default'}`}><ArrowLeft className="w-5 h-5 mr-2" />{t.prevQuestion}</button>
        <button onClick={handleNext} disabled={userAnswers[currentQ] === null}
          className={`font-bold py-3.5 px-8 rounded-xl transition-all flex items-center text-lg ${userAnswers[currentQ] !== null ? 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg' : 'bg-slate-700/40 text-slate-500 border border-slate-700 cursor-not-allowed'}`}>
          {currentQ === questions.length - 1 ? t.finishTest : <>{t.nextQuestion} <ArrowRight className="w-5 h-5 ml-2" /></>}
        </button>
      </div>
    </div>
  );
};

export default QuizRunner;
