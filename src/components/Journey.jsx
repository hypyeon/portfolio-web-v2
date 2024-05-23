import React from 'react';

const events = [
  { order: 1, year: "2007 - 2018", description: "I left my home country S.Korea and began my journey studying languages overseas. Went to schools in mainland China, the Philippines, and graduated with a B.A. in Global Studies from Ritsumeikan Univ. in Japan in 2018.", position: "up", color: "bg-[#DC9CDF]" },
  { order: 2, year: "2019", description: "I worked at a hotel in Seoul as a main clerk in charge of foreign guests. Taught ESL students on the side.", position: "down", color: "bg-[#FDC69D]" },
  { order: 3, year: "2020 - 2021", description: "Moved to California and attained my green card. Found my interest in web design and started learning how to code through CodeCademy.", position: "up", color: "bg-[#A6B5EB]" },
  { order: 4, year: "2022", description: "Moved to Portland OR and began working part-time as a Localization QA Tester at Welocalize, while freelancing as a web dev & designer.", position: "down", color: "bg-[#B1DAB4]" },
  { order: 5, year: "2023 - current", description: "To further my coding journey, I joined Epicodus and graduated after successfully completing Fullstack Web & Mobile course. Currently interning as a Software Engineer at Fill Marketing.", position: "up", color: "bg-[#DC9CDF]" },
];

export default function Journey() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-between w-[68vw] mx-[16vw]">
        <div className="absolute w-[100vw] border-t-4 border-neutral-200 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"></div>
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`relative ${index % 2 === 0 ? "mt-0.5" : "mb-0.5"} flex flex-col items-center mx-4`}
            style={{ 
              order: event.order, 
              // marginLeft: `${event.order * 4}vw` 
            }}
          >
            <div className={`w-4 h-4 ${event.color} rounded-full flex items-center justify-center`}>
              <span className="bg-white w-2 h-2 rounded-full"></span>
            </div>
            <div className={`absolute ${event.position === "up" ? "top-8" : "bottom-8"} ${event.order === 1 || event.order === 5 ? "w-[26vw]" : "w-[20vw]"} bg-gray-800 text-white p-4 rounded-lg shadow-lg text-[0.75rem]`}>
              <p className="font-rock text-[0.65rem] tracking-wider text-center mb-4">{event.year}</p>
              <p className='text-left font-ubuntu'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}