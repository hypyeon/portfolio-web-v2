import React from 'react'
import Typewriter from 'typewriter-effect'
import useScrollOpacity from '../hooks/useScrollOpacity'

export default function ProfilePage() {
  const { opacity } = useScrollOpacity(2);
  
  return (
    <div 
      className='relative h-[100dvh] w-screen snap-start flex flex-col justify-center items-center px-0 gap-8 text-left 
      desktop:flex-row desktop:px-20 
      xl:gap-12 3xl:gap-16'
      style={{ opacity }}
    >
      <div 
        className="relative w-[14vw]"
        data-aos="fade-right"
        data-aos-duration="1600"
        data-aos-once="false"
      >
        <h2 
          className="font-rock text-center text-[2.5rem] text-neutral-50 drop-shadow-[-6px_2px_3px_rgba(0,0,0,0.4)] rotate-[270deg] w-[30vw] h-[10vh] hidden
          desktop:block desktop:text-[1.75rem] 
          xl:text-[2.5rem] 
          3xl:text-[3.25rem] 3xl:w-[30vw]"
        >Hayeong Pyeon</h2> 
      </div>
      <div 
        className="bg-cover bg-center relative desktop:shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1 bg-[url('./assets/img/profile-pic-m.png')] h-[24vh] w-[20vh] rounded-full animate-bounce-card shadow-none border-4
        mobile-lg:h-[26vh] mobile-lg:w-[22vh] 
        desktop:bg-[url('./assets/img/profile-pic.png')] desktop:h-[45vh] desktop:w-[35vh] desktop:rounded-none desktop:animate-none desktop:border-0 
        3xl:h-[40vh] 3xl:w-[32vh]" 
        data-aos="fade-down"
        data-aos-duration="1600"
        data-aos-once="false"
      />
      <div 
        className='w-[16vw] h-[1vh] bg-gray-400 relative rounded-full animate-shadow-blur block 
        mobile-md:-mt-2
        desktop:hidden' 
        data-aos="fade-in"
        data-aos-duration="1600"
        data-aos-once="false"
      />
      <div 
        className="relative font-ubuntu flex flex-col text-gray-900 mr-0 gap-3 text-[0.85rem] leading-[1.25rem] px-[14vw] 
        mobile-md:text-[0.95rem] mobile-md:px-[12vw] mobile-md:leading-[1.5rem] 
        mobile-lg:px-[14vw] mobile-lg:leading-[1.75rem] mobile-lg:text-[1rem]  
        desktop:w-[34vw] desktop:gap-4 desktop:mr-[6vw] desktop:px-0 
        xl:w-[28vw] 
        3xl:w-[29vw] 3xl:text-[1.75rem] 3xl:leading-[2.75rem] 3xl:gap-5 3xl:mr-[12vw]"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="200"
        data-aos-once="false"
      >
        <p 
          className="mb-2 text-center tracking-wide text-[1rem] 
          desktop:text-left desktop:text-[1.25rem] 
          3xl:text-[2rem] 3xl:mb-6"
        >
          <Typewriter 
            options={{
              strings: ['[ha-young]', '편하영', '片河映'],
              autoStart: true,
              loop: true,
            }}
          />
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
  )
}
