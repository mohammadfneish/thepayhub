'use client'

import {useRouter} from 'next/navigation'

export default function JoinUs() {
  const router = useRouter()
  return (
    <div className="pb-20 mt-10 h-auto">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center">
            Join Us in Transforming Global Finance
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5 max-w-[600px]">
            Discover how our vision and technology can help your business thrive in the global marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              className="text-white bg-primary-300 px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              href="mailto:contact@thepayhub.io">
              Get in Touch
            </a>
            <a
              className="text-white bg-transparent border border-white px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              href="mailto:support@thepayhub.io">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
