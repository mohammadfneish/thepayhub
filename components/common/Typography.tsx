import React from 'react'

interface Props {
  children: React.ReactNode
  size?: Size
  className?: string
}

function Typography({children, size = 'md', className = ''}: Props) {
  const styles = {
    sm: '',
    md: 'text-sub-600',
    md2: 'text-sub-600 text-md sm:text-lg',
    lg: 'text-white text-xl sm:text-2xl',
    xl: '',
    xxl: 'text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl',
  }

  return <p className={` ${styles?.[size]} ${className}`}>{children}</p>
}

export default Typography
