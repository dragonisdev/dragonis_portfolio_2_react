import React from 'react'
import Blender from "@/assets/3dlogos/blender.png"
import Unreal from "@/assets/3dlogos/unreal.png"
import AE from "@/assets/3dlogos/ae.png"
import Megascans from "@/assets/3dlogos/megascans.png"
import PR from "@/assets/3dlogos/pr.png"
import PS from "@/assets/3dlogos/ps.png"
import Quixel from "@/assets/3dlogos/quixel.png"
import Spline from "@/assets/3dlogos/spline.png"


function logos3d() {
  return (
    <div className="flex flex-col flex-wrap sm:mb-22 sm:mb-6 mb-6 items-center">
        <div className=' flex flex-row  max-w-[100%] md:space-x-14 ss:space-x-10 '>

            <a href="https://quixel.com/megascans/" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={Megascans}/></a>
            <a href="https://quixel.com/mixer" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={Quixel}/></a>
            <a href="https://www.blender.org" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={Blender}/></a>
            <a href="https://www.unrealengine.com/en-US" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={Unreal}/></a>
            <a href="https://spline.design" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={Spline}/></a>
            <a href="https://www.adobe.com/products/aftereffects" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={AE}/></a>
            <a href="https://www.adobe.com/products/premierepro" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={PR}/></a>
            <a href="https://www.adobe.com/products/photoshop" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={PS}/></a>

            
            
        </div>
    </div>
    
  )
}

export default logos3d