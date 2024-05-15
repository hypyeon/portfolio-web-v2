import Typewriter from 'typewriter-effect'

export default function LandingPage() {
  return (
    <div 
      className="h-screen w-screen snap-center"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      {/* <div className='blur-[92px]'>
        <div className="h-[40vh] w-[40vh] bg-[#DC9CDF] rounded-full absolute -z-2 top-[24vh] left-[12vw] animate-[bounce_2s_infinite]"></div>
        <div className="h-[28vh] w-[28vh] bg-[#A6B5EB] rounded-full absolute -z-2 top-[52vh] left-[70vw] animate-[bounce_1.5s_infinite]"></div>
      </div>*/}
      <div className="h-screen w-screen xl:text-6xl lg:text-4xl flex flex-row gap-4 text-neutral-700 font-llay justify-start items-center px-[26vw] z-2 relative bg-gradient-to-b from-neutral-50 to-transparent">
        <p className="absolute z-5 top-[1.5rem] left-[2rem] text-[3.5rem] text-neutral-800 font-diaBold">HP<span className="font-space font-black text-[#B1DAB4] -ml-3">.</span></p>
        <p>
          I'm a 
        </p>
        <p className="tracking-tight">
          <Typewriter 
            options={{
              strings: ['Software Engineer.', 'Frontend Developer.', 'UI Designer.'],
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