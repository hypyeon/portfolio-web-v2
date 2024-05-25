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
      className="h-[80vh] w-screen flex flex-row justify-center items-center z-1 text-left snap-center
      desktop:h-screen" 
    >
      <div 
        className='flex justify-center items-center px-20 gap-8 flex-col
        desktop:flex-row
        xl:gap-12'
        style={{ opacity }}
      >
        <div className="relative w-[14vw]">
          <h2 className="font-rock text-center desktop:text-[1.75rem] xl:text-[2.5rem] text-[2.5rem] text-white drop-shadow-[-6px_2px_3px_rgba(0,0,0,0.5)] rotate-[270deg] w-[30vw] h-[10vh] hidden desktop:block">Hayeong Pyeon</h2>
        </div>
        <div 
          className="desktop:bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center desktop:h-[45vh] desktop:w-[35vh] desktop:rounded-none desktop:animate-none relative desktop:shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] desktop:border-0 z-1 bg-[url('./assets/img/profile-pic-m.png')] h-[26vh] w-[22vh] rounded-full animate-bounce-card shadow-none border-4" 
        />
        <div 
          className='w-[16vw] h-[1vh] bg-gray-400 relative rounded-full animate-shadow-blur block
          desktop:hidden' 
        />
        <div 
          className="relative font-ubuntu flex flex-col text-gray-900 w-[68vw] mr-0 gap-2 text-[0.95rem] leading-[1.5rem]
          desktop:w-[34vw] desktop:gap-4 desktop:mr-[6vw] desktop:leading-[1.5rem] desktop:text-[1rem] 
          xl:w-[28vw]"
        >
          <p className="mb-2 text-center tracking-wider text-[1rem] desktop:text-left">
            [ha-young]<span className='text-[#A6B5EB]'> | </span>편하영<span className='text-[#A6B5EB]'> | </span>片河映
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
