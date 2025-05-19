
import React, { Suspense, lazy, useEffect, useState } from 'react';

import Technologies from '@/components/Technologies'
import {useSpring, animated} from "react-spring"

import bb from "@/assets/bb.png";
import aa from "@/assets/aa.png";



const Services = () => {
  const [flip, setFlip] = useState(false);
    const props = useSpring({
      to: { opacity: 1,
            translateX: '0%'},
      from: { opacity: 0,
              translateX: '-100%'},
      config: { tension: 170, friction: 26 },
      delay: 500,



    })
  const props2 = useSpring({
      to: { opacity: 1,
            translateX: '0%'},
      from: { opacity: 0,
              translateX: '100%'},
      config: { tension: 170, friction: 26 },
      delay: 500,



    })

  return (
    <div  className='max-w-[1400px] min-h-[520px]'>


        <div className="flex  flex-col justify-center lg:justify-between items-center  rounded-3xl " >
          <animated.div style={props}>
            <h1 className='md:text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white  xs:leading-[80px] leading-[40px] w-full  xs:text-[52px] text-center'>
              My Services
            </h1>
          </animated.div>
          <animated.div style={props2}>
            <h1 className='text-dragonis  font-poppins font-bold ss:text-[50px] text-[29px] text-white xs:leading-[100.8px] leading-[40px] w-full xs:text-[52px] text-center'>
              Samples & More
            </h1>
          </animated.div>
        </div>

        
        
          
          <div  className='image-container pt-6'>
            <animated.div style={props2}>
              <div onClick={() => window.open('https://example.com', '_blank')} className='relative'>
                <img className='banner3d' src={aa} />

                <div  className='overlay'>
                  <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>Samples, FLPs and Lessons</p>
                </div>
              </div>
            </animated.div>
              <div className='relative mt-12'>
                <img className='banner3d' src={aa}/>

                <div  className='overlay'>
                  <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>3D Artworks</p>
                </div>
              </div>


              <div className='relative mt-12 mb-20'>
                <img className='banner3d' src={aa}/>

                <div  className='overlay'>
                  <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>Custom Websites</p>
                </div>
              </div>

          </div>
        
        


    </div>
  );
};

export default Services;