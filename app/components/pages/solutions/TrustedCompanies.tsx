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
          <Image
            src="/images/solutions/trusted-cpmpanies.webp"
            alt="trusted-cpmpanies"
            width={0}
            height={0}
            sizes="1920px"
            className="w-full h-auto mt-5"
          />
        </div>
      </div>
    </div>
  )
}
