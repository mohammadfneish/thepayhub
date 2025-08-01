'use client'

import {useRouter} from 'next/navigation'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        className="py-40 h-auto bg-no-repeat bg-top bg-no-repeat overflow-hidden"
        style={{backgroundImage: 'url(/images/cubes.webp?v=1)'}}>
        <div className="my-5 py-5 flex flex-col items-center justify-center">
          <svg width="140" height="160" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.535156 120.042V39.9581L69.9582 0L139.465 39.9581V120.042L69.9582 160L0.535156 120.042Z"
              fill="url(#paint0_linear_39_13994)"
              fillOpacity="0.15"
            />
            <path
              d="M30.8691 65.6921V51.2955L43.3152 44.1123L55.7763 51.2955V65.6921L43.3152 72.8754L30.8691 65.6921Z"
              fill="#D9D9D9"
            />
            <path
              d="M84.3086 65.6921V51.2955L96.7546 44.1123L109.216 51.2955V65.6921L96.7546 72.8754L84.3086 65.6921Z"
              fill="#D9D9D9"
            />
            <path
              d="M30.8262 111.712V97.3151L43.2722 90.1318L55.7333 97.3151V111.712L43.2722 118.895L30.8262 111.712Z"
              fill="#D9D9D9"
            />
            <path
              d="M44.2695 88.8152V74.4186L56.7156 67.2354L69.1766 74.4186V88.8152L56.7156 95.9984L44.2695 88.8152Z"
              fill="#D9D9D9"
            />
            <defs>
              <linearGradient
                id="paint0_linear_39_13994"
                x1="136.104"
                y1="-1.08377e-06"
                x2="-33.4648"
                y2="60.2057"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.6" />
                <stop offset="1" stopColor="#2A4D81" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-4xl font-bold text-white">404</h2>
          <h1 className="text-4xl font-bold text-secondary-500 my-5">Page Not Found</h1>
          <p className="text-sm font-bold text-secondary-500 mb-5 text-center px-5 text-white">
            Try again later or click on the button below
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <button
              className="text-black bg-secondary-500 px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              onClick={() => router.push('/solutions')}>
              Explore our solutions
            </button>
            <button
              className="text-white border bg-transparent px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              onClick={() => router.push('/')}>
              Return to home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
