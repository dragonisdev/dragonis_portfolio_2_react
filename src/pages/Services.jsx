import React from 'react'
import Logos3D from "@/components/logos3d";

function Services() {
  return (
    <div className="flex  flex-col justify-center lg:justify-between items-center md:pt-4 pt-0  rounded-3xl " >
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

    </div>
  )
}

export default Services