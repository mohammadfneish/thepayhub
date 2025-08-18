'use client'

import Image from 'next/image'

export default function TrustedCompanies() {
  return (
    <div className="mb-20 h-auto">
      <div className="lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full justify-center mt-5 pt-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px] mb-5">
            Companys that trust us
          </h1>
          <div className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-6 flex items-stretch justify-center">
            <Image
              src="/images/solutions/aws.webp?v=3"
              alt="aws"
              width={0}
              height={0}
              sizes="300px"
              className="w-full h-full"
            />
            <Image
              src="/images/solutions/metamap.webp?v=3"
              alt="metamap"
              width={0}
              height={0}
              sizes="300px"
              className="w-full h-full"
            />
            <Image
              src="/images/solutions/alchemy.webp?v=3"
              alt="alchemy"
              width={0}
              height={0}
              sizes="300px"
              className="w-full h-full"
            />
            <Image
              src="/images/solutions/polygon.webp?v=3"
              alt="polygon"
              width={0}
              height={0}
              sizes="300px"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
