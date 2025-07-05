'use client'

import {useRouter} from 'next/navigation'

export default function StillHaveQuestions() {
  const route = useRouter()

  return (
    <div className="pt-20 h-auto mb-20">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Still Have Questions?
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5">
            Our team is ready to help you with any questions or concerns you may have about our services.
          </p>
          <button
            className="text-black bg-secondary-500 px-4 py-2 text-sm font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            onClick={() => route.push('/contact')}>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}
