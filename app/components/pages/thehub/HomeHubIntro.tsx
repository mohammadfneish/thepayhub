'use client'

import Image from 'next/image'

export default function HomeHubIntro() {
  return (
    <div className="mt-0 lg:mt-20 py-0 lg:py-20 h-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="order-first lg:order-last w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/images/home/flow.gif"
            unoptimized
            alt="flow"
            width={0}
            height={0}
            sizes="300px"
            className="w-auto h-auto"
          />
        </div>
        <div className="order-last lg:order-first w-full lg:w-1/2 px-5 mt-5 md:mt-1">
          <div className="flex flex-col items-center lg:items-start px-5">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                <div
                  className="absolute w-[80px] h-[80px] bg-contain bg-no-repeat bg-center z-0"
                  style={{backgroundImage: 'url(/images/cube.webp)'}}></div>
                <div className="z-1 mb-[5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="black"
                      d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5M6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5m5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2M6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-md font-bold text-secondary-500 px-5 text-center lg:text-left">
                Trusted by Over 4,000 Clients
              </h3>
              <p className="text-sm mt-2 text-gray-400 text-center lg:text-left px-5">
                Empowering a diverse network of clients across fintech, e-commerce, and enterprise sectors — all
                connected through our integrated ecosystem.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                <div
                  className="absolute w-[80px] h-[80px] bg-contain bg-no-repeat bg-center z-0"
                  style={{backgroundImage: 'url(/images/cube.webp)'}}></div>
                <div className="z-1 mb-[5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      color="black">
                      <path d="M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406" />
                      <path d="M12 22C6.5 22 2 17 2 11m11.604-1.278c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873" />
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-md font-bold text-secondary-500 px-5 text-center lg:text-left">
                High-Impact Transactions
              </h3>
              <p className="text-sm mt-2 text-gray-400 text-center lg:text-left px-5">
                Handling an average of $65M USD in monthly transaction volume and facilitating over $35M USD in
                settlements, ensuring scale and reliability at every level.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                <div
                  className="absolute w-[80px] h-[80px] bg-contain bg-no-repeat bg-center z-0"
                  style={{backgroundImage: 'url(/images/cube.webp)'}}></div>
                <div className="z-1 mb-[5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="black"
                      fillRule="evenodd"
                      d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a18 18 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08M8.752 5.252q.567-.003 1.192-.002h4.112q.625 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.046.346-.06.776-.064 1.347M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
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
