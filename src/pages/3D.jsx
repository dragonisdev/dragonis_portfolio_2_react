
import Gallery from '@/components/Gallery'
import React, { useEffect, useState } from 'react'
import logo from "@/assets/Dragonis_text.png"
import Logo from "@/components/Logo";
import Contact from "@/pages/Contact";
import {Link} from 'react-router-dom'
import Loading from '@/components/Loading';
import line from "@/assets/line.png"
import {useSpring, animated} from "react-spring"
import nftman from "@/assets/3.png"

const scrollToReleases = () => {
  const releasesElement = document.getElementById('gallery');
  releasesElement.scrollIntoView({ behavior: 'smooth' });
};

function Threed() {
  return (
    <div className=' md:pt-6'>
      <div className='bg-cover bg-center flex md:flex-row flex-col max-w-[1400px] min-h-[520px] justify-between items-center ' style={{
    backgroundImage: "url('./8.png')",
  }}>

          <div className='w-[35%] mx-6 my-6 '>
            <img className='rounded-3xl' src={nftman}/>
          </div>
          <div className='mx-6 my-7 text-center  sm:text-left'>  
              <h1 className=' md:text-left font-poppins font-bold ss:text-[64px] text-[29px] text-white ss:leading-[80px] leading-[60px] w-full  xs:text-[52px] text-center'>
                  Hey guys, I'm
              </h1>
              <h1 className='text-dragonis  md:text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[60px] w-full  xs:text-[52px] text-center'>
                  a 3D Artist
              </h1>
              
              <p className='font-semibold  text-white text-[18px] max-w-[44ch]'>
              Welcome to my 3D art portfolio! I create captivating mockup promos for VST plugins, develop visually stunning product demonstrations and craft eye-catching visual advertisements for betting sites. 
              </p>
              <Link><button className='button-main2  w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 my-5 rounded-lg' onClick={scrollToReleases}>My Gallery</button></Link>
              
              <Link to='/Contact'><button className='button-secondary ml-0 w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 sm:ml-12 sm:w-1/3 rounded-lg'>Hire Me</button></Link>
              
          </div>
      </div>


      <h1 id="gallery" className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full  xs:text-[52px] text-center text-dragonis pb-14 ss:pt-28 pt-10'>My Gallery</h1>
      <div >
        
      </div>
      

    </div>
  )
}

export default Threed