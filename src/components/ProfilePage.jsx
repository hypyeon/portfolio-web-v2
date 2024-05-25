import React from 'react'
import Typewriter from 'typewriter-effect'

export default function ProfilePage() {
  return (
    <div 
      className="h-[90vh] w-screen flex justify-center items-center z-1 text-left snap-center 
      mobile-lg:h-[80vh] 
      desktop:h-[100vh]" 
    >
      <div 
        className='flex flex-col justify-center items-center px-0 gap-8  
        mobile-lg:px-20 
        desktop:flex-row 
        xl:gap-12'
      >
        <div className="relative w-[14vw]">
          <h2 
            className="font-rock text-center text-[2.5rem] text-white drop-shadow-[-6px_2px_3px_rgba(0,0,0,0.5)] rotate-[270deg] w-[30vw] h-[10vh] hidden
            desktop:block desktop:text-[1.75rem] 
            xl:text-[2.5rem]"
          >Hayeong Pyeon</h2> 
        </div>
        <div 
          className="bg-cover bg-center relative desktop:shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1 bg-[url('./assets/img/profile-pic-m.png')] h-[24vh] w-[20vh] rounded-full animate-bounce-card shadow-none border-4
          mobile-lg:h-[26vh] mobile-lg:w-[22vh] 
          desktop:bg-[url('./assets/img/profile-pic.png')] desktop:h-[45vh] desktop:w-[35vh] desktop:rounded-none desktop:animate-none desktop:border-0" 
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
          mobile-lg:text-[0.95rem] mobile-lg:px-[16vw] mobile-lg:leading-[1.5rem] mobile-lg:gap-2 
          desktop:w-[34vw] desktop:gap-4 desktop:mr-[6vw] desktop:leading-[1.5rem] desktop:text-[1rem] 
          xl:w-[28vw]"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="200"
          data-aos-once="false"
        >
          <p 
            className="mb-2 text-center tracking-wide text-[1rem] 
            desktop:text-left"
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
    </div>
  )
}
