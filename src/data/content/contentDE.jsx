import {
  BookOpen, Layers, Target, Settings, Shield, HelpCircle, Award,
  CheckCircle, AlertCircle, Play, Info, Users, Headset, Activity, ArrowRight
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
        <div className="grid gap-6 w-full md:grid-cols-3">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <div className="space-y-6">
          <p className="text-slate-300 text-lg"><Term>Leitlinien / Guiding Principles</Term> — universeller Kompass für komplexe Situationen.</p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {[
              { t: "Wertorientierung", eng: "Focus on value", d: "Jede Aktion muss direkt oder indirekt Wert für Stakeholder schaffen.", tip: "Erst klar definieren, WER Konsument ist und WAS für ihn 'Wert' bedeutet." },
              { t: "Dort beginnen, wo man steht", eng: "Start where you are", d: "Nicht bei Null anfangen! Zuerst den aktuellen Zustand (Baseline) objektiv bewerten.", tip: "Bestehende funktionierende Prozesse und Ressourcen immer wiederverwenden." },
              { t: "Iterative Weiterentwicklung mit Feedback", eng: "Progress iteratively with feedback", d: "Arbeit in überschaubare Iterationen aufteilen (Agile). Keine riesigen Waterfal-Projekte.", tip: "Feedback nach jeder Iteration stellt sicher, dass das Business-Ziel noch aktuell ist." },
              { t: "Zusammenarbeiten und Transparenz fördern", eng: "Collaborate and promote visibility", d: "Isoliertes Arbeiten (Silos) ist der Hauptfeind der Effizienz. Teams müssen zusammenarbeiten.", tip: "Arbeit sichtbar machen (z.B. Kanban). Verborgene Arbeit kann nicht optimiert werden." },
              { t: "Ganzheitlich denken und arbeiten", eng: "Think and work holistically", d: "Kein System existiert isoliert. Änderungen betreffen immer mehrere Bereiche.", tip: "Alle 4 Dimensionen berücksichtigen. Technologie-Update ohne Schulung scheitert!" },
              { t: "Auf Einfachheit und Praktikabilität achten", eng: "Keep it simple and practical", d: "Unnötige Prozesse und Bürokratie eliminieren, die keinen Wert liefern.", tip: "Minimale Anzahl von Schritten für das gewünschte Outcome verwenden." },
              { t: "Optimieren und automatisieren", eng: "Optimize and automate", d: "Menschliche Kreativität für komplexe Aufgaben, Routinen für Maschinen.", tip: "Prüfungsregel: Erst optimieren, DANN automatisieren. Sonst: automatisiertes Chaos!" },
            ].map((p, i) => (
              <div key={i} className={`flex p-6 bg-slate-800/60 border border-slate-700 rounded-2xl ${i === 6 ? 'xl:col-span-2 xl:max-w-3xl xl:mx-auto' : ''}`}>
                <div className="bg-indigo-900/50 text-indigo-400 font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-indigo-700/50 mr-5">{i + 1}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-100 text-lg mb-1">{p.t}</h4>
                  <div className="mb-2"><Term>{p.eng}</Term></div>
                  <p className="text-sm text-slate-300 mb-3">{p.d}</p>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-xs text-indigo-200"><strong className="text-indigo-400">💡 Prüfungsfokus:</strong> {p.tip}</div>
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
        <div className="space-y-8">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
            <h3 className="font-bold text-2xl text-slate-100 mb-4">Service-Wertschöpfungssystem (SVS)</h3>
            <p className="text-slate-300 mb-4">Das <Term>SVS</Term> beschreibt das gesamte Unternehmens-Ökosystem. Input: <Term>Chance / Opportunity</Term> + <Term>Nachfrage / Demand</Term>. Output: <Term>Wert / Value</Term>.</p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {['Leitlinien\n7 Principles', 'Governance\nSteuerung', 'SVC\nOperatives Kern', 'Praktiken\n34 Practices', 'Continual\nImprovement'].map((c, i) => (
                <div key={i} className={`p-4 rounded-xl border text-center ${i === 2 ? 'bg-indigo-900/60 border-indigo-500 col-span-2 lg:col-span-1' : 'bg-slate-900 border-slate-700'}`}>
                  {c.split('\n').map((l, j) => <div key={j} className={j === 0 ? 'font-bold text-indigo-300 text-sm' : 'text-slate-500 text-xs mt-1'}>{l}</div>)}
                </div>
              ))}
            </div>
            <div className="mt-8 hidden lg:block"><SVSDiagram lang="de" /></div>
          </div>
          <div className="bg-linear-to-br from-indigo-950 to-slate-900 p-6 rounded-2xl border border-indigo-800/50">
            <h3 className="font-bold text-2xl text-indigo-300 mb-4">Service-Wertschöpfungskette (SVC)</h3>
            <div className="bg-indigo-900/40 border-l-4 border-fuchsia-500 p-4 rounded-r-xl mb-6 text-indigo-100 text-sm">
              <strong>⚠️ Extrem wichtig:</strong> SVC ist NICHT linear! Keine strikte Reihenfolge 1→2→3. Practices sind NICHT an einen Schritt gebunden.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Planen / Plan', 'Gemeinsames Verständnis der Vision & Strategie über alle 4 Dimensionen.'],
                ['Verbessern / Improve', 'Kontinuierliche Verbesserung aller Produkte, Services und Practices.'],
                ['Engagement / Engage', 'Stakeholder-Interaktion, Aufbau guter Beziehungen.'],
                ['Design & Transition', 'Qualität, Kosten und Time-to-Market neuer Services sicherstellen.'],
                ['Erhalten/Erstellen / Obtain/Build', 'Entwickeln (Build) oder Beschaffen (Obtain) von Komponenten.'],
                ['Bereitstellen & Unterstützen / Deliver & Support', 'Service liefern und täglich unterstützen.'],
              ].map(([n, d], i) => (
                <div key={i} className="bg-slate-900/80 p-4 rounded-xl border border-indigo-900/50">
                  <span className="font-bold text-indigo-300 text-sm block mb-1">{n}</span>
                  <p className="text-slate-400 text-xs">{d}</p>
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
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
