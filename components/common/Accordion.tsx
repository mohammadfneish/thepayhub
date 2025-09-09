'use client'
import { useState } from 'react'
import Typography from './Typography'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

function Accordion({title, description}: {title: string; description: string}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)} className='flex flex-col gap-1.5 p-3.5 rounded-xl bg-soft-200 z-10 cursor-pointer w-full'>
      <div className='flex items-center justify-between '>
        <Typography size='sm'>{title}</Typography>
        {isOpen ? <MinusIcon width={14} height={14} /> : <PlusIcon width={14} height={14} />}
      </div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <Typography size='sm' className='text-sub-600! overflow-hidden'>{description}</Typography>
      </div>
    </div>
  )
}

export default Accordion