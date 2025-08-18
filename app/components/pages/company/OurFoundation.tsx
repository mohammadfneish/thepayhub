'use client'

export default function OurFoundation() {
  return (
    <div className="h-auto">
      <div className="container px-5 lg:px-auto relative w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">Our Foundation</h2>
        <p className="text-lg mt-2 text-gray-400">The mission and vision that shape our journey</p>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 mt-10">
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5 w-full md:w-1/2">
            <div
              className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
              style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}>
              <span className="text-md font-bold text-black">M</span>
            </div>
            <h4 className="text-2xl font-bold">Mission</h4>
            <p className="text-lg mt-2 text-gray-400 flex-1">
              To transform the way the world transacts by building a payment ecosystem that is frictionless,
              intelligent, and universally connected. We empower seamless financial solutions that enhance security,
              efficiency, and accessibility, driving the future of digital finance.
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5 w-full md:w-1/2">
            <div
              className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
              style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}>
              <span className="text-md font-bold text-black">V</span>
            </div>
            <h4 className="text-2xl font-bold">Vision</h4>
            <p className="text-lg mt-2 text-gray-400">
              We see a world where financial connectivity is borderless, intelligent, and frictionless. A global
              ecosystem where payment solutions adapt seamlessly to evolving technologies, fostering trust, inclusion,
              and economic empowerment. In this future, free from inefficiencies and limitations, unlocking new
              possibilities for growth and innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
