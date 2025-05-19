
import React, { Suspense, lazy, useEffect, useState } from 'react';
import logo from "@/assets/Dragonis_text.png";
import Logo from "@/components/Logo";
import Contact from "@/pages/Contact";
import { Link } from 'react-router-dom';
import Loading from '@/components/Loading';
import line from "@/assets/line.png";
import { promoItems } from '@/constants/gifs.js';
import nftman from "@/assets/3.png";


import Technologies from '@/components/Technologies'
import {useSpring, animated} from "react-spring"

import Spinner from '@/components/Spinner';
import GifHover from '@/components/GifHover';

{/* 
import Gallery from '@/components/Gallery';
import Hero3D from '@/components/Hero3D';
import Logos3D from "@/components/logos3d";
*/}

const Hero3D = lazy(() => import('../components/Hero3D'));
const Logos3D = lazy(() => import('../components/logos3d'));
const Gallery = lazy(() => import('../components/Gallery'));

const scrollToReleases = () => {
  const releasesElement = document.getElementById('gallery');
  releasesElement.scrollIntoView({ behavior: 'smooth' });
};

function Threed() {
  const [flip, setFlip] = useState(false);

    // load in spring animation
  const props = useSpring({
      to: { opacity: 1,
            translateX: '0%'},
      from: { opacity: 0,
              translateX: '-100%'},
      config: { tension: 170, friction: 26 },
      delay: 500
    });
  
    const props2 = useSpring({
      to: { opacity: 1,
            translateX: '0%'},
      from: { opacity: 0,
              translateX: '100%'},
      config: { tension: 170, friction: 26 },
      delay: 500
    });
   
  
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <animated.div style={props2}>
          <Logos3D />
        </animated.div>
        
        <animated.div style={props}>
          <Hero3D scrollToReleases={scrollToReleases}/>
        </animated.div>

        {promoItems.map((item, index) => (
          <animated.div style={index % 2 === 0 ? props2 : props} key={index}>
            <GifHover
              staticImg={item.static}
              gifImg={item.gif}
              link={item.url}
              alt={item.alt}
              caption={item.caption}
            />
          </animated.div>
        ))}
        
        {/*
        <animated.div style={props2}>
        <div className='pt-12' onClick={() => window.open('https://skinwaste.com/en/elite', '_blank')}>
          <div  className='image-container'>
            {image1GifLoaded ? (
              <div
                className='relative'
                onMouseEnter={handleImage1Hover}
                onMouseLeave={handleImage1Leave}
              >
                <img

                  className='banner3d'
                  src={isImage1Hovered ? bbGif : bb}
                  alt='Image 1'
                  width={image1Size.width}
                  height={image1Size.height}
                />
                {isImage1Hovered && (
                  <div  className='overlay'>
                    <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>Skinwaste Launch Promo</p>
                  </div>
                )}
              </div>
            ) : (
              <img
                className='banner3d'
                src={bb}
                onMouseEnter={handleImage1Hover}
                onMouseLeave={handleImage1Leave}
                alt='Image 1'
                width={image1Size.width}
                height={image1Size.height}
              />
            )}
          </div>
        </div>
        </animated.div>
        
        <animated.div style={props}>
        <div className='pt-12' onClick={() => window.open('https://rocketpoweredsound.com/products/thickify', '_blank')}>
          <div className='image-container'>
            {image2GifLoaded ? (
              <div
                className='relative'
                onMouseEnter={handleImage2Hover}
                onMouseLeave={handleImage2Leave}
              >
                <img
                  className='banner3d'
                  src={isImage2Hovered ? aaGif : aa}
                  alt='Image 2'
                  width={image2Size.width}
                  height={image2Size.height}
                />
                {isImage2Hovered && (
                  <div className='overlay'>
                    <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>Thickify Promo for Rocket Powered Sound</p>
                  </div>
                )}
              </div>
            ) : (
              <img
                className='banner3d'
                src={aa}
                onMouseEnter={handleImage2Hover}
                onMouseLeave={handleImage2Leave}
                alt='Image 2'
                width={image2Size.width}
                height={image2Size.height}
              />
            )}
          </div>
        </div>
        </animated.div> */}

        <div className="relative w-full h-full ss:pt-28 pt-12 banner pb-2">
          <h1 id='gallery' className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full xs:text-[52px] text-center text-dragonis'>
            My Gallery
          </h1>
          <div className='text-white font-semibold pt-2 text-[18px]'>Welcome to my world, to my escape</div>
        </div>

        <div>
          
            <div className='pb-28 mb-10 pt-4 mt-8'>
              <Gallery />
            </div>
          
        </div>
      </div>
    </Suspense>

  );
}

export default Threed;