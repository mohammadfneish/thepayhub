'use client'

import {tailoredSolutions} from '../../../data/solutions'

export default function TailoredSolutions() {
  return (
    <div className="mb-10 h-auto">
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full justify-center mt-5 pt-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center">
            Tailored Solutions for Your Business
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5 max-w-[500px]">
            We offer solutions adapted for different types of companies and specific needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tailoredSolutions.map((platform, index) => (
              <div key={index} className="bg-card flex flex-col items-center justify-center p-5 rounded-2xl">
                <h3 className="text-md my-3 font-bold text-secondary-500">{platform.name}</h3>
                <p className="text-sm mt-3 text-white">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
