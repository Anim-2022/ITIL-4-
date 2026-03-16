import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { GLOSSARY } from '../../data/glossary.js';

// Helper to extract plain text from React nodes
const extractTextFromNode = (node) => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (!node) return '';
  if (Array.isArray(node)) return node.map(extractTextFromNode).join(' ');
  if (node.props && node.props.children) return extractTextFromNode(node.props.children);
  return '';
};

export default function GlobalSearch({ isOpen, onClose, lang, contentData, onNavigate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const searchResults = [];

    // 1. Search Glossary
    GLOSSARY.forEach((term, index) => {
      const de = term.de.toLowerCase();
      const en = term.en.toLowerCase();
      const tip = term.tip.toLowerCase();
      
      if (de.includes(lowerQuery) || en.includes(lowerQuery) || tip.includes(lowerQuery)) {
        searchResults.push({
          id: `glossary-${index}`,
          type: 'glossary',
          title: lang === 'de' ? term.de : term.en,
          subtitle: lang === 'de' ? term.en : term.de,
          content: term.tip,
          icon: <Globe className="w-4 h-4 text-fuchsia-400" />
        });
      }
    });

    // 2. Search Modules Content
    const modules = contentData.studyModules;
    modules.forEach(mod => {
      const modText = extractTextFromNode(mod.content).toLowerCase();
      const titleText = mod.title.toLowerCase();
      
      if (titleText.includes(lowerQuery) || modText.includes(lowerQuery)) {
        // Find a relevant snippet around the match if it's in the text
        const snippetIndex = modText.indexOf(lowerQuery);
        let snippet = '';
        if (snippetIndex !== -1) {
           const start = Math.max(0, snippetIndex - 40);
           const end = Math.min(modText.length, snippetIndex + lowerQuery.length + 40);
           snippet = '...' + modText.substring(start, end) + '...';
        }

        searchResults.push({
          id: `module-${mod.id}`,
          type: 'module',
          title: mod.title,
          targetId: mod.id,
          content: snippet,
          icon: <BookOpen className="w-4 h-4 text-indigo-400" />
        });
      }
    });

    setResults(searchResults);
  }, [query, lang, contentData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative z-10 animate-in slide-in-from-top-4 fade-in duration-200">
        
        {/* Search Input Area */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-800/50">
          <Search className="w-6 h-6 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'de' ? "Suchen (Begriffe, Konzepte...)" : "Поиск (термины, концепты...)"}
            className="flex-1 bg-transparent border-none outline-hidden text-slate-100 placeholder:text-slate-500 text-lg"
          />
          <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-track-slate-800/50 scrollbar-thumb-slate-700">
          {query.trim().length > 0 && query.trim().length < 2 && (
            <div className="p-4 text-center text-slate-500">
              {lang === 'de' ? "Gib mindestens 2 Zeichen ein..." : "Введите хотя бы 2 символа..."}
            </div>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-20" />
              {lang === 'de' ? "Keine Ergebnisse gefunden." : "Ничего не найдено."}
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {lang === 'de' ? "Ergebnisse" : "Результаты"} ({results.length})
              </div>
              
              {results.map(res => (
                <div 
                  key={res.id} 
                  onClick={() => {
                    if (res.type === 'module') {
                      onNavigate(res.targetId);
                      onClose();
                    }
                  }}
                  className={`p-3 rounded-xl border border-transparent flex gap-4 ${
                    res.type === 'module' 
                      ? 'cursor-pointer hover:bg-indigo-900/30 hover:border-indigo-800/50 group' 
                      : 'bg-slate-800/40 border-slate-800'
                  }`}
                >
                  <div className="shrink-0 mt-1 bg-slate-800 p-2 rounded-lg border border-slate-700">
                    {res.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-200 truncate">{res.title}</h4>
                      {res.subtitle && <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">{res.subtitle}</span>}
                    </div>
                    {res.content && (
                      <p className={`text-sm mt-1 line-clamp-2 ${res.type === 'module' ? 'text-slate-400 italic' : 'text-slate-300'}`}>
                        {res.content}
                      </p>
                    )}
                  </div>
                  {res.type === 'module' && (
                    <div className="shrink-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-indigo-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-slate-950 p-3 text-center text-xs text-slate-500 border-t border-slate-800 flex justify-between items-center px-6">
          <span>{lang === 'de' ? "Sucht im Glossar & Lernmaterial" : "Ищет в Глоссарии и Модулях"}</span>
          <span className="flex items-center gap-1 font-mono">
             <kbd className="bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5">esc</kbd> {lang === 'de' ? "zum Schließen" : "закрыть"}
          </span>
        </div>
      </div>
    </div>
  );
}
