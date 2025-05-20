import React, { memo, useCallback } from 'react';
import styles from "@/style";
import line from "@/assets/line.png"
import { socials } from '@/constants';
import '@/App.css'

// Memoize the social icons to prevent unnecessary re-renders
const SocialIcon = memo(({ img, link }) => {
  const handleClick = useCallback(() => {
    window.open(link, '_blank');
  }, [link]);

  return (
    <img 
      src={img} 
      className="w-10 min-w-0 scale-75 icons flex-1 flex justify-start items-center flex-row my-2 px-1" 
      style={{ objectFit: 'contain' }} 
      onClick={handleClick}
      alt="Social media link"
      loading="lazy"
    />
  );
});

SocialIcon.displayName = 'SocialIcon';

function Links() {
  const renderSocials = useCallback(() => {
    return socials.map((social, i) => (
      <SocialIcon 
        key={i} 
        img={social.img} 
        link={social.link} 
      />
    ));
  }, []);

  return (
    <div className='links'>
      <div className={`${styles.flexCenter} flex flex-col flex-wrap sm:mb-4 mb-0`}>
        <div>
          <img 
            src={line} 
            className="px-6 pl-0 text-center items-center"
            alt="Divider line"
            loading="lazy"
          />
        </div>

        <div className='flex flex-row flex-wrap max-w-[100%] md:space-x-14 ss:space-x-10'>
          {renderSocials()}
        </div>
        <p className='font-regular text-white text-[16px] opacity-50 w-full tracking-widest footertext text-center'>
          built in react.js with unparalleled determination
        </p>
      </div>
    </div>
  );
}

// Memoize the entire Links component
export default memo(Links);