import React from 'react';
import gh from '../assets/img/contact-github.png';
import li from '../assets/img/contact-linkedin.png';
import mail from '../assets/img/contact-gmail.png';
import ig from '../assets/img/contact-ig.png';
import dc from '../assets/img/contact-discord.png';
import bc from '../assets/img/biz_card.png';

const contacts = [
  { 
    path: gh, 
    link: 'https://github.com/hypyeon' 
  },
  { 
    path: mail, 
    link: 'mailto:hayeong.pyeon@gmail.com' 
  },
  { 
    path: li, 
    link: 'https://www.linkedin.com/in/hayeongpyeon/' 
  },
  { 
    path: dc, 
    username: 'hy_pyeon' 
  },
  { 
    path: ig, 
    link: 'https://www.instagram.com/rl_bh_' 
  }
];

export default function ContactLinks() {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Username copied :)`);
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className='flex flex-col justify-center items-center desktop:w-[74vw] h-[58vh] w-[84vw] gap-12 desktop:gap-0'>
      <div className='flex justify-center items-center animate-bounce-card mt-4 relative'>
        <img 
          src={bc} 
          alt="business card" 
          className='desktop:w-[24vw] h-auto w-[78vw]' 
        />
      </div>
      <div className='w-[6vw] h-[1vh] bg-gray-400 absolute bottom-[20%] rounded-full animate-shadow-blur ml-[3vw] hidden desktop:block'></div>
      <div className="flex justify-center items-end gap-4 w-[74vw] h-[10vh]">
        {contacts.map((contact, index) => (
          contact.link ? (
            <a 
              key={index} 
              href={contact.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:mb-1 hover:duration-[400ms]'
            >
              <img 
                src={contact.path} 
                alt="contact icon" 
                className="w-9 h-9" 
              />
            </a>
          ) : (
            <button 
              key={index} 
              onClick={() => handleCopyToClipboard(contact.username)} 
              className="pointer hover:mb-1 hover:duration-[400ms]">
              <img 
                src={contact.path} 
                alt="contact icon" 
                className="w-9 h-9" 
              />
            </button>
          )
        ))}
      </div>
    </div>
  );
}
