import React from 'react'
import Image from '../../node_modules/next/image';
Image
import { FlipWords } from "../components/ui/flip-words";

import Reacticon from "../components/assets/React-icon.webp";
import Nextjsl from "../components/assets/nextlo.png";
import Boot from "../components/assets/Bootstrap_logo.webp";
import mongo from "../components/assets/MongoDB-Logo.webp";
import mysql from "../components/assets/mysql.webp";
import node from "../components/assets/Node.webp";
import tail from "../components/assets/Tailwind_CSS_Logo.webp";
import typescript from "../components/assets/Typescript_logo_2020.webp";
import logo from "../components/assets/logo.png";
import ai from "../components/assets/ai.png";
import ps from "../components/assets/ps.png";
import xd from "../components/assets/xd.png";
import pr from "../components/assets/pr.png";
import figma from "../components/assets/figma.png";
import wordpress from "../components/assets/wordpress.webp";

const tech = () => {
    const words = ["Skills", "Stack", "beautiful", "modern"];
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4">
                <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-4">
                    Tech
                    <FlipWords words={words} /> <br />
                    Crafting Solutions with Full-Stack Expertise
                </div>
                <div className='grid md:grid-cols-6 lg:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-3 flex-wrap my-5'>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={Reacticon} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={Nextjsl} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={Boot} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={mongo} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={mysql} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={node} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={tail} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center'>
                        <Image width={100} height={100} alt="image of dev" src={typescript} className="h-25 w-full" />
                    </div>
                    {/* ============== */}
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                        <p>Aceternity</p>
                        <Image width={100} height={100} alt="image of dev" src={logo} className="h-5 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                       
                       <Image width={100} height={100} alt="image of dev" src={wordpress} className="h-25 w-full" />
                   </div>
                     <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                       
                        <Image width={100} height={100} alt="image of dev" src={ai} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                       
                        <Image width={100} height={100} alt="image of dev" src={xd} className="h-25 w-full" />
                    </div>
                    <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                       
                       <Image width={100} height={100} alt="image of dev" src={ps} className="h-25 w-full" />
                   </div>
                   <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                       
                       <Image width={100} height={100} alt="image of dev" src={pr} className="h-25 w-full" />
                   </div>
                   <div className='p-[20px] border border-gray-300 rounded-lg flex justify-center items-center gap-2'>
                       
                       <Image width={100} height={100} alt="image of dev" src={figma} className="h-25 w-full" />
                   </div>

                </div>
            </div>

        </div>
    )
}

export default tech