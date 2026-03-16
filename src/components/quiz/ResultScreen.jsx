import { CheckCircle, AlertCircle, Search, BarChart3, Cpu, ArrowLeft } from 'lucide-react';
import { OPTION_LABELS } from '../../data/constants.js';

/* ─── Result Screen ───────────────────────────────────────────────── */
export const ResultScreen = ({ questions, userAnswers, onReview, onHome, onNewExam, isAI, t }) => {
  const totalQ = questions.length;
  let score = 0;
  const topicsData = {};

  questions.forEach((q, i) => {
    const isCorrect = userAnswers[i] === q.correct;
    if (isCorrect) score++;
    const topic = q.topic || 'Allgemein';
    if (!topicsData[topic]) topicsData[topic] = { total: 0, correct: 0 };
    topicsData[topic].total++;
    if (isCorrect) topicsData[topic].correct++;
  });

  const passMark = Math.ceil(totalQ * 0.65);
  const passed = score >= passMark;
  const topicsArr = Object.entries(topicsData).sort((a, b) => b[1].total - a[1].total);

  return (
    <div className="bg-slate-800 p-8 lg:p-12 rounded-3xl border border-slate-700 text-center min-h-[480px] w-full max-w-4xl mx-auto flex flex-col">
      {passed ? <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" /> : <AlertCircle className="w-20 h-20 text-orange-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" />}
      <h3 className="text-3xl lg:text-4xl font-black text-slate-100 mb-4">{t.yourResult}: {score} {t.from} {totalQ}</h3>
      <div className="inline-flex justify-center gap-4 mb-6">
        <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4 px-6">
          <p className="text-slate-400 text-sm">{t.passRate}</p>
          <p className={`text-2xl font-black ${passed ? 'text-green-400' : 'text-orange-400'}`}>{Math.round((score / totalQ) * 100)}%</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4 px-6">
          <p className="text-slate-400 text-sm">{t.passMark}</p>
          <p className="text-2xl font-black text-slate-300">65%</p>
        </div>
      </div>
      <p className="text-slate-300 mb-8 text-base">{passed ? t.passedText : t.failedText}</p>
      
      {topicsArr.length > 1 && (
        <div className="text-left bg-slate-900/40 rounded-2xl p-6 border border-slate-700/50 mb-8 w-full max-w-2xl mx-auto">
          <h4 className="font-bold text-slate-200 mb-4 flex items-center"><BarChart3 className="w-5 h-5 mr-2 text-indigo-400"/>{t.topicBreakdown}</h4>
          <div className="space-y-4">
            {topicsArr.map(([topic, data], i) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300 truncate pr-4">{topic}</span>
                    <span className={`font-bold shrink-0 ${pct >= 65 ? 'text-green-400' : 'text-orange-400'}`}>{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5"><div className={`h-full rounded-full ${pct >= 65 ? 'bg-green-500' : 'bg-orange-500'}`} style={{ width: `${pct}%` }} /></div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto w-full mt-auto pt-4 border-t border-slate-700">
        <button onClick={onReview} className="w-full sm:w-auto bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 text-blue-200 font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2"><Search className="w-4 h-4" />{t.errorAnalysis}</button>
        {isAI && <button onClick={onNewExam} className="w-full sm:w-auto bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-md"><Cpu className="w-4 h-4" />{t.newExam}</button>}
        <button onClick={onHome} className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-6 rounded-xl transition">{t.toHome}</button>
      </div>
    </div>
  );
};

/* ─── Review Screen ───────────────────────────────────────────────── */
export const ReviewScreen = ({ questions, userAnswers, onBack, t }) => (
  <div className="space-y-6 w-full max-w-5xl mx-auto pb-10">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800 p-6 rounded-2xl border border-slate-700">
      <div><h2 className="text-2xl font-extrabold text-slate-100 flex items-center"><Search className="w-7 h-7 mr-3 text-indigo-400" />{t.errorAnalysis}</h2><p className="text-slate-400 mt-1 text-sm">{t.checkAnswers}</p></div>
      <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 w-full sm:w-auto justify-center"><ArrowLeft className="w-4 h-4" />{t.toResult}</button>
    </div>
    <div className="space-y-5">
      {questions.map((q, i) => {
        const uAns = userAnswers[i];
        const isCorrect = uAns === q.correct;
        const unanswered = uAns === null || uAns === undefined;
        return (
          <div key={i} className={`p-6 rounded-3xl border shadow-sm ${isCorrect ? 'bg-green-900/10 border-green-800/30' : 'bg-red-900/10 border-red-800/30'}`}>
            <div className="flex items-start mb-4">
              <div className={`shrink-0 mt-0.5 mr-3 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>{isCorrect ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}</div>
              <h3 className="text-lg font-bold text-slate-100 leading-relaxed flex-1"><span className="text-slate-500 mr-2">{i + 1}.</span>{q.q}</h3>
            </div>
            {unanswered && <div className="ml-9 mb-4 text-orange-400 text-sm font-bold">Keine Antwort / Нет ответа</div>}
            <div className="space-y-2 mb-4 pl-9">
              {q.options.map((opt, j) => {
                let cl = "p-3 rounded-xl border text-sm flex items-start ";
                if (j === q.correct) cl += "bg-green-900/40 border-green-500/50 text-green-100 font-medium";
                else if (j === uAns) cl += "bg-red-900/40 border-red-500/50 text-red-100";
                else cl += "bg-slate-800/40 border-slate-700/40 text-slate-500";
                return (
                  <div key={j} className={cl}>
                    <span className="font-bold mr-3 opacity-60">{OPTION_LABELS[j]})</span><span className="mt-0.5">{opt}</span>
                  </div>
                );
              })}
            </div>
            <div className="pl-9">
              <div className="p-4 bg-slate-900/80 rounded-xl text-slate-300 text-sm border border-slate-700/60">
                <strong className="text-indigo-300 block mb-1">{t.explanation}</strong>{q.exp}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
