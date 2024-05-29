import React from 'react'
import Typewriter from 'typewriter-effect'

export default function ProfilePage() {
  return (
    <div 
      className="h-screen w-screen flex flex-col justify-center items-center px-0 gap-8 text-left 
      desktop:flex-row desktop:px-20 
      xl:gap-12" 
    >
      <h2 
        className="w-[14vw] font-rock text-center text-[2.5rem] text-white drop-shadow-[-6px_2px_3px_rgba(0,0,0,0.5)] rotate-[270deg] w-[30vw] h-[10vh] hidden
        desktop:block desktop:text-[1.75rem] 
        xl:text-[2.5rem]"
      >Hayeong Pyeon</h2> 
      <div 
        className="bg-cover bg-center relative desktop:shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1 bg-[url('./assets/img/profile-pic-m.png')] h-[24vh] w-[20vh] rounded-full animate-bounce-card shadow-none border-4
        mobile-lg:h-[26vh] mobile-lg:w-[22vh] 
        desktop:bg-[url('./assets/img/profile-pic.png')] desktop:h-[45vh] desktop:w-[35vh] desktop:rounded-none desktop:animate-none desktop:border-0" 
        data-aos="fade-up"
        data-aos-duration="1800"
        data-aos-delay="200"
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
        className="relative font-ubuntu flex flex-col text-gray-900 mr-0 gap-6 text-[0.85rem] leading-[1.25rem] px-[14vw] 
        mobile-md:text-[0.95rem] mobile-md:px-[12vw] mobile-md:leading-[1.5rem] 
        mobile-lg:px-[14vw] mobile-lg:leading-[1.75rem] mobile-lg:text-[1rem]  
        desktop:w-[34vw] desktop:gap-4 desktop:mr-[6vw] desktop:px-0 
        xl:w-[28vw]"
        data-aos="fade-in"
        data-aos-duration="1600"
        data-aos-delay="400"
      >
        <p 
          className="mb-2 text-center tracking-wide text-[1rem] 
          mobile-md:text-[1.15rem] 
          desktop:text-left desktop:text-[1.25rem]"
        >
          <Typewriter 
            options={{
              delay: 80,
              strings: ['[ha-young]', '편하영', '片河映'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1600"
          data-aos-delay="600"
        >
          A self-taught coder transitioned into freelance <span className="text-highlight-purple">web dev and design</span>, and a recent full-stack grad of Epicodus in <span className="text-highlight-green">Portland, OR</span>.
        </p>
        <p 
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-delay="800"
        >
          My passion lies in creating sleek, user-friendly, responsive websites and applications.
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1600"
          data-aos-delay="1000"
        >
          Currently interning as a <span className="text-highlight-blue">Software Engineer</span> at a tech startup and continuing with freelance work on building websites for small businesses.
        </p>
      </div>
    </div>
  )
}
