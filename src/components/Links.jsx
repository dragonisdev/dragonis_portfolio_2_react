import React from 'react'
import styles from "@/style";
import line from "@/assets/line.png"
import { socials } from '@/constants';
import '@/App.css'


function Links() {
  return (
    <div className='links'>
      <div className={`${styles.flexCenter}  flex flex-col flex-wrap sm:mb-22 sm:mb-6 mb-0 `}>
        <div>
          <img src={line}  className='  px-6 pl-0 text-center items-center '/>
        </div>

        <div className=' flex flex-row flex-wrap  max-w-[100%] md:space-x-14 ss:space-x-10 '>
        {socials.map((socials) => (
          
          <img src={`${socials.img}`} href={`${socials.link}`} className={`w-10 min-w-0 scale-75 icons flex-1 flex justify-start items-center flex-row my-3 mx-0 px-1`} style={{objectFit: 'contain'}} onClick={() => window.open(`${socials.link}`,'_blank')}/>
            
    ))}

        </div>

        <p className='font-regular text-white text-[16px] opacity-50 w-full tracking-widest footertext'>constructed in react.js with unparalleled determination</p>
      </div>
    </div>
  )
}

export default Links