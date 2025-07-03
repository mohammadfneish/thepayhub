'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function TopPage() {
  const router = useRouter()
  return (
    <div className="py-20 h-auto" style={{backgroundImage: 'url(/images/body-pattern.webp)'}}>
      <div className="container mx-auto relative">
        <div className="absolute top-[-100px] left-0 z-0 w-full max-w-[1000px]">
          <Image src="/images/globo.gif" alt="globo" width={0} height={0} sizes="100vw" className="w-full h-auto" />
        </div>
        <div className="z-1 relative mx-auto lg:ml-[50%] xl:ml-[60%] mt-5 pt-5 flex flex-col items-center w-full sm:max-w-[80%] md:max-w-[500px]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center lg:text-left w-[300px] lg:w-full">
              Your gateway to smarter B2B payments
            </h1>
            <p className="text-lg mt-2 text-gray-400 text-center lg:text-left px-5 max-w-[400px] lg:w-full">
              Unifying tokenized and traditional banking in a single powerful ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-5 px-5">
              <button
                className="text-black bg-secondary-500 px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => router.push('/solutions')}>
                Explore our solutions
              </button>
              <button
                className="text-white border bg-transparent px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => console.log('schedule a demo')}>
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
