import { useState, useCallback, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { GLOSSARY } from '../../data/glossary.js';

/* ─── Flashcard Component ─────────────────────────────────────────── */
const Flashcards = ({ lang }) => {
  const de = lang === 'de';
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [catFilter, setCatFilter] = useState('Alle');
  
  const [known, setKnown] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('itil4_flashcards_known') || '[]')); } catch { return new Set(); }
  });

  useEffect(() => { localStorage.setItem('itil4_flashcards_known', JSON.stringify([...known])); }, [known]);

  const cats = ['Alle', ...Array.from(new Set(GLOSSARY.map(g => g.cat)))];
  const pool = catFilter === 'Alle' ? GLOSSARY : GLOSSARY.filter(g => g.cat === catFilter);
  const card = pool[idx % pool.length];

  const go = useCallback((dir) => {
    setFlipped(false);
    setTimeout(() => setIdx(i => (i + dir + pool.length) % pool.length), 120);
  }, [pool.length]);

  const markKnown = () => {
    setKnown(s => { const n = new Set(s); if (n.has(card.de)) n.delete(card.de); else n.add(card.de); return n; });
  };

  useEffect(() => { setIdx(0); setFlipped(false); }, [catFilter]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {cats.map(cat => (
          <button key={cat} onClick={() => setCatFilter(cat)} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${catFilter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'}`}>{cat}</button>
        ))}
      </div>
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-slate-500 text-sm">{idx + 1} / {pool.length} — {card?.cat}</span>
        <span className="text-green-500 text-sm font-bold">✓ {known.size} {de ? 'bekannt' : 'известно'}</span>
      </div>

      {card && (
        <div className="relative w-full cursor-pointer" style={{ perspective: '1200px', height: '240px' }} onClick={() => setFlipped(f => !f)}>
          <div className="w-full h-full transition-transform duration-500 relative" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : '' }}>
            <div className="absolute inset-0 bg-linear-to-br from-indigo-900 to-slate-900 border-2 border-indigo-700/50 rounded-3xl flex flex-col items-center justify-center p-8 shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
              <div className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-4">🇩🇪 Deutsch</div>
              <div className="text-2xl md:text-3xl font-black text-slate-100 text-center leading-tight">{card.de}</div>
              <div className="text-slate-600 text-xs mt-5">{de ? 'Klicken zum Umdrehen →' : 'Нажмите, чтобы перевернуть →'}</div>
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-green-900/60 to-slate-900 border-2 border-green-700/50 rounded-3xl flex flex-col items-center justify-center p-8 shadow-2xl" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <div className="text-green-400 text-xs font-black uppercase tracking-widest mb-4">🇬🇧 English (ITIL)</div>
              <div className="text-xl md:text-2xl font-black text-slate-100 text-center leading-tight mb-3">{card.en}</div>
              {card.tip && <div className="text-indigo-300/70 text-xs text-center max-w-xs leading-relaxed">{card.tip}</div>}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-3 mt-5">
        <button onClick={() => go(-1)} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-black py-3 px-6 rounded-xl transition-all">←</button>
        <button onClick={markKnown} className={`font-bold py-3 px-5 rounded-xl transition-all text-sm ${card && known.has(card.de) ? 'bg-green-700/40 text-green-300 border border-green-700/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
          {card && known.has(card.de) ? '✓' : '○'} {de ? 'Bekannt' : 'Знаю'}
        </button>
        <button onClick={() => { setFlipped(false); setTimeout(() => setIdx(Math.floor(Math.random() * pool.length)), 120); }} className="bg-slate-800 hover:bg-slate-700 text-slate-400 py-3 px-4 rounded-xl transition-all"><RotateCcw className="w-4 h-4" /></button>
        <button onClick={() => go(1)} className="bg-indigo-600 hover:bg-indigo-500 text-white font-black py-3 px-6 rounded-xl transition-all shadow-md">→</button>
      </div>
    </div>
  );
};

export default Flashcards;
