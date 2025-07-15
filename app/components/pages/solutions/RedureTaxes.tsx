'use client'

import Image from 'next/image'

export default function RedureTaxes() {
  return (
    <div className="mb-10 h-auto">
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full justify-center mt-5 pt-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Reduce Taxes
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5 max-w-[500px]">
            Save up to 4% per transaction with our ecosystem
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-sm text-gray-400">Transaction volume</p>
            <div className="max-w-[80%] w-[500px] h-[10px] bg-gray-400 flex flex-row rounded-full relative">
              <div className="w-[50%] h-[10px] rounded-full bg-linear-to-r from-secondary-200 to-secondary-500"></div>
              <Image
                src="/images/cube.webp?v=1"
                alt="cube"
                width={0}
                height={0}
                sizes="50px"
                className="w-[50px] h-[50px] absolute right-[calc(50%-25px)] top-[calc(50%-25px)]"
              />
            </div>
            <div className="py-2 px-5 rounded-full bg-secondary-500 text-primary-500 flex items-center justify-center">
              US$ 5,5M
            </div>
            <p className="text-sm text-gray-400">Save up to</p>
            <p className="text-xl font-bold">
              <span className="text-white">US$ 220.000</span>
              <span className="text-secondary-500"> / year</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
