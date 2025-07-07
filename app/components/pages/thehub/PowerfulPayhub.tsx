'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function PowerfulPayhub() {
  const router = useRouter()
  return (
    <div className="mt-20 lg:mt-0 h-auto">
      <div className="px-2 md:px-5 lg:px-0 lg:container mx-auto flex flex-col items-center">
        <h2 className="text-md lg:text-4xl font-bold text-secondary-500">Powerful HUB of Financial Solutions</h2>
        <p className="text-sm my-4 text-gray-400 max-w-[700px] text-center px-5">
          From onboarding and FX to payment splitting and global settlements — PayHub delivers a full suite of financial
          products designed to scale your operations with precision, compliance, and control.
        </p>
        <p className="text-sm my-4 text-white">Discover the tools that simplify global transactions.</p>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full gap-5 my-5">
          <div className="w-[90%] md:w-1/3">
            <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl h-full">
              <Image
                src={'/images/home/xpayz.webp'}
                alt="xpz"
                width={100}
                height={0}
                sizes="100px"
                className="w-auto h-auto max-w-[150px]"
              />
              <h3 className="text-md my-3 font-bold text-white text-left">Tokenized Payment Platform</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">
                Our blockchain-based solution enables instant settlement, programmable payments, and reduced transaction
                costs through our proprietary USXP stablecoin.
              </p>
              <button
                className="w-fit text-white bg-primary-400 px-4 py-2 text-xs font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => router.push('/xpz')}>
                learn more
              </button>
            </div>
          </div>
          <div className="w-[90%] md:w-1/3">
            <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl h-full">
              <Image
                src={'/images/home/payxglobal.webp'}
                alt="payxglobal"
                width={100}
                height={0}
                sizes="100px"
                className="w-auto h-auto max-w-[150px]"
              />
              <h3 className="text-md my-3 font-bold text-white text-left">Traditional Banking Infrastructure</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">
                Access a global network of banking partners, manage multi-currency accounts, and optimize traditional
                payment operations through a single platform.
              </p>
              <button
                className="w-fit text-white bg-primary-400 px-4 py-2 text-xs font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => router.push('/xpz')}>
                learn more
              </button>
            </div>
          </div>
          <div className="w-[90%] md:w-1/3">
            <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl h-full">
              <div className="border border-secondary-500 rounded-full w-fit py-1 px-2 flex items-center justify-center">
                <span>SOON</span>
              </div>
              <h3 className="text-lg my-3 font-bold text-left bg-gradient-to-r from-secondary-50 to-secondary-500 bg-clip-text text-transparent">
                New
                <br />
                Solutions
              </h3>
              <h3 className="text-md my-3 font-bold text-white text-left">Tailored for your business</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">
                From specialized token services to custom integration solutions, we`re constantly expanding our
                ecosystem to meet evolving business needs.
              </p>
              <button
                className="w-fit text-white bg-primary-400 px-4 py-2 text-xs font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => router.push('/xpz')}>
                learn more
              </button>
            </div>
          </div>
        </div>
        <button
          className="text-black bg-secondary-500 px-4 py-2 text-sm font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={() => router.push('/solutions')}>
          See all Payhub solutions
        </button>
      </div>
    </div>
  )
}
