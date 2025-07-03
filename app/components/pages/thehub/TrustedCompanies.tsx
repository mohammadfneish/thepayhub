'use client'

import Image from 'next/image'
import ContactUs from './ContactUs'

export default function HereOrThere() {
  return (
    <div className="mt-10 h-auto w-full bg-primary-600">
      <div className="h-3 w-full bg-gradient-to-r from-primary-400 to-secondary-500"></div>
      <div className="lg:container w-[90%] mx-auto flex flex-col items-center py-5">
        <h1 className="text-md lg:text-4xl font-bold text-secondary-500 mt-5 pt-5">Trusted by Companies Worldwide</h1>
        <p className="text-sm my-4 text-white text-center max-w-[500px]">
          Over 4,000 businesses rely on our infrastructure to process more than $65 billion in monthly transaction
          volume. Join the growing network of forward-thinking companies transforming how they manage global payments.
        </p>
        <div className="flex flex-row items-stretch justify-center gap-5 my-5">
          <div className="flex flex-col w-full sm:w-[200px] bg-card p-5 rounded-xl text-center gap-5">
            <h3 className="text-md font-bold text-secondary-500">4,000+</h3>
            <p className="text-sm text-gray-400">Business Clients</p>
          </div>
          <div className="flex flex-col w-full sm:w-[200px] bg-card p-5 rounded-xl text-center gap-5">
            <h3 className="text-md font-bold text-secondary-500">$65B+</h3>
            <p className="text-sm text-gray-400">Monthly Volume</p>
          </div>
          <div className="flex flex-col w-full sm:w-[200px] bg-card p-5 rounded-xl text-center gap-5">
            <h3 className="text-md font-bold text-secondary-500">100+</h3>
            <p className="text-sm text-gray-400">Countries</p>
          </div>
        </div>
        <p className="text-sm my-4 text-white text-center max-w-[600px] mb-5">
          Tech companies, marketplaces, and fintechs around the globe rely on PayHub as the financial backbone powering
          their international expansion.
        </p>
        <Image
          src={'/images/trusted-companies.webp'}
          alt="trusted-companies"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto mt-5"
        />
        <Image
          src={'/images/our-clients.webp'}
          alt="our-clients"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto my-5"
        />
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-5 my-5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 max-w-[1000px] min-h-[250px]">
          <div className="flex flex-col p-5 w-full md:w-1/2">
            <div className="border border-secondary-500 rounded-full w-fit py-1 px-2 flex items-center justify-center">
              <span>Featured</span>
            </div>
            <h3 className="text-md font-bold text-white mt-2">
              Cryptocurrency Explained With Pros and Cons for Investment
            </h3>
            <p className="text-sm my-3 text-white">
              Discover what cryptocurrency is, how it works, and whether it`s the right investment for you by exploring
              its key advantages and risks.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={'/images/crypto-img.webp'}
              alt="crypto-currency"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-b-xl md:rounded-b-none md:rounded-r-xl"
            />
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
  )
}
