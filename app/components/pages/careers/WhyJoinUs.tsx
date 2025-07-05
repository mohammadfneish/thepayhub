'use client'

import {whyJoinUsData} from '../../../data/careers'

export default function WhyJoinUs() {
  return (
    <div className="pt-10 h-auto" style={{backgroundImage: 'url(/images/body-pattern.webp)'}}>
      <div className="lg:container lg:mx-auto mx-5 relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Why Join ThePayHub
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            We offer more than just a job - we offer a chance to make a real impact
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoinUsData.map((item, index) => (
              <div
                key={index}
                className="max-w-[400px] bd-card flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  {item.title.charAt(0)}
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">{item.title}</h3>
                <p className="text-sm my-3 text-white text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
