'use client'

import {ReactNode, useState} from 'react'
import {motion} from 'framer-motion'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline'

type AccordionProps = {
  children: ReactNode
  className?: string
}

type AccordionItemProps = {
  title: string
  children: ReactNode
}

export function Accordion({children, className = ''}: AccordionProps) {
  return <div className={`${className}`}>{children}</div>
}

export function AccordionItem({title, children}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden">
      <button
        className="w-full text-left px-4 py-3  text-white hover:text-red-400 font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        <motion.span animate={{rotate: isOpen ? 180 : 0}} transition={{duration: 0.3}}>
          <ChevronUpIcon className="w-5 h-5" />
        </motion.span>
      </button>
      {isOpen && (
        <motion.div
          initial={{height: 0, opacity: 0}}
          animate={{height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
          className="px-4 py-3  text-gray-300 overflow-hidden">
          {children}
        </motion.div>
      )}
    </div>
  )
}
