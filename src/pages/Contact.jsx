import { useState } from "react";
import HeroSection from "@/components/Hero";
import '@/App.css'
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import Frame from "@/assets/bhbs_frame.png"


function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:pt-6 pt-0 bg-black rounded-3xl">
      <img className="mx-5 w-50%" src={Frame}/>

      <div className=" font-poppins font-bold text-white">
      I provide a variety of services

      hmu at dragonisbasslord@gmail.com
      </div>

      
    </div>
  );
}

export default About;
