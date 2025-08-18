'use client'

import Image from 'next/image'

export default function TopPage() {
  return (
    <div className="pt-20 h-auto bg-no-repeat bg-[url(/images/cubes.webp?v=3)]">
      <div className="pt-20 container mx-auto relative px-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center ">ThePayHub News</h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5">
            Stay updated with the latest developments, announcements, and insights from ThePayHub
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-5 my-5 mx-auto rounded-xl bg-linear-to-r from-primary-500 to-primary-400 max-w-[1000px] min-h-[250px]">
          <div className="flex flex-col p-5 w-full md:w-1/2">
            <div className="border border-secondary-500 rounded-full w-fit py-1 px-2 flex items-center justify-center">
              <span>Featured</span>
            </div>
            <h3 className="text-md font-bold text-white mt-2">Why We Use Blockchain?</h3>
            <p className="text-sm my-3 text-white">
              Blockchain helps power the TPH ecosystem by making payments faster, more secure, and fully transparent. It
              keeps a clear record of every transaction so our clients and partners can trust the system and operate
              with confidence.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={'/images/news/crypto-img.webp?v=3'}
              alt="crypto-img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-b-xl md:rounded-b-none md:rounded-r-xl"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-secondary-500 px-5 text-center my-10">Latest announcement</h2>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-5 my-5 mx-auto rounded-xl bg-linear-to-r from-primary-500 to-primary-400 max-w-[1000px] min-h-[250px]">
          <div className="w-full md:w-1/2">
            <Image
              src={'/images/news/earth.webp?v=3'}
              alt="earth"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
            />
          </div>
          <div className="flex flex-col p-5 w-full md:w-1/2">
            <div className="text-secondary-500">
              <span>Company News May 02, 2025</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-2">
              ThePayHub Nears Series A Funding Milestone to Accelerate Global Expansion
            </h3>
            <p className="text-sm my-3 text-white">
              ThePayHub, the proprietary financial infrastructure platform unifying tokenized and banking payments, is
              nearing the close of its first Series A funding round, with strong interest from global venture firms and
              fintech-focused investors. The anticipated capital will support ThePayHub’s expansion into key markets
              across Asia and Latin America, accelerate product development, and deepen partnerships with financial
              institutions worldwide.
            </p>
            <button className="px-4 py-2 bg-primary-300 text-white rounded-full mt-auto w-fit">Read Full Story</button>
          </div>
        </div>
      </div>
    </div>
  )
}
