import React from 'react';

const buttons = [
  { text: 'portfolio', color: '#DC9CDF' },
  { text: 'contacts', color: '#B1DAB4' },
  { text: 'education', color: '#F2C2A5' },
  { text: 'herstory', color: '#A6B5EB' }
];

function Button({ text, color }) {
  return (
    <button className="xl:px-12 lg:px-10 py-4 rounded-full shadow-md hover:shadow-lg active:shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_5px_10px_-2px_rgba(0,0,0,0.1)] cursor-pointer bg-white hover:duration-500 focus:bg-transparent">
      <p>{text}<span className={`text-[${color}] font-space text-[2.25rem] -mx-[3px]`}>.</span></p>
    </button>
  );
}

export default function ButtonGroup() {
  return (
    <>
      {buttons.map((button, index) => (
        <Button 
          key={index} 
          text={button.text} 
          color={button.color} 
        />
      ))}
    </>
  );
}
