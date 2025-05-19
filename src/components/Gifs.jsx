import React, { useState, useEffect } from 'react';

const Gifs = ({ 
    
    staticSrc, 
    gifSrc, 
    alt, 
    url, 
    label 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const staticImg = new Image();
    staticImg.src = staticSrc;
    staticImg.onload = () => {
      setImageSize({ width: staticImg.width, height: staticImg.height });
    };

    const gifImg = new Image();
    gifImg.src = gifSrc;
    gifImg.onload = () => {
      setGifLoaded(true);
    };
  }, [staticSrc, gifSrc]);

  return (
    <div className='pt-12' onClick={() => window.open(url, '_blank')}>
      <div className='image-container'>
        {gifLoaded ? (
          <div
            className='relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className='banner3d'
              src={isHovered ? gifSrc : staticSrc}
              alt={alt}
              width={imageSize.width}
              height={imageSize.height}
            />
            {isHovered && (
              <div className='overlay'>
                <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>
                  {label}
                </p>
              </div>
            )}
          </div>
        ) : (
          <img
            className='banner3d'
            src={staticSrc}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt={alt}
            width={imageSize.width}
            height={imageSize.height}
          />
        )}
      </div>
    </div>
  );
};

export default Gifs;