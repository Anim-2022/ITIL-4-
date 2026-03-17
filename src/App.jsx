import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  BookOpen, Layers, Target, Settings, Shield, HelpCircle, Award,
  CheckCircle, AlertCircle, Play, Cpu, Loader2, ArrowUp,
  Globe, BookMarked, Menu, X, Activity, TrendingUp
} from 'lucide-react';

/* ─── Data imports ────────────────────────────────────────────────── */
import { LOADING_STEPS_DE, LOADING_STEPS_RU } from './data/constants.js';
import { translations } from './data/translations.js';
import { contentRU } from './data/content/contentRU.jsx';
import { contentDE } from './data/content/contentDE.jsx';

/* ─── Component imports ───────────────────────────────────────────── */
import Flashcards from './components/tools/Flashcards.jsx';
import Glossary from './components/tools/Glossary.jsx';
import GlobalSearch from './components/tools/GlobalSearch.jsx';
import QuizRunner from './components/quiz/QuizRunner.jsx';
import { ResultScreen, ReviewScreen } from './components/quiz/ResultScreen.jsx';

/* ─── Content map ─────────────────────────────────────────────────── */
const contentData = { ru: contentRU, de: contentDE };

/* ─── Main App ────────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState('de');
  const [activeTab, setActiveTab] = useState('exam_tips');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState(null);

  // Module progress (localStorage)
  const [moduleProgress, setModuleProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem('itil4_progress') || '{}'); } catch { return {}; }
  });

  const [stats, setStats] = useState(() => {
    try { return JSON.parse(localStorage.getItem('itil4_stats') || '{"lastScore":null,"totalQ":null}'); } catch { return { lastScore: null, totalQ: null }; }
  });

  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [answersHistory, setAnswersHistory] = useState([]);

  // AI Quiz states
  const [aiQuestions, setAiQuestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);
  const [examDuration, setExamDuration] = useState(60);

  // Getters
  const t = useMemo(() => translations[lang], [lang]);
  const c = useMemo(() => contentData[lang], [lang]);
  const activeQuestions = aiQuestions;

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Search shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save to LS
  useEffect(() => { localStorage.setItem('itil4_progress', JSON.stringify(moduleProgress)); }, [moduleProgress]);
  useEffect(() => { localStorage.setItem('itil4_stats', JSON.stringify(stats)); }, [stats]);

  // Tab change reset
  useEffect(() => {
    setQuizStarted(false); setShowResult(false); setIsReviewing(false); setAnswersHistory([]);
    if (!pendingAnchor) window.scrollTo(0, 0); 
    setMobileMenuOpen(false);
  }, [activeTab, lang, pendingAnchor]);

  // Handle pending anchor scroll
  useEffect(() => {
    if (pendingAnchor) {
      // Small delay to ensure the DOM for the new tab has rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingAnchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight it briefly
          element.classList.add('ring-4', 'ring-indigo-500/50', 'ring-offset-4', 'ring-offset-slate-950');
          setTimeout(() => element.classList.remove('ring-4', 'ring-indigo-500/50', 'ring-offset-4', 'ring-offset-slate-950'), 3000);
        }
        setPendingAnchor(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pendingAnchor, activeTab]);

  const markModuleRead = useCallback((id) => {
    setModuleProgress(prev => ({ ...prev, [id]: true }));
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleQuizFinish = useCallback((score, totalQ, answers) => {
    setStats({ lastScore: score, totalQ });
    setAnswersHistory(answers);
    setShowResult(true);
  }, []);

  const generateAIQuiz = async () => {
    setQuizStarted(false); setShowResult(false); setIsReviewing(false); setAnswersHistory([]);
    setIsGenerating(true); setAiError(''); setLoadingStep(0);

    const stepInterval = setInterval(() => setLoadingStep(s => (s + 1) % (lang === 'de' ? LOADING_STEPS_DE.length : LOADING_STEPS_RU.length)), 1800);

    try {
      const prompt = `Сгенерируй профессиональный мок-экзамен на 40 вопросов для подготовки к ITIL 4 Foundation, строго следуя стилю официальных экзаменов PeopleCert. 
      ВАЖНО: Весь контент (вопросы, ответы, объяснения) должен быть НА НЕМЕЦКОМ ЯЗЫКЕ. Специфичные ITIL термины (названия практик, Utility, Warranty, Value, Guiding Principles, Change Enablement, Service Desk, CI и т.д.) оставляй СТРОГО НА АНГЛИЙСКОМ ЯЗЫКЕ.
      
      Формат и Требования:
      - 40 уникальных вопросов. 4 варианта ответа, ровно 1 правильный.
      - Делай длину вариантов ответа (options) примерно одинаковой.
      - Стиль вопросов ДОЛЖЕН копировать реальные экзамены ITIL. Используй формулировки:
         * "Welche Practice ist für ... verantwortlich?"
         * "Wie lautet die Definition von ...?"
         * "Was ist das BESTE Beispiel für ...?"
         * Сценарные: "Ein Service Provider beschreibt ein Paket... Wofür ist dieses Paket ein Beispiel?"
      - Обязательно используй 3 типа вопросов: 
         1. Standardfragen.
         2. Fehlendes Wort. Используй маркер "[___]" в тексте! (Пример: "Welches Grundprinzip beschäftigt sich HAUPTSÄCHLICH mit dem [___] des Konsumenten?")
         3. Listenfragen. (Дай 4 пронумерованных утверждения в тексте вопроса, а в options комбинируй: "1 und 2", "2 und 3", "3 und 4", "1 und 4").

      РАСПРЕДЕЛЕНИЕ ТЕМ И ОГРАНИЧЕНИЯ:
      - Grundbegriffe (Concepts): Value, Co-creation, Service, Utility, Warranty, Customer, User, Sponsor.
      - Leitlinien (7 Guiding Principles).
      - 4 Dimensionen (Organizations & People, Info & Tech, Partners & Suppliers, Value Streams & Processes).
      - SVS и SVC (פעילות цепочки создания ценности).
      - Практики (Practices): ТЕСТИРУЙ ТОЛЬКО 15 ОСНОВНЫХ ПРАКТИК (Incident, Problem, Change Enablement, Service Desk, Service Request, SLA, Continual Improvement, Information Security, Relationship, Supplier, IT Asset, Service Configuration, Monitoring & Event, Release, Deployment). 
        СТРОГО ЗАПРЕЩЕНО делать вопросы по остальным 19 второстепенным практикам (например, Architecture Management, Business Analysis, Workforce Management и т.д. - их на реальном Foundation тестируют редко или не тестируют вообще).
      
      [{"q":"Текст вопроса","options":["A","B","C","D"],"correct":0,"exp":"Краткое объяснение","topic":"Тема (например, Praktiken)"}]`;

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key is missing. Please add VITE_GEMINI_API_KEY to your .env file.');
      }

      // Список моделей для попыток (fallback) - проверен через ListModels API 17.03.2026
      const models = [
        'gemini-2.5-flash', 
        'gemini-2.5-flash-lite', 
        'gemini-2.0-flash', 
        'gemini-2.0-flash-lite',
        'gemini-3.1-flash-lite-preview',
        'gemini-flash-latest'
      ];
      let lastError = null;
      let successData = null;

      for (const modelId of models) {
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      q: { type: "STRING" },
                      options: { type: "ARRAY", items: { type: "STRING" } },
                      correct: { type: "INTEGER" },
                      exp: { type: "STRING" },
                      topic: { type: "STRING" }
                    },
                    required: ["q", "options", "correct", "exp", "topic"]
                  }
                }
              }
            })
          });

          if (!response.ok) {
            const errData = await response.json();
            const errMsg = errData?.error?.message || 'Unknown Error';
            console.warn(`Model ${modelId} failed:`, errMsg);
            throw new Error(`Model ${modelId} -> HTTP ${response.status}: ${errMsg}`);
          }

          successData = await response.json();
          console.info(`Successfully generated quiz using model: ${modelId}`);
          break; // Успех! Выходим из цикла моделей
        } catch (err) {
          lastError = err;
          // Логируем ошибку и пробуем следующую модель
          console.error(`Attempt with ${modelId} failed:`, err.message);
          continue;
        }
      }

      if (!successData) {
        throw lastError || new Error('All models failed to generate quiz.');
      }

      clearInterval(stepInterval);
      const data = successData;
      
      let generatedText = data.candidates[0].content.parts[0].text;
      // Иногда модель может обернуть JSON в маркдаун-блоки ```json ... ```
      if (generatedText.startsWith('```json')) {
        generatedText = generatedText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (generatedText.startsWith('```')) {
        generatedText = generatedText.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }

      const generated = JSON.parse(generatedText);
      
      if (generated && generated.length > 0) {
        setAiQuestions(generated.slice(0, 40)); // Hard cap to exactly 40 
        setQuizStarted(true); 
      } else throw new Error('Empty response');
    } catch (err) {
      clearInterval(stepInterval);
      console.error("AI Generation Error:", err);
      // Если это ошибка парсинга JSON, выведем специфичный текст
      if (err instanceof SyntaxError) {
         setAiError(lang === 'de' ? `Fehler beim Verarbeiten der AI-Antwort. Bitte erneut versuchen.` : `Ошибка обработки ответа ИИ. Попробуйте снова.`);
      } else {
         setAiError(lang === 'de' ? `Generierung fehlgeschlagen (${err.message}). Bitte erneut versuchen.` : `Не удалось сгенерировать тест (${err.message}). Попробуйте снова.`);
      }
    } finally { 
      setIsGenerating(false); 

    }
  };

  /* ─── Quiz Start Screen ─────────────────────────────────────────── */
  const renderQuizStartScreen = () => (
    <div className="bg-slate-800 p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-700 text-center flex flex-col items-center justify-center min-h-[420px] w-full max-w-5xl mx-auto">
      <Cpu className="w-20 h-20 text-fuchsia-500 mx-auto mb-6" />
      <h3 className="text-2xl lg:text-4xl font-black text-slate-100 mb-3">{t.aiGenerator}</h3>
      <p className="text-slate-400 text-base lg:text-xl mb-8 max-w-xl leading-relaxed">{t.aiDesc}</p>

      <div className="mb-8 w-full max-w-sm">
        <p className="text-slate-400 text-sm font-bold mb-3">{t.chooseTimer}</p>
        <div className="grid grid-cols-3 gap-2">
          {[0, 60, 75].map(m => (
            <button key={m} onClick={() => setExamDuration(m)}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${examDuration === m ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}>
              {m === 0 ? t.timerOff : m === 60 ? t.min60 : t.min75}
            </button>
          ))}
        </div>
      </div>

      {aiError && <div className="bg-red-900/30 text-red-300 p-4 rounded-xl mb-6 border border-red-800/50 flex items-start gap-3 max-w-lg text-sm text-left"><AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />{aiError}</div>}

      <button onClick={generateAIQuiz} disabled={isGenerating}
        className={`font-bold py-4 px-12 rounded-2xl shadow-lg transition duration-300 flex items-center justify-center w-full max-w-sm text-xl bg-linear-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white ${isGenerating ? 'opacity-60 cursor-wait' : 'hover:-translate-y-1'}`}>
        {isGenerating ? <><Loader2 className="w-6 h-6 mr-2 animate-spin shrink-0" /><span className="truncate">{lang === 'de' ? LOADING_STEPS_DE[loadingStep] : LOADING_STEPS_RU[loadingStep]}</span></> : <><Play className="w-6 h-6 mr-2" />{t.startExam}</>}
      </button>
    </div>
  );

  /* ─── Sidebar items ─────────────────────────────────────────────── */
  const sidebarItems = [
    { id: 'exam_tips', label: t.formatAndTips, icon: <Award className="w-5 h-5" />, section: t.intro },
    ...c.studyModules.map((m, i) => ({ id: m.id, label: m.title, icon: m.icon, section: i === 0 ? t.theoryBlocks : null })),
    { id: 'glossary', label: t.glossaryBtn, icon: <Globe className="w-5 h-5" />, section: t.practice },
    { id: 'flashcards', label: t.flashcardsBtn, icon: <BookMarked className="w-5 h-5" />, section: null },
    { id: 'ai_quiz', label: t.aiQuizBtn, icon: <Cpu className="w-5 h-5" />, special: true, section: null },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row font-sans text-slate-200 w-full overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Mobile header */}
      <div className="md:hidden bg-slate-900/95 border-b border-slate-800 flex items-center justify-between px-4 py-3 sticky top-0 z-30 shadow-md">
        <div><h1 className="text-xl font-black text-slate-100">ITIL 4 <span className="text-indigo-500">Prep</span></h1></div>
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-800 p-1 rounded-lg">
            <button onClick={() => setLang('ru')} className={`px-2 py-1 text-xs font-bold rounded ${lang === 'ru' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>RU</button>
            <button onClick={() => setLang('de')} className={`px-2 py-1 text-xs font-bold rounded ${lang === 'de' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>DE</button>
          </div>
          <button onClick={() => setIsSearchOpen(true)} className="bg-slate-800 p-2 rounded-lg text-slate-300">
            <div className="w-5 h-5 flex items-center justify-center">🔍</div>
          </button>
          <button onClick={() => setMobileMenuOpen(o => !o)} className="bg-slate-800 p-2 rounded-lg text-slate-300">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div>

      {/* Sidebar */}
      <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-72 shrink-0 z-20 md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/95 shadow-2xl overflow-y-auto`}>
        <div className="flex flex-col min-h-full pb-32">
          <div className="hidden md:block p-6 md:p-8 shrink-0">
            <h1 className="text-3xl font-black text-slate-100">ITIL 4 <span className="text-indigo-500">Prep</span></h1>
            <p className="text-xs text-slate-500 mt-1 font-bold tracking-widest uppercase">Peoplecert Exam</p>
            <div className="mt-5 flex bg-slate-950/50 p-1.5 rounded-xl border border-slate-800">
              <button onClick={() => setLang('ru')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${lang === 'ru' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}>RU</button>
              <button onClick={() => setLang('de')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${lang === 'de' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}>DE</button>
            </div>
            
            <button onClick={() => setIsSearchOpen(true)} className="mt-4 w-full flex items-center justify-between px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 rounded-xl transition-colors border border-slate-700/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-lg">🔍</span> {lang === 'de' ? 'Suchen...' : 'Поиск...'}
              </div>
              <kbd className="hidden lg:block text-[10px] font-mono bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-500">Ctrl K</kbd>
            </button>
          </div>

          <div className="px-4 space-y-0.5 w-full shrink-0 flex-1">
            {sidebarItems.map((item) => (
              <div key={item.id}>
                {item.section && <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest mt-6 mb-2">{item.section}</p>}
                <button onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-2xl transition-all text-left gap-3 ${item.special ? (activeTab === item.id ? 'bg-linear-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg' : 'bg-slate-800/40 text-fuchsia-400 border border-fuchsia-900/30') : (activeTab === item.id ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800')}`}>
                  <span className={`shrink-0 ${item.special ? (activeTab === item.id ? 'text-fuchsia-200' : 'text-fuchsia-500') : (activeTab === item.id ? 'text-indigo-200' : 'text-slate-500')}`}>{item.icon}</span>
                  <span className="flex-1 leading-tight">{item.label}</span>
                  {!item.special && moduleProgress[item.id] && <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-5 md:p-10 lg:p-14 xl:p-16 w-full overflow-x-hidden flex justify-center items-start">
        {activeTab === 'exam_tips' && (
          <div className="animate-in fade-in w-full max-w-7xl mx-auto flex flex-col xl:flex-row gap-8">
            <div className="flex-1"><h2 className="text-3xl md:text-4xl font-black text-slate-100 mb-8 flex items-center gap-4"><span className="bg-indigo-900/40 p-3 rounded-2xl mr-5 border border-indigo-700/50">{c.examTips.icon}</span>{c.examTips.title}</h2>{c.examTips.content}</div>
            <div className="w-full xl:w-80 shrink-0">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg sticky top-24">
                <h4 className="text-lg font-bold text-slate-200 mb-6 flex items-center"><Target className="w-5 h-5 mr-2 text-indigo-400"/> {t.statsTitle}</h4>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/50">
                    <p className="text-sm text-slate-400 mb-1">{t.modulesRead}</p>
                    <p className="text-2xl font-black text-indigo-400">{Object.keys(moduleProgress).length} / {c.studyModules.length}</p>
                    <div className="w-full bg-slate-800 rounded-full h-2 mt-3"><div className="h-full rounded-full bg-indigo-500 transition-all" style={{width: `${(Object.keys(moduleProgress).length/c.studyModules.length)*100}%`}}></div></div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/50">
                    <p className="text-sm text-slate-400 mb-1">{t.lastScore}</p>
                    {stats.totalQ ? (
                      <div>
                        <p className="text-2xl font-black text-white">{stats.lastScore} <span className="text-base text-slate-500">/ {stats.totalQ}</span></p>
                        <p className={`text-sm mt-1 font-bold ${stats.lastScore/stats.totalQ >= 0.65 ? 'text-green-400' : 'text-orange-400'}`}>{Math.round((stats.lastScore/stats.totalQ)*100)}% ({stats.lastScore/stats.totalQ >= 0.65 ? 'Pass' : 'Fail'})</p>
                      </div>
                    ) : <p className="text-slate-500 italic text-sm">Нет данных / Keine Daten</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'glossary' && <div className="animate-in fade-in w-full max-w-5xl mx-auto"><h2 className="text-3xl font-black text-slate-100 mb-8 flex items-center gap-4"><span className="bg-green-900/40 p-3 rounded-2xl border border-green-700/50"><Globe className="w-7 h-7 text-green-400" /></span>{t.glossaryTitle}</h2><Glossary lang={lang} /></div>}
        {activeTab === 'flashcards' && <div className="animate-in fade-in w-full max-w-5xl mx-auto"><h2 className="text-3xl font-black text-slate-100 mb-8 flex items-center gap-4"><span className="bg-yellow-900/40 p-3 rounded-2xl border border-yellow-700/50"><BookMarked className="w-7 h-7 text-yellow-400" /></span>{t.flashcardsTitle}</h2><Flashcards lang={lang} /></div>}
        
        {activeTab === 'ai_quiz' && !quizStarted && !showResult && (
          <div className="animate-in fade-in w-full max-w-5xl mx-auto">{renderQuizStartScreen()}</div>
        )}

        {activeTab === 'ai_quiz' && quizStarted && !showResult && (
          <div className="animate-in fade-in w-full max-w-5xl mx-auto">
             <QuizRunner 
               questions={activeQuestions} 
               initialDuration={examDuration} 
               onFinish={handleQuizFinish} 
               onCancel={() => { setQuizStarted(false); }} 
               t={t} lang={lang} 
             />
          </div>
        )}

        {activeTab === 'ai_quiz' && showResult && !isReviewing && (
          <div className="animate-in fade-in w-full max-w-5xl mx-auto">
             <ResultScreen 
               questions={activeQuestions} 
               userAnswers={answersHistory}
               onReview={() => setIsReviewing(true)} 
               onHome={() => { setActiveTab('exam_tips'); setQuizStarted(false); setShowResult(false); }} 
               onNewExam={generateAIQuiz} 
               isAI={true} 
               t={t} 
             />
          </div>
        )}

        {activeTab === 'ai_quiz' && showResult && isReviewing && (
          <div className="animate-in fade-in w-full max-w-5xl mx-auto">
             <ReviewScreen questions={activeQuestions} userAnswers={answersHistory} onBack={() => setIsReviewing(false)} t={t} />
          </div>
        )}

        {!['exam_tips','glossary','flashcards','ai_quiz'].includes(activeTab) && (
          <div className="animate-in fade-in w-full max-w-7xl mx-auto">
            {(() => {
              const mod = c.studyModules.find(m => m.id === activeTab);
              if (!mod) return null;
              const isRead = moduleProgress[activeTab];
              return (
                <>
                  <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-100 flex items-center gap-4"><span className="bg-slate-800 p-3 rounded-2xl border border-slate-700">{mod.icon}</span>{mod.title}</h2>
                    <button onClick={() => markModuleRead(activeTab)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shrink-0 ${isRead ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'}`}>
                      <CheckCircle className="w-4 h-4" />{isRead ? t.markedRead : t.markRead}
                    </button>
                  </div>
                  {mod.content}
                </>
              );
            })()}
          </div>
        )}
      </main>

      {showScrollTop && <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl z-40 transition-all hover:-translate-y-1"><ArrowUp className="w-6 h-6" /></button>}
      
      {/* Global Search Modal */}
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        lang={lang} 
        contentData={c} 
        onNavigate={(id, anchor) => {
          setActiveTab(id);
          if (anchor) setPendingAnchor(anchor);
        }} 
      />
    </div>
  );
}
