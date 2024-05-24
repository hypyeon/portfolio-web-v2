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
      className="h-[100vh] w-screen flex flex-col justify-center items-center px-20 gap-12 bg-gradient-to-b from-transparent to-neutral-50 z-1 snap-end mobile:px-0 mobile:gap-8"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div className={`py-4 rounded-3xl w-[74vw] h-[58vh] relative flex items-center overflow-x-scroll snap-x ${ activeButton !== '' ? 'transition-shadow shadow-[inset_0_8px_12px_2px_rgba(0,0,0,0.1)] duration-300 ease-in-out' : 'transition-shadow shadow-[inset_0_0_0_0_rgba(0,0,0,1)] duration-300'} mobile:w-[84vw] mobile:h-[68vh] mobile:mt-12 ${ activeButton === 'journey' ? 'mobile:overflow-x-scroll' : 'mobile:overflow-y-scroll'}`}>
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
        className="flex flex-row gap-16 text-xl text-stone-600 font-CSBold tracking-wide relative mobile:grid mobile:grid-cols-2 mobile:gap-4"
      >
        <ButtonGroup 
          handleButtonClick={handleButtonClick} 
          activeButton={activeButton}
        />
      </div>
    </div>
  )
}