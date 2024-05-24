import React from "react";
import ProjectGroup from "./Projects";

export default function Portfolio() {
  return (
    <div className="flex gap-[10vw] desktop:flex-row desktop:w-[74vw] desktop:h-[58vh] flex-col w-[84vw] h-[68vh]">
      <ProjectGroup />
    </div>
  );
}