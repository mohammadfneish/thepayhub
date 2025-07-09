'use client'

import Image from 'next/image'

export default function OurPartners() {
  return (
    <div className="mt-10 pt-10 h-auto">
      <div className="container px-5 md:px-0 lg:px-5 lg:px-auto relative w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">Our Partners</h2>
        <p className="text-lg mt-2 text-gray-400">Strategic collaborations that power our global infrastructure</p>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex items-stretch justify-center">
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5">
            <div className="bg-linear-to-r from-primary-500 to-primary-400 p-2 rounded-2xl w-[90%] h-[60px] flex items-center justify-center gap-5">
              <Image
                src="/images/company/alchemy.webp"
                alt="Alchemy"
                width={0}
                height={0}
                className="w-auto h-[45px] object-contain"
              />
              <span className="text-sm lg:text-lg font-bold text-white">Alchemy</span>
            </div>
            <p className="text-lg mt-2 text-gray-400 flex-1">
              Build anything onchain. The complete web3 development platform for wallets, rollups, and apps
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5">
            <div className="bg-linear-to-r from-primary-500 to-primary-400 p-2 rounded-2xl w-[90%] h-[60px] flex items-center justify-center gap-5">
              <Image
                src="/images/company/metamap.webp"
                alt="metamap"
                width={0}
                height={0}
                className="w-auto h-[45px] object-contain"
              />
              <span className="text-sm lg:text-lg font-bold text-white">Metamap</span>
            </div>
            <p className="text-lg mt-2 text-gray-400">
              Identity verification platform for businesses. MetaMap offers user onboarding and KYC & AML compliance
              solutions.
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5">
            <div className="bg-linear-to-r from-primary-500 to-primary-400 p-2 rounded-2xl w-[90%] h-[60px] flex items-center justify-center gap-5">
              <Image
                src="/images/company/aws--logo.webp"
                alt="metamap"
                width={0}
                height={0}
                className="w-auto h-[45px] object-contain"
              />
              <span className="text-sm lg:text-lg font-bold text-white">AWS</span>
            </div>
            <p className="text-lg mt-2 text-gray-400">
              a comprehensive and widely adopted cloud computing platform that provides over 200 fully featured services
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5">
            <div className="bg-linear-to-r from-primary-500 to-primary-400 p-2 rounded-2xl w-[90%] h-[60px] flex items-center justify-center gap-5">
              <Image
                src="/images/company/polygon.webp"
                alt="metamap"
                width={0}
                height={0}
                className="w-auto h-[45px] object-contain"
              />
              <span className="text-sm lg:text-lg font-bold text-white">Polygon</span>
            </div>
            <p className="text-lg mt-2 text-gray-400">
              Polygon (formerly Matic Network) is a blockchain platform which aims to create a multi-chain blockchain
              system compatible with Ethereum.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
