import Gallery from '@/components/Gallery'
import React, { useEffect, useState } from 'react'
import logo from "@/assets/Dragonis_text.png"
import Logo from "@/components/Logo";
import Contact from "@/pages/Contact";
import { Link } from 'react-router-dom';
import Loading from '@/components/Loading';
import line from "@/assets/line.png";
import {useSpring, animated} from "react-spring"
import nftman from "@/assets/3.png";
import Logos3D from "@/components/logos3d";
import Spinner from '@/components/Spinner';

import bb from "@/assets/bb.png";
import aa from "@/assets/aa.png";
import aaGif from '@/assets/cc.gif';
import bbGif from '@/assets/dd.gif';

import { gsap } from "gsap";

const scrollToReleases = () => {
  const releasesElement = document.getElementById('gallery');
  releasesElement.scrollIntoView({ behavior: 'smooth' });
};

function Threed() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1,
          translateX: '0%'},
    from: { opacity: 0,
            translateX: '100%'},
    reset: true,
    reverse: flip,
    delay: 500,
    

  
  })

  const [isImage1Hovered, setImage1Hovered] = useState(false);
  const [isImage2Hovered, setImage2Hovered] = useState(false);
  const [image1Size, setImage1Size] = useState({ width: 0, height: 0 });
  const [image2Size, setImage2Size] = useState({ width: 0, height: 0 });
  const [image1GifLoaded, setImage1GifLoaded] = useState(false);
  const [image2GifLoaded, setImage2GifLoaded] = useState(false);
  const [isGalleryLoaded, setGalleryLoaded] = useState(false); // Add a new state for gallery loading
  
  
  
  useEffect(() => {
    const image1 = new Image();
    const image2 = new Image();

    image1.src = bb;
    image2.src = aa;

    image1.onload = () => {
      setImage1Size({ width: image1.width, height: image1.height });
    };

    image2.onload = () => {
      setImage2Size({ width: image2.width, height: image2.height });
    };

    const gif1 = new Image();
    const gif2 = new Image();

    gif1.src = bbGif;
    gif2.src = aaGif;

    gif1.onload = () => {
      setImage1GifLoaded(true);
    };

    gif2.onload = () => {
      setImage2GifLoaded(true);
    };

    // Set the gallery as loaded once the images have finished loading
    Promise.all([image1.onload, image2.onload, gif1.onload, gif2.onload]).then(() => {
      setGalleryLoaded(true);
    });
  }, []);

  const handleImage1Hover = () => {
    setImage1Hovered(true);
  };

  const handleImage1Leave = () => {
    setImage1Hovered(false);
  };

  const handleImage2Hover = () => {
    setImage2Hovered(true);
  };

  const handleImage2Leave = () => {
    setImage2Hovered(false);
  };

  

  return (
    
      <div>
        <Logos3D />
      <div className='pt-4'></div>
      <div className=' bg-cover bg-center flex md:flex-row flex-col max-w-[1400px] min-h-[520px] justify-between items-center ' style={{ backgroundImage: "url('./8.png')" }}>
      
          <div className='md:w-[35%] w-[45%] mx-6 my-6 '>
          <a href='https://www.instagram.com/dragonis_art/' target='blank'><img className='nft-man rounded-3xl' src={nftman} /></a>
          </div>
          
          <div className='mx-6 md:my-7 mb-7 text-center sm:text-left'>
            <h1 className='md:text-left font-poppins font-bold ss:text-[64px] text-[29px] text-white xs:leading-[80px] leading-[20px] w-full xs:text-[52px] text-center'>
              Hey guys, I'm
            </h1>
            <h1 className='text-dragonis md:text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[60px] w-full xs:text-[52px] text-center'>
              a 3D Artist
            </h1>
            <p className='font-semibold text-white text-[18px] text-left max-w-[44ch]'>
              Welcome to my 3D art portfolio! I create captivating mockup promos for VST plugins, develop visually stunning product demonstrations for startups, and craft eye-catching visual advertisements for casinos.
            </p>
            <Link to='#gallery'><button className='button-main2 w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 my-5 rounded-lg' onClick={scrollToReleases}>My Gallery</button></Link>
            <Link to='/Contact'><button className='button-secondary ml-0 w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 sm:ml-12 sm:w-1/3 rounded-lg'>Hire Me</button></Link>
          </div>
        </div>

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

        <div className='pt-12' onClick={() => window.open('https://rocketpoweredsound.com/products/thickify', '_blank')}>
          <div className='image-container'>
            {image2GifLoaded ? (
              <div
                className='relative '
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

        <div className="relative w-full h-full ss:pt-28 pt-12 banner pb-2">
          <h1 id='gallery' className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full xs:text-[52px] text-center text-dragonis'>
            My Gallery
          </h1>
          <div className='text-white font-semibold pt-2 text-[18px]'>Welcome to my world, to my escape</div>
        </div>

        <div>
          {/* Rest of the code... */}
          {isGalleryLoaded ? ( // Conditionally render the gallery component after images have finished loading
            <div className='pb-28 mb-10 pt-4 mt-8'>
              <Gallery />
            </div>
          ) : (
            <Spinner /> // Show a loading indicator while images are being loaded
          )}
        </div>
      </div>
    
  );
}

export default Threed;