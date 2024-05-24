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
      className="h-screen w-screen desktop:snap-center"
    >
      <div className="h-screen w-screen desktop:text-4xl xl:text-5xl flex text-zinc-600 font-rock justify-start items-center desktop:px-[24vw] xl:px-[25vw] z-2 relative bg-gradient-to-b from-neutral-50 from-0% to-transparent to-50% text-2xl pl-[12vw] pr-0">
        <div className='desktop:flex gap-4 flex-col items-start'>
          <p className='desktop:hidden block font-CSBold text-left'>
            Hey there, <br /> I'm Hayeong Pyeon <span className='font-ubuntu'>-</span>
          </p>
          <p className='hidden desktop:block'>
            I'm a 
          </p>
          <p className="tracking-tight desktop:mt-0 mt-4">
            <Typewriter 
              options={{
                strings: ['Software Engineer .', 'Frontend Developer .', 'UI Designer .'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div 
          className='absolute flex desktop:flex-col desktop:left-[2.5rem] desktop:bottom-[2.5rem] desktop:top-auto desktop:gap-3 flex-row top-[1.5rem] left-auto right-[1.75rem] gap-2' 
          style={{ opacity }}>
          <div className='hover:ml-1 hover:duration-200 pointer'>
            <a 
              href="https://www.linkedin.com/in/hayeongpyeon/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={li} 
                className="xl:w-12 xl:h-12 desktop:w-10 desktop:h-10 w-9 h-9" 
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
                className="xl:w-12 xl:h-12 desktop:w-10 desktop:h-10 w-9 h-9" 
              />
            </a>
          </div>
        </div>
        <div 
          className='desktop:absolute desktop:rotate-[270deg] desktop:top-[50vh] desktop:-translate-y-[50%] desktop:right-[1.5rem] desktop:translate-x-[50%] hidden desktop:block' 
          style={{ opacity }}
        >
          <p className="desktop:z-5 desktop:text-[0.65rem] xl:text-[0.85rem] font-ubuntu text-zinc-500 leading-[1.75rem]">Building bridges between technology and people through <span className='text-highlight-green'>captivating</span> design and <span className='text-highlight-blue'>intuitive</span> user interface.</p>
        </div>
        <div 
          className='bg-[url("./assets/img/arrow.png")] bg-cover bg-center h-[4vw] w-[4vw] absolute bottom-[0.5rem] left-[50%] -translate-x-[50%] animate-bounce hidden desktop:block'
        />
      </div>
      {/* <div className="bg-[url('./assets/arrow.png')] bg-cover bg-center h-[4vw] w-[4vw] absolute bottom-12 animate-bounce" /> */}
    </div>
  )
}