import React from 'react'

export default function Chip() {

  return (
    <div
      className={`
        mt-4 flex justify-between items-center min-w-[300px] w-[90%] md:w-[50%]
        bg-[#F8EF00] py-5 px-10 cursor-pointer select-none
        transition-all duration-150
        hover:brightness-110 hover:scale-[1.02]
        active:scale-[0.97] active:brightness-95
      `}
    >
      <button className="font-black tracking-widest text-black text-sm pointer-events-none">
        COPY PASSWORD_
      </button>
    </div>
  )
}