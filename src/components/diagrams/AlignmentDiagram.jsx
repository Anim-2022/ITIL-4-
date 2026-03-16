import { useState } from 'react';
import { Info, Users, Award, FileText, Headset, ShieldCheck, Database, Handshake } from 'lucide-react';

/* ─── Business ↔ IT Alignment Diagram ─────────────────────────────── */
const AlignmentDiagram = ({ lang }) => {
  const de = lang === 'de';
  const [activeNode, setActiveNode] = useState(null);

  const nodes = {
    business: { title: de ? "Business Layer" : "Уровень Бизнеса", desc: de ? "Die Stakeholder, die den Wert definieren, Budgets freigeben und den Service nutzen." : "Стейкхолдеры, которые определяют ценность, дают бюджет и используют сервис." },
    sponsor: { title: "Sponsor", desc: de ? "Genehmigt das Budget und zahlt für den Service." : "Утверждает бюджет и платит за услугу." },
    kunde: { title: "Kunde / Customer", desc: de ? "Definiert die Anforderungen an den Service (Was wird benötigt?). Verhandelt SLAs." : "Определяет требования (Что нужно?). Ведет переговоры по SLA." },
    anwender: { title: "Anwender / User", desc: de ? "Nutzt den Service im täglichen Betrieb. Interagiert mit dem Service Desk." : "Использует сервис каждый день. Взаимодействует с Service Desk." },
    it: { title: de ? "IT Service Provider" : "ИТ-провайдер", desc: de ? "Die interne oder externe Organisation, die den Service bereitstellt." : "Внутренняя или внешняя организация, предоставляющая услугу." },
    slm: { title: "Service Level Management", desc: de ? "SLM verbindet Kunden und IT. Erfasst SLRs (Anforderungen), verhandelt SLAs und führt Review Meetings durch, um die Leistung und alle Vorfälle (Incidents) zu besprechen." : "SLM связывает клиента и ИТ. Собирает SLR, заключает SLA и проводит Review Meetings (для обсуждения всех инцидентов)." },
    desk: { title: "1st Level / Service Desk", desc: de ? "Single Point of Contact (SPOC) für Anwender. Kümmert sich um Incident Management (Störungsbehebung) und Service Request Management." : "Единая точка контакта для пользователей (SPOC). Занимается инцидентами и запросами на обслуживание." },
    security: { title: "Security & Continuity", desc: de ? "BSM (Business Security) diktiert ISM (IT Security). BCM (Business Continuity) diktiert ITSCM (IT Continuity). IT muss sich dem Business anpassen!" : "BSM (Бизнес-безопасность) диктует правила для ISM (ИТ-безопасности). ИТ всегда подстраивается под бизнес!" },
    underlying: { title: de ? "Underlying Elements" : "Базовые элементы", desc: de ? "Die technischen und vertraglichen Fundamente." : "Технические и контрактные фундаменты." },
    service: { title: "Services & Assets", desc: de ? "Services stützen sich auf HW (Hardware), SW (Software) und Daten. Diese sind Configuration Items (CIs)." : "Сервисы опираются на HW (Железо), SW (Софт) и Данные (Все это - CI)." },
    uc: { title: "Supplier & UC", desc: de ? "Externe Lieferanten (Händler, Hersteller) werden über einen Underpinning Contract (UC) gesteuert. Der UC stützt das SLA mit dem Kunden ab." : "Внешние поставщики управляются через UC (Underpinning Contract). UC поддерживает основное SLA с клиентом." },
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <div className="bg-slate-900/60 border border-teal-900/40 rounded-2xl p-4 mb-6 text-sm text-teal-300/80 w-full text-center">
        {de ? '💡 Klicke auf die Karten, um die Zusammenhänge zu verstehen (basiert auf dem Whiteboard).' : '💡 Кликайте на карточки, чтобы понять связи (на основе записей с доски).'}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        <div className="flex flex-col gap-4">
          <div className="text-center font-black uppercase tracking-widest text-slate-500 mb-2">{de ? 'Business' : 'Бизнес'}</div>
          <button onClick={() => setActiveNode('kunde')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'kunde' ? 'bg-indigo-600 border-indigo-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-indigo-500'}`}>
            <div className="flex items-center gap-3"><Users className="w-6 h-6 text-indigo-300" /> <span className="font-bold text-slate-100">Kunde</span></div>
          </button>
          <button onClick={() => setActiveNode('anwender')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'anwender' ? 'bg-indigo-600 border-indigo-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-indigo-500'}`}>
            <div className="flex items-center gap-3"><Users className="w-6 h-6 text-indigo-300" /> <span className="font-bold text-slate-100">Anwender</span></div>
          </button>
          <button onClick={() => setActiveNode('sponsor')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'sponsor' ? 'bg-indigo-600 border-indigo-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-indigo-500'}`}>
            <div className="flex items-center gap-3"><Award className="w-6 h-6 text-indigo-300" /> <span className="font-bold text-slate-100">Sponsor</span></div>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-center font-black uppercase tracking-widest text-slate-500 mb-2">IT Service Provider</div>
          <button onClick={() => setActiveNode('slm')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'slm' ? 'bg-teal-600 border-teal-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-teal-500'}`}>
            <div className="flex items-center gap-3 mb-2"><FileText className="w-6 h-6 text-teal-300" /> <span className="font-bold text-slate-100">Service Level Mgt.</span></div>
            <div className="text-xs text-slate-400 ml-9 leading-relaxed">→ SLAs & SLRs<br/>→ Review Meetings</div>
          </button>
          <button onClick={() => setActiveNode('desk')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'desk' ? 'bg-teal-600 border-teal-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-teal-500'}`}>
            <div className="flex items-center gap-3 mb-2"><Headset className="w-6 h-6 text-teal-300" /> <span className="font-bold text-slate-100">Service Desk</span></div>
            <div className="text-xs text-slate-400 ml-9 leading-relaxed">→ 1st Level Support<br/>→ Incident Mgmt<br/>→ Service Request</div>
          </button>
          <button onClick={() => setActiveNode('security')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'security' ? 'bg-teal-600 border-teal-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-teal-500'}`}>
            <div className="flex items-center gap-3 mb-2"><ShieldCheck className="w-6 h-6 text-teal-300" /> <span className="font-bold text-slate-100">Security & Continuity</span></div>
            <div className="text-xs text-slate-400 ml-9 leading-relaxed">BSM ↔ ISM<br/>BCM ↔ ITSCM</div>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-center font-black uppercase tracking-widest text-slate-500 mb-2">Foundation & Suppliers</div>
          <button onClick={() => setActiveNode('service')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'service' ? 'bg-purple-600 border-purple-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-purple-500'}`}>
            <div className="flex items-center gap-3 mb-2"><Database className="w-6 h-6 text-purple-300" /> <span className="font-bold text-slate-100">Services</span></div>
            <div className="text-xs text-slate-400 ml-9 leading-relaxed">Hardware, Software, Daten</div>
          </button>
          <button onClick={() => setActiveNode('uc')} className={`p-4 rounded-2xl border-2 transition-all text-left ${activeNode === 'uc' ? 'bg-purple-600 border-purple-400 shadow-lg scale-105' : 'bg-slate-800 border-slate-600 hover:border-purple-500'}`}>
            <div className="flex items-center gap-3 mb-2"><Handshake className="w-6 h-6 text-purple-300" /> <span className="font-bold text-slate-100">Supplier</span></div>
            <div className="text-xs text-slate-400 ml-9 leading-relaxed">Händler, Hersteller<br/>Gesteuert via <strong>UC</strong></div>
          </button>
        </div>
      </div>

      <div className="w-full mt-8 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 min-h-[140px] flex items-center shadow-inner">
        {activeNode ? (
          <div>
            <h4 className="font-black text-xl text-slate-100 mb-2">{nodes[activeNode].title}</h4>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">{nodes[activeNode].desc}</p>
          </div>
        ) : (
          <p className="text-slate-500 text-base flex items-center italic w-full justify-center"><Info className="w-5 h-5 mr-2" /> {de ? 'Wähle ein Element für Details' : 'Выберите элемент для деталей'}</p>
        )}
      </div>
    </div>
  );
};

export default AlignmentDiagram;
