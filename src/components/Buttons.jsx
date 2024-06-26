import React from 'react';

const buttons = [
  { text: 'portfolio', emoji: '👜', color: 'text-[#DC9CDF]' },
  { text: 'languages', emoji: '🌐', color: 'text-[#A6B5EB]' },
  { text: 'journey', emoji: '🚀', color: 'text-[#FDC69D]' },
  { text: 'contacts', emoji: '📞', color: 'text-[#B1DAB4]' }
];

function Button({ text, emoji, color, onClick, isActive }) {
  return (
    <button 
      className={`pointer rounded-[1.75rem] shadow-md bg-white hover:duration-500 hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:bg-transparent focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] px-4 py-2 
      ${isActive ? 'bg-transparent shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)]' : ''} 
      mobile-lg:px-5 mobile-lg:py-3 
      desktop:px-8 desktop:py-3 
      3xl:px-12 3xl:py-6 3xl:rounded-[3.5rem]`}
      onClick={() => onClick(text)}
    >
      <p 
        className='font-rock pl-0 text-[1rem] 
        mobile-lg:text-[1.25rem] 
        desktop:text-[0.85rem] desktop:pl-[10px] 
        3xl:pl-[16px]'
      >
        <span 
          className='hidden desktop:inline 
          xl:text-[1rem] 3xl:text-[1.5rem]'>
          {text}<span className={`${color} font-space text-[2rem] -ml-[4px] leading-3 3xl:text-[4rem] 3xl:-ml-[6px]`}>.</span>
        </span>
        <span className='desktop:hidden'>
          {emoji}
        </span>
      </p>
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
          emoji={button.emoji} 
          color={button.color} 
          onClick={handleButtonClick}
          isActive={activeButton === button.text}
        />
      ))}
    </>
  );
}
