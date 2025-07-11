'use client'

import Image from 'next/image'
import {platformsData} from '../../../data/solutions'
import {useState} from 'react'

export default function OurCorePlatform() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms>(platformsData[0])
  return (
    <div className="mb-10 h-auto">
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full justify-center mt-5 pt-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Our Core Platforms
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5 max-w-[500px]">
            Discover our integrated solutions designed to transform your global financial operations
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            {platformsData.map((platform, index) => (
              <button
                key={index}
                className={`text-white bg-transparent border px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${
                  selectedPlatform.name === platform.name ? 'border-secondary-500' : 'border-white'
                }`}
                onClick={() => setSelectedPlatform(platform)}>
                {platform.name}
              </button>
            ))}
          </div>
          <div className="mt-5 bg-card flex flex-col md:flex-row items-center md:items-stretch justify-between w-full max-w-[90%] gap-5 bg-card border border-primary-300 rounded-2xl">
            {!!selectedPlatform && (
              <>
                <div className="flex flex-col p-5 flex-1">
                  <h3 className="text-2xl my-3 font-bold text-secondary-500 text-left">The Problem</h3>
                  <p className="text-lg my-4 text-white text-left max-w-[500px]">{selectedPlatform.problem}</p>
                  <h3 className="text-2xl my-3 font-bold text-secondary-500 text-left">Our Solution</h3>
                  <p className="text-lg my-4 text-white text-left max-w-[500px]">{selectedPlatform.solution}</p>
                </div>
                <div className="w-full h-px md:w-px md:h-auto bg-gray-400">&nbsp;</div>
                <div className="flex flex-col gap-5 items-start justify-center p-5">
                  <Image
                    src={selectedPlatform.img}
                    alt="xpz-pxg-dashboards"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
                  {selectedPlatform.lists.map((list, index) => (
                    <div key={index} className="flex flex-row items-center gap-3">
                      <div className="text-black flex items-center justify-center w-[30px] h-[30px] bg-secondary-500 rounded-full">
                        ✓
                      </div>
                      <h5 className="text-white text-lg">{list}</h5>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
