export default function Hero() {
  return (
    <div className="relative bg-[#061325] overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-1/4 top-10 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute right-10 bottom-0 w-[500px] h-[400px] bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-24 pb-32 px-6">
        <h1 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6">
          RemoteRecruit's Difference
        </h1>

        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there's nothing but you, your talents, and the next step in your career.
        </p>
      </div>

      {/* Wave transition into the white section below, matching the Figma design */}
      <svg
        className="relative block w-full text-white"
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,50 L1440,100 L0,100 Z" fill="currentColor" />
      </svg>
    </div>
  );
}