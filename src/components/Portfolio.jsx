import React from "react";
import ProjectGroup from "./Projects";

export default function Portfolio() {
  return (
    <div className="flex gap-[10vw] mobile:flex-col mobile:w-[84vw] mobile:h-[68vh]">
      <ProjectGroup />
    </div>
  );
}