import React, { useEffect, useState } from 'react'
import logo from "@/assets/Dragonis_text.png"
import Logo from "@/components/Logo";
import Contact from "@/pages/Contact";
import {Link} from 'react-router-dom'
import Loading from '@/components/Loading';
import line from "@/assets/line.png"
import {useSpring, animated} from "react-spring"


const scrollToReleases = () => {
  const releasesElement = document.getElementById('releases');
  releasesElement.scrollIntoView({ behavior: 'smooth' });
};



function HeroSection() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    reset: true,
    reverse: flip,
    delay: 1000,
    

  
  })

  return (
    
    <div>
      <div className='flex md:flex-row flex-col max-w-[1400px] min-h-[520px] justify-between items-center md:pt-6 pt-0 '>
          <animated.div style = {props}><div className='mx-6 my-7 text-center  sm:text-left'>  
              <h1 className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full  xs:text-[52px] text-center'>
                  Hey guys, I’m  
              </h1>
              <Link to='/'><img src={logo} className="w-full max-w-[550px] xs:mb-0 mb-4"/></Link>
              <p className='font-semibold  text-white text-[18px] max-w-[47ch]'>
              Welcome to my heavenly domain. I produce music, create 3D artworks, code in my bedroom and hit the gym every day. I'm always on the chase for bluer skies and puffier clouds.
              </p>
              <Link><button className='button-main  w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 my-5 sm:w-1/3 rounded-lg' onClick={scrollToReleases}>My Releases</button></Link>
              <Link to='/Contact'><button className='button-secondary ml-0 w-full sm:w-fit font-poppins font-semibold btn px-5 py-2 sm:ml-12 sm:w-1/3 rounded-lg'>About Me</button></Link>
          </div></animated.div>

          
          <div >
          <Logo />
          </div>
      </div>
      
      <animated.div style = {props}><img className='rounded-lg ' src="/group10.png" alt="banner" />
      <div className="relative w-full h-full  ss:pt-28 pt-12 banner">
       
        <h1 id="releases" className='text-left font-poppins font-bold ss:text-[80px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] w-full  xs:text-[52px] text-center text-dragonis pt-2 '>My Releases</h1>
        
        <div className='text-white font-semibold pt-2 text-[18px]'>Feel free to download my songs and the cover artworks :D</div>
      </div></animated.div>
      
      <div className="page2 flex content-center pb-28 ">
        <div className='art-box flex content-center'>
          
       


          <div  className=' art'>
            <a href="https://fanlink.to/journey-to-windrise" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/Journey.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Journey to Windrise</h6>
            <div className='description'>
              <a href="https://fanlink.to/journey-to-windrise" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/Journey_to_windrise.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/releases/Journey.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/stargazing-in-liyue" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/stargazing.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Stargazing in Liyue</h6>
            <div className='description'>
              <a href="https://fanlink.to/stargazing-in-liyue" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/stargazing_in_liyue.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/stargazing.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>

          
          <div className='art'>
            <a href="https://fanlink.to/adrift-above-watatsumi" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/Kokomi.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Adrift above Watatsumi</h6>
            <div className='description'>
              <a href="https://fanlink.to/adrift-above-watatsumi" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/adrift_above_watatsumi.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/adrift.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>

            
          <div className='art'>
            <a href="https://fanlink.to/raid" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/raid.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Raid in Inazuma</h6>
            <div className='description'>
              <a href="https://fanlink.to/raid" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/raid_in_inazuma.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/raid_on_inazuma.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>


          <div className='art'>
            <a href="https://fanlink.to/nyah" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/nyah.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Nyah</h6>
            <div className='description'>
              <a href="https://fanlink.to/nyah" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/nyah.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/nyah.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/blonde-hair-and-blue-skies" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/blonde_hair_blue_skies.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Blonde Hair and Blue Skies</h6>
            <div className='description'>
              <a href="https://fanlink.to/blonde-hair-and-blue-skies" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/BHBS.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/blonde_hair_blue_skies.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>


          <div className='art'>
            <a href="https://fanlink.to/birthofagoddess" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/boag.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Birth of a Goddess Remix</h6>
            <div className='description'>
              <a href="https://fanlink.to/birthofagoddess" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/BOAG.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/boag.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>


          <div className='art'>
            <a href="https://fanlink.to/blonde-hair-and-blue-skies" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/blonde_hair_blue_skies_2.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Touch the Sky</h6>
            <div className='description'>
              <a href="https://fanlink.to/blonde-hair-and-blue-skies" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/touch_the_sky.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/blonde_hair_blue_skies_2.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>


          <div className='art'>
            <a href="https://fanlink.to/morning-coffee-1" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/morning coffee.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Morning Coffee</h6>
            <div className='description'>
              <a href="https://fanlink.to/morning-coffee-1" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/morning_coffee.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/morning coffee.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          
          <div className='art'>
            <a href="https://fanlink.to/blonde-hair-and-blue-skies" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/blonde_hair_blue_skies_2.png"/></a>
            <h6 className='art-text sm:text-[26px] text-[16px]  pt-4  xs:text-[20px]'>Heartbreak & Breakthroughs</h6>
            <div className='description'>
              <a href="https://fanlink.to/blonde-hair-and-blue-skies" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/heartbreak_breakthroughs.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/blonde_hair_blue_skies_2.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>



          <div className='art'>
            <a href="https://fanlink.to/puppet-1" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/puppet.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Puppet</h6>
            <div className='description'>
              <a href="https://fanlink.to/puppet-1" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/puppet.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/puppet.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
              
            </div>
          </div>


          <div className='art'>
            <a href="https://fanlink.to/escape_velocity" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/escape_velocity.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Escape Velocity</h6>
            <div className='description'>
              <a href="https://fanlink.to/escape_velocity" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/escape_velocity.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/escape_velocity.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>
          
          
          <div className='art'>
            <a href="https://www.youtube.com/watch?v=YRZQTw0FvwM&list=PLFhQE7seUeh_t0S3nLEleR0QlFC2W4077&index=4" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/love_and_hate.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Love and Hate</h6>
            <div className='description'>
              <a href="https://www.youtube.com/watch?v=YRZQTw0FvwM&list=PLFhQE7seUeh_t0S3nLEleR0QlFC2W4077&index=4" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/love_and_hate.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/love_and_hate.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>
          
          <div className='art'>
            <a href="https://fanlink.to/dragonis-gv-aurora" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/aurora.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Aurora</h6>
            <div className='description'>
              <a href="https://fanlink.to/dragonis-gv-aurora" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/aurora.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/aurora.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          



          <div className='art'>
            <a href="https://open.spotify.com/album/5tW9Wq48kxX8uGXjqxWUng?si=xVCojzRdQhedplCylaKoDQ" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/maybe_its_for_the_best.jpg"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>maybe it's for the Best</h6>
            <div className='description'>
              <a href="https://open.spotify.com/album/5tW9Wq48kxX8uGXjqxWUng?si=xVCojzRdQhedplCylaKoDQ" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/maybe_its_for_the_best.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/maybe_its_for_the_best.jpg" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>
          
          
          


          <div className='art'>
            <a href="https://open.spotify.com/album/6PDh0WyTskzbMKU6cBoAcw?si=BJsvWF3aQBm72IF08KhkWQ" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/can_we_be_together.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>can we be together</h6>
            <div className='description'>
              <a href="https://open.spotify.com/album/6PDh0WyTskzbMKU6cBoAcw?si=BJsvWF3aQBm72IF08KhkWQ" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/can_we_be_together.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/can_we_be_together.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>



          <div className='art'>
            <a href="https://fanlink.to/die4u-james-lee-dragonis" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/die4u.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Die4U</h6>
            <div className='description'>
              <a href="https://fanlink.to/die4u-james-lee-dragonis" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/die4u.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/die4u.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/new-horizons" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/new_horizons.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>New Horizons</h6>
            <div className='description'>
              <a href="https://fanlink.to/new-horizons" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/new_horizons.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/new-horizons.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>


          <div className='art'>
            <a href="https://fanlink.to/my-heart-ep" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/my_heart.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>My Heart EP</h6>
            <div className='description'>
              <a href="https://fanlink.to/my-heart-ep" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/my_heart.zip" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/my_heart.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/chizuru" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/chizuru.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Chizuru</h6>
            <div className='description'>
              <a href="https://fanlink.to/chizuru" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/chizuru.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/chizuru.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          

          <div className='art'>
            <a href="https://fanlink.to/falling-star-1" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/falling_star.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Falling Star</h6>
            <div className='description'>
              <a href="https://fanlink.to/falling-star-1" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/falling_star.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/falling_star.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://open.spotify.com/album/4D1SpbFWYBQSMABSwkJCGD?si=bw5YnxiqS1WH312O_zmlmw" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/Outerspace.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Outer Space</h6>
            <div className='description'>
              <a href="https://open.spotify.com/album/4D1SpbFWYBQSMABSwkJCGD?si=bw5YnxiqS1WH312O_zmlmw" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/outer_space.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/outer_space.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>


          <div className='art'>
            <a href="https://dragonis.fanlink.to/crush" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/crush.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Crush</h6>
            <div className='description'>
              <a href="https://dragonis.fanlink.to/crush" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/crush.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/crush.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/dragonisxkalume" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/lose_my_mind.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Lose My Mind</h6>
            <div className='description'>
              <a href="https://fanlink.to/dragonisxkalume" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/lose_my_mind.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/lose_my_mind.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://dragonis.fanlink.to/remind_me" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/remind_me.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Remind Me</h6>
            <div className='description'>
              <a href="https://dragonis.fanlink.to/remind_me" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/remind_me.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/remind_me.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/fuckboi-dragonis-drewharvey" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/fuckboi.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Fuckboi</h6>
            <div className='description'>
              <a href="https://fanlink.to/fuckboi-dragonis-drewharvey" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/fuckboi.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/fuckboi.jpg" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/r-102" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/ashamed.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Ashamed</h6>
            <div className='description'>
              <a href="https://fanlink.to/r-102" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/ashamed.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/ashamed.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://open.spotify.com/album/5U9n3ocile4rMSaeynHlja?si=UzpGb8xHTeWu833jR82-MA" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/closer.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>Closer</h6>
            <div className='description'>
              <a href="https://open.spotify.com/album/5U9n3ocile4rMSaeynHlja?si=UzpGb8xHTeWu833jR82-MA" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/closer.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/closer.jpg" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>

          <div className='art'>
            <a href="https://fanlink.to/not-missing-u" className='cover-art' target='blank'><img className="rounded-lg" src="/releases/not_missing_u.png"/></a>
            <h6 className='art-text sm:text-[30px] text-[16px]  pt-4  xs:text-[20px]'>not missing u</h6>
            <div className='description'>
              <a href="https://fanlink.to/not-missing-u" ><p className='highlight px-2'>Stream</p></a>
              <img className="star" src='/star.png'/>
              <a href="/songs/notmissingu.mp3" download><p className='highlight px-2'>MP3</p></a>
              <img className="star" src='/star.png'/>
              <a href="/artworks/not_missing_u.png" target='blank'><p className='highlight px-2'>Artwork</p></a>
            </div>
          </div>
          

        </div> 
      </div>
      
    </div>
  )
}

export default HeroSection