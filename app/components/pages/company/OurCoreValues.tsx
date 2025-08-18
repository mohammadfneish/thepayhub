'use client'

export default function OurCoreValues() {
  return (
    <div className="mt-10 pt-10 h-auto">
      <div className="container px-5 md:px-0 lg:px-5 lg:px-auto relative w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary-500">Our Core Values</h2>
        <p className="text-lg mt-2 text-gray-400">The principles we live by every day</p>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 mt-10">
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5 w-full md:w-1/2">
            <div
              className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
              style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}>
              <span className="text-md font-bold text-black">S</span>
            </div>
            <h4 className="text-2xl font-bold">Simplicity</h4>
            <p className="text-lg mt-2 text-gray-400 flex-1">
              We believe the most powerful technology is the one you barely notice. Behind our intuitive interface lies
              a complex infrastructure working to make every transaction simple, fast, and reliable.
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5 w-full md:w-1/2">
            <div
              className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
              style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}>
              <span className="text-md font-bold text-black">I</span>
            </div>
            <h4 className="text-2xl font-bold">Accessible Innovation</h4>
            <p className="text-lg mt-2 text-gray-400">
              We built every component of our platform with security and transparency as absolute priorities. We only
              work with regulated financial partners and implement the most rigorous data protection standards.
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl flex flex-col items-center gap-5 w-full md:w-1/2">
            <div
              className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
              style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}>
              <span className="text-md font-bold text-black">T</span>
            </div>
            <h4 className="text-2xl font-bold">Trust</h4>
            <p className="text-lg mt-2 text-gray-400">
              We develop cutting-edge technologies that eliminate barriers, not create new ones. Our innovation has a
              purpose: making global financial operations accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
