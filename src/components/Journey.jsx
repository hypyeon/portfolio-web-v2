import React from 'react';

const events = [
  { year: "2007 - 2018", description: "At the age of 13, I left home, S.Korea, and began my journey studying languages overseas. Went to schools in mainland China, the Philippines, and graduated with a B.A. in Global Studies from Ritsumeikan Univ. in Japan.", position: "up", color: "bg-[#DC9CDF]" },
  { year: "2019", description: "I started working at a hotel as a main clerk in charge of foreign guests. Started teaching as an ESL instructor as a side job.", position: "down", color: "bg-[#FDC69D]" },
  { year: "2020 - 2021", description: "Moved to California and attained my green card. In preparing myself for the future, I started learning how to code through CodeCademy.", position: "up", color: "bg-[#A6B5EB]" },
  { year: "2022", description: "Moved to Portland OR and started working part-time as a Localization QA Tester at Welocalize, while freelancing as a web dev & designer.", position: "down", color: "bg-[#B1DAB4]" },
  { year: "2023 - current", description: "Joined Epicodus for a Fullstack course to further my coding journey. After successfully graduating, I'm currently interning as a Software Engineer at Fill Marketing.", position: "up", color: "bg-[#DC9CDF]" },
];

export default function Journey() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="relative w-full flex justify-center">
        <div className="absolute w-[160vw] border-t-4 border-neutral-200"></div>
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`relative ${index % 2 === 0 ? "mt-8" : "mb-8"} flex flex-col items-center`}
          >
            <div className={`w-6 h-6 ${event.color} rounded-full flex items-center justify-center`}>
              <span className="text-white font-bold">
                {index + 1}
              </span>
            </div>
            <div className={`absolute ${event.position === "up" ? "-top-12" : "-bottom-12"} bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[20vw] text-[0.75rem]`}>
              <p className="font-bold">{event.year}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}