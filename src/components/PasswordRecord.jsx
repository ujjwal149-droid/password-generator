import React from "react";

export default function PasswordRecord({ value, date }) {
  return (
    <div
      className={`
        flex items-center gap-x-16
        border border-transparent
        transition-all duration-200 group
        hover:border-[#00F0FF22] hover:bg-[#00F0FF08]
      `}
    >
      {/* Text */}
      <div className="transition-all duration-200 group-hover:translate-x-1">
        <p className={`text-white opacity-80 transition-colors duration-200`}>
          {value}
        </p>
        <p className="text-white opacity-80 caption">{date}</p>
      </div>

      {/* Copy icon */}
      <button
        className={`
          relative shrink-0 cursor-pointer
          transition-all duration-200
          hover:scale-110 active:scale-95
        `}
        title="Copy password"
      >
        <img
          src="/copy-icon.svg"
          alt="Copy"
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-[-6deg]"
        />
      </button>
    </div>
  );
}
