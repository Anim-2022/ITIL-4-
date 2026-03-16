/* ─── Term Badge ──────────────────────────────────────────────────── */
const Term = ({ children }) => (
  <span className="inline-block px-1.5 py-0.5 bg-slate-900/80 border border-slate-700/50 rounded text-indigo-300 font-mono text-xs md:text-sm mx-0.5 shadow-sm whitespace-nowrap">
    {children}
  </span>
);

export default Term;
