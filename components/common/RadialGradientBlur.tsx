import React from 'react'

function RadialGradientBlur({
  blur = 140,
  inset = 40,
  className = '',
  ...props
}: {
  blur?: number
  inset?: number
  className?: string
}) {
  return (
    <div
      style={{
        top: `${inset}px`,
        right: `${inset}px`,
        bottom: `${inset}px`,
        left: `${inset}px`,
        filter: `blur(${blur}px)`,
      }}
      className={`absolute bg-[radial-gradient(circle,#00428055_0%,#00428055_100%)] z-[-1] rounded-full ${className}`}
      {...props}></div>
  )
}

export default RadialGradientBlur
