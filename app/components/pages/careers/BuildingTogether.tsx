'use client'

import Image from 'next/image'

export default function BuildingTogether() {
  return (
    <div className="pt-10 md:pt-20 h-auto">
      <div className="container mx-auto relative">
        <div className="h-1 w-full bg-secondary-500"></div>
        <div className="bg-primary-600 flex flex-col lg:flex-row lg:items-stretch items-center justify-center gap-5">
          <div className="w-full lg:w-1/2 h-[200px] lg:h-auto">
            <Image
              src="/images/career-building-together.webp"
              alt="building together"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full max-w-full max-h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2 mb-5 p-5">
            <div className="flex flex-col text-left max-w-[500px] ">
              <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">Building Together</h2>
              <p className="text-sm mt-2 text-gray-400 text-base/8 ">
                At ThePayHub, we believe that the best solutions come from collaborative thinking and diverse
                perspectives. We`ve built a culture where ideas are valued regardless of where they come from, and
                everyone has a voice in shaping our products and company.
                <br />
                <br />
                We`re a team of problem-solvers who are passionate about creating technology that makes a real
                difference in how businesses operate globally. We celebrate wins together, learn from challenges, and
                continuously push the boundaries of what`s possible.
              </p>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                    1
                  </div>
                  <p className="text-sm mt-2 text-gray-400 text-base/8">Ownership mentality in everything we do</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                    2
                  </div>
                  <p className="text-sm mt-2 text-gray-400 text-base/8">Bias for action and continuous improvement</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                    3
                  </div>
                  <p className="text-sm mt-2 text-gray-400 text-base/8">Transparency and open communication</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                    4
                  </div>
                  <p className="text-sm mt-2 text-gray-400 text-base/8">Customer-centric innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-primary-400"></div>
      </div>
    </div>
  )
}
