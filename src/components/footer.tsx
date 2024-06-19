import React from 'react'
import GlobeDemo from './snippets/globeview'
import { TextRevealCardPreview } from './snippets/textreveal'
import { HiOutlineMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
GlobeDemo
TextRevealCardPreview

const footer = () => {
  return (
    <div className='h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center mt-5 p-5'>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[10]"></div>
      <div className='max-w-7xl auto grid lg:grid-cols-2 grid-cols-1 gap-4 z-[99]  p-2'>
        {/* form */}
        <div>
          {/* <TextRevealCardPreview /> */}
          <h2 className="text-2xl font-bold text-black mb-3">Contact us</h2>
          <p className="mt-[-65px] ">I will contact you within hour</p>
          {/* form tab */}
          <div>

            <form className='z-[990] mt-[30px]'>
              <div className="grid gap-6 mb-5 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-400 bg-opacity-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                  <input type="text" id="last_name" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                </div>


              </div>
              <div>
                <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </div>

              <div className="mb-6 mt-2">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>


              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Write your thoughts here..."></textarea>




              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

          </div>
        </div>
        {/* globe */}
        <div>
          <div className=" w-full max-h-[600px] p-[10px]">
             <GlobeDemo />
          </div>
         
        </div>
      </div>
      {/* copyright */}
      <div className="w-full bg-slate-50 z-[99] border border-b-[0px] border-t-1 border-x-0 border-gray-300 bg-opacity-85 mt-4">
         <div className="flex flex-col md:flex-row gap-2 justify-between items-center max-w-7xl mx-auto  py-7 px-2">
           <h2 className="text-xl text-black">Copyrights © 2024 | Suraj Pandey</h2>

           <ul className="flex gap-3 text-gray-500 text-2xl ">
                                <li><a><FaGithub /></a></li>
                                <li><a><FaLinkedinIn /></a></li>
                                <li><a><FaInstagram /></a></li>
                            </ul>

      </div>
      </div>
     
    </div>
  )
}

export default footer
