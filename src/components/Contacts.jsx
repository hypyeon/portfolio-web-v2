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
    <div 
      className='flex flex-col justify-center items-center w-[84vw] gap-2  
      mobile-md:gap-12 
      desktop:w-[74vw] desktop:gap-0'
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <div 
        className='relative flex justify-center items-center animate-bounce-card mt-1 
        mobile-md:mt-4'
      >
        <img 
          src={bc} 
          alt="business card" 
          className='h-auto w-[68vw] mobile-lg:w-[78vw] desktop:w-[24vw]' 
        />
      </div>
      <div 
        className='w-[6vw] h-[1vh] bg-gray-400 absolute bottom-[18%] rounded-full animate-shadow-blur ml-[3vw] hidden 
        desktop:block 3xl:w-[4vw] 3xl:h-[2vh] 3xl:bg-gray-200'
      />
      <div 
        className="w-[74vw] h-[10vh] flex justify-center items-end gap-4 3xl:gap-8"
      >
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
                className="w-8 h-8 mobile-md:w-9 mobile-md:h-9 3xl:w-16 3xl:h-16" 
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
                className="w-8 h-8 mobile-md:w-9 mobile-md:h-9 3xl:w-16 3xl:h-16" 
              />
            </button>
          )
        ))}
      </div>
    </div>
  );
}
