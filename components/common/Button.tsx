'use client'
import React from 'react'
import {motion} from 'framer-motion'
import SpinnerAnimationIcon from '@svg/spinnerAnimation.svg'

interface props {
  className?: string
  style?: any
  type?: 'button' | 'submit' | 'reset' | undefined
  variant?: Variant
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  small?: boolean
}

export default function Button({
  className = '',
  type = 'button',
  variant,
  children,
  onClick,
  loading,
  disabled,
  icon,
  small,
}: props) {
  const styles = {
    main: 'relative flex flex-row flex-nowrap gap-2 items-center justify-center h-fit px-6 py-2.5 rounded-full font-medium text-sm sm:text-base',
    primary: 'bg-primary-400 text-on-primary',
    secondary: 'bg-secondary-400 text-on-secondary',
    outline: 'border bg-background border-secondary-400 text-secondary-400',
    custom: 'pointer-events-auto',
  }

  const getClassName = (variant: Variant | undefined) => {
    if (styles?.[variant!]) return styles?.[variant!]
    return styles.primary
  }

  return (
    <motion.button
      type={type}
      layout
      whileHover={{scale: 1.02}}
      whileTap={{scale: 0.95}}
      onClick={() => (onClick ? onClick() : {})}
      className={`${styles.main} ${getClassName(variant)} ${className} ${small ? '!text-sm' : ''}`}
      disabled={disabled || loading}>
      {icon && <span className={'flex items-center aspect-square justify-center w-6 h-6'}>{icon}</span>}
      {children}
      {loading && <SpinnerAnimationIcon className="size-4" />}
    </motion.button>
  )
}
