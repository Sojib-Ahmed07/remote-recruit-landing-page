function PriceFeature({ label, included }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${included ? "bg-emerald-100" : "bg-red-50"}`}>
        {included ? (
          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      <span className={included ? "text-slate-700" : "text-slate-400"}>{label}</span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-5xl tracking-tight">
            Help Is One Click Away
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Tier */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-slate-400 font-semibold uppercase tracking-wider text-xs mb-1">Basic</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-slate-900 text-5xl font-black tracking-tight">Free</span>
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <PriceFeature label="1 Active Job" included />
                <PriceFeature label="Basic List Placement" included />
                <PriceFeature label="Unlimited Job Applicants" included={false} />
                <PriceFeature label="Invite Unlimited Applicants to Your Job" included={false} />
              </div>
            </div>
            <button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3.5 rounded-xl transition-all border border-slate-300">
              Get Started
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-white border-2 border-blue-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-blue-500/10">
            <div>
              <p className="flex items-center gap-1.5 text-blue-600 font-semibold uppercase tracking-wider text-xs mb-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z" />
                </svg>
                Premium
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-slate-900 text-5xl font-black tracking-tight">$79.99</span>
                <span className="text-slate-500 text-sm">/ Per Month</span>
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <PriceFeature label="Unlimited Job Posts" included />
                <PriceFeature label="Instant Job Post Approval" included />
                <PriceFeature label="Premium List Placement" included />
                <PriceFeature label="Unlimited Job Applicants" included />
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}