import React, { useState } from 'react'

export default function PasswordRecord({ value, date, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (copied) return
    navigator.clipboard.writeText(value).catch(() => {})
    setCopied(true)
    onCopy?.()
    setTimeout(() => setCopied(false), 1500)
  }

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
        <input readOnly type='text' value={value} className={`label text-white opacity-80 transition-colors duration-200 ${copied ? '!text-[#F8EF00] !opacity-100' : ''}`}>
          
        </input>
        <p className="text-white opacity-80 caption">{date}</p>
      </div>

      {/* Copy icon */}
      <button
        onClick={handleCopy}
        className={`
          relative shrink-0 cursor-pointer
          transition-all duration-200
          hover:scale-110 active:scale-95
          ${copied ? 'opacity-100' : 'opacity-40 hover:opacity-100'}
        `}
        title="Copy password"
      >
        {copied ? (
          /* Checkmark when copied */
          <svg
            className="w-5 h-5 text-[#F8EF00] animate-[ping_0.3s_ease-out]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <img
            src="/copy-icon.svg"
            alt="Copy"
            className="w-5 h-5 transition-transform duration-200 group-hover:rotate-[-6deg]"
          />
        )}
      </button>
    </div>
  )
}