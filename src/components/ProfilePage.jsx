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
      className="h-[100vh] w-screen flex flex-row justify-center items-center px-20 lg:gap-8 z-1 text-left snap-start" 
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div className="relative w-[14vw]" style={{ opacity }}>
        <h2 className="font-rock text-center xl:text-[3rem] lg:text-[1.95rem] text-[#DC9CDF] rotate-[270deg] lg:w-[30vw] lg:h-[10vh]">Hayeong Pyeon</h2>
      </div>
      <div 
        className="bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center h-[39vh] w-[30vh] relative shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1" 
        style={{ opacity }}
      />
      <div 
        className="relative lg:w-[30vw] font-ubuntu flex flex-col lg:gap-2 text-zinc-600 xl:text-[1.25rem] lg:text-md mr-[6vw]"
        style={{ opacity }}
      >
        <p className="text-[rgba(101,101,101,0.8)] mb-2">편하영 : [ha-young] : 片河映</p>
        <p className="leading-[1.5rem]">
          A self-taught coder transitioned into freelance <span className="text-highlight-purple">web dev and design</span>, and a recent full-stack grad of Epicodus in <span className="text-highlight-green">Portland, OR</span>.
        </p>
        <p className="leading-[1.5rem]">
          My passion lies in creating sleek, user-friendly, responsive websites and applications.
        </p>
        <p className="leading-[1.5rem]">
          Currently interning as a <span className="text-highlight-blue">Software Engineer</span> at a tech startup and continuing with freelance work on building websites for small businesses.
        </p>
      </div>
    </div>
  )
}
