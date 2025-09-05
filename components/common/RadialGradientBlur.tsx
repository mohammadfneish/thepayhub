import React from 'react'

function RadialGradientBlur({blur = 140, inset = 40, className= ''}: {blur?: number; inset?: number; className?: string}) {
  return (
    <div
    style={{top: `${inset}px`, right: `${inset}px`, bottom: `${inset}px`, left: `${inset}px`, filter: `blur(${blur}px)`}}
      className={`absolute bg-[radial-gradient(circle,#00428055_0%,#00428055_100%)] rounded-full ${className}`}></div>
  )
}

export default RadialGradientBlur
