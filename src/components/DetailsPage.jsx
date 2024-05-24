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
      className="h-[100vh] w-screen flex flex-col justify-center items-center desktop:px-20 desktop:gap-12 bg-gradient-to-b from-transparent to-neutral-50 z-1 snap-end px-0 gap-8"
    >
      <div className={`py-4 rounded-3xl desktop:w-[74vw] desktop:h-[62vh] desktop:mt-16 relative flex items-center desktop:overflow-x-scroll desktop:overflow-y-hidden snap-x ${ activeButton !== '' ? 'transition-shadow shadow-[inset_0_8px_12px_2px_rgba(0,0,0,0.1)] duration-300 ease-in-out' : 'transition-shadow shadow-[inset_0_0_0_0_rgba(0,0,0,1)] duration-300'} w-[84vw] h-[68vh] mt-12 ${ activeButton === 'journey' ? 'overflow-x-scroll' : 'overflow-y-scroll'}`}>
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
        className="desktop:flex desktop:flex-row desktop:gap-8 text-xl text-stone-600 font-CSBold tracking-wide relative grid grid-cols-2 gap-4"
      >
        <ButtonGroup 
          handleButtonClick={handleButtonClick} 
          activeButton={activeButton}
        />
      </div>
    </div>
  )
}