function InteractiveProfileCardUI() {
  return (
    <div className="w-full max-w-xs bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl relative group">
      <div className="relative h-32 bg-gradient-to-br from-indigo-950 to-blue-900 rounded-xl overflow-hidden mb-4 flex flex-col justify-end p-3">
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold border border-emerald-500/20">
          102 Jobs Completed!
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-slate-900 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="relative z-10">
          <p className="text-white font-bold text-sm leading-none">Dylan</p>
        </div>
      </div>

      <div className="bg-[#030a14] p-3 rounded-xl border border-slate-800/80 mb-3">
        <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide mb-1">Best Client Feedback</p>
        <p className="text-[11px] text-slate-300 italic">"Best Developer Ever!"</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {["Python Dev", "Javascript", "Front End", "Back End", "iOS Development", "+12"].map((skill) => (
          <span key={skill} className="text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ShowcaseTalents() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full text-blue-600">
            Custom Profile
          </span>
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Showcase Your Talents
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <InteractiveProfileCardUI />
        </div>
      </div>
    </section>
  );
}