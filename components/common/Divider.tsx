import React from 'react'

function Divider({className, text, vertical = false}: {className?: string; text?: string; vertical?: boolean}) {
  return vertical ? (
    <div className={`w-[1px] h-full bg-stroke ${className ?? ''}`}></div>
  ) : (
    <div className={`h-[1px] w-full bg-stroke relative ${className ?? ''}`}>
      {text && <span className="absolute left-1/2 -translate-1/2 bg-black px-3 text-xs text-sub-600">{text}</span>}
    </div>
  )
}

export default Divider
