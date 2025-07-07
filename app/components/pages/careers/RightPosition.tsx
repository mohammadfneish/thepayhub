'use client'

import {useRouter} from 'next/navigation'

export default function RightPosition() {
  const router = useRouter()
  return (
    <div className="py-20 h-auto">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center">Don`t See the Right Position?</h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5 max-w-[600px]">
            We`re always looking for exceptional talent. Send us your resume and let us know how you can contribute to
            our mission.
          </p>
          <button
            className="text-white bg-primary-300 px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            onClick={() => router.push('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
