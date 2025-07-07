'use client'

import Image from 'next/image'

export default function HereOrThere() {
  return (
    <div className="mt-10 h-auto">
      <div
        className="relative h-[300px] md:h-[500px] lg:container w-[90%] mx-auto bg-contain bg-center bg-no-repeat"
        style={{backgroundImage: 'url(/images/home/customers-feedback.webp)'}}>
        <div className="flex flex-col opacity-70 absolute bottom-10 right-10">
          <div className="bg-card rounded-2xl p-5 border border-secondary-300 max-w-[400px]">
            <h2 className="text-md lg:text-xl font-bold text-secondary-500">
              For companies
              <br />
              going PLACES!
            </h2>
            <p className="text-sm my-4 text-white">
              We`ve used ThePayHub for facilitating over $65M in cross-border payments. Their platform has dramatically
              reduced our processing time and costs while providing the transparency we needed
            </p>
            <h5 className="text-sm font-bold text-secondary-500">Sarah Chen, CFO at GrowthTech</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
