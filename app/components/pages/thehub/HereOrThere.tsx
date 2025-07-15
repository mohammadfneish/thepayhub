'use client'

import Image from 'next/image'

export default function HereOrThere() {
  return (
    <div className="mt-20 lg:mt-10 h-auto overflow-hidden">
      <div className="px-2 md:px-5 lg:px-0 lg:container relative w-[90%] mx-auto">
        <div className="flex flex-col items-start justify-left">
          <div className="flex flex-col items-start md:flex-row justify-left lg:flex-col">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500 xl:text-white">Here or there,</h2>
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500 xl:text-white">Pay, anywhere! </h2>
          </div>
          <p className="mt-5 text-white xl:text-secondary-500 max-w-[450px]">
            Operating across South America, North America, UAE, and Asia, with a growing footprint in emerging and
            established markets alike.
          </p>
          <div className="relative h-[500px] w-1/2">
            <div className="absolute left-0 top-0">
              <Image
                src={'/images/home/thepayhub-countries-group1.webp?v=1'}
                alt="thepayhub-countries-group1"
                width={500}
                height={0}
                sizes="500px"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-[-10%] md:right-[-30%] lg:right-[-20%] xl:right-[-10%] top-[300px] sm:top-[200px] md:top-[150px] lg:top-0">
          <Image
            src={'/images/home/thepayhub-countries-group2.webp?v=1'}
            alt="thepayhub-countries-group2"
            width={650}
            height={0}
            className="w-auto h-auto lg:max-w-[650px] md:max-w-[500px] sm:max-w-[400px] max-w-[300px]"
          />
        </div>
      </div>
    </div>
  )
}
