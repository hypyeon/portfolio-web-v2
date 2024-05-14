import Typewriter from 'typewriter-effect'

export default function LandingPage() {
  return (
    <div 
      className="h-[100vh] w-screen snap-center"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div className="h-screen w-screen xl:text-6xl lg:text-4xl flex flex-row gap-3 text-slate-700 font-diaBold justify-center items-center z-2 relative">
        <p>
          I'm a 
        </p>
        <p className="tracking-tight">
          <Typewriter 
            options={{
              strings: ['Frontend Developer.', 'UI Designer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      {/* <div className="bg-[url('./assets/arrow.png')] bg-cover bg-center h-[4vw] w-[4vw] absolute bottom-12 animate-bounce" /> */}
    </div>
  )
}