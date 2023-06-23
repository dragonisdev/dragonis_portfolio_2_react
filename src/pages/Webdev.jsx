import React from 'react'
import { useState, useEffect } from 'react'
import Technologies from '@/components/Technologies'

function Webdev() {
  return (
    <div>
      <div className="flex  flex-col justify-center lg:justify-between items-center md:pt-12 pt-0  rounded-3xl " >
          <h1 className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white  xs:leading-[80px] leading-[20px] w-full  xs:text-[52px] text-center'>
                    Hey guys, I’m  
          </h1>
          
          <h1 className='text-dragonis  font-poppins font-bold ss:text-[63px] text-[29px] text-white ss:leading-[100.8px] leading-[60px] w-full xs:text-[52px] text-center'>
                a Web Developer
          </h1>
      </div>
      <Technologies/>
      
      <div className=" flex md:flex-row flex-col items-center justify-center  pb-28 pt-2">
        <div className='flex-col flex content-center'>
            
            


            <div  className=' bg-black '>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4 xs:text-[20px]'>Journey to Windrise</h6>
              <a href="https://fanlink.to/journey-to-windrise" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/Journey.png"/></a>
              
              <div className='description'>
                <a href="https://fanlink.to/journey-to-windrise" ><p className='highlight px-2'>Stream</p></a>
                <img className="star" src='/star.png'/>
                <a href="/songs/Journey_to_windrise.mp3" download><p className='highlight px-2'>MP3</p></a>
                <img className="star" src='/star.png'/>
                <a href="/releases/Journey.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
                
              </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Webdev