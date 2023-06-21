import React from 'react'
import Gallery from '@/components/Gallery'

function Threed() {
  return (
    <div>
      <div className='flex  flex-col max-w-[1400px] min-h-[520px] justify-between items-center md:pt-2 pt-0 '>
          <div className='mx-6 my-7 text-center '>  
              <h1 className=' font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full  xs:text-[52px] text-center'>
                  3D Artist
              </h1>
              
              <p className='font-semibold  text-white text-[18px] '>
              People say they like 2D girls. Jokes on them.
              </p>
              
          </div>
      </div>


      <h1 id="releases" className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full  xs:text-[52px] text-center text-dragonis pt-10 pb-14'>My Gallery</h1>

      <Gallery/>

    </div>
  )
}

export default Threed