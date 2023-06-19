import React from 'react'
import { useState } from 'react'
import logo from "@/assets/logo.png"
import { navLinks } from '@/constants';
import menu from "@/assets/menu.png"
import {Link} from 'react-router-dom'


function nav() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-full flex pb-16 justify-between items-center navbar px-0 ">
      <Link to="/"><img src={logo} alt="logo" className=''/></Link>

      <ul className={`text-dimWhite list-none sm:flex hidden justify-end items-center flex-1 font-poppins font-semibold text-[16px]` }>
            
          <li className={'mr-16'} > <Link to='/Webdev'>Web Developer</Link></li>
          <li className='mr-16'> <Link to='/3D'>3D Artist</Link></li>
          <li className='mr-16'> <Link to='/Samples'>Samplepacks</Link></li>
          <li> <Link to='/Contact'>Contact Me</Link></li>
        
      </ul>

      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}/>
      </div>
        
    </nav>
  )
}

export default nav