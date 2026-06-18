import { useState } from 'react';

const FAQS = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    q: "Can I pay for a whole year?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    q: "What if I need help?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-50 py-24 px-6 md:px-16 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-4xl tracking-tight">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={q} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm md:text-base pr-4">{q}</span>
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center border transition-all flex-shrink-0 ${isOpen ? "bg-blue-600 border-blue-600 text-white rotate-45" : "border-slate-200 text-slate-400"}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-50">
                    <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <button className="border border-slate-300 hover:border-blue-400 hover:text-blue-600 text-slate-600 text-sm font-semibold px-6 py-2.5 rounded-xl transition-all">
            More Questions
          </button>
        </div>
      </div>
    </section>
  );
}