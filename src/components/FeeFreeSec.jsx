function PremiumTierCardUI() {
  const perks = [
    "Up to 25 active job posts",
    "Premium Placement & Visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited invites to jobseekers",
  ];

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl shadow-indigo-950/10 border border-slate-100">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-1">Your Membership Tier</p>
          <p className="text-blue-600 font-black text-3xl">Premium</p>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
          RR
        </div>
      </div>

      <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider mb-3">Features</p>
      <div className="space-y-3 mb-6">
        {perks.map((p) => (
          <div key={p} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center bg-emerald-50">
              <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xs font-medium text-slate-600">{p}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
        <span className="text-blue-700 font-black text-sm italic tracking-tight">PayPal</span>
        <div className="text-right">
          <p className="text-[10px] text-slate-400 font-semibold">Upcoming Payment In...</p>
          <p className="text-xs font-bold text-slate-700">14 Days - $79.99</p>
        </div>
      </div>
    </div>
  );
}

export default function FeeFreeSec() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <PremiumTierCardUI />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <span className="inline-flex items-center border border-emerald-400/20 bg-emerald-500/10 backdrop-blur-md text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full text-emerald-600">
            Actually Fee Free
          </span>
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Fee-Free Forever
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.
          </p>
        </div>
      </div>
    </section>
  );
}