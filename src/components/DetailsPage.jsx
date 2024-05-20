import ButtonGroup from "./Buttons"
import Portfolio from "./Portfolio"
import React, { useState } from 'react'
import ContactLinks from "./Contacts"

export default function PortfolioPage() {
  const [activeButton, setActiveButton] = useState('portfolio');
  const handleButtonClick = (text) => setActiveButton(text);
  return (
    <div 
      className="h-[100vh] w-screen flex flex-col justify-center items-center px-20 gap-12 bg-gradient-to-b from-transparent to-neutral-50 z-1 snap-end"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div className="py-4 rounded-3xl w-[74vw] h-[58vh] shadow-[inset_0_8px_12px_2px_rgba(0,0,0,0.1)] relative flex items-center overflow-x-scroll snap-x">
        {activeButton === 'portfolio' && (
          <Portfolio />
        )}
        {activeButton === 'contacts' && (
          <ContactLinks />
        )}
      </div>
      <div
        className="flex flex-row xl:gap-16 lg:gap-16 xl:text-xl lg:text-md text-stone-600 font-CSBold tracking-wide relative"
      >
        <ButtonGroup 
          handleButtonClick={handleButtonClick} 
          activeButton={activeButton}
        />
      </div>
    </div>
  )
}