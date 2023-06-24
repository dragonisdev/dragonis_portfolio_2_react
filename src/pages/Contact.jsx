import { useState } from "react";
import HeroSection from "@/components/Hero";
import '@/App.css'
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import Frame from "@/assets/frame1.png"
import Share from "@/assets/share2.png"
import { Link } from "react-router-dom";
import Form from "@/components/Form";
import {useSpring, animated} from "react-spring"

const scrollToReleases = () => {
  const releasesElements = document.getElementById('contact')
  releasesElements.scrollIntoView({behavior: "smooth"})

} 



function About() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1,
          },
    from: { opacity: 0,
           },
    reset: true,
    reverse: flip,
    delay: 500,
    

  
  })
  const [count, setCount] = useState(0);

  return (
    <animated.div style = {props}><div className="md:pt-6 pt-0 ">
      <div className="gradientbackground flex lg:flex-row flex-col justify-center lg:justify-between items-center lg:py-8  rounded-3xl " >
        <img className="lg:ml-12 mx-4 px-2 py-4 rounded-3xl" src={Frame} />

        <div className="lg:mr-12 mx-6  mb-7 text-center lg:text-left">
          <h1 className="font-poppins font-bold ss:text-[70px] lg:text-[90px]  xs:text-[64px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            About Me
          </h1>
          <a href="https://www.youtube.com/watch?v=Zucr7blqHiE" target="blank">
            <h3 className="font-poppins font-bold ss:text-[24px] text-[20px] text-white ss:leading-[30.8px] leading-[20.8px]  text-dragonis2 max-w-[38ch] pt-4 lg:text-left text-center">
              "I lost the thought of life and love, to the wonders sky above" - Adrift
            </h3>
          </a>
          <p className="font-medium opacity-90 text-white text-left text-[18px] max-w-[59ch] pt-6">
            I’m a relentless creative who's devoted to creating art and music. I'm in chase of the unattainable and even if I disappear before getting heard, I'm really happy... <br />
            <br /> I'm happy because you're reading this! You, who's sitting behind a screen, witnessing my art and effort. Thank you for listening and being a part of my
            journey, it means a lot to me. Truly! <br />
            <br />
            I also offer a variety of services, from music production, 3D animation and one-on-one lessons, to web development and consulting; I'm always down for a new challenge, so do not hesitate to contact me!<br />
            <br />
            You can message me below...
            
          </p>
          <a href="https://www.instagram.com/dragonis_music/"><button className='button-main3 w-full sm:w-1/3  font-poppins font-semibold btn px-5 py-2 my-5 rounded-lg' >Follow Me</button></a>
            <Link to='#contact'><button className='button-secondary ml-0 w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 sm:ml-12 sm:w-1/3   rounded-lg' onClick={scrollToReleases}>Contact</button></Link>
        </div>
      </div>

      <div className="  flex  flex-col justify-center  items-center pb-20">
          <h1 id="contact" className="text-dragonis font-poppins font-bold ss:text-[80px] lg:text-[90px]  xs:text-[64px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full ss:pt-20 pt-12">
            Contact Me
          </h1>

          <div >
            <Form/>
          </div>
          
      </div>
    </div></animated.div>
  );
}

export default About;
