export default function PortfolioPage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-col justify-center items-center px-20 gap-16 bg-gradient-to-b from-transparent to-neutral-50 z-1 snap-end"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div className="px-12 py-4 rounded-3xl w-[74vw] h-[58vh] shadow-[inset_0_8px_12px_-4px_rgba(0,0,0,0.1)] relative">

      </div>
      <div
        className="flex flex-row xl:gap-28 lg:gap-16 xl:text-xl lg:text-md text-stone-600 font-diaBold tracking-wide relative"
      >
        <button className="xl:px-12 lg:px-10 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] cursor-pointer bg-white hover:duration-300 focus:bg-transparent">
          <p>portfolio<span className="font-space font-black text-[#DC9CDF]">.</span></p>
        </button>
        <button className="xl:px-12 lg:px-10 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] cursor-pointer bg-white hover:duration-300 focus:bg-transparent">
          <p>contacts<span className="font-space font-black text-[#B1DAB4]">.</span></p>
        </button>
        <button className="xl:px-12 lg:px-10 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] cursor-pointer bg-white hover:duration-300 focus:bg-transparent">
          <p>education<span className="font-space font-black text-[#F2C2A5]">.</span></p>
        </button>
        <button className="xl:px-12 lg:px-10 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] cursor-pointer bg-white hover:duration-300 focus:bg-transparent">
          <p>herstory<span className="font-space font-black text-[#A6B5EB]">.</span></p>
        </button>
      </div>
    </div>
  )
}