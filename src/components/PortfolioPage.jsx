export default function PortfolioPage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-col justify-center items-center px-20 gap-16 bg-gradient-to-b from-neutral-50 from-50% to-cyan-50 to-100% z-1 relative snap-center"
    >
      <div
        className="flex flex-row gap-28 text-2xl font-myn"
      >
        <div className="px-12 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer">
          <p>portfolio</p>
        </div>
        <div className="px-12 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer">
          <p>contacts</p>
        </div>
        <div className="px-12 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer">
          <p>education</p>
        </div>
        <div className="px-12 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer">
          <p>herstory</p>
        </div>
      </div>
      <div className="px-12 py-4 rounded-3xl w-[74vw] h-[58vh] shadow-[inset_0_8px_12px_-4px_rgba(0,0,0,0.1)]">

      </div>
    </div>
  )
}