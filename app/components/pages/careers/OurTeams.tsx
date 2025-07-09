'use client'

import Image from 'next/image'

export default function OurTeams() {
  return (
    <div className="pt-10 md:pt-20 h-auto">
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="flex flex-col text-left max-w-[500px] px-5 mb-5">
              <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">Our C-Team</h2>
              <p className="text-sm lg:text-xl mt-2 text-gray-400 text-base/8 leading-10">
                At the core of our company is a leadership team driven by precision, strategy, and innovation. In a
                fast-evolving financial landscape, we believe that strong leadership isn`t just about managing—it`s
                about envisioning the future and executing bold moves with confidence. Our C-level executives bring
                decades of experience across finance, technology, security, people, and product. They lead with clarity,
                integrity, and ambition, steering the company through complexity with sharp insight and a relentless
                focus on delivering value to our clients and partners. We`re not just building financial tools, we`re
                building trust.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-left w-full md:w-1/2">
            <Image
              src={'/images/careers/our-teams.webp'}
              alt="globo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
