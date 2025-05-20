import React from 'react'
import { useState } from 'react'
import logo from "@/assets/logo.png"
import { navLinks } from '@/constants';
import menu from "@/assets/menu.png"
import close from "@/assets/close.png"
import { Spin as Hamburger } from "hamburger-react";
import {Link, NavLink} from 'react-router-dom'


function Nav() {
  
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
    setToggle(!toggle);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
 

  const handleLinkClick = () => {
    setIsOpen(false);
    setToggle(false);
    document.body.style.overflow = 'unset'
  }

  
  

  return (
    <nav className='navbar'>
      {/* MOBILE NAV */}
      

          

          <div 
            className={` mobilenav bg-main lg:hidden text-white font-main font-semibold w-full space-y-8 text-3xl ${
              isOpen ? "translate-x-0" : "translate-x-[-100%]"
            } 
            `}
          >
            <div className="lg:hidden mobilenavlink">
            <NavLink to='/webdev' className="link" onClick={handleLinkClick}>Web Developer</NavLink>
            </div>
            <div className="lg:hidden mobilenavlink">
            <NavLink to='/3D' className="link" onClick={handleLinkClick}>3D Artist</NavLink>
            </div>
            
            <div className="lg:hidden mobilenavlink">
            <NavLink to='/services' className="link" onClick={handleLinkClick}>Services</NavLink>
            </div>
            <div className="lg:hidden mobilenavlink">
              <NavLink to='/contact' className="link" onClick={handleLinkClick}>Contact Me</NavLink>
            </div>
            
            
          </div>
        
      
        {/* DESKTOP NAV */}
        <div className="w-full flex pb-16 justify-between items-center navbar px-0">
          <Link to="/">
            <img src={logo} alt="logo" className="" onClick={handleLinkClick}/>
          </Link>

          <ul className={`text-dimWhite list-none sm:flex hidden justify-end items-center flex-1 font-poppins font-semibold text-[16px]`}>
            <li className={'mr-16'}>
              <NavLink to='/webdev' className="link">Web Developer</NavLink>
            </li>
            <li className='mr-16'>
              <NavLink to='/3D' className="link">3D Artist</NavLink>
            </li>
            <li className='mr-16'>
              <NavLink to='/services' className="link">Services</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="link">Contact Me</NavLink>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            onClick={handleToggle}
              
            />
          </div>
        </div>

      
    </nav>
  );
}

export default Nav