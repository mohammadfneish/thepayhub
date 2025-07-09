'use client'

import Image from 'next/image'

export default function TopPage() {
  return (
    <div className="py-20 h-auto bg-top bg-no-repeat" style={{backgroundImage: 'url(/images/cubes.webp)'}}>
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full lg:items-start justify-center lg:justify-start mt-5 pt-5">
          <Image
            src={'/images/company/header-logo.webp'}
            alt="logo"
            width={0}
            height={0}
            sizes="120px"
            className="w-auto h-[120px]"
          />
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-start mt-5 pt-5 gap-5">
            <div className="flex flex-col flex-1">
              <h1 className="text-4xl font-bold text-secondary-500 text-center lg:text-left">Our Story</h1>
              <h3 className="text-2xl mt-2 text-white text-center lg:text-left">
                How we`re transforming the way businesses operate globally
              </h3>
              <p className="text-2xl mt-2 text-white text-center lg:text-left flex-1 leading-relaxed">
                ThePayHub was born from the vision that the future of finance isn`t in choosing between traditional
                systems or emerging technologies, but in the seamless integration of both.
                <br />
                Our journey began when we identified a critical gap in the market: global companies needed to deal with
                multiple providers, interfaces, and processes to manage their international financial flows. Each new
                region or currency meant more complexity, more delays, and more risks.
                <br />
                We decided to build something different: a unified, proprietary, and truly global financial
                infrastructure. We didn`t adapt existing systems or apply temporary solutions. We built from scratch an
                architecture that integrates the best of traditional banking systems with the speed and transparency of
                blockchain technologies.
                <br />
                Today, ThePayHub represents the convergence between the established financial world and the tokenized
                future, offering businesses a single platform for all their global payment needs.
              </p>
            </div>
            <div className="bg-linear-to-r lg:bg-linear-to-b from-secondary-400 to-primary-400 w-full lg:w-1 h-1 lg:h-auto"></div>
            <div className="flex flex-col md:flex-row lg:flex-col items-stretch lg:items-start justify-start gap-5 lg:max-w-[300px]">
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-secondary-500 text-left">2016</h3>
                <p className="text-lg mt-2 text-white">Launch & Vision</p>
                <p className="text-md mt-2 text-white">
                  Identified the market gap in fragmented cross-border payments. Formed the core team and defined the
                  mission to unify traditional finance and emerging technologies.
                </p>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-secondary-500 text-left">2018</h3>
                <p className="text-md mt-2 text-white">First Integration Live</p>
                <p className="text-md mt-2 text-white">
                  Deployed our first platform prototype with integrated blockchain and traditional banking rails.
                  Partnered with key players in global finance.
                </p>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-secondary-500 text-left">2025</h3>
                <p className="text-md mt-2 text-white">Scaling the Future</p>
                <p className="text-md mt-2 text-white">
                  Launched full-scale, tokenized infrastructure for seamless international payments. Expanded platform
                  to support businesses in 50+ countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-10 bg-center bg-size-cover bg-no-repeat w-full sm:h-[400px] lg:h-[600px] md:mt-5 flex flex-col items-end justify-center"
        style={{backgroundImage: 'url(/images/company/thepayhub.webp)'}}>
        <p
          className="visible text-xl mt-2 mr-2 md:mr-10 font-bold text-black md:text-white max-w-[500px] p-5 md:bg-transparent bg-white/50 rounded-2xl"
          style={{textShadow: '0 0px 10px black'}}>
          We develop cutting-edge technologies that eliminate barriers, not create new ones. Our innovation has a
          purpose: making global financial operations accessible to businesses of all sizes.
        </p>
      </div>
    </div>
  )
}
