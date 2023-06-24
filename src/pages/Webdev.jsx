import React from 'react'
import { useState, useEffect } from 'react'
import Technologies from '@/components/Technologies'
import {useSpring, animated} from "react-spring"

function Webdev() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1,
          translateX: '0%'},
    from: { opacity: 0,
            translateX: '-100%'},
    reset: true,
    reverse: flip,
    delay: 500,
    

  
  })
  
  const props2 = useSpring({
    to: { opacity: 1,
          translateX: '0%'},
    from: { opacity: 0,
            translateX: '100%'},
    reset: true,
    reverse: flip,
    delay: 500,
    

  
  })



  return (
    <div className='max-w-[1400px] min-h-[520px]'>
     <div className="flex  flex-col justify-center lg:justify-between items-center md:pt-14 pt-0  rounded-3xl " >
          <h1 className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white  xs:leading-[80px] leading-[20px] w-full  xs:text-[52px] text-center'>
                    Hey guys, I’m  
          </h1>
          
          <h1 className='text-dragonis  font-poppins font-bold ss:text-[50px] text-[29px] text-white ss:leading-[100.8px] leading-[60px] w-full xs:text-[52px] text-center'>
                a Frontend Developer
          </h1>
      </div>

      <div className='pt-4'>
        <Technologies/>
      </div>
      
      
      
       
        
      {/*<h1 id="releases" className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full  xs:text-[52px] text-center text-dragonis  md:pt-12 pt-0'>Web Portfolio</h1>*/}

      <div className="flex items-center justify-center pb-28 pt-4 ">
        <div className='flex devdiv flex-wrap justify-between justify-center content-center'>
          
          
          <animated.div style={props}>
            <div className='devbox'>
              <h6 className='text-white font-bold sm:text-[30px] text-[16px] py-6 xs:text-[20px]'>Playlist Surfer Frontend</h6>
              <a href="" className='dev-art' target='blank'><img className="rounded-lg" src="/websites/playlistsurfer.png"/></a>
              <div className='description'>
                <a href=""><p className='highlight  py-6'>React JS, TailwindCSS</p></a>
              </div>
            </div>
          </animated.div>
          <animated.div style={props2}>
            <div className='devbox'>
              <h6 className='text-white font-bold sm:text-[30px] text-[16px] py-6 xs:text-[20px]'>Frontendchannels Design</h6>
              <a href="" className='dev-art' target='blank'><img className="rounded-lg" src="/websites/frontendchannels.png"/></a>
              <div className='description'>
                <a href=""><p className='highlight  py-6'>Figma Design</p></a>
              </div>
            </div>
          </animated.div>

          <animated.div style={props}>
            <div className='devbox'>
              <h6 className='text-white font-bold sm:text-[30px] text-[16px] py-6 xs:text-[20px]'>Fude Sushi Page</h6>
              <a href="" className='dev-art' target='blank'><img className="rounded-lg" src="/websites/fude.png"/></a>
              <div className='description'>
                <a href=""><p className='highlight  py-6'>Bootstrap, CSS, JS</p></a>
              </div>
            </div>
          </animated.div>

          <animated.div style={props2}>
            <div className='devbox'>
              <h6 className='text-white font-bold sm:text-[30px] text-[16px] py-6 xs:text-[20px]'>Wessley Landing Page</h6>
              <a href="" className='dev-art' target='blank'><img className="rounded-lg" src="/websites/wessley.png"/></a>
              <div className='description'>
                <a href=""><p className='highlight  py-6'>HTML, CSS, JS</p></a>
              </div>
            </div>
          </animated.div>

          
        </div>
        
      </div>
      
    </div>
  )
}

export default Webdev