import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

/* ─── SVS Interactive Diagram ─────────────────────────────────────── */
const SVSDiagram = ({ lang }) => {
  const [selected, setSelected] = useState(null);
  const de = lang === 'de';

  const components = [
    {
      id: 'leitlinien', icon: '🧭',
      label: de ? 'Leitlinien' : 'Принципы',
      sublabel: '7 Guiding Principles',
      grad: 'from-blue-900/70 to-blue-950', border: 'border-blue-600/60', dot: 'bg-blue-400',
      detail: de
        ? 'Die 7 Guiding Principles sind ein universeller Kompass – unabhängig von Strategie-Änderungen. Sie gelten immer und für alle in der Organisation.'
        : '7 принципов — универсальный компас, действующий всегда и для всех.',
      points: de
        ? ['Wertorientierung', 'Dort beginnen, wo man steht', 'Iterative Weiterentwicklung', 'Zusammenarbeiten & Transparenz', 'Ganzheitlich denken', 'Einfachheit & Praktikabilität', 'Optimieren & automatisieren']
        : ['Фокус на ценности', 'Начинать с текущего состояния', 'Итеративное развитие', 'Сотрудничество и прозрачность', 'Системное мышление', 'Простота', 'Оптимизация и автоматизация'],
    },
    {
      id: 'governance', icon: '⚖️',
      label: 'Governance',
      sublabel: de ? 'Steuerung & Kontrolle' : 'Управление и контроль',
      grad: 'from-slate-700/70 to-slate-900', border: 'border-slate-500/60', dot: 'bg-slate-400',
      detail: de
        ? 'Governance umfasst alle Aktivitäten, durch die eine Organisation gesteuert und kontrolliert wird – Richtlinien, Verantwortlichkeiten und Compliance.'
        : 'Governance включает все активности по управлению организацией — политики, ответственности, соответствие требованиям.',
      points: de
        ? ['Richtlinien (Policies)', 'Klare Verantwortlichkeiten', 'Leistung überwachen', 'Compliance sicherstellen']
        : ['Политики', 'Зоны ответственности', 'Мониторинг эффективности', 'Соответствие требованиям'],
    },
    {
      id: 'svc', icon: '⚙️',
      label: 'SVC',
      sublabel: de ? 'Service-Wertschöpfungskette' : 'Цепочка создания ценности',
      grad: 'from-indigo-800 to-indigo-950', border: 'border-indigo-400', dot: 'bg-indigo-400',
      detail: de
        ? '⚠️ KERNWISSEN: Die SVC ist NICHT linear – die 6 Aktivitäten werden wie Lego-Bausteine kombiniert. Practices sind NICHT auf einen Schritt fixiert.'
        : '⚠️ КЛЮЧЕВОЕ: SVC нелинейна — 6 активностей комбинируются как конструктор. Практики не привязаны к одному шагу.',
      points: ['Plan', 'Improve', 'Engage', 'Design & Transition', 'Obtain / Build', 'Deliver & Support'],
    },
    {
      id: 'praktiken', icon: '🔧',
      label: de ? 'Praktiken' : 'Практики',
      sublabel: '34 Practices',
      grad: 'from-purple-900/70 to-purple-950', border: 'border-purple-600/60', dot: 'bg-purple-400',
      detail: de
        ? 'Praktiken sind Sets von organisatorischen Ressourcen (Menschen + Prozesse + Technologie). Sie sind NICHT an einzelne SVC-Schritte gebunden.'
        : 'Практики — наборы ресурсов (люди + процессы + технологии). Не привязаны к одному шагу SVC.',
      points: de
        ? ['Incident Management', 'Problem Management', 'Change Enablement', 'Service Desk', 'Service Level Mgmt', 'Continual Improvement', '+ 28 weitere Practices']
        : ['Управление инцидентами', 'Управление проблемами', 'Change Enablement', 'Service Desk', '+ 30 других практик'],
    },
    {
      id: 'ci', icon: '🔄',
      label: de ? 'Kont. Verbesserung' : 'Непрерывное улучшение',
      sublabel: 'Continual Improvement',
      grad: 'from-green-900/70 to-green-950', border: 'border-green-600/60', dot: 'bg-green-400',
      detail: de
        ? 'Continual Improvement durchdringt ALLE Teile des SVS – ausnahmslos. Die wichtigste Regel: Es ist die Verantwortung JEDES Einzelnen. Das CIR-Register dokumentiert alle Ideen.'
        : 'Непрерывное улучшение пронизывает ВСЕ части SVS. Ответственность каждого. CIR-реестр фиксирует все идеи.',
      points: de
        ? ['Verantwortung aller Mitarbeitenden', 'Continual Improvement Register (CIR)', 'Ideen erfassen & priorisieren', 'Fortschritt messen & berichten']
        : ['Ответственность каждого', 'Реестр улучшений (CIR)', 'Сбор и приоритизация идей', 'Измерение прогресса'],
    },
  ];

  const sel = components.find(c => c.id === selected);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-slate-900/60 border border-indigo-900/40 rounded-2xl p-4 mb-6 text-sm text-indigo-300/80">
        {de ? '💡 Klicke auf eine Komponente, um detaillierte Informationen zu erhalten.' : '💡 Нажмите на компонент, чтобы получить подробную информацию.'}
      </div>

      <div className="flex items-stretch gap-2 md:gap-3 mb-6 overflow-x-auto pb-2">
        <div className="shrink-0 flex flex-col gap-2 justify-center">
          <div className="bg-blue-900/30 border border-blue-700/40 rounded-xl px-3 py-2 text-center min-w-[80px]">
            <div className="text-blue-400 text-[10px] font-black uppercase tracking-wider mb-1">INPUT</div>
            <div className="text-blue-100 text-xs">Demand</div><div className="text-blue-300/50 text-[10px]">Nachfrage</div>
          </div>
          <div className="bg-blue-900/30 border border-blue-700/40 rounded-xl px-3 py-2 text-center">
            <div className="text-blue-100 text-xs">Opportunity</div><div className="text-blue-300/50 text-[10px]">Chance</div>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-slate-600 shrink-0 self-center" />

        <div className="flex-1 min-w-0 bg-slate-900/80 border-2 border-indigo-800/50 rounded-3xl p-4 md:p-5">
          <div className="text-center mb-4"><span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-800/50">Service Value System (SVS)</span></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {components.map(comp => (
              <button key={comp.id} onClick={() => setSelected(selected === comp.id ? null : comp.id)} className={`bg-linear-to-br ${comp.grad} border-2 ${selected === comp.id ? comp.border : comp.border.replace('/60', '/30')} rounded-2xl p-3 text-center transition-all hover:scale-[1.03] ${selected === comp.id ? 'scale-[1.03] shadow-lg' : ''} ${comp.id === 'svc' ? 'col-span-2 md:col-span-1' : ''}`}>
                <div className="text-xl mb-1.5">{comp.icon}</div>
                <div className="font-black text-slate-100 text-xs leading-tight">{comp.label}</div>
                <div className="text-slate-400 text-[9px] mt-1 leading-tight hidden md:block">{comp.sublabel}</div>
              </button>
            ))}
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-slate-600 shrink-0 self-center" />

        <div className="shrink-0 self-center">
          <div className="bg-indigo-900/30 border border-indigo-700/40 rounded-xl px-3 py-4 text-center min-w-[70px]">
            <div className="text-indigo-400 text-[10px] font-black uppercase tracking-wider mb-1">OUTPUT</div>
            <div className="text-indigo-100 text-sm font-bold">Value</div><div className="text-indigo-300/50 text-[10px]">Wert</div>
          </div>
        </div>
      </div>

      {sel ? (
        <div className={`bg-linear-to-br ${sel.grad} border-2 ${sel.border} rounded-3xl p-6 md:p-8 transition-all duration-300`}>
          <div className="flex items-center mb-4 gap-4"><span className="text-4xl">{sel.icon}</span><div><h3 className="text-xl md:text-2xl font-black text-slate-100">{sel.label}</h3><p className="text-slate-400 text-sm">{sel.sublabel}</p></div></div>
          <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">{sel.detail}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sel.points.map((p, i) => (<li key={i} className="flex items-center text-sm text-slate-300"><span className={`w-2 h-2 rounded-full ${sel.dot} mr-3 shrink-0`}></span>{p}</li>))}
          </ul>
        </div>
      ) : (
        <div className="text-center text-slate-600 text-base py-10 border-2 border-dashed border-slate-800 rounded-2xl">
          {de ? '👆 Klicke auf eine Komponente oben, um Details zu sehen' : '👆 Нажмите на компонент, чтобы увидеть детали'}
        </div>
      )}
    </div>
  );
};

export default SVSDiagram;
