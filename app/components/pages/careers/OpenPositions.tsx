'use client'

import {useState} from 'react'
import {openPositions} from '../../../data/careers'

export default function OpenPositions() {
  const allDepartments = 'All Departments'
  const [activePosition, setActivePosition] = useState<string>(allDepartments)

  return (
    <div className="pt-10 h-auto">
      <div className="lg:container lg:mx-auto mx-5 relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Open Positions
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            Join our team and help shape the future of financial infrastructure
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-5 w-full">
            <div className="flex flex-row gap-2 w-full overflow-x-auto scrollable-container items-center justify-center">
              <div
                onClick={() => setActivePosition(allDepartments)}
                className={`bg-card border rounded-full px-5 py-2 whitespace-nowrap ${
                  activePosition === allDepartments ? 'border-secondary-500' : 'border-primary-500'
                }`}>
                {allDepartments}
              </div>
              {Object.keys(openPositions).map((key, index) => (
                <div
                  key={index}
                  onClick={() => setActivePosition(key)}
                  className={`bg-card border rounded-full px-5 py-2 whitespace-nowrap ${
                    activePosition === key ? 'border-secondary-500' : 'border-primary-500'
                  }`}>
                  {key}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mt-5 w-full">
            {Object.keys(openPositions).map((key, i) => {
              if (activePosition === allDepartments || key === activePosition) {
                return openPositions[key].map((position, j) => (
                  <div key={`${i}-${j}`} className="bg-card rounded-2xl p-5 flex flex-col gap-5 w-full max-w-[900px]">
                    <h3 className="text-md font-bold text-white">{position.title}</h3>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                      <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center gap-2">
                          <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">D</div>
                          <div className="text-sm text-gray-400">{key}</div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">L</div>
                          <div className="text-sm text-gray-400">{position.location}</div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">T</div>
                          <div className="text-sm text-gray-400">{position.time}</div>
                        </div>
                      </div>
                      <button className="text-sm text-white px-5 py-2 rounded-full bg-primary-300">Apply Now</button>
                    </div>
                    <p className="text-sm text-gray-400">{position.desc}</p>
                  </div>
                ))
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
