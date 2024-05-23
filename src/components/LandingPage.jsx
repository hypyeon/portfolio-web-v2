import Typewriter from 'typewriter-effect'
import gh from '../assets/img/contact-github.png';
import li from '../assets/img/contact-linkedin.png';
import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      setOpacity(Math.max(1 - newScrollY / ( window.innerHeight / 1.5 ), 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="h-screen w-screen snap-center"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      {/* <div className='blur-[92px]'>
        <div className="h-[40vh] w-[40vh] bg-[#DC9CDF] rounded-full absolute -z-2 top-[24vh] left-[12vw] animate-[bounce_2s_infinite]"></div>
        <div className="h-[28vh] w-[28vh] bg-[#A6B5EB] rounded-full absolute -z-2 top-[52vh] left-[70vw] animate-[bounce_1.5s_infinite]"></div>
      </div>*/}
      <div className="h-screen w-screen xl:text-5xl lg:text-4xl flex text-zinc-600 font-rock justify-start items-center px-[22vw] z-2 relative bg-gradient-to-b from-neutral-50 from-0% to-transparent to-50%">
        <div className='flex gap-4'>
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
        <div className='absolute flex flex-col left-[2.5rem] bottom-[2.5rem] gap-3' style={{ opacity }}>
          <div className='hover:ml-1 hover:duration-200 pointer'>
            <a 
              href="https://www.linkedin.com/in/hayeongpyeon/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={li} 
                className="lg:w-10 lg:h-10" 
              />
            </a>
          </div>
          <div className='hover:ml-1 hover:duration-200 pointer'>
            <a 
              href="https://github.com/hypyeon" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={gh} 
                className="lg:w-10 lg:h-10" 
              />
            </a>
          </div>
        </div>
        <div className='absolute rotate-[270deg] top-[50vh] -translate-y-[50%] right-[1.5rem] translate-x-[50%]' style={{ opacity }}>
          <p className="z-5 xl:text-xl lg:text-[0.75rem] font-ubuntu text-zinc-500 leading-[1.75rem]">Building bridges between technology and people through <span className='text-highlight-green'>captivating</span> design and <span className='text-highlight-blue'>intuitive</span> user interface.</p>
        </div>
        <div 
          className='bg-[url("./assets/img/arrow.png")] bg-cover bg-center h-[4vw] w-[4vw] absolute lg:bottom-[0.5rem] left-[50%] -translate-x-[50%] animate-bounce'
        />
      </div>
      {/* <div className="bg-[url('./assets/arrow.png')] bg-cover bg-center h-[4vw] w-[4vw] absolute bottom-12 animate-bounce" /> */}
    </div>
  )
}