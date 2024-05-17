import React from 'react';

const projects = [
  { 
    title: 'Accountant Office Business Website', 
    path: 'project_accountant.png',
    description: 'A responsive website designed with Figma and built with HTML, CSS, and JavaScript, from scratch.'
  },
  { 
    title: 'Accountant Office Business Website', 
    path: 'project_accountant.png',
    description: 'A website'
  },
];

function Project({ title, path, description }) {
  return (
    <div className="snap-center pl-[13vw]">
      <h2 className='font-CSBold text-[1.25rem]'>{title}</h2>
      <div className='relative'>
        <p className='absolute left-[50%] bottom-[50%] -translate-x-[50%] -traslate-y-[50%] font-CSReg'>{description}</p>
        <div 
          className={`bg-[url('./assets/img/${path}')] bg-cover bg-center w-[48vw] h-[38vh]`}
        />
      </div>
    </div>
  );
}

export default function ProjectGroup() {
  return (
    <>
      {projects.map((project, index) => (
        <Project 
          key={index} 
          title={project.title} 
          path={project.path} 
          description={project.description}
        />
      ))}
    </>
  );
}
