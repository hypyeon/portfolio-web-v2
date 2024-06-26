import ButtonGroup from "./Buttons"
import Portfolio from "./Portfolio"
import React, { useState } from 'react'
import ContactLinks from "./Contacts"
import Languages from "./Languages"
import Journey from "./Journey"

export default function DetailsPage() {
  const [activeButton, setActiveButton] = useState('');
  const handleButtonClick = (text) => setActiveButton(text);
  return (
    <div 
      className="relative h-[100dvh] w-screen snap-start flex flex-col-reverse justify-center items-center px-0 gap-8 
      desktop:px-20 desktop:flex-col desktop:gap-4 3xl:gap-8"
    >
      <div 
        className={`w-[84vw] h-[58vh] rounded-3xl flex items-center snap-x 
        ${ activeButton !== '' ? 'shadow-[inset_0_8px_12px_2px_rgba(0,0,0,0.1)]' : 'hidden'} 
        ${ activeButton === 'journey' ? 'overflow-x-scroll' : 'overflow-y-scroll'}
        mobile-md:h-[68vh] 
        desktop:w-[74vw] desktop:h-[62vh] desktop:mt-12 desktop:overflow-x-scroll desktop:overflow-y-hidden 
        3xl:h-[58vh]`}
      >
        {activeButton === 'portfolio' && (
          <Portfolio />
        )}
        {activeButton === 'languages' && (
          <Languages />
        )}
        {activeButton === 'journey' && (
          <Journey />
        )}
        {activeButton === 'contacts' && (
          <ContactLinks />
        )}
      </div>
      <div
        className="relative flex text-xl text-stone-600 font-CSBold tracking-wide gap-3 mt-0 
        mobile-md:mt-12 
        mobile-lg:gap-4 
        desktop:mt-0 desktop:gap-6 
        xl:gap-12 3xl:gap-16"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <ButtonGroup 
          handleButtonClick={handleButtonClick} 
          activeButton={activeButton}
        />
      </div>
      <div 
        className="absolute bottom-4 font-ubuntu text-[0.75rem] text-gray-400 
        3xl:text-[1rem] 3xl:bottom-8"
      >
        <p>designed & developed by <span className="font-CSBold text-gray-900">HP</span><span className="font-space -ml-[3px] text-[#B1DAB4] text-[1.25rem]">.</span>© {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}