const socialIcons = [
  {
    name: "Facebook",
    path: "M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.42V9.41c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.2 0-1.57.74-1.57 1.5v1.8h2.68l-.43 2.91h-2.25V22c4.78-.79 8.44-4.94 8.44-9.94z",
  },
  {
    name: "X",
    path: "M18.9 2H22l-7.6 8.7L22.5 22h-6.6l-5.1-6.7L4.7 22H1.6l8.1-9.3L1 2h6.7l4.7 6.2L18.9 2z",
  },
  {
    name: "Twitter",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    name: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    name: "Snapchat",
    path: "M12 3c3.2 0 5.5 2.5 5.3 6.5 0 .5 0 1-.1 1.4.4.1.9.3 1.3.3.5 0 .9.4.9.8s-.3.7-.7.9c-.3.1-.6.3-.6.5s.2.4.5.6c.5.4 1 .7 1 1.2s-.5.7-1.1.9c-.4.1-.5.3-.6.5-.1.3.1.6.2.8.1.2 0 .5-.3.5-.4.1-1 .1-1.3.2-.3.1-.4.3-.5.5-.2.4-.5.8-1.1.8-.6 0-1.2-.3-1.9-.5-.5-.1-1-.2-1.3-.1-.5 0-1 .2-1.5.4-.7.3-1.4.6-2.2.6s-1.5-.3-2.2-.6c-.5-.2-1-.4-1.5-.4-.4 0-.9.1-1.3.1-.7.2-1.3.5-1.9.5-.6 0-.9-.4-1.1-.8-.1-.2-.2-.4-.5-.5-.3-.1-.9-.1-1.3-.2-.3 0-.4-.3-.3-.5.1-.2.3-.5.2-.8-.1-.2-.2-.4-.6-.5-.6-.2-1.1-.4-1.1-.9s.5-.8 1-1.2c.3-.2.5-.4.5-.6s-.3-.4-.6-.5c-.4-.2-.7-.5-.7-.9s.4-.8.9-.8c.4 0 .84-.08 1.2-.22-.06-.58-.12-1.34-.08-2.2C7.3 4.13 9.1 2 12 2z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#02070e] border-t border-slate-900 px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="font-black text-xl tracking-tight text-white">
              Remote<span className="text-blue-500">Recruit</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {socialIcons.map(({ name, path }) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 font-mono">
          © {new Date().getFullYear()} RemoteRecruit Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}