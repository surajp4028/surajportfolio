import React from 'react'

const magicbtn = () => {
  return (
    <div> <button className="relative text-black inline-flex h-12 overflow-hidden rounded-lg p-[1px] mt-[35px]">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-5 py-1 text-sm font-medium  bg-white text-gray-900 backdrop-blur-3xl">
      Show my works
    </span>
  </button></div>
  )
}

export default magicbtn