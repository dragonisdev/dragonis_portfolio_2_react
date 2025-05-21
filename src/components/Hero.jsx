import React, { useEffect, useState, lazy, Suspense, useCallback } from 'react'
import logo from "@/assets/Dragonis_text.png"
import {Link} from 'react-router-dom'
import {useSpring, animated} from "react-spring"
import { songs } from '@/songs.js';
import Loading from '@/components/Loading';

// Lazy load the SplineLogo component
const Logo = lazy(() => import("@/components/SplineLogo"));

const scrollToReleases = () => {
  const releasesElement = document.getElementById('releases');
  releasesElement.scrollIntoView({ behavior: 'smooth' });
};

function HeroSection() {
  const [flip, setFlip] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const preloadImages = useCallback(async () => {
    const imagePromises = [
      new Promise((resolve) => {
        const img = new Image();
        img.src = logo;
        img.onload = resolve;
      }),
      new Promise((resolve) => {
        const img = new Image();
        img.src = "/group10.png";
        img.onload = resolve;
      })
    ];
    await Promise.all(imagePromises);
    setImagesLoaded(true);
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const props = useSpring({
    to: { opacity: 1, translateX: '0%'},
    from: { opacity: 0, translateX: '-100%'},
    reset: true,
    reverse: flip,
    delay: 500,
    config: { tension: 170, friction: 26 }
  });

  const props2 = useSpring({
    to: { opacity: 1, translateX: '0%'},
    from: { opacity: 0, translateX: '100%'},
    config: { tension: 170, friction: 26 },
    delay: 500
  });

  if (!imagesLoaded) {
    return <Loading />;
  }

  return (
    <div>
      <div className='flex md:flex-row flex-col max-w-[1400px] min-h-[520px] justify-between items-center md:pt-6 pt-0'>
        <animated.div style={props}>
          <div className='mx-6 mb-7 text-center sm:text-left'>
            <h1 className="text-left font-poppins font-bold ss:text-[80px] text-[29px] ss:leading-[100.8px] leading-[75px] w-full xs:text-[52px] text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Hey guys, I’m
            </h1>
            <Link to='/'><img src={logo} className="w-full max-w-[550px] xs:mb-0 mb-4" loading="eager" alt="Dragonis Logo"/></Link>
            <p className='font-semibold text-white text-[18px] max-w-[47ch]'>
              Welcome to my heavenly domain! Here, I produce EDM music, bring 3D art to life, and code my dreams into reality - all from my bedroom.
              Listen to my life's journey in chase for bluer skies, and untold adventures!
            </p>
            <Link><button className='button-main w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 my-5 sm:w-1/3 rounded-lg' onClick={scrollToReleases}>My Releases</button></Link>
            <Link to='/Contact'><button className='button-secondary ml-0 w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 sm:ml-12 sm:w-1/3 rounded-lg'>About Me</button></Link>
          </div>
        </animated.div>

        <animated.div style={props2}>
          <div>
            <Suspense fallback={<Loading />}>
              <Logo />
            </Suspense>
          </div>
        </animated.div>
      </div>

      <animated.div style={props}>
        <img className='rounded-lg pt-6' src="/group10.png" alt="banner" loading="eager" />
        <div className="relative w-full h-full ss:pt-24 pt-12 banner">
          <h1 id="releases" className='font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full xs:text-[52px] text-center text-dragonis pt-2'>My Releases</h1>
          <div className='text-white font-semibold text-[18px]'>Feel free to download my songs and the cover artworks :D</div>
        </div>
      </animated.div>

      <animated.div style={props}>
        <div className="page2 flex content-center pb-28">
          <div className='art-box flex content-center flex-wrap'>
            {songs.map((song, index) => (
              <div className='art my-8 mx-4' key={index}>
                <a href={song.streamUrl} className='cover-art' target='_blank' rel="noreferrer">
                  <img className="rounded-lg" src={song.cover} alt={song.title} loading="lazy" />
                </a>
                <h6 className='art-text sm:text-[30px] text-[16px] pt-4 xs:text-[20px]'>{song.title}</h6>
                <div className='description'>
                  <a href={song.streamUrl}><p className='highlight px-2'>Stream</p></a>
                  <img className="star" src='/star.png' alt="*" loading="lazy" />
                  <a href={song.mp3} download><p className='highlight px-2'>MP3</p></a>
                  <img className="star" src='/star.png' alt="*" loading="lazy" />
                  <a href={song.artwork} target='_blank' rel="noopener noreferrer"><p className='highlight px-2'>Artwork</p></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default HeroSection