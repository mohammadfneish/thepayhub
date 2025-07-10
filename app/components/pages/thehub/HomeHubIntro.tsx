'use client'

import Image from 'next/image'

export default function HomeHubIntro() {
  return (
    <div className="mt-0 lg:mt-20 py-0 lg:py-20 h-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch">
        <div
          className="order-first lg:order-last bg-center bg-cover bg-no-repeat w-full lg:w-1/2 min-h-[350px]"
          style={{backgroundImage: 'url(/images/home/screen-person.webp)'}}>
          &nbsp;
        </div>
        <div className="order-last lg:order-first w-full lg:w-1/2 px-5 mt-5 md:mt-1">
          <div className="flex flex-col items-center lg:items-start px-5">
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src={'/images/people-polygon.webp'}
                alt="globo"
                width={80}
                height={80}
                sizes="80px"
                className="w-[80px] h-[80px]"
              />
              <h3 className="text-md font-bold text-secondary-500 px-5 text-center lg:text-left">
                Trusted by Over 4,000 Clients
              </h3>
              <p className="text-sm mt-2 text-gray-400 text-center lg:text-left px-5">
                Empowering a diverse network of clients across fintech, e-commerce, and enterprise sectors — all
                connected through our integrated ecosystem.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src={'/images/people-polygon.webp'}
                alt="globo"
                width={80}
                height={80}
                sizes="80px"
                className="w-[80px] h-[80px]"
              />
              <h3 className="text-md font-bold text-secondary-500 px-5 text-center lg:text-left">
                High-Impact Transactions
              </h3>
              <p className="text-sm mt-2 text-gray-400 text-center lg:text-left px-5">
                Handling an average of $65M USD in monthly transaction volume and facilitating over $35M USD in
                settlements, ensuring scale and reliability at every level.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src={'/images/people-polygon.webp'}
                alt="globo"
                width={80}
                height={80}
                sizes="80px"
                className="w-[80px] h-[80px]"
              />
              <h3 className="text-md font-bold text-secondary-500 px-5 text-center lg:text-left">
                Significant Costs Savings
              </h3>
              <p className="text-sm mt-2 text-gray-400 text-center lg:text-left px-5">
                Clients save an average of 3–4% per transaction by operating within our financial hub — unlocking
                efficiency, transparency, and real value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
