import React from "react";
import ProjectGroup from "./Projects";

export default function Portfolio() {
  return (
    <div 
      className="w-[84vw] h-[58vh] flex flex-col gap-[10vw] 
      mobile-md:h-[68vh] 
      desktop:flex-row desktop:w-[74vw] desktop:h-[58vh]"
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <ProjectGroup />
    </div>
  );
}