import React from 'react'

interface Props {
  children: React.ReactNode
  size?: Size
  className?: string
}

function Typography({children, size = 'md', className = ''}: Props) {
  const styles = {
    sm: '',
    sm2: 'text-sub-600 text-sm md:text-md',
    md: 'text-sub-600 text-sm md:text-md lg:text-lg',
    md2: 'text-sub-600 text-lg',
    lg: 'text-white text-xl sm:text-2xl',
    lg2: 'text-white text-xl sm:text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-10% to-[#B9D8F4] text-shadow-lg text-shadow-white/10',
    xxl: 'font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-10% to-[#B9D8F4] text-shadow-lg text-shadow-white/10',
  }

  return <p className={` ${styles?.[size]} ${className}`}>{children}</p>
}

export default Typography
