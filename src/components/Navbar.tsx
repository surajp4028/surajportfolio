'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    function showpannel() {
        console.log("hello");
        const showicon = document.getElementById('menu'),
        hideicon = document.getElementById('cross'),
        pannel = document.getElementById('pannel')

        pannel?.classList.toggle('hidden');
        
        hideicon?.classList.toggle('hidden')
    } 

    return (
        <div>
            <div className='w-full mx-auto py-0 md:pt-2 py-1 px-4 bg-gray-50  border border-b-[1px] border-t-0 border-x-0 border-gray-200 bg-opacity-85'>
                <div className='max-w-7xl mx-auto flex gap-2 justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <h2 className='md:text-4xl text-3xl font-bold flex flex-col gap-0' >Suraj <span className='mt-[-15px] text-[14px] md:tracking-[2px] tracking-[1px] text-purple-900'>Portfolio</span></h2>

                        <ul className='hidden md:flex gap-2 mt-[-15px]'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex gap-2 items-center mt-[-15px]'>
                        <Button variant="outline">Hire Me</Button>
                        <Button  className='bg-black text-white'>Reach us</Button>

                    </div>
                    <div className="md:hidden block ">
                        <button id="menu" onClick={showpannel} className="text-2xl">
                            <HiOutlineMenu />
                        </button>
                    </div>
                    {/* pannel */}
                    <div id="pannel" className='w-[300px] h-screen fixed top-0 left-[0px] flex flex-col gap-4 bg-white p-3 hidden md:hidden transition'>

                    <div >
                    <h2 className='md:text-4xl text-3xl font-bold flex flex-col gap-0' >Suraj <span className='mt-[-15px] text-[14px] md:tracking-[2px] tracking-[1px] text-purple-900'>Portfolio</span></h2>

                        <button onClick={showpannel} id="cross" className="absolute top-[25px] right-[25px] text-xl z-50"><RxCross2 /></button>

                        <ul className='flex flex-col gap-3 mt-[15px]'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>

                            <ul className="flex gap-3 text-gray-400 text-2xl mt-[25px]">
                                <li><a><FaGithub /></a></li>
                                <li><a><FaLinkedinIn /></a></li>
                                <li><a><FaInstagram /></a></li>
                            </ul>

                        <div className='h-[1px] w-full bg-gray-300 mt-4'></div>

                        <div className='flex flex-col gap-2 items-center mt-[15px]'>
                        <Button variant="outline" className='w-full'>Hire Me</Button>
                        <Button  className='bg-black text-white w-full'>Reach us</Button>

                    </div>

                    </div>
                    
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
