function JobBoardUI() {
  const candidates = [
    { role: "Python Developer", name: "Felonious Gru", init: "F", col: "bg-orange-500" },
    { role: "Front End Wizard", name: "Mel Muselphiem", init: "M", col: "bg-slate-700" },
  ];

  return (
    <div className="relative w-full max-w-sm bg-[#0b1830] border border-slate-800 p-5 rounded-2xl shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-sm font-bold">Let's Find Work</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>

      <div className="space-y-2.5">
        {candidates.map((c) => (
          <div key={c.name} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800/50 hover:bg-slate-800/80 transition-colors">
            <div className={`w-9 h-9 ${c.col} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0`}>
              {c.init}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">{c.role}</p>
              <p className="text-[11px] text-slate-500">{c.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalReach() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-md text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full text-cyan-600">
            Global Reach
          </span>
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <JobBoardUI />
        </div>
      </div>
    </section>
  );
}