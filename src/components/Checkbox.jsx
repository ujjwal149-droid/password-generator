import React, { useState } from "react";

export default function CustomCheckbox({ text, id, onChange, isChecked }) {
  const [checked, setChecked] = useState(isChecked);

  const handleClick =  () => {
    setChecked(!checked);
    onChange?.();
  }

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleClick}
        className="peer sr-only"
      />
      <label
        htmlFor={id}
        className={`
          relative w-6 h-6 shrink-0 border-2 border-[#F8EF00] cursor-pointer
          transition-all duration-200 overflow-hidden
          hover:shadow-[0_0_8px_#F8EF00aa]
          active:scale-95
          ${checked
            ? 'bg-[#F8EF00] scale-110 '
            : 'bg-transparent scale-100'
          }
        `}
      >
        {/* Checkmark */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute inset-0 w-full h-full p-[3px] transition-all duration-200
            ${checked ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </label>

      <label
        htmlFor={id}
        className={`cursor-pointer transition-colors duration-200
          ${checked ? 'text-[#F8EF00]' : 'text-white hover:text-[#F8EF00]'}
        `}
      >
        {text}
      </label>
    </div>
  );
}