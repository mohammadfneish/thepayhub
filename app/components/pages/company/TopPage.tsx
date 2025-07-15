'use client'

import Image from 'next/image'

export default function TopPage() {
  return (
    <div className="py-20 h-auto bg-top bg-no-repeat" style={{backgroundImage: 'url(/images/cubes.webp?v=1)'}}>
      <div className="container px-5 lg:px-auto relative w-full mx-auto">
        <div className="flex flex-col items-center w-full lg:items-start justify-center lg:justify-start mt-5 pt-5">
          <svg width="300" height="75" viewBox="0 0 641 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.11084 46.1658V15.3671L26.7367 0L53.3948 15.3671V46.1658L26.7367 61.533L0.11084 46.1658Z"
              fill="#0849CF"
            />
            <path
              d="M114.437 46.1659V15.3671L141.062 0L167.72 15.3671V46.1659L141.062 61.533L114.437 46.1659Z"
              fill="#0849CF"
            />
            <path
              d="M0.00146484 144.627V113.828L26.6273 98.4609L53.2854 113.828V144.627L26.6273 159.994L0.00146484 144.627Z"
              fill="#0849CF"
            />
            <path
              d="M114.327 144.627V113.828L140.953 98.4609L167.611 113.828V144.627L140.953 159.994L114.327 144.627Z"
              fill="#0849CF"
            />
            <path
              d="M28.7817 95.6424V64.8437L55.4076 49.4766L82.0657 64.8437V95.6424L55.4076 111.01L28.7817 95.6424Z"
              fill="#0849CF"
            />
            <path
              d="M86.0151 95.6424V64.8437L112.641 49.4766L139.299 64.8437V95.6424L112.641 111.01L86.0151 95.6424Z"
              fill="#0849CF"
            />
            <path
              d="M306.441 121.112H295.97V83.9482L286.18 84.1302V121.112H275.755V50.0962H286.18V76.9607C288.608 76.5967 291.037 76.22 293.464 75.8264C296.53 75.3418 298.957 75.0984 300.749 75.0984C304.543 75.0984 306.441 76.9607 306.441 80.6808V121.112ZM333.666 82.9049H323.876V93.8856H333.666V82.9049ZM343.637 115.439C343.637 119.222 341.679 121.112 337.764 121.112H319.781C315.866 121.112 313.908 119.222 313.908 115.439V80.9538C313.908 77.1723 315.866 75.2804 319.781 75.2804H337.764C341.679 75.2804 343.637 77.1723 343.637 80.9538V97.7878L340.768 100.647H323.876V113.487H333.666V105.865H343.637V115.439ZM441.717 111.907V99.6098H431.746V112.271L441.717 111.907ZM451.596 120.166H441.626V118.577C439.258 118.941 436.891 119.303 434.524 119.667C431.428 120.119 429.075 120.346 427.466 120.346C423.672 120.346 421.776 118.486 421.776 114.766V98.2491C421.776 94.4675 423.734 92.5757 427.649 92.5757H441.717V82.0479H431.746V88.5825H422.322V80.0079C422.322 76.2264 424.279 74.3345 428.194 74.3345H445.815C449.668 74.3345 451.596 76.2264 451.596 80.0079V120.166ZM489.592 74.4255L478.074 119.667L473.658 137H463.004L467.785 119.893L456.131 74.4255H466.83L472.883 104.555L478.94 74.4255H489.592ZM602.847 120.119H592.466V118.532C590.069 118.926 587.657 119.32 585.229 119.711C582.284 120.166 579.855 120.392 577.944 120.392C574.15 120.392 572.254 118.503 572.254 114.721V74.2901H582.587V111.498L592.466 111.272V74.2901H602.847V120.119ZM630.529 108.049V82.9557L620.739 83.1377V111.498H627.204C629.42 111.498 630.529 110.349 630.529 108.049ZM641 110.908C641 113.784 640.134 116.035 638.403 117.669C636.675 119.303 634.367 120.119 631.484 120.119H610.314V49.1058H620.739V75.9682C623.167 75.6063 625.596 75.2275 628.023 74.8339C631.089 74.3514 633.518 74.1081 635.308 74.1081C639.102 74.1081 641 75.9682 641 79.6884V110.908ZM268.29 50.0433V65.1504H243.217V121.169H228.06V65.1504H204V50.0433H268.29ZM416.655 70.0176C416.655 75.1535 414.723 80.0545 411.217 83.8127C409.113 86.0707 406.559 87.7911 403.746 88.8936C403.746 88.8936 403.591 89.0312 400.931 89.6872C398.272 90.3411 397.825 90.3516 397.825 90.3516H373.37V120.86H358.212V75.1535H373.37V75.1852H396.311C399.168 75.1852 401.498 72.8659 401.498 70.0176C401.498 67.165 399.168 64.8478 396.311 64.8478C396.185 64.8478 396.071 64.8521 395.973 64.8605L395.935 64.8648L395.831 64.8796H393.37V64.8478H358.212V52.5721L358.215 49.7385H397.275C397.275 49.7385 398.897 49.9375 400.377 50.2231C401.856 50.5109 402.922 50.8305 402.922 50.8305C410.946 53.5688 416.655 61.1552 416.655 70.0176ZM564.787 49V120.005H549.627V89.7507H516.782V120.005H501.624V49H516.782V74.6414H549.627V49H564.787Z"
              fill="#DBDAD8"
            />
          </svg>
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
        style={{backgroundImage: 'url(/images/company/thepayhub.webp?v=1)'}}>
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
