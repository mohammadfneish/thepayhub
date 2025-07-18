'use client'

import {faqCategories} from '../../../data/faq'

export default function TopPage() {
  return (
    <div className="py-20 h-auto bg-no-repeat bg-[url(/images/cubes.webp?v=1)]">
      <div className="pt-20 container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center ">Frequently Asked Questions</h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5">
            Find answers to common questions about ThePayHub`s solutions and services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center md:items-stretch justify-center">
            {faqCategories.map((item, index) => (
              <div
                key={index}
                className="mx-auto md:mx-0 bg-card border border-primary-300 rounded-2xl p-5 flex flex-col items-center lg:items-start max-w-[90%] md:max-w-full">
                <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                  <div
                    className="absolute w-[80px] h-[80px] bg-contain bg-no-repeat bg-center z-0"
                    style={{backgroundImage: 'url(/images/cube.webp?v=1)'}}></div>
                  <div className="z-1 mb-[5px]">{item.icon()}</div>
                </div>
                <h3 className="text-md font-bold text-secondary-500 px-5 text-center lg:text-left">{item.title}</h3>
                <p className="text-sm mt-2 text-gray-400 text-center lg:text-left px-5 flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
