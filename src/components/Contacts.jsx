import React from 'react';
import gh from '../assets/img/contact-github.png';
import li from '../assets/img/contact-linkedin.png';
import mail from '../assets/img/contact-gmail.png';
import ig from '../assets/img/contact-ig.png';
import dc from '../assets/img/contact-discord.png';

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
    <div className="flex justify-center items-center w-[74vw] gap-8">
      {contacts.map((contact, index) => (
        contact.link ? (
          <a 
            key={index} 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className='hover:mb-4 hover:duration-300'
          >
            <img 
              src={contact.path} 
              alt="contact icon" 
              className="lg:w-12 lg:h-12" 
            />
          </a>
        ) : (
          <button 
            key={index} 
            onClick={() => handleCopyToClipboard(contact.username)} 
            className="pointer hover:mb-4 hover:duration-300">
            <img 
              src={contact.path} 
              alt="contact icon" 
              className="lg:w-12 lg:h-12" 
            />
          </button>
        )
      ))}
    </div>
  );
}
