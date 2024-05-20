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
      <div className="h-screen w-screen xl:text-5xl lg:text-4xl flex text-zinc-600 font-rock justify-start items-center px-[22vw] z-2 relative bg-gradient-to-b from-neutral-50 to-transparent">
        <div className='flex gap-6'>
          <p>
            I'm a 
          </p>
          <p className="tracking-tight">
            <Typewriter 
              options={{
                strings: ['Software Engineer .', 'Frontend Developer .', 'UI Designer .'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <p className="absolute z-5 lg:bottom-[3.5rem] left-[50%] -translate-x-[50%] xl:text-xl lg:text-[1rem] font-CSReg text-zinc-600 tracking-[0.75px] leading-[1.75rem] w-screen">Building bridges between technology and people <br /> through <span className='text-highlight-green'>captivating</span> design and <span className='text-highlight-blue'>intuitive</span> user interface.</p>
        <div 
          className='bg-[url("./assets/img/arrow.png")] bg-cover bg-center h-[4vw] w-[4vw] absolute lg:bottom-[0.5rem] left-[50%] -translate-x-[50%] animate-[bounce_1.5s_infinite]'
        />
      </div>
      {/* <div className="bg-[url('./assets/arrow.png')] bg-cover bg-center h-[4vw] w-[4vw] absolute bottom-12 animate-bounce" /> */}
    </div>
  )
}