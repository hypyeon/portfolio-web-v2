import React from 'react';
import accountant from '../assets/img/project_accountant.png';
import jcd from '../assets/img/project_jcd.png';
import linkup from '../assets/img/project_linkup-zone.png';
import github from '../assets/img/icon-github.png';
import web from '../assets/img/icon-web.png';

const projects = [
  { 
    title: 'Accountant Office Business Website', 
    color: 'border-[#A6B5EB]',
    path: accountant,
    description: 'A responsive website designed with Figma and built from scratch with HTML, CSS, and JavaScript. On top of introduction of his office, the client specifically wanted to have a form submission feature for their customers to book tax consultation appointments as well as a page that introduces his published accounting books and a blog page.',
    padding: 'pl-[16vw]',
    gh: 'https://github.com/hypyeon/phtax',
    site: 'https://www.phtax.co.kr/'
  },
  { 
    title: 'JCD K-BBQ Restaurant Website', 
    color: 'border-[#FDC69D]',
    path: jcd,
    description: 'Another freelance web dev & design project. The client was preparing their new location in Beaverton in October 2023 and wanted a website that showcases restaurant information and menu items. The website was designed with Figma and built with HTML, SCSS, and JavaScript. This website is fully responsive and includes an external link for online delivery and pick-up orders.',
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/jcdkoreanbbq',
    site: 'https://jcdbbq.com/'
  },
  { 
    title: 'Linkup Zone Messaging App', 
    color: 'border-[#B1DAB4]',
    path: linkup,
    description: "A Capstone project at Epicodus. Linkup Zone is a messaging app that allows users to create an account, log in, and send messages to other users. What sets this app apart from other messaging apps is its time zone features which display with each user's profile, chat rooms, as well as each message sent to one another. The app was built with Redux, Firebase, Firestore, time coversion APIs, React Native and Expo Go.",
    padding: 'pl-[0] pr-[16vw]',
    gh: 'https://github.com/hypyeon/linkup-zone',
  },
];

function Project({ title, color, path, description, padding, gh, site }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-[1.5rem] snap-center ${padding}`}>
      <h2 className={`font-CSBold text-[1.5rem] tracking-[0.5px] text-neutral-600 px-6 border-x-4 ${color}`}>{title}</h2>
      <div className='relative w-[42vw]'>
        <img 
          src={path}
          alt={path}
          className="h-[40vh] w-[42vw] object-cover rounded-2xl shadow-lg"
        />
        <div className='absolute inset-0 flex items-center justify-center p-12 bg-black bg-opacity-75 rounded-2xl opacity-0 hover:opacity-100 hover:duration-300'>
          <p className='font-CSReg text-left text-white tracking-wide pb-10'>{description}</p>
          <div className='absolute bottom-6 flex flex items-end justify-center gap-4 font-CSBold leading-6 text-base text-neutral-600'>
            {gh && (
              <a className='bg-white rounded-2xl flex items-center gap-1 px-2 py-1 hover:mb-1 hover:duration-300' href={gh} target='_blank'>
                <img 
                  src={github}
                  className='object-cover w-8 h-8'
                />
                <p>Github Repo</p>
              </a>
            )}
            {site && (
              <a className='bg-white rounded-2xl flex items-center gap-1 px-2 py-1 hover:mb-1 hover:duration-300' href={site} target='_blank'>
                <img 
                  src={web}
                  className='object-cover w-8 h-8'
                />
                <p>Visit Site</p>
              </a>
            )}
          </div>
        </div>
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
          color={project.color}
          path={project.path} 
          description={project.description}
          padding={project.padding}
          gh={project.gh}
          site={project.site}
        />
      ))}
    </>
  );
}
