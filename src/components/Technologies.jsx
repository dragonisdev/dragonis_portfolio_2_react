import React from 'react'
import html from "@/assets/weblogos/html.png"
import css from "@/assets/weblogos/css.png"
import js from "@/assets/weblogos/js.png"
import react from "@/assets/weblogos/react.png"
import angular from "@/assets/weblogos/angular.png"
import svelte from "@/assets/weblogos/svelte.png"
import figma from "@/assets/weblogos/figma.png"
import aws from "@/assets/weblogos/aws.png"
import git from "@/assets/weblogos/git.png"

function Technologies() {
  return (
    <div className="flex flex-col flex-wrap sm:mb-22 sm:mb-6 mb-6 items-center">
        <div className=' flex flex-row  max-w-[100%] md:space-x-14 ss:space-x-10 '>

            <a href="https://fi.wikipedia.org/wiki/HTML" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={html}/></a>
            <a href="https://en.wikipedia.org/wiki/CSS" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={css}/></a>
            <a href="https://fi.wikipedia.org/wiki/JavaScript" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={js}/></a>
            <a href="https://react.dev" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={react}/></a>
            <a href="https://angular.io" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={angular}/></a>
            <a href="https://svelte.dev" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={svelte}/></a>
            <a href="https://www.figma.com" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={figma}/></a>
            <a href="https://aws.amazon.com/free/" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={aws}/></a>
            <a href="https://git-scm.com" target='blank'><img className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1" src={git}/></a>

            
            
        </div>
    </div>
  )
}

export default Technologies