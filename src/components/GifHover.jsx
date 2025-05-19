


import React, { useState, useEffect } from 'react';

function GifHover({ staticImg, gifImg, link, alt, caption }) {
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = staticImg;
    img.onload = () => setSize({ width: img.width, height: img.height });

    const gif = new Image();
    gif.src = gifImg;
    gif.onload = () => setGifLoaded(true);
  }, [staticImg, gifImg]);

  return (
    <a
    className="pt-12 block"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="image-container">
      {gifLoaded ? (
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            className="banner3d"
            src={hovered ? gifImg : staticImg}
            alt={alt}
            width={size.width}
            height={size.height}
          />
          {hovered && (
            <div className="overlay">
              <p className="text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]">
                {caption}
              </p>
            </div>
          )}
        </div>
      ) : (
        <img
          className="banner3d"
          src={staticImg}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          alt={alt}
          width={size.width}
          height={size.height}
        />
      )}
    </div>
  </a>
  );
}

export default GifHover;
