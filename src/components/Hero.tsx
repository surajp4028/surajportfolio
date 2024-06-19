import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffectDemo } from "./snippets/textgen";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Magicbtn from "./ui/magicbtn";
Magicbtn

TextGenerateEffect
TextGenerateEffectDemo

const Hero = () => {
  return (
    <div className='w-full h-screen bg-slate  p-4'>
      <Spotlight
        className="-top-30 left-30 md:left-60 md:-top-20 z-[50]"
        fill="purple"
      />
       <div className="h-full w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.4] z-[1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-4xl mx-auto  
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-8 mt-[-40px] flex flex-col items-center">
            <p className="text-gray-800 font-bold text-center mb-[0px] md:text-md text-sm">
            UNLEASHING DIGITAL POTENTIAL WITH <br />FULL STACK FLAIR
            </p>
            <TextGenerateEffect className="" words="Crafting Robust Solutions for Seamless User Journeys"/>
            <p className="text-gray-900 font-bold text-center md:text-xl text-md mt-3">
            Hey there! I'm Suraj Pandey, a seasoned Full Stack Developer with 2 years of experience, hailing from India..
            </p>
            <Magicbtn />
        </div>
    </div>
    </div>
  )
}

export default Hero