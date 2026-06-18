export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#061325]/80 backdrop-blur-md border-b border-slate-800/50 px-6 md:px-16 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="leading-tight">
          <p className="font-black text-xl tracking-tight text-white">
            Remote<span className="text-blue-500">Recruit</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-300 text-sm font-medium hover:text-white transition-colors duration-200 px-3 py-2">
          Sign in
        </button>
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-98">
          Sign Up
        </button>
      </div>
    </nav>
  );
}