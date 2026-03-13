import React, { useState } from 'react'
 
export default function PasswordInput({ value, onRefresh}) {
  const [spinning, setSpinning] = useState(false);

  const handleRefresh = () => {
    if (spinning) return
    setSpinning(true)
    onRefresh?.()
    setTimeout(() => setSpinning(false), 600)
  }
 
  return (
    <div className='bg-[#001819] border-2 border-[#00F0FF] text-[#00F0FF] p-5 flex justify-between w-full'>
      <input
        className="w-[60%] bg-transparent border-none outline-none ring-0 text-[#00F0FF] caret-[#00F0FF] p-0 m-0"
        type="text"
        value={value}
        readOnly
      />
            <img
        src="/refresh-icon.svg"
        alt="Refresh"
        className={`cursor-pointer transition-transform ${spinning ? 'animate-spin' : 'hover:rotate-45'}`}
        onClick={handleRefresh}
        style={{ transitionDuration: '200ms' }}
      />
    </div>
  )
}