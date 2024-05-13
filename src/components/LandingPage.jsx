export default function LandingPage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-col justify-center items-center px-20 gap-16 bg-gradient-to-b from-neutral-50 to-transparent z-1 relative snap-center"
    >
      <div className="w-[42vw] text-6xl flex flex-col gap-6 text-slate-700">
        <p className="font-space text-left bg-gradient-to-r from-teal-500 from-0% to-stone-600 to-50% inline-block text-transparent bg-clip-text">Frontend Dev.</p>
        <p className="font-myn text-right bg-gradient-to-r from-stone-600 from-60% to-cyan-500 to-100% inline-block text-transparent bg-clip-text">UI Engineer.</p>
      </div>
      <p
        className="text-xl text-left font-space text-stone-500 tracking-tight"
      >
        I build bridges between users and technology 
        through <span className="text-teal-700 tracking-tight font-myn">captivating</span> design<span className="text-teal-500 font-black px-1">.</span>
      </p>
    </div>
  )
}