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
      className="h-[100vh] w-screen flex flex-row justify-center items-center z-1 text-left snap-start" 
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2 mobile:bg-gradient-to-b mobile:from-[#A6B5EB] mobile:to-transparent mobile:to-50%"></div>
      <div 
        className='flex flex-row justify-center items-center px-20 gap-6 bg-gray-900 mobile:flex-col'
      >
        <div className="relative w-[14vw]" style={{ opacity }}>
          <h2 className="font-rock text-center text-[2.5rem] text-white drop-shadow-[-6px_2px_3px_rgba(0,0,0,0.5)] rotate-[270deg] w-[30vw] h-[10vh] mobile:hidden">Hayeong Pyeon</h2>
        </div>
        <div 
          className="lg:bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center h-[39vh] w-[30vh] relative shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1 mobile:bg-[url('./assets/img/profile-pic-m.png')] mobile:h-[26vh] mobile:w-[22vh] mobile:rounded-full mobile:animate-bounce-card mobile:shadow-none mobile:border-4" 
          style={{ opacity }}
        />
        <div 
          className='hidden w-[16vw] h-[1vh] bg-gray-400 relative rounded-full animate-shadow-blur mobile:block' 
          style={{ opacity }} 
        />
        <div 
          className="relative w-[30vw] font-ubuntu flex flex-col gap-4 text-zinc-600 text-[1.25rem] mr-[6vw] leading-[1.75rem] mobile:w-[78vw] mobile:mr-0 mobile:gap-2 mobile:text-[0.95rem] mobile:leading-[1.5rem]"
          style={{ opacity }}
        >
          <p className="text-zinc-500 mb-2 mobile:text-center">
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
