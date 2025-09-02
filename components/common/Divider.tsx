import React from 'react'

function Divider({className, vertical = false}: {className?: string; vertical?: boolean}) {
  return vertical ? (
    <div className={`w-[1px] h-full bg-stroke ${className ?? ''}`}></div>
  ) : (
    <div className={`h-[1px] w-full bg-stroke ${className ?? ''}`}></div>
  )
}

export default Divider
