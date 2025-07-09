'use client'

import {useState} from 'react'
import {payHubFeatures} from '../../../data/solutions'

export default function ThePayHubFeatures() {
  const [open, setOpen] = useState(0)
  return (
    <div className="md:mt-10 mb-10 h-auto">
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full justify-center mt-5 pt-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center">
            ThePayHub vs. Traditional Solutions
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5 max-w-[500px]">
            See how our ecosystem compares to fragmented alternatives
          </p>
          <table className="hidden sm:inline-table w-full">
            <thead>
              <tr className="bg-primary-400 border border-b-gray-400">
                <th className="p-2" align="left">
                  Feature
                </th>
                <th className="p-2" align="left">
                  Traditional Solution
                </th>
                <th className="p-2" align="left">
                  PayHub
                </th>
              </tr>
            </thead>
            <tbody>
              {payHubFeatures.map((platform, index) => (
                <tr key={index} className="border border-b-gray-400">
                  <td className="p-2">{platform.feature}</td>
                  <td className="p-2">{platform.traditionalSolution}</td>
                  <td className="p-2 text-secondary-500">{platform.thePayHubSolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="inline sm:hidden flex flex-col items-center gap-6 w-full">
            {payHubFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-primary-300 rounded-2xl flex flex-col items-center lg:items-start w-full">
                <div
                  className={`flex flex-row items-center justify-between w-full px-5 pt-5 pb-4 bg-primary-500 ${
                    open === index ? 'rounded-t-2xl' : 'rounded-2xl'
                  }`}>
                  <h3 className="flex-1 text-md font-bold text-gray-400 text-left">{item.feature}</h3>
                  <div
                    onClick={() => setOpen(index)}
                    className="cursor-pointer flex flex-col justify-center items-center border border-primary-300 rounded-full w-8 h-8 bg-gray-500">
                    <span className="text-2xl font-bold ">{open === index ? '-' : '+'}</span>
                  </div>
                </div>
                {open === index && (
                  <div className="flex flex-col gap-4 w-full p-5">
                    <div className="text-sm text-gray-400">{item.traditionalSolution}</div>
                    <div className="w-full h-px bg-gray-400">&nbsp;</div>
                    <div className="text-lg font-bold text-white">ThePayHub</div>
                    <div className="text-lg text-secondary-500">{item.thePayHubSolution}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
