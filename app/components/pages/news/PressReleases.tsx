'use client'

import Image from 'next/image'
import {pressReleases} from '../../../data/news'

export default function PressReleases() {
  return (
    <div className="mb-10 pb-10 container mx-3 mx-auto flex flex-col w-full items-center">
      <h1 className="text-4xl font-bold text-secondary-500 mt-5">Press Releases</h1>
      <p className="text-md mt-2 text-white text-center p-5 my-5">Official announcements from ThePayHub</p>
      <div className="flex flex-col gap-5 w-full items-center">
        {pressReleases.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-card border border-primary-300 rounded-2xl w-full max-w-[90%] p-5 gap-3">
            <h5 className="text-sm font-bold text-secondary-500 whitespace-nowrap">{item.date}</h5>
            <h3 className="text-md font-bold text-white text-left">{item.title}</h3>
            <p className="text-sm mt-1 mb-2 text-gray-400 text-left flex-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
