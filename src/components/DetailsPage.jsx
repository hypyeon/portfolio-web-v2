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
      <div className={`w-[84vw] h-[68vh] py-4 rounded-3xl relative flex items-center snap-x ${ activeButton !== '' ? 'shadow-[inset_0_8px_12px_2px_rgba(0,0,0,0.1)]' : 'hidden'} ${ activeButton === 'journey' ? 'overflow-x-scroll' : 'overflow-y-scroll'}
      desktop:w-[74vw] desktop:h-[62vh] desktop:mt-16 desktop:overflow-x-scroll desktop:overflow-y-hidden`}>
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
        className="text-xl text-stone-600 font-CSBold tracking-wide relative grid grid-cols-2 gap-4 mt-12
        desktop:flex desktop:flex-row desktop:gap-8"
      >
        <ButtonGroup 
          handleButtonClick={handleButtonClick} 
          activeButton={activeButton}
        />
      </div>
    </div>
  )
}