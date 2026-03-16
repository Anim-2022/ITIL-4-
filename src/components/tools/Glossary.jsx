import { useState } from 'react';
import { Search } from 'lucide-react';
import { GLOSSARY } from '../../data/glossary.js';

/* ─── Glossary View ───────────────────────────────────────────────── */
const Glossary = ({ lang }) => {
  const de = lang === 'de';
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('Alle');

  const cats = ['Alle', ...Array.from(new Set(GLOSSARY.map(g => g.cat)))];
  const filtered = GLOSSARY.filter(g => {
    const matchCat = catFilter === 'Alle' || g.cat === catFilter;
    const q = search.toLowerCase();
    const matchSearch = !q || g.de.toLowerCase().includes(q) || g.en.toLowerCase().includes(q) || (g.tip && g.tip.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={de ? 'Begriff suchen (DE oder EN)…' : 'Поиск термина (DE или EN)…'} className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
        </div>
        <select value={catFilter} onChange={e => setCatFilter(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors">
          {cats.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>
      <div className="text-slate-500 text-xs mb-4">{filtered.length} {de ? 'Begriffe' : 'терминов'}</div>
      <div className="bg-slate-900/80 rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="grid grid-cols-12 bg-slate-800/80 px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-700">
          <div className="col-span-4">🇩🇪 Deutsch</div><div className="col-span-5">🇬🇧 English (ITIL)</div><div className="col-span-3">Kategorie</div>
        </div>
        <div className="divide-y divide-slate-800/40">
          {filtered.map((g, i) => (
            <div key={i} className="grid grid-cols-12 px-4 py-3 hover:bg-slate-800/30 transition-colors items-start">
              <div className="col-span-4 font-bold text-slate-100 text-sm pr-3">{g.de}</div>
              <div className="col-span-5 pr-3"><div className="text-indigo-300 font-mono text-sm">{g.en}</div>{g.tip && <div className="text-slate-500 text-xs mt-0.5 font-sans">{g.tip}</div>}</div>
              <div className="col-span-3"><span className="text-[10px] bg-slate-800 border border-slate-700/50 text-slate-500 px-2 py-0.5 rounded-full">{g.cat}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
