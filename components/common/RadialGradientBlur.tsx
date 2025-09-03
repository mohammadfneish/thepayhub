import React from 'react'

function RadialGradientBlur({blur = 140, inset = 40, className= ''}: {blur?: number; inset?: number; className?: string}) {
  return (
    <div
      className={`absolute inset-${inset} bg-[radial-gradient(circle,#00428077_0%,#00428077_100%)] blur-[${blur}px] -z-1 rounded-full ${className}`}></div>
  )
}

export default RadialGradientBlur
