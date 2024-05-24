import React from 'react';

const buttons = [
  { text: 'portfolio', color: 'text-[#DC9CDF]' },
  { text: 'languages', color: 'text-[#FDC69D]' },
  { text: 'journey', color: 'text-[#A6B5EB]' },
  { text: 'contacts', color: 'text-[#B1DAB4]' }
];

function Button({ text, color, onClick, isActive }) {
  return (
    <button 
      className={`pointer px-12 py-3 rounded-[1.75rem] shadow-md bg-white hover:duration-500 hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:bg-transparent focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] mobile:px-4 mobile:py-2 ${isActive ? 'bg-transparent shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)]' : ''}`}
      onClick={() => onClick(text)}
    >
      <p className='font-rock text-[0.85rem] pl-[10px] mobile:text-[0.75rem]'>{text}<span className={`${color} font-space text-[2rem] -ml-[4px] leading-3`}>.</span></p>
    </button>
  );
}

export default function ButtonGroup({ handleButtonClick, activeButton }) {
  return (
    <>
      {buttons.map((button, index) => (
        <Button 
          key={index} 
          text={button.text} 
          color={button.color} 
          onClick={handleButtonClick}
          isActive={activeButton === button.text}
        />
      ))}
    </>
  );
}
