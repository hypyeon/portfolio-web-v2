import React, { useState, useEffect } from 'react'

export default function ProfilePage() {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(newScrollY);

      // Calculate the opacity based on the scroll position
      // When on the second page (i.e., scrollY is between windowHeight and 2*windowHeight)
      if (newScrollY >= windowHeight && newScrollY <= 2 * windowHeight) {
        setOpacity(Math.max(1 - (newScrollY - windowHeight) / (windowHeight / 6 ), 0));
      } else if (newScrollY < windowHeight) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="h-[100vh] w-screen flex flex-row justify-center items-center z-1 text-left desktop:snap-start" 
    >
      <div 
        className='flex desktop:flex-row justify-center items-center px-20 gap-8 xl:gap-12 bg-gray-900 flex-col'
      >
        <div className="relative w-[14vw]" style={{ opacity }}>
          <h2 className="font-rock text-center desktop:text-[1.75rem] xl:text-[2.5rem] text-[2.5rem] text-white drop-shadow-[-6px_2px_3px_rgba(0,0,0,0.5)] rotate-[270deg] w-[30vw] h-[10vh] hidden desktop:block">Hayeong Pyeon</h2>
        </div>
        <div 
          className="desktop:bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center desktop:h-[45vh] desktop:w-[35vh] desktop:rounded-none desktop:animate-none relative desktop:shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] desktop:border-0 z-1 bg-[url('./assets/img/profile-pic-m.png')] h-[26vh] w-[22vh] rounded-full animate-bounce-card shadow-none border-4" 
          style={{ opacity }}
        />
        <div 
          className='desktop:hidden w-[16vw] h-[1vh] bg-gray-400 relative rounded-full animate-shadow-blur block' 
          style={{ opacity }} 
        />
        <div 
          className="relative desktop:w-[34vw] xl:w-[28vw] font-ubuntu flex flex-col desktop:gap-4 text-zinc-600 desktop:text-[1rem] desktop:mr-[6vw] desktop:leading-[1.5rem] w-[78vw] mr-0 gap-2 text-[0.95rem] leading-[1.5rem]"
          style={{ opacity }}
        >
          <p className="text-zinc-500 mb-2 text-center desktop:text-left">
            [ha-young]<span className='text-neutral-300'> | </span>편하영<span className='text-neutral-300'> | </span>片河映
          </p>
          <p>
            A self-taught coder transitioned into freelance <span className="text-highlight-purple">web dev and design</span>, and a recent full-stack grad of Epicodus in <span className="text-highlight-green">Portland, OR</span>.
          </p>
          <p>
            My passion lies in creating sleek, user-friendly, responsive websites and applications.
          </p>
          <p>
            Currently interning as a <span className="text-highlight-blue">Software Engineer</span> at a tech startup and continuing with freelance work on building websites for small businesses.
          </p>
        </div>
      </div>
    </div>
  )
}
