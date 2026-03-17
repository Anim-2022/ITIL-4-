import {
  BookOpen, Layers, Target, Settings, Shield, HelpCircle, Award,
  CheckCircle, AlertCircle, Play, Info, Users, Headset, Activity, ArrowRight,
  TrendingUp, Map, PenTool, Wrench, Truck, RefreshCw, Zap, Eye, MousePointer2
} from 'lucide-react';
import Term from '../../components/Term.jsx';
import AlignmentDiagram from '../../components/diagrams/AlignmentDiagram.jsx';
import SVSDiagram from '../../components/diagrams/SVSDiagram.jsx';
import CIModelDiagram from '../../components/diagrams/CIModelDiagram.jsx';

/* ─── German Content Data ─────────────────────────────────────────── */
export const contentDE = {
  examTips: {
    title: "Prüfungsanalyse & Tipps",
    icon: <Award className="w-6 h-6 lg:w-8 lg:h-8" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-900/20 p-6 lg:p-8 rounded-2xl border border-blue-800/50">
          <h3 className="font-bold text-blue-300 text-xl lg:text-2xl mb-4">Format der Peoplecert-Prüfung</h3>
          <ul className="list-disc pl-6 text-blue-100/90 space-y-3 text-base md:text-lg">
            <li><strong>Anzahl der Fragen:</strong> 40 (Multiple Choice).</li>
            <li><strong>Bestehensgrenze (Pass Mark):</strong> 26 von 40 (65%).</li>
            <li><strong>Zeit:</strong> 60 Minuten. Falls Deutsch nicht deine Muttersprache ist: +15 Min. bei der Anmeldung beantragen (= 75 Min. gesamt)!</li>
            <li><strong>Übersetzung:</strong> Grundkonzepte werden übersetzt (Wert, Leitlinien), Practice-Namen bleiben auf Englisch. <strong>Beide Varianten kennen!</strong></li>
          </ul>
        </div>
        <h3 className="font-bold text-slate-100 text-2xl mt-10">Fragetypen & Lösungsstrategien:</h3>
        <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: '1. Standardfragen', d: 'Eine richtige Antwort aus vier. Teste Definitionen. Achte auf Schlüsselwörter (Marker).' },
            { t: '2. Fehlendes Wort', d: 'In einer offiziellen Definition fehlt ein Begriff. Erfordert genaue Terminologie-Kenntnisse.' },
            { t: '3. Listenfragen', d: '4 Aussagen, davon 2 richtig. Tipp: Finde 1 definitiv falsche und streiche alle Optionen damit.' },
          ].map((c, i) => (
            <div key={i} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-slate-100 text-lg mb-2">{c.t}</h4>
              <p className="text-base text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-slate-100 text-2xl mt-10">Spickzettel (wichtige Marker):</h3>
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
          <ul className="space-y-4 text-base text-slate-300">
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Steht dort <Term>Grundursache / Root Cause</Term> ➡️ <strong>Problem Management</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Steht dort <Term>Wiederherstellung des normalen Servicebetriebs</Term> ➡️ <strong>Incident Management</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Steht dort <Term>Gemeinsame Wertschöpfung / Co-creation</Term> ➡️ <strong>Wert / Value</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Steht dort <Term>Vorab autorisiert, geringes Risiko</Term> ➡️ <strong>Standard-Change</strong></span></li>
            <li className="flex items-start"><span className="text-indigo-400 mr-3">🔹</span><span>Steht dort <Term>Einziger Kontaktpunkt / Single point of contact</Term> ➡️ <strong>Service Desk</strong></span></li>
          </ul>
        </div>
      </div>
    )
  },
  studyModules: [
    {
      id: 'concepts', title: '1. Grundbegriffe', icon: <BookOpen className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-slate-300 text-lg lg:text-xl font-medium leading-relaxed">Das Fundament von ITIL 4: Die IT ist ein vollwertiger Business-Partner. Arbeit wird daran gemessen, ob sie dem Business hilft.</p>
          <div className="mt-8 mb-6"><AlignmentDiagram lang="de" /></div>
          
          <h3 id="roles" className="text-xl lg:text-2xl font-bold text-indigo-400 mb-6 mt-8">Rollen <Term>Servicekonsumenten</Term></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-3 text-indigo-300"><Award className="w-6 h-6" /> <span className="font-bold text-lg">Sponsor</span></div>
              <p className="text-slate-300 text-sm">Genehmigt das Budget für den IT-Service. Zahlt für die Dienstleistung.</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-3 text-indigo-300"><Users className="w-6 h-6" /> <span className="font-bold text-lg">Kunde (Customer)</span></div>
              <p className="text-slate-300 text-sm">Definiert die Anforderungen an den Service und übernimmt die Verantwortung für die Ergebnisse des Servicekonsums.</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-3 text-indigo-300"><Headset className="w-6 h-6" /> <span className="font-bold text-lg">Anwender (User)</span></div>
              <p className="text-slate-300 text-sm">Nutzt den Service im täglichen Betrieb. (Interagiert z.B. mit dem Service Desk).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div id="value" className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Wert <Term>Value / Wert</Term></h3>
              <p className="text-slate-300 text-base mb-4">Wert ist subjektiv wahrgenommener Nutzen. In ITIL 4 entsteht er <strong>gemeinsam</strong> <Term>Gemeinsame Wertschöpfung / Co-creation</Term>: Provider stellt die Ressource bereit, der Wert entsteht erst durch die Nutzung.</p>
            </div>
            <div id="offering" className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Serviceangebot <Term>Service Offering</Term></h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li><strong>1. Güter (Goods):</strong> Übertragung des Eigentumsrechts (z.B. Smartphone).</li>
                <li><strong>2. Zugang zu Ressourcen:</strong> Eigentum bleibt beim Provider (WLAN, Cloud).</li>
                <li><strong>3. Serviceaktionen:</strong> Aufgaben-Ausführung für den Kunden (Passwort reset).</li>
              </ul>
            </div>
          </div>

          <div id="relationships" className="bg-linear-to-r from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-6 lg:p-8 shadow-inner">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Servicebeziehungen <Term>Service Relationships</Term></h3>
            <p className="text-slate-300 text-base mb-4">Die Interaktion zwischen Provider und Konsument umfasst 3 Teile:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                <strong className="text-slate-200 block mb-2">1. Bereitstellung (Provision)</strong>
                <span className="text-slate-400 text-sm">Aktivitäten des Providers (Management von Ressourcen, Bereitstellung von Zugang).</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                <strong className="text-slate-200 block mb-2">2. Konsum (Consumption)</strong>
                <span className="text-slate-400 text-sm">Aktivitäten des Konsumenten (Nutzung der Ressourcen).</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                <strong className="text-slate-200 block mb-2">3. Beziehungsmanagement</strong>
                <span className="text-slate-400 text-sm">Gemeinsame Aktivitäten zur fortlaufenden Wertschöpfung (Co-creation).</span>
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
                <div className="text-fuchsia-400 font-black text-xs uppercase tracking-widest mb-2">Greifbares Resultat</div>
                <h4 className="text-2xl font-black text-slate-100 mb-4"><Term>Ausgabe / Output</Term></h4>
                <p className="text-slate-400 text-sm mb-4 italic">Ein greifbares oder immaterielles Artefakt, das durch eine Aktivität erzeugt wird.</p>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 text-slate-300 text-sm">
                  <strong>Beispiel:</strong> Installierter E-Mail-Server oder abgeschlossenes Training.
                </div>
              </div>

              <div className="bg-linear-to-br from-indigo-900/40 to-slate-900/60 p-6 rounded-2xl border border-indigo-500/30 hover:border-indigo-500/60 transition-colors">
                <div className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-2">Gewünschter Effekt</div>
                <h4 className="text-2xl font-black text-slate-100 mb-4"><Term>Ergebnis / Outcome</Term></h4>
                <p className="text-slate-400 text-sm mb-4 italic">Ein Resultat für einen Stakeholder, das durch einen oder mehrere Outputs ermöglicht wird.</p>
                <div className="bg-indigo-600/20 p-3 rounded-lg border border-indigo-500/30 text-indigo-200 text-sm">
                  <strong>Beispiel:</strong> Mitarbeiter können effizient kommunizieren.
                </div>
              </div>
            </div>
          </div>

          {/* Costs & Risks Balance */}
          <div id="cost-risk" className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 lg:p-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-3">
              <Layers className="w-5 h-5" /> Kosten- und Risiko-Balance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Costs */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-400 font-bold mb-2">
                   <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                   <span><Term>Kosten / Cost</Term></span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-red-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Abgenommen</p>
                    <p className="text-green-400 text-sm font-medium">Kunde muss keine eigene Server-Hardware kaufen/warten.</p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-red-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Auferlegt</p>
                    <p className="text-red-400 text-sm font-medium">Kunde muss monatliche Abo-Gebühren und Internetkosten zahlen.</p>
                  </div>
                </div>
              </div>

              {/* Risks */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-400 font-bold mb-2">
                   <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                   <span><Term>Risiko / Risk</Term></span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-orange-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Reduziert</p>
                    <p className="text-green-400 text-sm font-medium">Provider kümmert sich um Backups und Security-Updates.</p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-orange-900/20">
                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">Neu eingeführt</p>
                    <p className="text-red-400 text-sm font-medium">Abhängigkeit vom Provider ( Vendor Lock-in ) und Internetleitung.</p>
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
                    <Award className="w-7 h-7" /> Die Wert-Formel
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-indigo-500/20">
                      <h4 className="font-bold text-indigo-300 text-lg mb-2 underline decoration-indigo-500/30 underline-offset-4"><Term>Zweckmäßigkeit / Utility</Term></h4>
                      <p className="text-slate-300 text-sm mb-2 italic">"Fit for purpose"</p>
                      <p className="text-slate-400 text-sm font-medium tracking-tight">Erhöht die Performance des Kunden ODER beseitigt Hindernisse.</p>
                      <div className="mt-3 text-[10px] font-bold text-indigo-500 uppercase tracking-widest">WAS der Service macht</div>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-fuchsia-500/20">
                      <h4 className="font-bold text-fuchsia-300 text-lg mb-2 underline decoration-fuchsia-500/30 underline-offset-4"><Term>Einsatzfähigkeit / Warranty</Term></h4>
                      <p className="text-slate-300 text-sm mb-2 italic">"Fit for use"</p>
                      <p className="text-slate-400 text-sm font-medium tracking-tight">Verfügbarkeit, Kapazität, Sicherheit, Kontinuität.</p>
                      <div className="mt-3 text-[10px] font-bold text-fuchsia-500 uppercase tracking-widest">WIE der Service arbeitet</div>
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 flex items-center justify-center p-8 bg-slate-900/80 rounded-3xl border border-slate-700 shadow-2xl">
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Resultat</div>
                    <div className="text-4xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">VALUE</div>
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
      id: 'principles', title: '2. 7 Leitlinien (Principles)', icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-10">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 border-l-4 border-l-indigo-500">
            <p className="text-slate-300 text-lg leading-relaxed">
              <Term>Leitlinien / Guiding Principles</Term> sind Empfehlungen, die eine Organisation in allen Situationen leiten können, unabhängig von Änderungen ihrer Ziele, Strategien oder Arbeitsweisen.
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
                tip: "Wer ist der Service-Konsument? Was ist für ihn wertvoll? (UX, Funktionalität, Preis)." 
              },
              { 
                t: "Dort beginnen, wo man steht", 
                eng: "Start where you are", 
                icon: <Map className="w-8 h-8 text-blue-400" />,
                bg: "from-blue-600/20 to-blue-900/10",
                border: "border-blue-500/30",
                d: "Nicht alles neu bauen! Aktuellen Zustand analysieren und Gutes behalten.", 
                tip: "Nutze die Baseline-Messung. Beobachte direkt (Direct Observation), statt nur Berichten zu trauen." 
              },
              { 
                t: "Iterative Weiterentwicklung", 
                eng: "Progress iteratively with feedback", 
                icon: <RefreshCw className="w-8 h-8 text-indigo-400" />,
                bg: "from-indigo-600/20 to-indigo-900/10",
                border: "border-indigo-500/30",
                d: "Große Vorhaben in kleine, überschaubare Teile zerlegen und stetig Feedback einholen.", 
                tip: "Feedback-Schleifen sind essenziell. Agile Arbeitsweise statt starrer 'Waterfall'-Planung." 
              },
              { 
                t: "Zusammenarbeit fördern", 
                eng: "Collaborate and promote visibility", 
                icon: <Users className="w-8 h-8 text-cyan-400" />,
                bg: "from-cyan-600/20 to-cyan-900/10",
                border: "border-cyan-500/30",
                d: "Silos abbauen! Information und Arbeit im gesamten Team sichtbar machen.", 
                tip: "Stakeholder-Mapping nutzen. Transparenz verhindert Misstrauen und Doppelarbeit." 
              },
              { 
                t: "Ganzheitlich denken", 
                eng: "Think and work holistically", 
                icon: <Layers className="w-8 h-8 text-purple-400" />,
                bg: "from-purple-600/20 to-purple-900/10",
                border: "border-purple-500/30",
                d: "Kein Prozess ist isoliert. Berücksichtige immer alle 4 Dimensionen.", 
                tip: "Ein Fehler in einem kleinen Teil kann das gesamte System (SVS) lahmlegen." 
              },
              { 
                t: "Einfach & Praktisch halten", 
                eng: "Keep it simple and practical", 
                icon: <Zap className="w-8 h-8 text-orange-400" />,
                bg: "from-orange-600/20 to-orange-900/10",
                border: "border-orange-500/30",
                d: "Prozesse mit möglichst wenigen Schritten. Eliminiere alles, was keinen Wert schafft.", 
                tip: "Wenn ein Schritt keinen nutzen bringt -> Weg damit! (Outcome-fokussiert)." 
              },
              { 
                t: "Optimieren & Automatisieren", 
                eng: "Optimize and automate", 
                icon: <Settings className="w-8 h-8 text-fuchsia-400" />,
                bg: "from-fuchsia-600/20 to-fuchsia-900/10",
                border: "border-fuchsia-500/30",
                d: "Menschliche Arbeit für Komplexe Aufgaben, IT für repetitive Routinen.", 
                tip: "PRÜFUNGS-TRAP: Erst optimieren, dann automatisieren. Automatisierter Müll ist immer noch Müll." 
              },
            ].map((p, i) => (
              <div key={i} className={`relative group p-6 lg:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 bg-linear-to-br ${p.bg} ${p.border} hover:shadow-2xl hover:shadow-indigo-500/10`}>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1 italic">Leitlinie {i + 1}</div>
                    <h4 className="text-xl lg:text-2xl font-black text-white mb-1 group-hover:text-indigo-400 transition-colors">{p.t}</h4>
                    <div className="mb-4 inline-block px-3 py-1 bg-slate-950/50 rounded-lg text-sm border border-slate-800">
                      <Term>{p.eng}</Term>
                    </div>
                    <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-6">{p.d}</p>
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 flex gap-3 items-start">
                       <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                       <div>
                         <span className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter block mb-1">Prüfungsfokus</span>
                         <p className="text-xs text-indigo-100/80 leading-snug">{p.tip}</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'dimensions', title: '3. Die 4 Dimensionen', icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-slate-300 text-lg">Um einen stabilen Service zu gewährleisten, müssen 4 Dimensionen <Term>Vier Dimensionen</Term> ausgewogen entwickelt werden.</p>
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
          <div className="flex items-start bg-slate-900/80 p-6 rounded-2xl border border-slate-700">
            <Info className="w-6 h-6 mr-4 shrink-0 text-indigo-400 mt-1" />
            <div><strong className="block text-slate-100 mb-1">Externe Faktoren (PESTLE)</strong><p className="text-slate-400 text-sm">Alle 4 Dimensionen werden durch externe Faktoren beeinflusst: <Term>Political</Term>, <Term>Economic</Term>, <Term>Social</Term>, <Term>Technological</Term>, <Term>Legal</Term>, <Term>Environmental</Term>.</p></div>
          </div>
        </div>
      )
    },
    {
      id: 'svs_svc', title: '4. SVS & SVC', icon: <Settings className="w-6 h-6" />,
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
                <div className="text-fuchsia-400 font-bold uppercase tracking-widest text-xs mb-1">Eingang</div>
                <div className="font-black text-slate-200 text-lg leading-tight">Chance /<br/>Nachfrage</div>
                <div className="text-[10px] text-slate-500 mt-2 uppercase">Opportunity / Demand</div>
              </div>

              {/* The Core System (SVS components) */}
              <div className="flex-1 bg-linear-to-b from-indigo-900/30 to-slate-900/50 rounded-2xl border border-indigo-500/30 p-4 lg:p-6 flex flex-col gap-3">
                
                {/* Layer 1: Guiding Principles */}
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm">
                  <span className="font-bold text-slate-200 text-sm">Leitlinien (Guiding Principles)</span>
                </div>
                
                {/* Layer 2: Governance */}
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm">
                  <span className="font-bold text-slate-200 text-sm">Governance</span>
                </div>
                
                {/* Layer 3: SVC -> The Engine */}
                <div className="bg-indigo-600/20 p-5 rounded-xl border border-indigo-500/50 text-center shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 skeleton-bg"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <Settings className="w-8 h-8 text-indigo-300 mb-2 animate-[spin_10s_linear_infinite]" />
                    <span className="font-black tracking-wide text-indigo-300 text-lg uppercase text-center block">Service-Wertschöpfungskette (SVC)</span>
                    <span className="text-indigo-200/60 text-xs font-medium uppercase tracking-widest mt-1">Der operative Kern</span>
                  </div>
                </div>

                {/* Layer 4: Practices & Continual Improvement */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm flex items-center justify-center">
                    <span className="font-bold text-slate-200 text-sm">Praktiken (34 Practices)</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-600/50 text-center shadow-sm flex items-center justify-center">
                    <span className="font-bold text-slate-200 text-sm">Continual Improvement</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="shrink-0 w-full lg:w-48 bg-slate-900/80 rounded-2xl border border-slate-700 p-6 flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden group hover:border-fuchsia-500/50 transition-colors cursor-default">
                <div className="absolute inset-0 bg-fuchsia-500/5 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="w-16 h-16 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-fuchsia-500/20 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-fuchsia-400 font-bold uppercase tracking-widest text-xs mb-1">Ausgang / Resultat</div>
                <div className="font-black text-transparent bg-clip-text bg-linear-to-r from-slate-100 to-slate-400 text-2xl">WERT</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">Value</div>
              </div>
            </div>
            {/* Diagram */}
            <div className="mt-8 pt-8 border-t border-slate-700/50 hidden lg:block">
               <p className="text-slate-500 text-xs font-bold uppercase mb-4 text-center tracking-widest">Offizielle ITIL 4 Abbildung (SVS)</p>
               <SVSDiagram lang="de" />
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
                <strong className="text-red-400 block mb-1 text-lg">Prüfungsfalle (Exam Trap): SVC ist NICHT linear!</strong>
                <p className="text-red-200/80 text-sm leading-relaxed">Auf dem Foundation-Examen wird oft versucht, das SVC als starren Prozess darzustellen (erst Schritt 1, dann Schritt 2, etc.). Das ist <strong>FALSCH</strong>. Praktiken können jede SVC-Aktivität zu jeder Zeit in beliebiger Reihenfolge nutzen. Es ist ein flexibles Betriebsmodell, kein Wasserfall-Prozess.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { n: 'Planen / Plan', d: 'Sicherstellung eines gemeinsamen Verständnisses der Vision, des aktuellen Status und der Verbesserungsrichtung über alle 4 Dimensionen.', i: <Map className="w-6 h-6 text-indigo-300" />, b: 'Planung' },
                { n: 'Verbessern / Improve', d: 'Sicherstellung der kontinuierlichen Verbesserung von Produkten, Services und Praktiken über alle Wertschöpfungsaktivitäten hinweg.', i: <TrendingUp className="w-6 h-6 text-green-400" />, b: 'Improvement' },
                { n: 'Engagement / Engage', d: 'Gutes Verständnis der Stakeholder-Bedürfnisse, Transparenz und Aufbau von ständigen Beziehungen zu allen Beteiligten.', i: <Users className="w-6 h-6 text-orange-400" />, b: 'Interaktion' },
                { n: 'Design & Transition', d: 'Sicherstellung, dass Produkte und Services die Erwartungen an Qualität, Kosten und Time-to-Market erfüllen.', i: <PenTool className="w-6 h-6 text-fuchsia-400" />, b: 'Erstellung' },
                { n: 'Erhalten/Erstellen / Obtain/Build', d: 'Sicherstellung, dass Service-Komponenten verfügbar sind, WANN und WO sie benötigt werden, und dass sie den Spezifikationen entsprechen.', i: <Wrench className="w-6 h-6 text-blue-400" />, b: 'Komponenten' },
                { n: 'Bereitstellen & Unterstützen / Deliver & Support', d: 'Sicherstellung, dass Services gemäß vereinbarten Spezifikationen (SLAs) bereitgestellt und täglich unterstützt werden.', i: <Truck className="w-6 h-6 text-purple-400" />, b: 'Betrieb' },
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
        </div>
      )
    },
    {
      id: 'practices',
      title: '5. Sekundäre Practices',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg">Für diese 19 Practices wird im Foundation-Examen kein Detailwissen verlangt. Man muss lediglich das <strong>Konzept (Zweck)</strong> auf Ebene eines Satzes verstehen.</p>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Architecture Management', d: 'Erklärung der Unternehmenselemente und ihrer Beziehungen.' },
              { t: 'Business Analysis', d: 'Analyse von Business/Prozessen zur Lösungs-Empfehlung.' },
              { t: 'Capacity & Performance Mgmt', d: 'Sicherstellung der benötigten Kapazität/Leistung von Services.' },
              { t: 'Organizational Change Mgmt', d: 'Management der menschlichen Seite von Veränderungen (Widerstand).' },
              { t: 'Portfolio Management', d: 'Investitionen: Sicherstellung des richtigen Mix an Programmen/Services.' },
              { t: 'Project Management', d: 'Sicherstellung der erfolgreichen Durchführung von Projekten.' },
              { t: 'Risk Management', d: 'Verständnis und Behandlung von Risiken (Opportunities / Threats).' },
              { t: 'Service Financial Mgmt', d: 'Finanzen: Planung, Buchhaltung, Rechnungsstellung.' },
              { t: 'Strategy Management', d: 'Formulierung von Unternehmenszielen und Plänen zu deren Erreichung.' },
              { t: 'Workforce & Talent Mgmt', d: 'Personalmanagement (Skills, Profile, Rollen).' },
              { t: 'Availability Management', d: 'Sicherstellung der Serviceverfügbarkeit gemäß Anforderungen.' },
              { t: 'Service Catalogue Mgmt', d: 'Zentrale Informationsquelle für alle bereitgestellten Services.' },
              { t: 'Service Continuity Mgmt', d: 'Sicherstellung der Verfügbarkeit bei Katastrophen (Disaster Recovery).' },
              { t: 'Service Design', d: 'Design von Services passend zu Geschäftszielen.' },
              { t: 'Service Validation & Testing', d: 'Bestätigung, dass neue Services den Anforderungen entsprechen.' },
              { t: 'Knowledge Management', d: 'Wissensmanagement, Erhalt der Aktualität von Wissen.' },
              { t: 'Measurement & Reporting', d: 'Datenerfassung, Erstellung von Berichten (Dashboards).' },
              { t: 'Software Development & Mgmt', d: 'Entwicklung und Management von Softwareanwendungen.' },
              { t: 'Infrastructure & Platform Mgmt', d: 'Überwachung der Infrastruktur (inkl. Cloud).' }
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
      id: 'core_practices', title: '6. Die 15 Kernpractices', icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 mb-8 sticky top-20 z-20 backdrop-blur-md hidden lg:block">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Navigation:</h4>
            <div className="flex flex-wrap gap-1.5">
              {['Incident', 'Problem', 'Change', 'Service Desk', 'Serv Req', 'SLA', 'Cont Imp', 'Security', 'Rel Mgmt', 'Supplier', 'IT Asset', 'Config', 'Event', 'Release', 'Deploy'].map(p => (
                <a key={p} href={`#prac-${p.replace(' ', '')}`} className="px-2.5 py-1 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors border border-slate-700 hover:border-indigo-500">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900/30 border-l-4 border-indigo-500 p-4 rounded-r-xl mb-6 text-indigo-100 text-sm">
            Diese 15 Practices sind <strong>extrem prüfungsrelevant!</strong> Man muss den exakten Zweck (Zweckmäßigkeit/Definition) kennen, sie voneinander unterscheiden und bei den ersten sieben (von Incident bis Continual Improvement) auch die <strong>Details der Ausführung</strong> beherrschen.
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div id="prac-Incident" className="bg-linear-to-br from-red-900/20 to-slate-900 border border-red-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-red-400 mb-3 text-xl flex items-center"><AlertCircle className="w-6 h-6 mr-2" /> Incident Management</h3>
              <div className="bg-red-950/50 rounded-xl p-4 mb-4 border-l-4 border-red-500 text-red-100">Zweck: <strong>schnellstmögliche Wiederherstellung des normalen Servicebetriebs</strong> <Term>Restore normal service operation</Term>.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong className="text-red-200">Incident:</strong> ungeplante Unterbrechung oder Qualitätsminderung.</li>
                <li>• Priorisierung: Impact (Auswirkung) × Urgency (Dringlichkeit).</li>
                <li>• <strong className="text-red-200">Swarming:</strong> Teams zusammen statt hierarchischer Eskalation.</li>
              </ul>
            </div>
            <div id="prac-Problem" className="bg-linear-to-br from-orange-900/20 to-slate-900 border border-orange-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-orange-400 mb-3 text-xl flex items-center"><HelpCircle className="w-6 h-6 mr-2" /> Problem Management</h3>
              <div className="bg-orange-950/50 rounded-xl p-4 mb-4 border-l-4 border-orange-500 text-orange-100">Zweck: Identifizierung von <strong>Grundursachen</strong> <Term>Root Causes</Term> und Management von Workarounds.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Incident = "Feuer löschen". Problem = "Brandstifter finden".</li>
                <li>• <strong>Workaround:</strong> temporäre Lösung bis permanenter Fix gefunden.</li>
                <li>• 3 Phasen: Identifikation → Untersuchung → Fehlerkontrolle.</li>
              </ul>
            </div>
            <div id="prac-Change" className="bg-linear-to-br from-blue-900/20 to-slate-900 border border-blue-800/40 rounded-3xl p-6 xl:col-span-2 scroll-mt-40">
              <h3 className="font-black text-blue-400 mb-3 text-xl flex items-center"><Settings className="w-6 h-6 mr-2" /> Change Enablement</h3>
              <div className="bg-blue-950/50 rounded-xl p-4 mb-5 border-l-4 border-blue-500 text-blue-100">Zweck: Maximierung erfolgreicher IT-Changes durch ordnungsgemäße <strong>Risikobewertung und Autorisierung</strong>.</div>
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
              <div className="bg-green-950/50 rounded-xl p-4 mb-4 border-l-4 border-green-500 text-green-100">Zweck: <strong>einziger Kontaktpunkt</strong> <Term>Single Point of Contact / SPOC</Term> für alle Nutzer.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Für Nutzer ist der Service Desk "die IT" – prägt das User Experience.</li>
                <li>• <strong>Kritisch:</strong> Empathie und emotionale Intelligenz sind wichtiger als technisches Fachwissen!</li>
              </ul>
            </div>
            <div id="prac-Service Request" className="bg-linear-to-br from-teal-900/20 to-slate-900 border border-teal-800/40 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-teal-400 mb-3 text-xl flex items-center"><CheckCircle className="w-6 h-6 mr-2" /> Service Request Management</h3>
              <div className="bg-teal-950/50 rounded-xl p-4 mb-4 border-l-4 border-teal-500 text-teal-100">Zweck: effiziente Bearbeitung vordefinierter <Term>Service Requests</Term>.</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Incident = Ausfall. Service Request = normaler Teil der Bereitstellung (neue Maus, Zugang).</li>
                <li>• Maximale Standardisierung und Automatisierung anstreben.</li>
              </ul>
            </div>
            <div id="prac-SLA" className="bg-linear-to-br from-purple-900/20 to-slate-900 border border-purple-800/40 rounded-3xl p-6 xl:col-span-2 scroll-mt-40">
              <h3 className="font-black text-purple-400 mb-3 text-xl flex items-center"><Target className="w-6 h-6 mr-2" /> Service Level Management</h3>
              <div className="bg-purple-950/50 rounded-xl p-4 mb-4 border-l-4 border-purple-500 text-purple-100 text-sm">Klare Serviceziele (SLA) festlegen und regelmäßig bewerten.</div>
              <p className="text-slate-300 text-sm mb-4">SLAs müssen auf <Term>Business Outcomes</Term> basieren. Führt <Term>Review Meetings</Term> durch.</p>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/30 text-xs text-slate-300"><strong className="text-purple-300">🍉 Wassermelonen-Effekt:</strong> SLA grün, Nutzer unzufrieden. SLM fordert reales Feedback.</div>
            </div>
            
            <div id="prac-ContImp" className="bg-linear-to-br from-purple-900/20 to-slate-900 border border-purple-800/40 rounded-3xl p-6 xl:col-span-2 scroll-mt-40">
              <h3 className="font-black text-purple-400 mb-3 text-xl flex items-center"><Play className="w-6 h-6 mr-2" /> Continual Improvement</h3>
              <div className="bg-purple-950/50 rounded-xl p-4 mb-4 border-l-4 border-purple-500 text-purple-100 text-sm">Anpassung der Services an veränderte Unternehmensbedürfnisse.</div>
              <p className="text-slate-300 text-sm mb-4">Wichtig: Optimierung ist die Verantwortung <strong>JEDES EINZELNEN</strong> Mitarbeiters.</p>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/30 text-xs text-slate-300 mb-6"><strong className="text-purple-300">CIR-Register:</strong> Datenbank <Term>Continual Improvement Register</Term> für alle Verbesserungsideen.</div>
              <div className="mt-4"><CIModelDiagram lang="de" /></div>
            </div>

            <div id="prac-Security" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Shield className="w-5 h-5 mr-2 text-indigo-400" /> Information Security Mgmt</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Schutz der vom Unternehmen verwendeten Informationen.</div>
              <p className="text-slate-400 text-sm"><strong>Triade (CIA):</strong> <Term>Confidentiality</Term> (Vertraulichkeit), <Term>Integrity</Term> (Integrität), <Term>Availability</Term> (Verfügbarkeit) + Authentifizierung & Nichtabstreitbarkeit.</p>
            </div>

            <div id="prac-RelMgmt" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Users className="w-5 h-5 mr-2 text-indigo-400" /> Relationship Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Aufbau und Pflege strategischer Beziehungen zu Stakeholdern.</div>
              <p className="text-slate-400 text-sm">Sorgt dafür, dass das Verständnis für die Bedürfnisse und Treiber der Stakeholder gestärkt und <Term>gemeinsame Wertschöpfung</Term> maximiert wird.</p>
            </div>

            <div id="prac-Supplier" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Award className="w-5 h-5 mr-2 text-indigo-400" /> Supplier Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Steuerung externer Lieferanten.</div>
              <p className="text-slate-400 text-sm">Garantiert, dass Lieferanten ihre Verträge (Underpinning Contracts - UC) einhalten, um eine nahtlose Qualität für die eigenen Services zu sichern.</p>
            </div>

            <div id="prac-ITAsset" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-400" /> IT Asset Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Lebenszyklus-Management aller IT-Assets.</div>
              <p className="text-slate-400 text-sm">Ein <Term>IT-Asset</Term> ist jede wertvolle Komponente (Hardware, Software, Lizenzen). Fokus liegt voll auf <strong>finanziellem Wert</strong> sowie Kosten-/Risikokontrolle.</p>
            </div>

            <div id="prac-Config" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Settings className="w-5 h-5 mr-2 text-indigo-400" /> Service Config. Mgmt (SCM)</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Genaue Infos über Configuration Items (CI) und ihre Beziehungen.</div>
              <p className="text-slate-400 text-sm">Ein <Term>CI</Term> ist eine verwaltete Komponente. Im Gegensatz zum Asset-Management geht es hier um <strong>technische Struktur und Abhängigkeiten</strong> (wer hängt wovon ab?).</p>
            </div>

            <div id="prac-Event" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Activity className="w-5 h-5 mr-2 text-indigo-400" /> Monitoring & Event Mgmt</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-indigo-500 text-slate-300 text-sm">Zweck: Systematische Service-Überwachung und Erkennung von Events.</div>
              <p className="text-slate-400 text-sm">Event-Typen: <Term>Information</Term> (Login erfolgreich), <Term>Warnung</Term> (Festplatte zu 80% voll), <Term>Ausnahme/Exception</Term> (Serverabsturz = Incident).</p>
            </div>

            <div id="prac-Release" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 xl:col-span-1 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Play className="w-5 h-5 mr-2 text-blue-400" /> Release Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-blue-500 text-slate-300 text-sm">Zweck: Zurverfügungstellen neuer oder geänderter Services.</div>
              <p className="text-slate-400 text-sm">💡 <strong>Business-Entscheidung!</strong> Erst der offizielle Release macht die neue Funktionalität für Nutzer freigegeben.</p>
            </div>

            <div id="prac-Deploy" className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 xl:col-span-1 scroll-mt-40">
              <h3 className="font-black text-slate-200 mb-3 text-lg flex items-center"><Settings className="w-5 h-5 mr-2 text-blue-400" /> Deployment Management</h3>
              <div className="bg-slate-900/50 rounded-xl p-3 mb-3 border-l-4 border-blue-500 text-slate-300 text-sm">Zweck: Installation der Software/Hardware in der Live-Umgebung.</div>
              <p className="text-slate-400 text-sm">💡 <strong>Technischer Schritt!</strong> Code wird auf Server geschoben, aber evtl. noch versteckt (Feature Toggles), bis das Release ansteht.</p>
            </div>
          </div>
        </div>
      )
    }
  ]
};
