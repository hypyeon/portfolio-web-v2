import React from 'react';
import accountant from '../assets/img/project_accountant.png';
import jcd from '../assets/img/project_jcd.png';
import linkup from '../assets/img/project_linkup-zone.png';
import github from '../assets/img/icon-github.png';
import web from '../assets/img/icon-web.png';
import icshop from '../assets/img/project_icecream-shop.png';
import nytimes from '../assets/img/project_ny-times.png';
import currency from '../assets/img/project_currency.png';
import pizza from '../assets/img/project_pizza.png';
import suggester from '../assets/img/project_suggester.png';
import resume from '../assets/img/project_resume.png';

const projects = [
  { 
    title: 'Accountant Office Business Website', 
    color: 'border-[#A6B5EB]',
    path: accountant,
    description: 'A responsive website designed with Figma and built from scratch with HTML, CSS, and JavaScript. On top of his office introduction, the client specifically wanted to have a form submission feature for their customers to book tax consultation appointments as well as a page that introduces his published accounting books and a blog page.',
    padding: 'desktop:pl-[16vw] desktop:pt-0 pl-0 pt-12 mobile-md:pt-10',
    gh: 'https://github.com/hypyeon/phtax',
    site: 'https://www.phtax.co.kr/'
  },
  { 
    title: 'Linkup Zone Messaging App', 
    color: 'border-[#B1DAB4]',
    path: linkup,
    description: "A Capstone project at Epicodus. Linkup Zone is a messaging app that allows users to create an account, log in, and send messages to other users. What sets this app apart from other messaging apps is its time zone features which display with each user's profile, chat rooms, as well as each message sent to one another. The app was built with Redux, Firebase, Firestore, time coversion APIs, React Native and Expo Go.",
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/linkup-zone',
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
    title: "Real-time Today's Top 10 Best Selling Books", 
    color: 'border-[#B1DAB4]',
    path: nytimes,
    description: "An individual project built in expanding the knowledge of React API. This web application fetches data from the New York Times API and displays the top 10 best selling books in real-time. The user can see the cover of each book and use the link to be redirected to shop online. React API and useReducer hook are used, tested with Jest, and styled with SCSS.",
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/NY-Times-API',
    site: 'https://hypyeon.github.io/NY-Times-API/'
  },
  { 
    title: 'Icecream Shop Vendor Tracker', 
    color: 'border-[#DC9CDF]',
    path: icshop,
    description: "An independent project at Epicodus. The Icecream Shop Vendor Tracker is a web application that allows the user to track the icecream flavors and vendors that supply the icecream shop. The user can add, edit, and delete flavors and vendors. The app was built with React with Redux (reducers, actions, Redux Test) and styled with SCSS.",
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/epicodus-project8-inventory-tracker',
    site: 'https://hypyeon.github.io/epicodus-project8-inventory-tracker/'
  },
  { 
    title: "Currency Exchange RESTful API", 
    color: 'border-[#B1DAB4]',
    path: currency,
    description: "The Currency Exchange API is a RESTful API that allows the user to convert one currency to another. The user can input the amount, select the currency to convert from and to, and get the result. The API was built with JavaScript, RESTful API and Webpack, tested with Postman, and styled with SCSS.",
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/epicodus-project6-currency-exchanger?tab=readme-ov-file',
    site: 'https://hypyeon.github.io/epicodus-project6-currency-exchanger/'
  },
  { 
    title: 'Pizza Parlor Online Ordering', 
    color: 'border-[#FDC69D]',
    path: pizza,
    description: 'The Pizza Parlor is a web application that allows the user to order a pizza online. The user can select the size, toppings, and delivery method and see the total price. The app was built in review of Object-oriented JS course, with JavaScript and HTML, tested with TDD method, and styled with SCSS.',
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/Epicodus-project4-pizzaparlor?tab=readme-ov-file',
    site: 'https://hypyeon.github.io/Epicodus-project4-pizzaparlor/'
  },
  { 
    title: 'Programming Language Suggester', 
    color: 'border-[#DC9CDF]',
    path: suggester,
    description: "The Programming Language Suggester is a web application that suggests a programming language based on the user's answers to a series of questions. The app was built with JavaScript, jQuery, and HTML and styled with SCSS.",
    padding: 'pl-[0]',
    gh: 'https://github.com/hypyeon/programming-language-suggester',
    site: 'https://hypyeon.github.io/programming-language-suggester/'
  },
  { 
    title: 'Resume Summary Maker', 
    color: 'border-[#A6B5EB]',
    path: resume,
    description: 'A responsive web application built for my fellow developer students to use to create a resume summary by filling out a form. The user can input their name, pronoun, soft skills, and work experience keywords. The app was built with JavaScript and HTML and styled with SCSS. The app is deployed on GitHub Pages.',
    padding: 'desktop:pl-0 desktop:pr-[16vw] desktop:pb-0 pr-0 pb-12 mobile-md:pb-10',
    gh: 'https://github.com/hypyeon/resume-summary-maker?tab=readme-ov-file',
    site: 'https://hypyeon.github.io/resume-summary-maker/'
  },
];

function Project({ title, color, path, description, padding, gh, site }) {
  return (
    <div 
      className={`${padding} flex flex-col justify-center items-center snap-center gap-3
      desktop:gap-4`}
    >
      <h3 
        className={`${color} font-ubuntu tracking-tight text-neutral-600 border-x-4 px-3 text-[0.85rem]
        desktop:text-[1.05rem] desktop:px-6 
        xl:text-[1.15rem] 3xl:text-[1.5rem]`}
      >{title}</h3>
      <div 
        className='relative w-[64vw] 
        desktop:w-[42vw]'
      >
        <img 
          src={path}
          alt={path}
          className="object-cover rounded-2xl shadow-lg h-[20vh] w-[64vw]
          desktop:h-[40vh] desktop:w-[42vw]"
        />
        <div 
          className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-2xl opacity-0 hover:opacity-100 hover:duration-300 p-0
          desktop:p-8 xl:p-16 3xl:p-24'
        >
          <p 
            className='font-ubuntu text-left text-white pb-10 text-sm leading-6 hidden
            desktop:block desktop:leading-5 
            xl:text-[0.95rem] xl:leading-[1.5rem] 
            3xl:text-[1.15rem] 3xl:leading-[1.75rem]'
          >{description}</p>
          <div 
            className='absolute flex items-end justify-center leading-6 text-neutral-600 text-[0.65rem] font-ubuntu tracking-normal gap-2 bottom-[50%] translate-y-[50%]
            desktop:bottom-6 desktop:translate-y-0 desktop:gap-4 desktop:text-[0.85rem] desktop:font-CSBold desktop:tracking-wide 
            2xl:bottom-12 
            3xl:text-[1rem]'
          >
            {gh && (
              <a className='bg-white rounded-xl flex items-center gap-1 px-2 py-1 hover:mb-1 hover:duration-300 3xl:px-4 3xl:py-2' href={gh} target='_blank'>
                <img 
                  src={github}
                  className='object-cover w-6 h-6'
                />
                <p>Github Repo</p>
              </a>
            )}
            {site && (
              <a className='bg-white rounded-xl flex items-center gap-1 px-2 py-1 hover:mb-1 hover:duration-300 3xl:px-4 3xl:py-2' href={site} target='_blank'>
                <img 
                  src={web}
                  className='object-cover w-6 h-6'
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
