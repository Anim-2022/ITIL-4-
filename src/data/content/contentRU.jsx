import {
  BookOpen, Layers, Target, Settings, Shield, HelpCircle, Award,
  CheckCircle, AlertCircle, Play, Info, Users, Headset, Activity, ArrowRight,
  TrendingUp, Map, PenTool, Wrench, Truck, RefreshCw, Zap, Eye, MousePointer2
} from 'lucide-react';
import Term from '../../components/Term.jsx';
import AlignmentDiagram from '../../components/diagrams/AlignmentDiagram.jsx';
import SVSDiagram from '../../components/diagrams/SVSDiagram.jsx';
import CIModelDiagram from '../../components/diagrams/CIModelDiagram.jsx';

/* ─── Russian Content Data ────────────────────────────────────────── */
export const contentRU = {
  examTips: {
    title: "Анализ Экзамена & Советы",
    icon: <Award className="w-6 h-6 lg:w-8 lg:h-8" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-900/20 p-6 lg:p-8 rounded-2xl border border-blue-800/50">
          <h3 className="font-bold text-blue-300 text-xl lg:text-2xl mb-4">Формат экзамена Peoplecert (на немецком)</h3>
          <ul className="list-disc pl-6 text-blue-100/90 space-y-3 text-base md:text-lg">
            <li><strong>Количество вопросов:</strong> 40 (Multiple Choice).</li>
            <li><strong>Проходной балл:</strong> 26 из 40 (65%).</li>
            <li><strong>Время:</strong> 60 минут. Если немецкий не родной — запроси +15 мин при регистрации (итого 75)!</li>
            <li><strong>Специфика:</strong> Экзамен двуязычный. Основные концепции переводятся (Wert, Leitlinien), названия практик — чаще на английском. <strong>Важно знать оба варианта!</strong></li>
          </ul>
        </div>
        <h3 className="font-bold text-slate-100 text-2xl mt-10">Типы вопросов:</h3>
        <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: '1. Стандартные', d: 'Один правильный ответ из четырех. Ищите ключевые слова-маркеры.' },
            { t: '2. Fehlendes Wort', d: 'В официальном определении пропущено слово. Нужно точное знание терминологии.' },
            { t: '3. Listenfragen', d: 'Список из 4 утверждений, выбрать 2 правильных. Найдите 1 точно неверное и вычеркните.' },
          ].map((c, i) => (
            <div key={i} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-slate-100 text-lg mb-2">{c.t}</h4>
              <p className="text-base text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-slate-100 text-2xl mt-10">Маркеры ключевых слов:</h3>
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
          <ul className="space-y-4 text-base text-slate-300">
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Видите <Term>Grundursache / Root Cause</Term> ➡️ <strong>Problem Management</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Видите <Term>Wiederherstellung des normalen Servicebetriebs</Term> ➡️ <strong>Incident Management</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Видите <Term>Gemeinsame Wertschöpfung / Co-creation</Term> ➡️ <strong>Wert / Value</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Видите <Term>Vorab autorisiert, geringes Risiko</Term> ➡️ <strong>Standard-Change</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Видите <Term>Einziger Kontaktpunkt / Single point of contact</Term> ➡️ <strong>Service Desk</strong></span></li>
          </ul>
        </div>
      </div>
    )
  },
  studyModules: [
    {
      id: 'concepts',
      title: '1. Ключевые понятия',
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-slate-300 text-lg lg:text-xl font-medium leading-relaxed">Фундамент ITIL 4 строится на том, что ИТ-отдел — это не просто статья расходов на серверы, а полноправный бизнес-партнер.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-xl">
                <h4 className="font-bold text-indigo-300 text-sm mb-1">Service Management</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Eine Reihe spezialisierter organisatorischer Fähigkeiten zur Generierung eines Mehrwerts für Kunden in Form von Services.</p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl">
                <h4 className="font-bold text-purple-300 text-sm mb-1">ITSM</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Внедрение и управление качественными ИТ-услугами, которые соответствуют потребностям бизнеса.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-6"><AlignmentDiagram lang="ru" /></div>
          
          <h3 id="roles" className="text-xl lg:text-2xl font-bold text-indigo-400 mb-6 mt-8">Роли в <Term>Service Relationship Management</Term></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-3 text-indigo-300"><Award className="w-6 h-6" /> <span className="font-bold text-lg">Sponsor</span></div>
              <p className="text-slate-300 text-sm">Eine Person, die das Budget für den Servicekonsum genehmigt. (Genehmigt die Finanzierung).</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-3 text-indigo-300"><Users className="w-6 h-6" /> <span className="font-bold text-lg">Kunde (Клиент)</span></div>
              <p className="text-slate-300 text-sm">Eine Person, die die Anforderungen an einen Service definiert und die Verantwortung für die Ergebnisse übernimmt.</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-3 text-indigo-300"><Headset className="w-6 h-6" /> <span className="font-bold text-lg">Anwender (Пользователь)</span></div>
              <p className="text-slate-300 text-sm">Eine Person, die Services einsetzt (Nutzt den Service täglich).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div id="value" className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Ценность / <Term>Value</Term></h3>
              <div className="bg-indigo-900/30 border border-indigo-700/50 p-4 rounded-xl text-slate-300 text-base leading-relaxed">
                <strong className="text-indigo-300">💡 В чем суть (Ко-креация):</strong> В старом ITIL ИТ "доставляло" ценность (как курьер пиццу). В ITIL 4 ценность <strong>создается совместно</strong> <Term>Co-creation</Term>. Провайдер дает ресурс (CRM), но ценность возникает <em>только когда</em> клиент им пользуется.
              </div>
            </div>
            <div id="offering" className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Сервисное предложение / <Term>Service Offering</Term></h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li><strong>1. Товары (Goods):</strong> передача права собственности (смартфон сотруднику).</li>
                <li><strong>2. Доступ к ресурсам:</strong> право собственности не передаётся (Wi-Fi, облако).</li>
                <li><strong>3. Действия сервиса (Actions):</strong> выполнение задачи (сброс пароля).</li>
              </ul>
            </div>
          </div>

          <div id="relationships" className="bg-linear-to-r from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-6 lg:p-8 shadow-inner">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Сервисные отношения / <Term>Service Relationships</Term></h3>
            <p className="text-slate-300 text-base mb-4">Для создания ценности провайдер и потребитель вступают в <strong>отношения</strong>. Это не просто покупка, а постоянный цикл:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                <strong className="text-indigo-300 block mb-2 underline decoration-indigo-500/30 underline-offset-4">1. Provision (Bereitstellung)</strong>
                <span className="text-slate-400 text-sm">Aktivitäten, die von einer Organisation zur Bereitstellung von Services durchgeführt werden (Ressourcenmanagement, Zugriffsbereitstellung).</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                <strong className="text-indigo-300 block mb-2 underline decoration-indigo-500/30 underline-offset-4">2. Consumption (Konsum)</strong>
                <span className="text-slate-400 text-sm">Aktivitäten, die von einer Organisation zur Nutzung von Services durchgeführt werden (Ressourcenmanagement, Nutzung von Gütern).</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                <strong className="text-indigo-300 block mb-2 underline decoration-indigo-500/30 underline-offset-4">3. Beziehungsmanagement</strong>
                <span className="text-slate-400 text-sm">Gemeinsame Aktivitäten von Service Provider und Servicekonsument zur kontinuierlichen gemeinsamen Wertschöpfung.</span>
              </div>
            </div>
          </div>

          {/* Output vs Outcome */}
          <div id="outcomes" className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 lg:p-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
              <Activity className="w-5 h-5" /> Output vs. Outcome
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
                <div className="bg-slate-900 p-2 rounded-full border border-slate-700 shadow-xl text-indigo-400">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                <div className="text-fuchsia-400 font-black text-xs uppercase tracking-widest mb-2">Осязаемый результат</div>
                <h4 className="text-2xl font-black text-slate-100 mb-4"><Term>Ausgabe / Output</Term></h4>
                <p className="text-slate-400 text-sm mb-4 italic">Ein materieller oder immaterieller Liefergegenstand einer Aktivität.</p>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 text-slate-300 text-sm">
                  <strong>Beispiel:</strong> Installierter Mailserver oder abgeschlossenes Training.
                </div>
              </div>

              <div className="bg-linear-to-br from-indigo-900/40 to-slate-900/60 p-6 rounded-2xl border border-indigo-500/30 hover:border-indigo-500/60 transition-colors">
                <div className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-2">Желаемый эффект</div>
                <h4 className="text-2xl font-black text-slate-100 mb-4"><Term>Ergebnis / Outcome</Term></h4>
                <p className="text-slate-400 text-sm mb-4 italic">Ein Resultat für einen Stakeholder, das durch einen oder mehrere Outputs ermöglicht wird.</p>
                <div className="bg-indigo-600/20 p-3 rounded-lg border border-indigo-500/30 text-indigo-200 text-sm">
                  <strong>Beispiel:</strong> Mitarbeiter können effektiv und schnell kommunizieren.
                </div>
              </div>
            </div>
          </div>

          {/* Costs & Risks Balance */}
          <div id="cost-risk" className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 lg:p-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-3">
              <Layers className="w-5 h-5" /> Баланс Затрат и Рисков
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Costs */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-400 font-bold mb-2">
                   <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                   <span><Term>Затраты / Cost</Term></span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-red-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Снятые с клиента</p>
                    <p className="text-green-400 text-sm font-medium">Клиенту не нужно покупать/обслуживать серверное оборудование.</p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-red-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Наложенные сервисом</p>
                    <p className="text-red-400 text-sm font-medium">Клиент должен оплачивать подписку и расходы на интернет.</p>
                  </div>
                </div>
              </div>

              {/* Risks */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-400 font-bold mb-2">
                   <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                   <span><Term>Риски / Risk</Term></span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-orange-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Сниженные</p>
                    <p className="text-green-400 text-sm font-medium">Провайдер берет на себя бэкапы и обновления безопасности.</p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-orange-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Новые ( Внесенные )</p>
                    <p className="text-red-400 text-sm font-medium">Зависимость от провайдера ( Vendor Lock-In ) и стабильности сети.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Formula: Utility & Warranty */}
          <div id="utility-warranty" className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/80 border border-slate-700 p-6 lg:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-black text-indigo-400 flex items-center gap-3">
                    <Award className="w-7 h-7" /> Формула Ценности
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-indigo-500/20">
                      <h4 className="font-bold text-indigo-300 text-lg mb-2 underline decoration-indigo-500/30 underline-offset-4"><Term>Полезность / Utility</Term></h4>
                      <p className="text-slate-300 text-sm mb-2 italic">"Fit for purpose"</p>
                      <p className="text-slate-400 text-sm font-medium tracking-tight">Повышает производительность ИЛИ снимает ограничения.</p>
                      <div className="mt-3 text-[10px] font-bold text-indigo-500 uppercase tracking-widest">ЧТО сервис делает</div>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-fuchsia-500/20">
                      <h4 className="font-bold text-fuchsia-300 text-lg mb-2 underline decoration-fuchsia-500/30 underline-offset-4"><Term>Гарантия / Warranty</Term></h4>
                      <p className="text-slate-300 text-sm mb-2 italic">"Fit for use"</p>
                      <p className="text-slate-400 text-sm font-medium tracking-tight">Доступность, мощность, безопасность, непрерывность.</p>
                      <div className="mt-3 text-[10px] font-bold text-fuchsia-500 uppercase tracking-widest">КАК сервис работает</div>
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 flex items-center justify-center p-8 bg-slate-900/80 rounded-3xl border border-slate-700 shadow-2xl">
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Итог</div>
                    <div className="text-4xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent uppercase">Ценность</div>
                    <div className="mt-2 text-[10px] text-slate-500 italic">Utility + Warranty = Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'principles', title: '2. 7 Принципов ITIL', icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-10">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 border-l-4 border-l-indigo-500">
            <p className="text-slate-300 text-lg leading-relaxed">
              <Term>Leitlinien / Guiding Principles</Term> — это рекомендации, которые могут направлять организацию в любых ситуациях, независимо от изменений её целей, стратегий или способов работы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {[
              { 
                t: "Wertorientierung", 
                eng: "Focus on value", 
                icon: <Target className="w-8 h-8 text-emerald-400" />,
                bg: "from-emerald-600/20 to-emerald-900/10",
                border: "border-emerald-500/30",
                d: "Alle Aktivitäten sollten direkt oder indirekt zur Wertschöpfung beitragen.", 
                tip: "Jede Aktion muss direkt oder indirekt Wert für Stakeholder schaffen. Wer ist der Konsument? Was ist wertvoll?" 
              },
              { 
                t: "Dort beginnen, wo man steht", 
                eng: "Start where you are", 
                icon: <Map className="w-8 h-8 text-blue-400" />,
                bg: "from-blue-600/20 to-blue-900/10",
                border: "border-blue-500/30",
                d: "Bestehende Ressourcen analysieren und nutzen, statt bei Null anzufangen.", 
                tip: "Vermeidung von unnötiger Arbeit durch Wiederverwendung bewährter Elemente. Nutzung der Baseline-Messung." 
              },
              { 
                t: "Iterative Weiterentwicklung", 
                eng: "Progress iteratively with feedback", 
                icon: <RefreshCw className="w-8 h-8 text-indigo-400" />,
                bg: "from-indigo-600/20 to-indigo-900/10",
                border: "border-indigo-500/30",
                d: "Kleine Schritte mit Feedback-Schleifen statt starrer Großprojekte.", 
                tip: "Feedback-Schleifen sind essenziell zur Überprüfung der Richtung und Qualität." 
              },
              { 
                t: "Zusammenarbeit fördern", 
                eng: "Collaborate and promote visibility", 
                icon: <Users className="w-8 h-8 text-cyan-400" />,
                bg: "from-cyan-600/20 to-cyan-900/10",
                border: "border-cyan-500/30",
                d: "Silos aufbrechen, Transparenz schaffen und Stakeholder aktiv einbinden.", 
                tip: "Information und Arbeit im gesamten Team sichtbar machen. Gemeinsame Ziele verfolgen." 
              },
              { 
                t: "Ganzheitlich denken", 
                eng: "Think and work holistically", 
                icon: <Layers className="w-8 h-8 text-purple-400" />,
                bg: "from-purple-600/20 to-purple-900/10",
                border: "border-purple-500/30",
                d: "Zusammenwirken aller Teile und der 4 Dimensionen berücksichtigen.", 
                tip: "Kein Prozess ist isoliert. Berücksichtige immer alle 4 Dimensionen des Service Management." 
              },
              { 
                t: "Einfach & Praktisch halten", 
                eng: "Keep it simple and practical", 
                icon: <Zap className="w-8 h-8 text-orange-400" />,
                bg: "from-orange-600/20 to-orange-900/10",
                border: "border-orange-500/30",
                d: "Prozesse mit minimaler Schrittanzahl. Alles eliminieren, was keinen Wert schafft.", 
                tip: "Fokus auf Outcome. Nur notwendige Komplexität beibehalten (Minimum Viable Product Fokus)." 
              },
              { 
                t: "Optimieren & Automatisieren", 
                eng: "Optimize and automate", 
                icon: <Settings className="w-8 h-8 text-fuchsia-400" />,
                bg: "from-fuchsia-600/20 to-fuchsia-900/10",
                border: "border-fuchsia-500/30",
                d: "Menschliche Arbeit für komplexe Aufgaben, IT für repetitive Routinen.", 
                tip: "ERST optimieren (den Prozess verbessern), DANN so weit wie möglich automatisieren." 
              },
            ].map((p, i) => (
              <div key={i} className={`flex p-6 bg-slate-800/60 border border-slate-700 rounded-2xl ${i === 6 ? 'xl:col-span-2 xl:max-w-3xl xl:mx-auto' : ''}`}>
                <div className="bg-indigo-900/50 text-indigo-400 font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-indigo-700/50 mr-5">{i + 1}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-100 text-lg mb-1">{p.t}</h4>
                  <div className="mb-2"><Term>{p.eng}</Term></div>
                  <p className="text-sm text-slate-300 mb-3">{p.d}</p>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-xs text-indigo-200"><strong className="text-indigo-400">💡 Экзамен:</strong> {p.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'dimensions',
      title: '3. 4 Измерения',
      icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-slate-300 text-lg">Для стабильной работы услуги менеджер должен сбалансированно развивать 4 измерения <Term>Vier Dimensionen</Term>.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { color: 'border-green-500', t: '1. Organisationen und Menschen', en: 'Organizations and People', q: 'WER macht die Arbeit?', pts: ['Klare Rollen und Verantwortlichkeiten', 'Gemeinsame Werte, Vertrauen, Transparenz', 'Kompetenzen und kontinuierliche Schulung'] },
              { color: 'border-blue-500', t: '2. Informationen und Technologie', en: 'Information and Technology', q: 'WOMIT wird es erledigt?', pts: ['ITSM-Tools, Wissensdatenbanken, Cloud', 'Informationssicherheit und Datenschutz (GDPR)', 'Kompatibilität alter und neuer Systeme'] },
              { color: 'border-purple-500', t: '3. Partner und Lieferanten', en: 'Partners and Suppliers', q: 'WER HILFT von außen?', pts: ['Verträge mit Cloud-Anbietern (AWS, Azure)', 'Von einfacher Beschaffung bis zu tiefen Partnerschaften'] },
              { color: 'border-orange-500', t: '4. Wertströme und Prozesse', en: 'Value Streams and Processes', q: 'WIE greift alles ineinander?', pts: ['Wertstrom: End-to-End vom Kundenwunsch bis zur Lieferung', 'Prozesse: Inputs → Outputs, Bottlenecks beseitigen'] },
            ].map((d, i) => (
              <div key={i} className={`border-t-4 ${d.color} bg-slate-800/60 p-6 rounded-2xl`}>
                <h4 className="font-bold text-lg text-slate-100 mb-1">{d.t}</h4>
                <div className="mb-3"><Term>{d.en}</Term></div>
                <p className="text-base font-bold text-slate-200 mb-3">{d.q}</p>
                <ul className="space-y-1.5 text-slate-400 text-sm list-disc pl-5">{d.pts.map((p, j) => <li key={j}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col bg-slate-900/80 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-start mb-4">
              <Info className="w-6 h-6 mr-4 shrink-0 text-indigo-400 mt-1" />
              <div>
                <strong className="block text-slate-100 mb-1">Внешние факторы (PESTLE)</strong>
                <p className="text-slate-400 text-sm">На все 4 измерения давят внешние факторы, которые организация не может контролировать напрямую:</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { l: 'P', t: 'Political', d: 'Санкции, гос. политика' },
                { l: 'E', t: 'Economic', d: 'Курсы валют, инфляция' },
                { l: 'S', t: 'Social', d: 'Демография, привычки' },
                { l: 'T', t: 'Technological', d: 'AI, Облака, мобайл' },
                { l: 'L', t: 'Legal', d: 'GDPR, законы о данных' },
                { l: 'E', t: 'Environmental', d: 'Green IT, экология' },
              ].map((f, i) => (
                <div key={i} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <span className="text-indigo-400 font-bold mr-1">{f.l}</span>
                  <span className="text-slate-300 text-xs font-bold block">{f.t}</span>
                  <p className="text-slate-500 text-[10px]">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'svs_svc',
      title: '4. Система и Цепочка (SVS/SVC)',
      icon: <Settings className="w-6 h-6" />,
      content: (
        <div className="space-y-12">
          
          {/* Service Value System (SVS) - Pyramid/Layered Design */}
          <div id="svs" className="bg-slate-800/60 p-6 lg:p-10 rounded-3xl border border-slate-700 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="font-black text-3xl text-slate-100 mb-2 relative z-10">Service-Wertschöpfungssystem (SVS)</h3>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl relative z-10"><Term>SVS</Term> beschreibt, wie alle Komponenten und Aktivitäten der Organisation zusammenwirken, um die Wertschöpfung zu ermöglichen.</p>
            
            {/* The SVS Flow */}
            <div className="flex flex-col lg:flex-row items-stretch gap-4 relative z-10">
              
              {/* Input */}
              <div className="flex shrink-0 w-full lg:w-48 bg-slate-900/80 rounded-2xl border border-slate-700 p-6 flex-col justify-center items-center text-center shadow-inner">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3 border border-slate-600">
                  <Target className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div className="text-fuchsia-400 font-bold uppercase tracking-widest text-xs mb-1">Вход (Input)</div>
                <div className="font-black text-slate-200 text-lg leading-tight">Возможность /<br/>Спрос</div>
                <div className="text-[10px] text-slate-500 mt-2 uppercase">Opportunity / Demand</div>
              </div>

              {/* The Core System (SVS components) */}
              <div className="flex-1 bg-linear-to-b from-indigo-900/30 to-slate-900/50 rounded-2xl border border-indigo-500/30 p-4 lg:p-6 flex flex-col gap-3">
                
                {/* Layer 1: Guiding Principles */}
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm">
                  <span className="font-bold text-slate-200 text-sm">7 Руководящих Принципов (Guiding Principles)</span>
                </div>
                
                {/* Layer 2: Governance */}
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm">
                  <span className="font-bold text-slate-200 text-sm">Управление (Governance)</span>
                </div>
                
                {/* Layer 3: SVC -> The Engine */}
                <div className="bg-indigo-600/20 p-5 rounded-xl border border-indigo-500/50 text-center shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 skeleton-bg"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <Settings className="w-8 h-8 text-indigo-300 mb-2 animate-[spin_10s_linear_infinite]" />
                    <span className="font-black tracking-wide text-indigo-300 text-lg uppercase text-center block">Цепочка создания ценности (SVC)</span>
                    <span className="text-indigo-200/60 text-xs font-medium uppercase tracking-widest mt-1">ОПЕРАЦИОННОЕ ЯДРО СИСТЕМЫ</span>
                  </div>
                </div>

                {/* Layer 4: Practices & Continual Improvement */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm flex items-center justify-center">
                    <span className="font-bold text-slate-200 text-sm">34 Практики (Practices)</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm flex items-center justify-center">
                    <span className="font-bold text-slate-200 text-sm">Постоянное Улучшение</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="shrink-0 w-full lg:w-48 bg-slate-900/80 rounded-2xl border border-slate-700 p-6 flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden group hover:border-fuchsia-500/50 transition-colors cursor-default">
                <div className="absolute inset-0 bg-fuchsia-500/5 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="w-16 h-16 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-fuchsia-500/20 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-fuchsia-400 font-bold uppercase tracking-widest text-xs mb-1">Ausgabe (Output)</div>
                <div className="font-black text-slate-200 text-sm mb-1 uppercase tracking-tight">Produkte & Services</div>
                <div className="font-black text-transparent bg-clip-text bg-linear-to-r from-slate-100 to-slate-400 text-2xl">WERT</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">Value</div>
              </div>
            </div>
            {/* Diagram */}
            <div className="mt-8 pt-8 border-t border-slate-700/50 hidden lg:block">
               <p className="text-slate-500 text-xs font-bold uppercase mb-4 text-center tracking-widest">Offizielles ITIL 4 Schema (SVS)</p>
               <SVSDiagram lang="ru" />
            </div>
          </div>

          {/* Service Value Chain (SVC) */}
          <div id="svc" className="bg-linear-to-br from-slate-900 to-indigo-950/40 p-6 lg:p-10 rounded-3xl border border-indigo-900/50 shadow-2xl relative overflow-hidden">
            <h3 className="font-black text-3xl text-indigo-300 mb-6 flex items-center gap-3">
              <Activity className="w-8 h-8 text-fuchsia-500" /> Service-Wertschöpfungskette (SVC)
            </h3>
            
            <div className="bg-red-950/40 border border-red-900/60 p-5 rounded-2xl mb-8 flex items-start gap-4 shadow-inner">
              <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-400 block mb-1 text-lg">Prüfungsfalle: SVC ist NICHT linear!</strong>
                <p className="text-red-200/80 text-sm leading-relaxed">In der Foundation-Prüfung wird oft versucht, die SVC als einen strengen Prozess oder Lebenszyklus darzustellen (Schritt 1, dann Schritt 2 usw.). Das ist ein <strong>GROBER FEHLER</strong>. Praktiken können jede SVC-Aktivität jederzeit und in beliebiger Reihenfolge nutzen. Es ist ein flexibles operatives Modell des Systems, kein Wasserfall-Fließband.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { n: 'Планирование / Plan', d: 'Обеспечение общего понимания видения, текущего статуса и направления улучшений во всех 4 измерениях и всех продуктах.', i: <Map className="w-6 h-6 text-indigo-300" />, b: 'Ориентир' },
                { n: 'Улучшение / Improve', d: 'Обеспечение постоянного улучшения продуктов, услуг и самих практик на всех этапах цепочки создания ценности.', i: <TrendingUp className="w-6 h-6 text-green-400" />, b: 'Оптимизация' },
                { n: 'Взаимодействие / Engage', d: 'Правильное понимание потребностей стейкхолдеров, прозрачность и поддержание постоянных хороших отношений со всеми.', i: <Users className="w-6 h-6 text-orange-400" />, b: 'Коммуникация' },
                { n: 'Дизайн & Переход / Design & Transition', d: 'Гарантия того, что новые продукты и сервисы полностью соответствуют требованиям к качеству, затратам и времени (Time-to-Market).', i: <PenTool className="w-6 h-6 text-fuchsia-400" />, b: 'Создание' },
                { n: 'Получение/Построение / Obtain/Build', d: 'Гарантия того, что компоненты сервиса доступны именно тогда и там, где они нужны, и соответствуют всем спецификациям.', i: <Wrench className="w-6 h-6 text-blue-400" />, b: 'Компоненты' },
                { n: 'Предоставление & Поддержка / Deliver & Support', d: 'Обеспечение предоставления сервисов и их поддержки изо дня в день в точном соответствии с согласованными SLA.', i: <Truck className="w-6 h-6 text-purple-400" />, b: 'Эксплуатация' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/80 p-6 rounded-2xl border border-indigo-900/40 hover:border-indigo-500/50 hover:bg-slate-800 transition-all group shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                      {item.i}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.b}</div>
                      <h4 className="font-bold text-slate-200 leading-tight block">{item.n}</h4>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Model Synthesis (from Whiteboard) */}
          <div id="operational-architecture" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Wrench className="w-16 h-16" /></div>
            <h3 className="font-black text-2xl text-indigo-300 mb-8 flex items-center gap-3 underline decoration-indigo-500/30 underline-offset-8">
              Синтез: Операционная архитектура
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              {/* Left Side: Roles & Interfaces */}
              <div className="space-y-8">
                <div className="flex flex-col gap-6">
                  {/* Kunde -> SLM */}
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-600/20 p-4 rounded-xl border border-indigo-500/40 w-32 text-center">
                      <span className="font-bold text-slate-200 block text-sm">Kunde</span>
                      <span className="text-[10px] text-slate-500 uppercase">Клиент</span>
                    </div>
                    <ArrowRight className="text-slate-600 shrink-0" />
                    <div className="flex-1 bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                      <h5 className="font-bold text-indigo-300 text-sm mb-1">Service Level Manager</h5>
                      <p className="text-xs text-slate-400">Интерфейс: Переговоры, <Term>SLA</Term>, Регулярные <Term>Review</Term>.</p>
                    </div>
                  </div>

                  {/* Anwender -> Service Desk */}
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/40 w-32 text-center">
                      <span className="font-bold text-slate-200 block text-sm">Anwender</span>
                      <span className="text-[10px] text-slate-500 uppercase">Пользователь</span>
                    </div>
                    <ArrowRight className="text-slate-600 shrink-0" />
                    <div className="flex-1 bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                      <h5 className="font-bold text-blue-300 text-sm mb-1">Service Desk / Support</h5>
                      <p className="text-xs text-slate-400">Интерфейс: <Term>Incident Management</Term>, <Term>Service Request</Term>.</p>
                    </div>
                  </div>

                  {/* Sponsor */}
                  <div className="flex items-center gap-4 opacity-60">
                    <div className="bg-emerald-600/20 p-4 rounded-xl border border-emerald-500/40 w-32 text-center">
                      <span className="font-bold text-slate-200 block text-sm">Sponsor</span>
                    </div>
                    <ArrowRight className="text-slate-600 shrink-0" />
                    <div className="flex-1 bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                       <p className="text-xs text-slate-400 italic">Связан с бюджетом и макро-целями (CEO/CIO).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Warranty & Foundation */}
              <div className="space-y-6 bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-inner">
                {/* SLA / Warranty (SCR) */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-indigo-600 text-white font-black px-6 py-2 rounded-lg shadow-lg mb-4 text-xl">SLA</div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {['Verfügbarkeit', 'Kapazität', 'Kontinuität', 'Sicherheit'].map((w, i) => (
                      <div key={i} className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-[10px] text-slate-300 font-bold uppercase tracking-tight italic">
                        {w}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Гарантия (Warranty)</div>
                </div>

                {/* Service Foundation */}
                <div className="relative pt-6">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-indigo-500/50 to-transparent"></div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center relative z-10 shadow-lg">
                    <h5 className="font-black text-slate-200 text-sm mb-3">Service / Услуга</h5>
                    <div className="flex justify-center gap-4">
                       <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-600 text-xs text-slate-400 font-mono">HW</div>
                       <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-600 text-xs text-slate-400 font-mono">SW</div>
                       <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-600 text-xs text-slate-400 font-mono">DATEN</div>
                    </div>
                    <div className="mt-3 text-[10px] text-slate-500 font-bold uppercase">Ресурсная база</div>
                  </div>
                </div>

                {/* Supplier link */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Внешние партнеры:</span>
                  <div className="flex gap-2">
                    <span className="bg-linear-to-r from-orange-600/20 to-orange-900/20 px-3 py-1 rounded-full border border-orange-500/30 text-orange-300 font-bold uppercase tracking-widest text-[9px]">UC (Underpinning Contract)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'practices',
      title: '5. Второстепенные Практики',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg">Эти 19 практик не требуют глубокого изучения для Foundation. Нужно лишь понимать <strong>общую концепцию</strong> (Zweck) на уровне одного предложения.</p>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Architecture Management', d: 'Служит для понимания элементов компании и их связей.' },
              { t: 'Business Analysis', d: 'Анализ бизнеса/процессов для рекомендации решений.' },
              { t: 'Capacity & Performance Mgmt', d: 'Обеспечение требуемой ёмкости и производительности услуг.' },
              { t: 'Organizational Change Mgmt', d: 'Управление человеческой стороной изменений (сопротивлением).' },
              { t: 'Portfolio Management', d: 'Инвестиции: обеспечение набора программ/услуг для бизнес-целей.' },
              { t: 'Project Management', d: 'Гарантия успешного завершения проектов.' },
              { t: 'Risk Management', d: 'Понимание и обработка рисков (Opportunities / Threats).' },
              { t: 'Service Financial Mgmt', d: 'Финансы: планирование, учет, выставление счетов.' },
              { t: 'Strategy Management', d: 'Формулирование целей компании и планов их достижения.' },
              { t: 'Workforce & Talent Mgmt', d: 'Управление кадрами (навыки профили, роли).' },
              { t: 'Availability Management', d: 'Обеспечение доступности услуг согласно требованиям.' },
              { t: 'Service Catalogue Mgmt', d: 'Единый источник информации обо всех предоставляемых услугах.' },
              { t: 'Service Continuity Mgmt', d: 'Обеспечение доступности при катастрофах (Disaster Recovery).' },
              { t: 'Service Design', d: 'Проектирование услуг под бизнес-цели.' },
              { t: 'Service Validation & Testing', d: 'Подтверждение, что новые услуги соответствуют требованиям.' },
              { t: 'Knowledge Management', d: 'Управление знаниями, поддержание их актуальности.' },
              { t: 'Measurement & Reporting', d: 'Сбор данных, создание отчетов (Dashboards).' },
              { t: 'Software Development & Mgmt', d: 'Разработка и управление программным обеспечением.' },
              { t: 'Infrastructure & Platform Mgmt', d: 'Надзор за инфраструктурой (в т.ч. облаком).' }
            ].map((c, i) => (
              <div key={i} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-slate-100 text-sm mb-1">{c.t}</h4>
                <p className="text-xs text-slate-400">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'core_practices',
      title: '6. 15 Основных Практик',
      icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 mb-8 sticky top-20 z-20 backdrop-blur-md hidden lg:block">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Навигация:</h4>
            <div className="flex flex-wrap gap-1.5">
              {['Incident', 'Problem', 'Change', 'Service Desk', 'Serv Req', 'SLA', 'Cont Imp', 'Security', 'Rel Mgmt', 'Supplier', 'IT Asset', 'Config', 'Event', 'Release', 'Deploy'].map(p => (
                <a key={p} href={`#prac-${p.replace(' ', '')}`} className="px-2.5 py-1 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors border border-slate-700 hover:border-indigo-500">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900/30 border-l-4 border-indigo-500 p-4 rounded-r-xl mb-6 text-indigo-100 text-sm">
            Эти 15 практик — <strong>ядро экзамена!</strong> Нужно понимать их цели (Zweck) наизусть, отличать похожие друг от друга, а для первых семи (от Incident до Continual Improvement) знать ещё и <strong>детали работы</strong>.
          </div>

          <p className="text-slate-300 text-lg">Эти 7 практик — ядро экзамена. Нужно понимать КТО это делает, КАК и отличать похожие процессы.</p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div id="prac-Incident" className="bg-linear-to-br from-red-900/20 to-slate-900 border border-red-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-red-400 mb-3 text-xl flex items-center"><AlertCircle className="w-6 h-6 mr-2" /> Incident Management</h3>
              <div className="bg-red-950/50 rounded-xl p-4 mb-4 border-l-4 border-red-500 text-red-100">Zweck: <strong>Maximale Schnelligkeit bei der Wiederherstellung des normalen Servicebetriebs</strong>.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong className="text-red-200">Incident:</strong> Jede ungeplante Unterbrechung oder Qualitätsminderung eines Services.</li>
                <li>• Alle Incidents müssen erfasst (<Term>Incident Record</Term>) und klassifiziert werden.</li>
                <li>• Priorisierung: Nach Impact (Auswirkung) × Urgency (Dringlichkeit).</li>
                <li>• <strong className="text-red-200">Major Incidents:</strong> Erfordern ein separates Verfahren und schnelle Ressourcen-Mobilisierung.</li>
                <li>• <strong className="text-red-200">Swarming:</strong> Experten verschiedener Ebenen arbeiten direkt zusammen (statt klassischer Eskalation).</li>
              </ul>
            </div>
            <div id="prac-Problem" className="bg-linear-to-br from-orange-900/20 to-slate-900 border border-orange-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-orange-400 mb-3 text-xl flex items-center"><HelpCircle className="w-6 h-6 mr-2" /> Problem Management</h3>
              <div className="bg-orange-950/50 rounded-xl p-4 mb-4 border-l-4 border-orange-500 text-orange-100">Zweck: Identifizierung von <strong>Grundursachen</strong> <Term>Root Cause</Term> und Management von Workarounds.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Incident = "Feuer" (jetzt löschen). Problem = Suche nach dem "Brandstifter".</li>
                <li>• <strong>Workaround:</strong> Temporäre Lösung, bis der Fehler dauerhaft behoben ist.</li>
                <li>• <strong>KEDB:</strong> Known Error Database (<Term>Known Errors</Term>) für die schnelle Suche nach Workarounds.</li>
                <li>• <strong className="text-orange-200 text-xs uppercase font-bold block mt-2">3 Phasen PM:</strong></li>
                <li className="pl-2">1. <Term>Problem Identification</Term>: Trendanalysen & wiederkehrende Incidents.</li>
                <li className="pl-2">2. <Term>Problem Control</Term>: Root Cause Analysis & Workarounds.</li>
                <li className="pl-2">3. <Term>Error Control</Term>: Management von permanenten Lösungen.</li>
              </ul>
            </div>
            <div id="prac-Change" className="bg-linear-to-br from-blue-900/20 to-slate-900 border border-blue-800/40 rounded-3xl p-6 xl:col-span-2 scroll-mt-40">
              <h3 className="font-black text-blue-400 mb-3 text-xl flex items-center"><Settings className="w-6 h-6 mr-2" /> Change Enablement</h3>
              <div className="bg-blue-950/50 rounded-xl p-4 mb-3 border-l-4 border-blue-500 text-blue-100 italic text-xs">Zweck: Maximierung erfolgreicher Changes durch korrekte <strong>Risikobewertung und Autorisierung</strong>.</div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-blue-900/30 mb-4 text-xs">
                <strong className="text-blue-300">Change Authority:</strong> Person oder Gruppe, die Changes autorisiert. Jede Change-Art braucht die passende Instanz.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { c: 'blue', t: '1. Standard-Change', d: 'Vorab autorisiert (pre-approved), geringes Risiko, Standardprozedur. Bsp: Festplattentausch.' },
                  { c: 'blue', t: '2. Normaler Change', d: 'Individuelle Bewertung durch Change-Autorität nötig. Bsp: Datenbankenmigration.' },
                  { c: 'red', t: '3. Notfall (Emergency)', d: 'Dringende Implementierung! Prozess wird beschleunigt, aber NICHT übersprungen. Bsp: Sicherheitspatch.' },
                ].map((t, i) => (
                  <div key={i} className={`bg-slate-800/80 p-4 rounded-xl border ${t.c === 'red' ? 'border-red-900/50' : 'border-blue-900/50'}`}>
                    <strong className={`block mb-2 ${t.c === 'red' ? 'text-red-400' : 'text-blue-400'}`}>{t.t}</strong>
                    <p className="text-slate-300 text-sm">{t.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="prac-Service Desk" className="bg-linear-to-br from-green-900/20 to-slate-900 border border-green-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-green-400 mb-3 text-xl flex items-center"><Shield className="w-6 h-6 mr-2" /> Service Desk</h3>
              <div className="bg-green-950/50 rounded-xl p-4 mb-4 border-l-4 border-green-500 text-green-100">Zweck: <strong>Einziger Kontaktpunkt</strong> <Term>Single Point of Contact / SPOC</Term> für alle Nutzer.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Für Nutzer ist der Service Desk "die IT" — prägt das User Experience.</li>
                <li>• <strong>Kritisch:</strong> Empathie und emotionale Intelligenz sind wichtiger als technisches Fachwissen!</li>
              </ul>
            </div>
            <div id="prac-Service Request" className="bg-linear-to-br from-teal-900/20 to-slate-900 border border-teal-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-teal-400 mb-3 text-xl flex items-center"><CheckCircle className="w-6 h-6 mr-2" /> Service Request Management</h3>
              <div className="bg-teal-950/50 rounded-xl p-4 mb-4 border-l-4 border-teal-500 text-teal-100">Zweck: Effiziente Bearbeitung vordefinierter <Term>Service Requests</Term>.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Incident = Ausfall. Service Request = normaler Teil der Bereitstellung (neue Hardware, Zugang).</li>
                <li>• Die Bearbeitung sollte so weit wie möglich standardisiert und automatisiert werden.</li>
              </ul>
            </div>
            <div id="prac-SLA" className="bg-linear-to-br from-purple-900/20 to-slate-900 border border-purple-800/40 rounded-3xl p-6 xl:col-span-2 scroll-mt-40">
              <h3 className="font-black text-purple-400 mb-3 text-xl flex items-center"><Target className="w-6 h-6 mr-2" /> Service Level Management</h3>
              <div className="bg-purple-950/50 rounded-xl p-4 mb-4 border-l-4 border-purple-500 text-purple-100 text-sm">Festlegung und Bewertung von Servicezielen (SLA), die auf Business Outcomes basieren.</div>
              <p className="text-slate-300 text-sm mb-4">SLAs müssen die <Term>Geschäftsergebnisse</Term> widerspiegeln. Durchführung regelmäßiger <Term>Review Meetings</Term>.</p>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/30 text-xs text-slate-300"><strong className="text-purple-300">🍉 Wassermelonen-Effekt:</strong> Metriken sind grün, aber der Kunde ist unzufrieden. SLM löst dies durch reales Feedback.</div>
            </div>
            
            <div id="prac-ContImp" className="bg-linear-to-br from-purple-900/20 to-slate-900 border border-purple-800/40 rounded-3xl p-6 xl:col-span-2 scroll-mt-40">
              <h3 className="font-black text-purple-400 mb-3 text-xl flex items-center"><Play className="w-6 h-6 mr-2" /> Continual Improvement</h3>
              <div className="bg-purple-950/50 rounded-xl p-4 mb-4 border-l-4 border-purple-500 text-purple-100 text-sm">Anpassung der Praktiken und Services an sich ändernde Business-Bedürfnisse.</div>
              <p className="text-slate-300 text-sm mb-4">Wichtig: Kontinuierliche Verbesserung liegt in der Verantwortung <strong>JEDES EINZELNEN</strong> Mitarbeiters.</p>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/30 text-xs text-slate-300 mb-6"><strong className="text-purple-300">CIR-Register:</strong> Datenbank (<Term>Continual Improvement Register</Term>) für alle Verbesserungsideen.</div>
              <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20 mb-6 text-xs text-indigo-100">
                <strong className="block mb-2 text-indigo-400">7 Schritte des Modells:</strong>
                1. Vision? ➡️ 2. Wo stehen wir? ➡️ 3. Wo wollen wir hin? ➡️ 4. Wie dahin? ➡️ 5. Aktion ➡️ 6. Ziel erreicht? ➡️ 7. Schwung halten?
              </div>
              <div className="mt-4"><CIModelDiagram lang="de" /></div>
            </div>

            <div id="prac-Security" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Shield className="w-5 h-5 mr-2 text-indigo-400" /> Information Security Mgmt</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Цель: Защита информации, используемой в организации.</div>
              <p className="text-slate-400 text-sm"><strong>Триада (CIA):</strong> <Term>Confidentiality</Term> (Конфиденциальность), <Term>Integrity</Term> (Целостность), <Term>Availability</Term> (Доступность) + Authentication и Non-repudiation.</p>
            </div>

            <div id="prac-RelMgmt" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Users className="w-5 h-5 mr-2 text-indigo-400" /> Relationship Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Aufbau und Pflege von Beziehungen zu Stakeholdern auf allen Ebenen.</div>
              <p className="text-slate-400 text-sm">Sorgt für das Verständnis der Stakeholder-Bedürfnisse und maximiert die <Term>gemeinsame Wertschöpfung</Term>.</p>
            </div>

            <div id="prac-Supplier" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Award className="w-5 h-5 mr-2 text-indigo-400" /> Supplier Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Management externer Lieferanten.</div>
              <p className="text-slate-400 text-sm">Garantiert, dass Lieferanten ihre Verpflichtungen (UC) erfüllen, um die Servicequalität zu gewährleisten.</p>
            </div>

            <div id="prac-ITAsset" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-400" /> IT Asset Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Lebenszyklus-Management aller IT-Assets.</div>
              <p className="text-slate-400 text-sm"><Term>IT Asset</Term> = jede wertvolle Komponente (Hardware, Software, Lizenzen). Fokus: <strong>finanzieller Wert</strong> und Kostenkontrolle.</p>
            </div>

            <div id="prac-Config" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Settings className="w-5 h-5 mr-2 text-indigo-400" /> Service Configuration Mgmt</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Genaue Informationen über Configuration Items (CI) und deren Beziehungen.</div>
              <p className="text-slate-400 text-sm mb-2"><Term>Configuration Item (CI)</Term> — jede Komponente, die gemanagt werden muss. Fokus: <strong>Struktur und technische Abhängigkeiten</strong>.</p>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-indigo-500/20 text-[10px] text-indigo-200 italic">
                <strong>CMDB:</strong> Zentrale Datenbank aller CIs und Beziehungen.
              </div>
            </div>

            <div id="prac-Event" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Activity className="w-5 h-5 mr-2 text-indigo-400" /> Monitoring & Event Mgmt</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Systemmatische Beobachtung und Management von Events.</div>
              <p className="text-slate-400 text-sm">Event-Typen: <Term>Information</Term>, <Term>Warnung</Term>, <Term>Ausnahme/Exception</Term> (z.B. Incident).</p>
            </div>

            <div id="prac-Release" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 xl:col-span-1 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Play className="w-5 h-5 mr-2 text-blue-400" /> Release Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-blue-500 text-slate-300 text-sm">Zweck: Zurverfügungstellung neuer/geänderter Services.</div>
              <p className="text-slate-400 text-sm">💡 <strong>Business-Entscheidung!</strong> Moment, in dem Funktionen für Nutzer freigegeben werden.</p>
            </div>

            <div id="prac-Deploy" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 xl:col-span-1 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Settings className="w-5 h-5 mr-2 text-blue-400" /> Deployment Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-blue-500 text-slate-300 text-sm">Zweck: Installation von HW/SW in der Live-Umgebung.</div>
              <p className="text-slate-400 text-sm">💡 <strong>Technischer Schritt!</strong> Überführung in die Betriebsumgebung (z.B. via CI/CD).</p>
            </div>
          </div>
        </div>
      )
    }
  ]
};
