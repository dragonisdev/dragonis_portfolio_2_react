import { useState } from "react";
import HeroSection from "@/components/Hero";
import '@/App.css'
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"



function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex md:flex-row flex-col max-w-[1400px] justify-between items-center pt-6">
      <div className="text-white">
      I provide a variety of services

      hmu at dragonisbasslord@gmail.com
      </div>

      
    </div>
  );
}

export default About;
