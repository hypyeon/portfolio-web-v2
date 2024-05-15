import ButtonGroup from "./Buttons"
import Portfolio from "./Portfolio"

export default function PortfolioPage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-col justify-center items-center px-20 gap-16 bg-gradient-to-b from-transparent to-neutral-50 z-1 snap-end"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div className="py-4 rounded-3xl w-[74vw] h-[58vh] shadow-[inset_0_8px_12px_-4px_rgba(0,0,0,0.1)] relative flex items-center overflow-x-scroll snap-x">
        <Portfolio />
      </div>
      <div
        className="flex flex-row xl:gap-16 lg:gap-16 xl:text-xl lg:text-md text-stone-600 font-diaBold tracking-wide relative"
      >
        <ButtonGroup />
      </div>
    </div>
  )
}