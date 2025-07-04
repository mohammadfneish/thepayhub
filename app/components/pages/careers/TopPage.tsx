'use client'

import {useRouter} from 'next/navigation'

export default function TopPage() {
  const router = useRouter()
  return (
    <div className="py-20 h-auto" style={{backgroundImage: 'url(/images/body-pattern.webp)'}}>
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Join Our Mission to Transform Global Finance
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            We`re looking for exceptional talent to help us build the future of financial infrastructure
          </p>
          <button
            className="text-black bg-secondary-500 px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            onClick={() => router.push('/solutions')}>
            Explore Open Positions
          </button>
        </div>
      </div>
    </div>
  )
}
