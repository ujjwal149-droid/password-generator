import React, { useState } from 'react'

export default function Chip({ onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (copied) return
    onCopy?.()
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      onClick={handleCopy}
      className={`
        mt-0 md:mt-4 flex justify-between items-center min-w-[300px] w-[90%] md:w-[50%]
        bg-[#F8EF00] py-2 md:py-5 px-10 cursor-pointer select-none
        transition-all duration-150
        hover:brightness-110 hover:scale-[1.02]
        active:scale-[0.97] active:brightness-95
      `}
    >
      <button className="font-black tracking-widest text-black text-sm pointer-events-none">
        {copied ? 'COPIED!_' : 'COPY PASSWORD_'}
      </button>
      {/* <img
        src="/arrow.svg"
        alt=""
        className={`transition-transform duration-300 ${copied ? 'translate-x-2 opacity-0' : 'group-hover:translate-x-1'}`}
      /> */}
    </div>
  )
}