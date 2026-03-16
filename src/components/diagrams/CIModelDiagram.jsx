import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';

/* ─── Continual Improvement Model Diagram (7 Steps) Accordion ─────── */
const CIModelDiagram = ({ lang }) => {
  const de = lang === 'de';
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const steps = [
    { 
      q: de ? "1. Was ist unsere Vision?" : "1. Каково наше видение?", 
      en: "What is the vision?",
      desc: de ? "Fokus auf die übergeordnete Richtung, Unternehmensvision, Mission und Ziele. Verstehen des Business-Kontexts." : "Фокус на общем направлении, видении компании, миссии и целях. Понимание бизнес-контекста." 
    },
    { 
      q: de ? "2. Wo stehen wir jetzt?" : "2. Где мы сейчас?", 
      en: "Where are we now?",
      desc: de ? "Durchführung eines Baseline-Assessments (Ausgangsbewertung). Objektive Bewertung der aktuellen Situation." : "Проведение Baseline Assessment (оценка исходного состояния). Объективная оценка текущей ситуации." 
    },
    { 
      q: de ? "3. Wo wollen wir hin?" : "3. Куда мы хотим прийти?", 
      en: "Where do we want to be?",
      desc: de ? "Definition von messbaren Zielen (KPIs) und Key Results auf Basis der Vision." : "Определение измеримых целей (KPI) и ключевых результатов на основе видения." 
    },
    { 
      q: de ? "4. Wie kommen wir dorthin?" : "4. Как мы туда доберемся?", 
      en: "How do we get there?",
      desc: de ? "Erstellung eines konkreten Verbesserungsplans (Improvement Plan), oft in agilen, iterativen Schritten." : "Создание конкретного плана улучшений (Improvement Plan), часто в виде гибких, итеративных шагов." 
    },
    { 
      q: de ? "5. Maßnahmen ergreifen" : "5. Принять меры", 
      en: "Take action",
      desc: de ? "Ausführung des Verbesserungsplans. Das eigentliche Tun und Implementieren." : "Выполнение плана улучшений. Непосредственная работа и внедрение изменений." 
    },
    { 
      q: de ? "6. Haben wir das Ziel erreicht?" : "6. Достигли ли мы цели?", 
      en: "Did we get there?",
      desc: de ? "Messung und Bewertung der Ergebnisse. Vergleich mit der Baseline aus Schritt 2." : "Измерение и оценка результатов. Сравнение с исходным состоянием из шага 2." 
    },
    { 
      q: de ? "7. Wie halten wir die Dynamik aufrecht?" : "7. Как сохранить динамику?", 
      en: "How do we keep the momentum going?",
      desc: de ? "Erfolge kommunizieren, Änderungen in der Kultur verankern und die nächste Verbesserung identifizieren." : "Коммуникация успехов, закрепление изменений в культуре компании и поиск следующего улучшения." 
    },
  ];

  return (
    <div className="w-full bg-slate-800/40 rounded-3xl border border-slate-700 p-4 lg:p-6 overflow-hidden">
      <div className="bg-indigo-900/30 border border-indigo-700/50 p-4 rounded-xl mb-6 flex items-start gap-3">
        <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <p className="text-indigo-200 text-sm leading-relaxed">
          {de 
            ? 'Prüfungsfokus: Dieses 7-stufige Modell ist ein Kernstück von ITIL 4. Lerne die exakte Reihenfolge und die englischen Pendants.' 
            : 'Важно для экзамена: Эта модель из 7 шагов — ядро ITIL 4. Выучите точный порядок и английские аналоги.'}
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => {
          const isOpen = activeStep === i;
          return (
            <div 
              key={i} 
              className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen ? 'border-indigo-500 bg-slate-800 shadow-lg shadow-indigo-900/20' : 'border-slate-700 bg-slate-900/60 hover:border-slate-600'
              }`}
            >
              <button 
                onClick={() => toggleStep(i)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/50' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className={`font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                      {s.q}
                    </h4>
                    <p className={`text-xs md:text-sm font-mono mt-1 ${isOpen ? 'text-indigo-300' : 'text-slate-500'}`}>
                      {s.en}
                    </p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-slate-500'}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 pt-0 md:p-6 md:pt-0 mx-12">
                  <div className="text-slate-300 text-sm md:text-base leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    {s.desc}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CIModelDiagram;
