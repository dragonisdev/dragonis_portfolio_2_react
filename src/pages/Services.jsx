
import React, { Suspense, lazy, useEffect, useState } from 'react';

import Technologies from '@/components/Technologies'
import {useSpring, animated} from "react-spring"
import ServiceCard from '@/components/ServiceCard';

import patreon from "@/assets/patreon.jpg";



const Services = () => {
  const [flip, setFlip] = useState(false);
  const [hovered, setHovered] = useState(false); 

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

        
        
        {/*container*/}
          <div  className='image-container pt-6'>
             <animated.div style={props2}>
              <ServiceCard
                imgSrc={patreon}
                caption='Samples, FLPs and Private Lessons'
                link='https://patreon.com/dragonis_music'
              />
            </animated.div>

            <animated.div  className="mt-12" style={props2}>
              <ServiceCard
                imgSrc={patreon}
                caption='Samples, FLPs and 1 on 1 Lessons'
                link='https://patreon.com/dragonis_music'
              />
            </animated.div>

            <animated.div className="mt-12 mb-20" style={props2}>
              <ServiceCard
                imgSrc={patreon}
                caption='Samples, FLPs and 1-On-1 Lessons'
                link='https://patreon.com/dragonis_music'
              />
            </animated.div>
            
          </div>
        
        


    </div>
  );
};

export default Services;



{/*
  <div
                onClick={() => window.open('patreon.com/dragonis_music', '_blank')}
                className='relative'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                
              >
                <img
                  className='banner3d'
                  src={patreon}
                  alt="Samples/FLPs/1 on 1 Lessons"
                  style={{
                    filter: hovered ? 'brightness(110%)' : 'brightness(75%)',
                    transition: 'filter 0.3s ease',
                    
                  }}
                />

               
                <div className='overlay'>
                  <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>
                    Samples/FLPs/1 on 1 Lessons
                  </p>
                </div>

                
                {hovered && (
                  <div
                    className='absolute bottom-6 left-8 text-white opacity-90'
                    style={{ fontSize: '24px', pointerEvents: 'none' }}
                  >
                    <FaArrowRight />
                  </div>
                )}
              </div>
  
  
  <animated.div style={props}>
              <div className='relative mt-12'>
                <img className='banner3d' src={aa}/>

                <div  className='overlay'>
                  <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>3D Artworks</p>
                </div>
              </div>
            </animated.div>

            <animated.div style={props2}>
              <div className='relative mt-12 mb-20'>
                <img className='banner3d' src={aa}/>

                <div  className='overlay'>
                  <p className='text-center text-white font-poppins font-bold ss:text-[40px] text-[20px]'>Custom Websites</p>
                </div>
              </div>
            </animated.div>*/ }


            