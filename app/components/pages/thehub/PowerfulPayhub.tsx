'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {payHubSolutions} from '../../../data/home'

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
        <div className="w-[100%] overflow-x-auto scrollable-container gap-6 flex flex-row items-stretch mb-5">
          {payHubSolutions.map((item, index) => (
            <div key={index} className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl min-w-[350px]">
              <Image
                src={item.img}
                alt="xpz"
                width={100}
                height={0}
                sizes="100px"
                className="w-[260px] h-[100px] object-contain"
              />
              <h3 className="text-md my-3 font-bold text-white text-left">{item.title}</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">{item.desc}</p>
            </div>
          ))}
          <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl min-w-[300px]">
            <div className="border border-secondary-500 rounded-full w-fit py-1 px-2 flex items-center justify-center">
              <span>SOON</span>
            </div>
            <h3 className="text-lg my-5 font-bold text-left bg-linear-to-r from-secondary-50 to-secondary-500 bg-clip-text text-transparent">
              New Solutions
            </h3>
            <h3 className="text-md my-3 font-bold text-white text-left">Tailored for your business</h3>
            <p className="flex-1 text-sm my-3 text-white text-left">
              From specialized token services to custom integration solutions, we`re constantly expanding our ecosystem
              to meet evolving business needs.
            </p>
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
