'use client'

import Image from 'next/image'

export default function OurPartners() {
  return (
    <div className="mt-10 pt-10 h-auto">
      <div className="container px-5 md:px-0 lg:px-5 lg:px-auto relative w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">Our Partners</h2>
        <p className="text-lg mt-2 text-gray-400">Strategic collaborations that power our global infrastructure</p>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex items-stretch justify-center">
          <Image
            src="/images/company/aws.webp?v=1"
            alt="aws"
            width={0}
            height={0}
            sizes="300px"
            className="w-full h-full"
          />
          <Image
            src="/images/company/metamap.webp?v=1"
            alt="metamap"
            width={0}
            height={0}
            sizes="300px"
            className="w-full h-full"
          />
          <Image
            src="/images/company/alchemy.webp?v=1"
            alt="alchemy"
            width={0}
            height={0}
            sizes="300px"
            className="w-full h-full"
          />
          <Image
            src="/images/company/polygon.webp?v=1"
            alt="polygon"
            width={0}
            height={0}
            sizes="300px"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
