import React, { useState, useRef } from 'react'

export default function Slider({ min = 4, max = 40, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue)
  const inputRef = useRef(null)

  const handleChange = (e) => {
    const val = Number(e.target.value)
    setValue(val)
    onChange?.(val)
  }


  const percent = ((value - min) / (max - min)) * 100

  return (
    <div className="relative w-full pt-8">
      {/* Value label above thumb */}
      <div
        className="absolute top-0 -translate-x-1/2 text-[#F8EF00] text-xs font-bold pointer-events-none transition-left duration-100"
        style={{ left: `calc(${percent}% + ${(0.5 - percent / 100) * 20}px)` }}
      >
        {value}
      </div>

      <input
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full cursor-pointer appearance-none bg-transparent
          [&::-webkit-slider-runnable-track]:h-[3px]
          [&::-webkit-slider-runnable-track]:bg-[#00F0FF]
          [&::-moz-range-track]:h-[3px]
          [&::-moz-range-track]:bg-[#00F0FF]
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:bg-[#F8EF00]
          [&::-moz-range-thumb]:border-none
          [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:bg-[#F8EF00]
          [&::-moz-range-thumb]:rounded-none"
      />
    </div>
  )
}