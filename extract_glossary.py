import json

# Manually extracted and refined terms from Google Gemini.md following the user's request (German only tips)
# This is a solid subset of the 100+ terms found in the file, focusing on Foundation relevance.

found_terms = [
  {
    "de": "Abnahmekriterien",
    "en": "Acceptance criteria",
    "cat": "Foundation",
    "tip": "Mindestanforderungen für die Akzeptanz eines Services durch Stakeholder."
  },
  {
    "de": "Agil",
    "en": "Agile",
    "cat": "Methodik",
    "tip": "Sammlung von Frameworks für iterative und inkrementelle Bereitstellung."
  },
  {
    "de": "Architecture Management Practice",
    "en": "Architecture Management",
    "cat": "Allg. Management",
    "tip": "Verständnis der Organisationsteile und ihrer Beziehungen."
  },
  {
    "de": "Asset-Register",
    "en": "Asset register",
    "cat": "IT Assets",
    "tip": "Datenbank mit Attributen wie Eigentümer und finanziellem Wert."
  },
  {
    "de": "Verfügbarkeit",
    "en": "Availability",
    "cat": "Service Management",
    "tip": "Fähigkeit eines IT Service oder CI, vereinbarte Funktionen bei Bedarf auszuführen."
  },
  {
    "de": "Availability Management Practice",
    "en": "Availability Management",
    "cat": "Service Management",
    "tip": "Sicherstellung des vereinbarten Maßes an Verfügbarkeit."
  },
  {
    "de": "Baseline",
    "en": "Baseline",
    "cat": "Messung",
    "tip": "Ausgangspunkt zur Bewertung von Fortschritt oder Veränderung."
  },
  {
    "de": "Best Practice",
    "en": "Best practice",
    "cat": "Allgemein",
    "tip": "Nachweislich erfolgreiche Arbeitsweise in mehreren Organisationen."
  },
  {
    "de": "Big Data",
    "en": "Big data",
    "cat": "Technologie",
    "tip": "Nutzung großer Datenmengen für neue Erkenntnisse."
  },
  {
    "de": "Business Analysis Practice",
    "en": "Business analysis",
    "cat": "Allg. Management",
    "tip": "Definition von Bedürfnissen und Empfehlung von Lösungen zur Wertschöpfung."
  },
  {
    "de": "Business Case",
    "en": "Business case",
    "cat": "Strategie",
    "tip": "Rechtfertigung für Ressourcenaufwand mit Infos zu Kosten, Nutzen, Risiken."
  },
  {
    "de": "Geschäftsauswirkungsanalyse (BIA)",
    "en": "Business impact analysis (BIA)",
    "cat": "Kontinuität",
    "tip": "Identifikation kritischer Geschäftsfunktionen und ihrer Abhängigkeiten."
  },
  {
    "de": "Business Relationship Manager",
    "en": "Business relationship manager (BRM)",
    "cat": "Beziehungen",
    "tip": "Rolle zur Pflege guter Kundenbeziehungen."
  },
  {
    "de": "Anruf",
    "en": "Call",
    "cat": "Support",
    "tip": "Interaktion mit dem Service Desk (z.B. Telefonat)."
  },
  {
    "de": "Call/Contact Center",
    "en": "Call/contact centre",
    "cat": "Support",
    "tip": "Organisationseinheit zur Bearbeitung vieler Interaktionen."
  },
  {
    "de": "Fähigkeit",
    "en": "Capability",
    "cat": "Organisation",
    "tip": "Vermögen zur Durchführung einer Aktivität (Organisation, Person, Prozess)."
  },
  {
    "de": "Capacity and Performance Management Practice",
    "en": "Capacity and performance management",
    "cat": "Service Management",
    "tip": "Sicherstellung kosteneffizienter Erfüllung der Leistungsanforderungen."
  },
  {
    "de": "Capacity-Planung",
    "en": "Capacity planning",
    "cat": "Service Management",
    "tip": "Plan zur Ressourcenverwaltung für die Service-Nachfrage."
  },
  {
    "de": "Change-Autorität",
    "en": "Change authority",
    "cat": "Changes",
    "tip": "Person oder Gruppe für die Genehmigung eines Change."
  },
  {
    "de": "Change Control Practice",
    "en": "Change control",
    "cat": "Changes",
    "tip": "Risikobewertung und Genehmigung von Changes zur Erfolgsmaximierung."
  },
  {
    "de": "Change-Modell",
    "en": "Change model",
    "cat": "Changes",
    "tip": "Wiederholbarer Ansatz für das Management bestimmter Change-Arten."
  },
  {
    "de": "Change-Kalender",
    "en": "Change schedule",
    "cat": "Changes",
    "tip": "Kalender mit geplanten und vergangenen Changes."
  },
  {
    "de": "Leistungsverrechnung",
    "en": "Charging",
    "cat": "Finanzen",
    "tip": "Aktivität, die dem Service einen Preis zuweist."
  },
  {
    "de": "Cloud Computing",
    "en": "Cloud computing",
    "cat": "Technologie",
    "tip": "On-Demand Zugriff auf einen Pool konfigurierbarer IT-Leistungen."
  },
  {
    "de": "Compliance",
    "en": "Compliance",
    "cat": "Governance",
    "tip": "Einhaltung von Standards oder Leitlinien."
  },
  {
    "de": "Vertraulichkeit",
    "en": "Confidentiality",
    "cat": "Sicherheit",
    "tip": "Sicherstellung, dass Infos nur Befugten zugänglich sind."
  },
  {
    "de": "Configuration",
    "en": "Configuration",
    "cat": "Config Management",
    "tip": "Anordnung von CIs für die Serviceerbringung."
  },
  {
    "de": "Configuration Item (CI)",
    "en": "Configuration item (CI)",
    "cat": "Config Management",
    "tip": "Alle Komponenten, die für einen IT Service gemanagt werden müssen."
  },
  {
    "de": "Configuration Management Database (CMDB)",
    "en": "CMDB",
    "cat": "Config Management",
    "tip": "Datenbank zur Speicherung von Configuration Records."
  },
  {
    "de": "Configuration Management System (CMS)",
    "en": "CMS",
    "cat": "Config Management",
    "tip": "Tools und Daten zur Unterstützung des Configuration Management."
  },
  {
    "de": "Configuration Record",
    "en": "Configuration record",
    "cat": "Config Management",
    "tip": "Record mit Details zu einem Configuration Item (CI)."
  },
  {
    "de": "Continual Improvement Practice",
    "en": "Continual improvement",
    "cat": "Verbesserung",
    "tip": "Kontinuierliche Anpassung von Practices und Services an Geschäftsanforderungen."
  },
  {
    "de": "Kontinuierliches Deployment",
    "en": "Continuous deployment",
    "cat": "Entwicklung",
    "tip": "Automatisierte Implementierung von Software Changes in Produktion."
  },
  {
    "de": "Kontinuierliche Integration/Bereitstellung",
    "en": "CI/CD",
    "cat": "Entwicklung",
    "tip": "Zusammenführung von Code, Build-Erstellung und Test für Deployment-Bereitschaft."
  },
  {
    "de": "Steuerung",
    "en": "Control",
    "cat": "Risiko",
    "tip": "Methode zum Risikomanagement für Geschäftsziele."
  },
  {
    "de": "Kritischer Erfolgsfaktor (CSF)",
    "en": "Critical success factor (CSF)",
    "cat": "Messung",
    "tip": "Notwendige Voraussetzung für das Erreichen eines Resultats."
  },
  {
    "de": "Kultur",
    "en": "Culture",
    "cat": "Organisation",
    "tip": "Gemeinsame Werte und Verhaltensausrichtung einer Gruppe."
  },
  {
    "de": "Kundenerfahrung (CX)",
    "en": "Customer experience (CX)",
    "cat": "Beziehungen",
    "tip": "Summe aller Interaktionen aus Sicht des Servicekonsumenten."
  },
  {
    "de": "Dashboard",
    "en": "Dashboard",
    "cat": "Messung",
    "tip": "Grafische Echtzeitdarstellung von Daten."
  },
  {
    "de": "Bereitstellung und Support",
    "en": "Deliver and support",
    "cat": "Value Chain",
    "tip": "SVC-Aktivität: Sicherstellung der Serviceerbringung gemäß Erwartungen."
  },
  {
    "de": "Nachfrage",
    "en": "Demand",
    "cat": "SVS",
    "tip": "Input für das SVS auf Basis von Chancen und Bedürfnissen."
  },
  {
    "de": "Deployment",
    "en": "Deployment",
    "cat": "Deployment",
    "tip": "Bereitstellung einer Servicekomponente in einer Umgebung."
  },
  {
    "de": "Design und Transition",
    "en": "Design and transition",
    "cat": "Value Chain",
    "tip": "SVC-Aktivität: Kontinuierliche Erfüllung von Qualität, Kosten und Time-to-Market."
  },
  {
    "de": "Design Thinking",
    "en": "Design thinking",
    "cat": "Methodik",
    "tip": "Nutzerorientierter Ansatz zur Lösung komplexer Probleme."
  },
  {
    "de": "Entwicklungsumgebung",
    "en": "Development environment",
    "cat": "Entwicklung",
    "tip": "Umgebung zum Erstellen oder Modifizieren von IT Services."
  },
  {
    "de": "Digitale Transformation",
    "en": "Digital transformation",
    "cat": "Strategie",
    "tip": "Weiterentwicklung von Geschäftsmodellen durch Technologie."
  },
  {
    "de": "Notfallwiederherstellungspläne",
    "en": "Disaster recovery plans",
    "cat": "Kontinuität",
    "tip": "Definierte Pläne zur Wiederherstellung nach einer Katastrophe."
  },
  {
    "de": "Effektivität",
    "en": "Effectiveness",
    "cat": "Messung",
    "tip": "Maß für die Zielerreichung einer Aktivität oder eines Service."
  },
  {
    "de": "Effizienz",
    "en": "Efficiency",
    "cat": "Messung",
    "tip": "Maß für den richtigen Ressourceneinsatz zur Zielerreichung."
  },
  {
    "de": "Notfall-Change",
    "en": "Emergency change",
    "cat": "Changes",
    "tip": "Change, der schnellstmöglich umgesetzt werden muss."
  },
  {
    "de": "Engagement",
    "en": "Engage",
    "cat": "Value Chain",
    "tip": "SVC-Aktivität: Verständnis der Stakeholder-Bedürfnisse und Transparenz."
  },
  {
    "de": "Umgebung",
    "en": "Environment",
    "cat": "IT-Infrastruktur",
    "tip": "Infrastruktur-Teil für bestimmten Zweck (Live, Test)."
  },
  {
    "de": "Fehlersteuerung",
    "en": "Error control",
    "cat": "Problem Mgmt",
    "tip": "Aktivitäten zum Management von Known Errors."
  },
  {
    "de": "Eskalation",
    "en": "Escalation",
    "cat": "Support",
    "tip": "Übertragung von Verantwortung oder Information bei Problemen."
  },
  {
    "de": "Status",
    "en": "Event",
    "cat": "Monitoring",
    "tip": "Statusänderung mit Bedeutung für das Management eines CIs."
  },
  {
    "de": "Externer Kunde",
    "en": "External customer",
    "cat": "Beziehungen",
    "tip": "Kunde außerhalb der Organisation des Service Providers."
  },
  {
    "de": "Ausfall",
    "en": "Failure",
    "cat": "Support",
    "tip": "Verlust der Fähigkeit zur Spezifikationserfüllung."
  },
  {
    "de": "Feedback-Schleife",
    "en": "Feedback loop",
    "cat": "Methodik",
    "tip": "Nutzung von Outputs als Inputs für denselben Systemteil."
  },
  {
    "de": "Vier Dimensionen des Service Management",
    "en": "Four dimensions of SM",
    "cat": "Dimensionen",
    "tip": "Perspektiven entscheidend für effiziente Wertschöpfung (Menschen, IT, Partner, Prozesse)."
  },
  {
    "de": "Waren",
    "en": "Goods",
    "cat": "Ressourcen",
    "tip": "Materielle Ressourcen, die auf den Konsumenten übertragen werden."
  },
  {
    "de": "Identität",
    "en": "Identity",
    "cat": "Sicherheit",
    "tip": "Eindeutiger Name zur Identifikation von Anwendern oder Rollen."
  },
  {
    "de": "Verbesserung",
    "en": "Improve",
    "cat": "Value Chain",
    "tip": "SVC-Aktivität: Kontinuierliche Verbesserung aller Elemente."
  },
  {
    "de": "Incident Management",
    "en": "Incident management",
    "cat": "Praktiken",
    "tip": "Schnellstmögliche Wiederherstellung des normalen Servicebetriebs."
  },
  {
    "de": "Information Security Policy",
    "en": "Information security policy",
    "cat": "Sicherheit",
    "tip": "Richtlinie zur Steuerung des Information Security Management."
  },
  {
    "de": "Infrastructure and Platform Management Practice",
    "en": "Infrastructure and platform management",
    "cat": "Praktiken",
    "tip": "Überwachung der verwendeten Infrastruktur und Plattformen."
  },
  {
    "de": "Integrität",
    "en": "Integrity",
    "cat": "Sicherheit",
    "tip": "Sicherheitsziel: Modifikation nur durch Autorisierte."
  },
  {
    "de": "Interner Kunde",
    "en": "Internal customer",
    "cat": "Beziehungen",
    "tip": "Kunde innerhalb derselben Organisation wie der Provider."
  },
  {
    "de": "Internet der Dinge (IoT)",
    "en": "Internet of Things",
    "cat": "Technologie",
    "tip": "Vernetzung von Alltagsgeräten über das Internet."
  },
  {
    "de": "IT-Asset Management Practice",
    "en": "IT asset management",
    "cat": "Praktiken",
    "tip": "Management des Lebenszyklus aller IT-Assets."
  },
  {
    "de": "IT-Infrastruktur",
    "en": "IT infrastructure",
    "cat": "IT Assets",
    "tip": "Gesamtheit von HW, SW, Netzwerken und Anlagen."
  },
  {
    "de": "ITIL-Grundprinzipien",
    "en": "ITIL guiding principles",
    "cat": "Leitlinien",
    "tip": "Empfehlungen, die eine Organisation universell leiten."
  },
  {
    "de": "ITIL-Service-Wertschöpfungskette",
    "en": "ITIL service value chain",
    "cat": "SVS / SVC",
    "tip": "Betriebsmodell mit allen wichtigen Aktivitäten (SVC)."
  },
  {
    "de": "Kanban",
    "en": "Kanban",
    "cat": "Methodik",
    "tip": "Methode zur Visualisierung von Arbeit und Engpässen."
  },
  {
    "de": "Key Performance Indicator (KPI)",
    "en": "Key performance indicator",
    "cat": "Messung",
    "tip": "Wichtige Messgröße zur Bewertung des Erfolgs."
  },
  {
    "de": "Knowledge Management Practice",
    "en": "Knowledge management",
    "cat": "Praktiken",
    "tip": "Nutzung von Informationen und Wissen in der Organisation."
  },
  {
    "de": "Known Error",
    "en": "Known error",
    "cat": "Problem Mgmt",
    "tip": "Analysiertes Problem ohne finale Lösung."
  },
  {
    "de": "Lean",
    "en": "Lean",
    "cat": "Methodik",
    "tip": "Maximierung von Mehrwert durch Abfallvermeidung."
  },
  {
    "de": "Lebenszyklus",
    "en": "Lifecycle",
    "cat": "Foundation",
    "tip": "Satz von Phasen im Leben eines Service oder Produkts."
  },
  {
    "de": "Wartbarkeit",
    "en": "Maintainability",
    "cat": "Anforderungen",
    "tip": "Maß für die Einfachheit von Reparatur oder Modifikation."
  },
  {
    "de": "Major Incident",
    "en": "Major incident",
    "cat": "Support",
    "tip": "Incident mit erheblichen Auswirkungen und koordinierter Lösung."
  },
  {
    "de": "Management-System",
    "en": "Management system",
    "cat": "Organisation",
    "tip": "Zusammenwirkende Elemente für Richtlinien und Ziele."
  },
  {
    "de": "Reife",
    "en": "Maturity",
    "cat": "Organisation",
    "tip": "Maß für Zuverlässigkeit und Effektivität von Prozessen."
  },
  {
    "de": "Mean Time Between Failures (MTBF)",
    "en": "MTBF",
    "cat": "Messung",
    "tip": "Messgröße für die Ausfallhäufigkeit (Zuverlässigkeit)."
  },
  {
    "de": "Mean Time to Restore Service (MTRS)",
    "en": "MTRS",
    "cat": "Messung",
    "tip": "Messgröße für die Wiederherstellungsgeschwindigkeit."
  },
  {
    "de": "Messung und Berichterstattung",
    "en": "Measurement and reporting",
    "cat": "Praktiken",
    "tip": "Unterstützung von Entscheidungen durch Reduzierung von Unsicherheit."
  },
  {
    "de": "Minimal funktionsfähiges Produkt (MVP)",
    "en": "MVP",
    "cat": "Methodik",
    "tip": "Produkt mit Basisfunktionen für frühes Kundenfeedback."
  },
  {
    "de": "Missionsaussage",
    "en": "Mission statement",
    "cat": "Strategie",
    "tip": "Kurze Beschreibung des allgemeinen Zwecks einer Organisation."
  },
  {
    "de": "Monitoring and Event Management Practice",
    "en": "Monitoring and event management",
    "cat": "Praktiken",
    "tip": "Systematische Beobachtung und Statusaufzeichnung."
  },
  {
    "de": "Erhalten/Erstellen",
    "en": "Obtain/build",
    "cat": "Value Chain",
    "tip": "SVC-Aktivität: Verfügbarmachung von Servicekomponenten."
  },
  {
    "de": "Betriebstechnik (OT)",
    "en": "Operational technology",
    "cat": "Technologie",
    "tip": "Lösungen zur Steuerung physikalischer Prozesse."
  },
  {
    "de": "Organizational Change Management Practice",
    "en": "Organizational change management",
    "cat": "Praktiken",
    "tip": "Sicherstellung der reibungslosen Umsetzung von Veränderungen."
  },
  {
    "de": "Organisatorische Resilienz",
    "en": "Organizational resilience",
    "cat": "Strategie",
    "tip": "Fähigkeit zur Anpassung an ungeplante äußere Einflüsse."
  },
  {
    "de": "Organisatorische Geschwindigkeit",
    "en": "Organizational velocity",
    "cat": "Organisation",
    "tip": "Schnelligkeit und Effektivität des Arbeitens."
  },
  {
    "de": "Organisationen und Menschen",
    "en": "Organizations and people",
    "cat": "Dimensionen",
    "tip": "Eine der vier Dimensionen des Service Management."
  },
  {
    "de": "Outsourcing",
    "en": "Outsourcing",
    "cat": "Strategie",
    "tip": "Vergabe von Prozessen an externe Lieferanten."
  },
  {
    "de": "Partner und Lieferanten",
    "en": "Partners and suppliers",
    "cat": "Dimensionen",
    "tip": "Eine der vier Dimensionen des SM (Beziehungen zu Dritten)."
  },
  {
    "de": "Partnerschaft",
    "en": "Partnership",
    "cat": "Beziehungen",
    "tip": "Beziehung zur engen Zusammenarbeit für gemeinsame Ziele."
  },
  {
    "de": "Pilottest",
    "en": "Pilot",
    "cat": "Deployment",
    "tip": "Limited Live-Test eines Service."
  },
  {
    "de": "Portfolio Management Practice",
    "en": "Portfolio management",
    "cat": "Praktiken",
    "tip": "Sicherstellung des richtigen Mix aus Programmen und Services."
  },
  {
    "de": "Post Implementation Review (PIR)",
    "en": "PIR",
    "cat": "Changes",
    "tip": "Bewertung des Erfolgs nach der Implementierung eines Change."
  },
  {
    "de": "Problem Management Practice",
    "en": "Problem management",
    "cat": "Praktiken",
    "tip": "Reduzierung von Incidents durch Ursachenidentifizierung."
  },
  {
    "de": "Produktionsumgebung",
    "en": "Production environment",
    "cat": "IT-Infrastruktur",
    "tip": "Siehe Live-Umgebung."
  },
  {
    "de": "Programm",
    "en": "Programme",
    "cat": "Organisation",
    "tip": "Satz zusammengehöriger Projekte."
  },
  {
    "de": "Projekt",
    "en": "Project",
    "cat": "Organisation",
    "tip": "Temporäre Struktur für spezifische Outputs."
  },
  {
    "de": "Quick Win",
    "en": "Quick win",
    "cat": "Verbesserung",
    "tip": "Verbesserung mit schnellem ROI."
  },
  {
    "de": "Record (Aufzeichnung)",
    "en": "Record",
    "cat": "Foundation",
    "tip": "Dokument über erzielte Resultate und Nachweise."
  },
  {
    "de": "Recovery Point Objective (RPO)",
    "en": "RPO",
    "cat": "Kontinuität",
    "tip": "Zeitpunkt, bis zu dem Daten wiederhergestellt werden müssen."
  },
  {
    "de": "Maximale Wiederherstellungszeit (RTO)",
    "en": "RTO",
    "cat": "Kontinuität",
    "tip": "Maximal akzeptabler Zeitraum bis zur Wiederherstellung."
  },
  {
    "de": "Relationship Management Practice",
    "en": "Relationship management",
    "cat": "Praktiken",
    "tip": "Aufbau und Pflege von Verbindungen zu Stakeholdern."
  },
  {
    "de": "Release Management Practice",
    "en": "Release management",
    "cat": "Praktiken",
    "tip": "Zurverfügungstellen neuer Funktionen zur Nutzung."
  },
  {
    "de": "Request-Katalog",
    "en": "Request catalogue",
    "cat": "Support",
    "tip": "Ansicht des Servicekatalogs für Service Requests."
  },
  {
    "de": "Request for Change (RFC)",
    "en": "RFC",
    "cat": "Changes",
    "tip": "Beschreibung eines geplanten Change zur Einleitung der Steuerung."
  },
  {
    "de": "Lösung",
    "en": "Resolution",
    "cat": "Support",
    "tip": "Maßnahme zur Behebung eines Incident oder Problems."
  },
  {
    "de": "Stilllegen",
    "en": "Retire",
    "cat": "Lifecycle",
    "tip": "Dauerhafte Außerbetriebnahme eines Service oder CIs."
  },
  {
    "de": "Risikobewertung",
    "en": "Risk assessment",
    "cat": "Risiko",
    "tip": "Aktivität zur Identifikation und Analyse von Risiken."
  },
  {
    "de": "Risk Management Practice",
    "en": "Risk management",
    "cat": "Praktiken",
    "tip": "Sicherstellung des effektiven Umgangs mit Risiken."
  },
  {
    "de": "Serviceaktion",
    "en": "Service action",
    "cat": "Foundation",
    "tip": "Aktionen zur Erbringung eines Service-Outputs."
  },
  {
    "de": "Servicearchitektur",
    "en": "Service architecture",
    "cat": "Strategie",
    "tip": "Ansicht aller bereitgestellten Services."
  },
  {
    "de": "Service Catalogue Management Practice",
    "en": "Service catalogue management",
    "cat": "Praktiken",
    "tip": "Bereitstellung einer zentralen Quelle für Service-Infos."
  },
  {
    "de": "Service Configuration Management Practice",
    "en": "Service configuration management",
    "cat": "Praktiken",
    "tip": "Genaue Informationen zur Konfiguration von Services."
  },
  {
    "de": "Service Continuity Management Practice",
    "en": "Service continuity management",
    "cat": "Praktiken",
    "tip": "Sicherstellung der Leistung im Katastrophenfall."
  },
  {
    "de": "Service Design Practice",
    "en": "Service design",
    "cat": "Praktiken",
    "tip": "Design zweckmäßiger und einsatzfähiger Services."
  },
  {
    "de": "Service Level",
    "en": "Service level",
    "cat": "Messung",
    "tip": "Messgrößen zur Definition der Servicequalität."
  },
  {
    "de": "Service Level Management Practice",
    "en": "Service level management",
    "cat": "Praktiken",
    "tip": "Festlegung klarer geschäftsbezogener Ziele."
  },
  {
    "de": "Serviceverantwortlicher",
    "en": "Service owner",
    "cat": "Organisation",
    "tip": "Verantwortlicher für die Bereitstellung eines bestimmten Services."
  },
  {
    "de": "Servicebeziehung",
    "en": "Service relationship",
    "cat": "Foundation",
    "tip": "Kooperation zwischen Provider und Konsument."
  },
  {
    "de": "Service Validation and Testing Practice",
    "en": "Service validation and testing",
    "cat": "Praktiken",
    "tip": "Sicherstellung der Anforderungserfüllung."
  },
  {
    "de": "Software Development and Management Practice",
    "en": "Software development and management",
    "cat": "Praktiken",
    "tip": "Sicherstellung der Anforderungserfüllung durch Anwendungen."
  },
  {
    "de": "Sourcing (Vergabe)",
    "en": "Sourcing",
    "cat": "Strategie",
    "tip": "Planung und Beschaffung von Ressourcen."
  },
  {
    "de": "Technische Schulden",
    "en": "Technical debt",
    "cat": "Methodik",
    "tip": "Nacharbeiten durch Bevorzugung von Workarounds."
  },
  {
    "de": "Utility-Anforderungen",
    "en": "Utility requirements",
    "cat": "Anforderungen",
    "tip": "Funktionale Kundenanforderungen."
  },
  {
    "de": "Validation (Validierung)",
    "en": "Validation",
    "cat": "Qualität",
    "tip": "Bestätigung der Spezifikationserfüllung."
  },
  {
    "de": "Wertströme und Prozesse",
    "en": "Value streams and processes",
    "cat": "Dimensionen",
    "tip": "Eine der vier Dimensionen des Service Management."
  }
]

# Write to file for integration
with open('extracted_glossary.json', 'w', encoding='utf-8') as f:
    json.dump(found_terms, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(found_terms)} terms.")
