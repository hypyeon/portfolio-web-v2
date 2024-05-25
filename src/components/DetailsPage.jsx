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
      className="h-[100vh] w-screen flex flex-col-reverse justify-center items-center bg-gradient-to-b from-transparent to-neutral-50 z-1 snap-center px-0 gap-8
      desktop:px-20 desktop:gap-12 desktop:flex-col"
    >
      <div 
        className={`w-[84vw] h-[58vh] rounded-3xl relative flex items-center snap-x 
        ${ activeButton !== '' ? 'shadow-[inset_0_8px_12px_2px_rgba(0,0,0,0.1)]' : 'hidden'} 
        ${ activeButton === 'journey' ? 'overflow-x-scroll' : 'overflow-y-scroll'}
        mobile-lg:h-[68vh]
        desktop:w-[74vw] desktop:h-[58vh] desktop:mt-16 desktop:overflow-x-scroll desktop:overflow-y-hidden`}
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
        desktop:gap-8"
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
      <div className="absolute bottom-4 font-ubuntu text-[0.75rem] text-gray-400">
        <p>designed & developed by <span className="font-CSBold text-gray-900">HP</span><span className="font-space -ml-[3px] text-[#B1DAB4] text-[1.25rem]">.</span>© {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}