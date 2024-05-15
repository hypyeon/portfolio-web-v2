import React from 'react';

const projects = [
  { 
    title: 'Accountant Office Business Website', 
    path: 'project_accountant.png',
    description: 'A website'
  },
  { 
    title: 'Accountant Office Business Website', 
    path: 'project_accountant.png',
    description: 'A website'
  },
];

function Project({ title, path, description }) {
  return (
    <div className="snap-center pl-[13vw] relative">
      <h2 className='font-diaBold text-[1.25rem]'>{title}</h2>
      <div 
        className={`bg-[url('./assets/img/${path}')] bg-cover bg-center w-[48vw] h-[42vh]`}
      />
      <p className='absolute left-[50%] bottom-[50%] font-llay'>{description}</p>
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
