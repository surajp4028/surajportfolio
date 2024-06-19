"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import CanvasRevealEffectDemo from "../components/snippets/approchphases"

const Aproch = () => {
  return (
    <div className='h-screen w-full mx-auto relative p-3'>
      <div className="h-full max-w-7xl mx-auto">   
      <div className="p-4 py-10 md:py-20  mx-auto w-full ">
                <h2 className="text-4xl text-center md:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-slate-400 bg-opacity-90">
                <span className="text-black"> My</span> Approch
                </h2>
                <p className="text-center mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Harum omnis inventore</p>

            </div>
         <div>
           <CanvasRevealEffectDemo />
         </div>
      </div>
     <BackgroundBeams />   
    </div>
  )
}

export default Aproch