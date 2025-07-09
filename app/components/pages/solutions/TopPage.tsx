'use client'

import Image from 'next/image'

export default function TopPage() {
  return (
    <div className="pt-20 h-auto bg-top bg-no-repeat" style={{backgroundImage: 'url(/images/cubes.webp)'}}>
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full justify-center mt-5 pt-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Powerful Solutions for Modern Business
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5 max-w-[500px]">
            Our proprietary infrastructure unifies tokenized and banking payments in a single global ecosystem,
            delivering the speed, security, and scalability your business needs.
          </p>

          <Image
            src="/images/solutions/xpz-pxg-dashboards.webp"
            alt="xpz-pxg-dashboards"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
          />
          <div className="bg-card rounded-xl p-5 w-full flex flex-col md:flex-row items-center justify-around gap-5 opacity-75 relative top-[-80px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-bold text-white">Trusted By</h3>
              <p className="text-sm text-gray-400">Over 4,000+ clients</p>
            </div>
            <div className="w-full h-px md:w-px md:h-full bg-gray-400">&nbsp;</div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-bold text-white">Active API integrations</h3>
              <p className="text-sm text-gray-400">2545</p>
            </div>
            <div className="w-full h-px md:w-px md:h-full bg-gray-400">&nbsp;</div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-bold text-white">Monthly transaction volume</h3>
              <p className="text-sm text-gray-400">R$65,000,000 USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
