'use client'

import Image from 'next/image'

export default function TopPage() {
  return (
    <div className="pt-20 h-auto bg-no-repeat bg-[url(/images/cubes.webp?v=1)]">
      <div className="lg:container mx-2 md:mx-auto mt-20 flex flex-col items-center justify-center">
        <div className="p-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl">
          <div className="bg-card rounded-2xl p-5 flex flex-col gap-5 w-full max-w-[500px]">
            <Image
              src="/images/usxp/dollar.webp?v=2"
              alt="usxp-logo"
              width={0}
              height={0}
              sizes="100"
              className="w-20 h-20 object-cover"
            />
            <p className="text-secondary-500 font-bold text-4xl">USXP</p>
            <p className="text-white text-sm lg:text-lg">
              is a settlement token used exclusively within ThePayHub ecosystem to facilitate transactions between
              platforms and clients.
            </p>
            <p className="text-white text-sm lg:text-lg">
              It enables faster, more secure, and transparent payments by acting as an internal unit of settlement
              across affiliated services like XPZ and PXG.
            </p>
            <p className="text-white text-sm lg:text-lg">
              is not available for public trading or speculation and is strictly used to support operational efficiency,
              compliance, and reconciliation within the ecosystem.
            </p>
          </div>
        </div>
        <div className="my-10 w-full max-w-[100%] sm:max-w-[600px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">How USXP Works?</h2>
          <div className="flex flex-col items-start w-full pl-0 sm:pl-1">
            <div className="flex flex-row gap-5 mt-5 items-center bg-card p-2 rounded-2xl w-full sm:w-[350px]">
              <div className="rounded-full bg-secondary-500 min-w-[30px] w-[30px] h-[30px] flex items-center justify-center text-black">
                1
              </div>
              <p className="text-white text-sm md:text-lg mr-5">Customer pays on XPZ</p>
            </div>
          </div>
          <div className="flex flex-col items-end w-full pr-0 sm:pr-5">
            <div className="flex flex-row gap-5 mt-5 items-center bg-card p-2 rounded-2xl w-full sm:w-[350px]">
              <div className="rounded-full bg-secondary-500 min-w-[30px] w-[30px] h-[30px] flex items-center justify-center text-black">
                2
              </div>
              <p className="text-white text-sm md:text-lg mr-5">Merchant receives USXP</p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full pl-0 sm:pl-1">
            <div className="flex flex-row gap-5 mt-5 items-center bg-card p-2 rounded-2xl w-full sm:w-[350px]">
              <div className="rounded-full bg-secondary-500 min-w-[30px] w-[30px] h-[30px] flex items-center justify-center text-black">
                3
              </div>
              <p className="text-white text-sm md:text-lg mr-5">Merchant sends USXP to PXG</p>
            </div>
          </div>
          <div className="flex flex-col items-end w-full pr-0 sm:pr-5">
            <div className="flex flex-row gap-5 mt-5 items-center bg-card p-2 rounded-2xl w-full sm:w-[350px]">
              <div className="rounded-full bg-secondary-500 min-w-[30px] w-[30px] h-[30px] flex items-center justify-center text-black">
                4
              </div>
              <p className="text-white text-sm md:text-lg mr-5">GKS burns the USXP</p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full pl-0 sm:pl-1">
            <div className="flex flex-row gap-5 mt-5 items-center bg-card p-2 rounded-2xl w-full sm:w-[350px]">
              <div className="rounded-full bg-secondary-500 min-w-[30px] w-[30px] h-[30px] flex items-center justify-center text-black">
                5
              </div>
              <p className="text-white text-sm md:text-lg mr-5">GKS sends fiat to the merchant’s bank account</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-10 w-full">
          <a
            href="https://www.gkssolution.com/"
            target="_blank"
            className="text-black bg-secondary-500 px-4 py-2 text-sm font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            For more Information visit GKS Solutions
          </a>
        </div>
      </div>
    </div>
  )
}
