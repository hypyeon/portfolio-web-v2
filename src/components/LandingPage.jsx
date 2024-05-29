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
      className="h-screen snap-start flex text-gray-900 font-rock items-center relative bg-gradient-to-b from-neutral-50 to-transparent to-65% pl-[16vw] pr-0 text-[1.25rem]
      mobile-md:pl-[11vw] mobile-md:text-[1.5rem] 
      mobile-lg:pl-[16vw] mobile-lg:text-2xl 
      desktop:h-screen desktop:text-4xl desktop:px-[24vw] 
      xl:text-5xl xl:px-[25vw]"
    >
      <div 
        className='gap-4 flex-col items-start
        desktop:flex'
        style={{ opacity }}
      >
        <p 
          className='block font-CSBold text-left leading-[2rem] 
          mobile-md:leading-[2.25rem]
          desktop:hidden'
          data-aos="fade-left"
          data-aos-duration="1800"
          data-aos-delay="400"
        >
          <span className='text-highlight-blue'>Hey</span> there, <br /> I'm Hayeong Pyeon <span className='font-ubuntu'>-</span>
        </p>
        <p 
          className='hidden desktop:block desktop:text-[1.75rem]'
          data-aos="fade-in"
          data-aos-duration="1600"
          data-aos-delay="200"
        >
          I'm a 
        </p>
        <p 
          className="tracking-tight desktop:mt-0 mt-4"
          data-aos="fade-in"
          data-aos-duration="1600"
          data-aos-delay="1800"
        >
          <Typewriter 
            options={{
              delay: 80,
              strings: ['Software Engineer .', 'Frontend Developer .', 'UI Designer .'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div 
        className='absolute flex flex-row top-[1.5rem] left-auto right-[1.75rem] gap-2 
        desktop:flex-col desktop:left-[2.5rem] desktop:bottom-[2.5rem] desktop:top-auto desktop:gap-3 w-fit' 
        style={{ opacity }}
      >
        <div className='hover:ml-1 hover:duration-200 pointer'>
          <a 
            href="https://www.linkedin.com/in/hayeongpyeon/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-fit'
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
        className='hidden desktop:block desktop:absolute desktop:rotate-[270deg] desktop:top-[50vh] desktop:-translate-y-[50%] desktop:right-[2.5rem] desktop:translate-x-[50%]' 
        style={{ opacity }}
      >
        <p className="desktop:z-5 desktop:text-[0.65rem] xl:text-[0.85rem] font-ubuntu text-zinc-500 leading-[1.75rem]">Building bridges between technology and people through <span className='text-highlight-green'>captivating</span> design and <span className='text-highlight-blue'>intuitive</span> user interface.</p>
      </div>
      <div 
        className='bg-[url("./assets/img/arrow.png")] bg-cover bg-center h-[10vw] w-[10vw] absolute bottom-[0.5rem] animate-bounce left-[46%] -translate-x-[45%] 
        desktop:h-[4vw] desktop:w-[4vw] desktop:-translate-x-[50%] desktop:left-[50%]'
        style={{ opacity }}
      />
    </div>
  )
}