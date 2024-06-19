import React from 'react'
import Image from '../../node_modules/next/image';
import HoverBorderGradient from "../components/ui/hover-border-gradient";
import Button  from "../components/ui/moving-border";

import exp1 from "../components/assets/exp1.svg"
import exp4 from "../components/assets/exp4.svg"



const Experince = () => {
    return (
        <div className='h-full w-full mx-auto'>
            <div className="h-full max-w-7xl mx-auto">
                <div className="p-4 py-10 md:py-20  mx-auto w-full ">
                    <h2 className="text-4xl text-center md:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-slate-400 bg-opacity-90">
                        <span className="text-black"> Work</span> Experince
                    </h2>
                    <p className="text-center mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Harum omnis inventore</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 max-w-6xl mx-auto p-4'>
                    {/* experince 1 */}
                    <div className='flex gap-4 justify-center items-center'>

                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200text-left dark:border-slate-800 py-[30px] px-3 flex gap-4 items-center justify-center"
                        >
                            <div>
                                <Image width={100} height={100} alt="image of dev" src={exp1} className="h-32 w-32"/>
                            </div>
                            <div className="text-left ml-5">
                                <h2 className='text-2xl font-bold text-left'>Experince 1</h2>
                                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, debitis!</p>
                            </div>
                        </Button>
                    </div>

                    {/* experince 2 */}
                    <div className='flex gap-4 justify-center items-center'>

                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200text-left dark:border-slate-800 py-[30px] px-3 flex gap-4 items-center justify-center"
                        >
                            <div>
                                <Image width={100} height={100} alt="image of dev" src={exp4} className="h-32 w-32"/>
                            </div>
                            <div className="text-left ml-5">
                                <h2 className='text-2xl font-bold text-left'>Experince 2</h2>
                                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, debitis!</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experince