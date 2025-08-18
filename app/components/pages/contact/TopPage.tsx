'use client'

import {supportsData} from '../../../data/contact'

export default function TopPage() {
  return (
    <div className="py-20 h-auto bg-no-repeat bg-center lg:bg-[url(/images/contact/header-bg.webp?v=3)]">
      <div className="lg:h-[500px]"></div>
      <div className="pt-20 container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">How Can We Help You?</h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5">Choose the option that best fits your needs</p>
          <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5">
            {supportsData.map((item, index) => (
              <div
                key={index}
                className="bg-card p-5 border border-primary-300 rounded-2xl flex flex-col justify-center items-center gap-3">
                <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                  <div
                    className="absolute w-[80px] h-[80px] bg-contain bg-no-repeat bg-center z-0"
                    style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}></div>
                  <div className="z-1 mb-[5px]">{item.icon()}</div>
                </div>
                <h3 className="text-md font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 flex-1">{item.desc}</p>
                <a
                  className="text-black bg-secondary-500 px-4 py-2 text-sm font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  href={item.mailTo}>
                  {item.mailToText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
