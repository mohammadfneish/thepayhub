import React from 'react'

function Divider({className, vertical = false}: {className?: string; vertical?: boolean}) {
  return vertical ? (
    <div className={`w-[1px] h-full bg-secondary-400 ${className ?? ''}`}></div>
  ) : (
    <div className={`h-[1px] w-full bg-secondary-400 ${className ?? ''}`}></div>
  )
}

export default Divider
