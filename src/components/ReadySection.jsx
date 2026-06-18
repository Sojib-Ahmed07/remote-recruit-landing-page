function DashboardPreviewUI() {
  const navItems = ["Find Work", "My Jobs", "Saved", "Settings"];

  return (
    <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex text-left">
      <div className="w-28 bg-[#061325] p-4 space-y-4 flex-shrink-0">
        <p className="text-white text-xs font-bold mb-4">
          Remote<span className="text-blue-400">Recruit</span>
        </p>
        <div className="space-y-2">
          {navItems.map((item, idx) => (
            <p
              key={item}
              className={`text-[10px] font-medium px-2 py-1.5 rounded-md ${idx === 0 ? "bg-blue-600 text-white" : "text-slate-400"}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4">
        <p className="text-slate-400 text-[10px] mb-0.5">Welcome Max</p>
        <p className="text-slate-900 font-bold text-sm mb-3">Let's Find Work</p>
        <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg px-2 py-1.5 mb-3">
          <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <span className="text-[10px] text-slate-400">Search</span>
        </div>
        <p className="text-[9px] font-semibold text-slate-400 uppercase mb-1.5">Recent Jobs</p>
        <div className="space-y-1.5">
          {[1, 2].map((i) => (
            <div key={i} className="border border-slate-100 rounded-lg p-2">
              <p className="text-[9px] font-semibold text-slate-700 leading-tight">
                Senior UI/UX Designer needed for ongoing support
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReadySection() {
  return (
    <section className="relative bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute left-12 top-12 w-6 h-6 rounded-full bg-amber-400" />
      <div className="absolute right-1/3 bottom-16 w-3 h-3 rounded-full bg-blue-500" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex justify-center md:justify-start">
          <DashboardPreviewUI />
        </div>
        <div className="space-y-6">
          <span className="inline-flex items-center border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full text-blue-600">
            Are You Ready?
          </span>
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Help is only a few clicks away!
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Click below to get set up super quickly and find help now!
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all inline-flex items-center gap-2">
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}