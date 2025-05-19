import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ imgSrc, caption, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => window.open(link, '_blank')}
      className='relative cursor-pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className='banner3d'
        src={imgSrc}
        alt={caption}
        style={{
          filter: hovered ? 'brightness(75%)' : 'brightness(50%)',
          transition: 'filter 0.3s ease',
        }}
      />
      <div className='overlay2'>
        <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>
          {caption}
        </p>
      </div>
      {hovered && (
        <div className='absolute bottom-6 left-8 text-white opacity-90' style={{ fontSize: '24px', pointerEvents: 'none' }}>
          <FaArrowRight />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;