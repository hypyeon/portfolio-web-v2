import React from 'react';

const events = [
  { order: 1, year: "2007 - 2018", description: "I left my home country S.Korea and began my journey studying languages overseas. Went to schools in mainland China, the Philippines, and graduated with a B.A. in Global Studies from Ritsumeikan Univ. in Japan in 2018.", position: "up", color: "bg-[#DC9CDF]" },
  { order: 2, year: "2019", description: "I worked at a hotel in Seoul as a main clerk in charge of foreign guests. Taught ESL students on the side.", position: "down", color: "bg-[#FDC69D]" },
  { order: 3, year: "2020 - 2021", description: "Moved to California and attained my green card. Found my interest in web design and started learning how to code through CodeCademy.", position: "up", color: "bg-[#A6B5EB]" },
  { order: 4, year: "2022", description: "Moved to Portland OR and began working part-time as a Localization QA Tester at Welocalize, while freelancing as a web dev & designer.", position: "down", color: "bg-[#B1DAB4]" },
  { order: 5, year: "2023 - current", description: "To further my coding journey, I joined Epicodus and graduated after successfully completing Fullstack Web & Mobile course. Currently employed as UI Engineer at Fill Marketing, promoted from a Software Engineer intern role.", position: "up", color: "bg-[#DC9CDF]" },
];

export default function Journey() {
  return (
    <div 
      className="flex flex-col items-center"
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <div 
        className="relative w-[176vw] mx-[32vw] flex justify-between
        desktop:w-[78vw] desktop:mx-[20vw] 
        3xl:w-[60vw]"
      >
        <div 
          className="absolute w-[240vw] border-t-4 border-neutral-200 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]
          desktop:w-[118vw] 
          3xl:w-[100vw]" 
        />
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col items-center mx-4 
            ${index % 2 === 0 ? "mt-0.5" : "mb-0.5"}`}
            style={{ 
              order: event.order, 
            }}
          >
            <div 
              className={`w-4 h-4 flex items-center justify-center rounded-full ${event.color}`}
            >
              <span className="bg-white w-2 h-2 rounded-full"></span>
            </div>
            <div 
              className={`absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg text-[0.75rem] 2xl:p-6 
              ${event.position === "up" ? "top-6 mobile-md:top-8" : "bottom-6 mobile-md:bottom-8"} 
              ${event.order === 1 || event.order === 5 ? "3xl:w-[25vw] 2xl:w-[29vw] xl:w-[31vw] desktop:w-[35vw] w-[64vw]" : "3xl:w-[20vw] desktop:w-[24vw] w-[54vw]"}`}
            >
              <p 
                className="font-rock text-[0.65rem] tracking-wider text-center mb-2 
                mobile-md:mb-4 
                xl:text-[0.8rem] 
                3xl:text-[1.25rem] 3xl:mb-6"
              >{event.year}</p>
              <p 
                className='text-left font-ubuntu 
                xl:text-[1rem] 3xl:text-[1.25rem]'
              >{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}