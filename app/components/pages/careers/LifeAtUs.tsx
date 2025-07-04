'use client'

export default function LifeAtUs() {
  return (
    <div className="pt-10 h-auto" style={{backgroundImage: 'url(/images/body-pattern.webp)'}}>
      <div className="lg:container lg:mx-auto mx-5 relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Life at ThePayHub
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            Hear from our team members about their experiences
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5">
            <div className="bd-card w-full md:w-1/2 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
              <p className="text-sm my-3 text-white text-left">
                Working at ThePayHub has been the most rewarding experience of my career. The problems we solve are
                complex and meaningful, and I`m constantly learning from brilliant colleagues who are passionate about
                our mission.
              </p>
              <div className="flex flex-row items-center justify-start gap-5">
                <div
                  className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/cube.webp)'}}>
                  <span className="text-md font-bold text-black">JD</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-white">James Davis</span>
                  <span className="text-sm text-gray-400">Senior Software Engineer, 2 years</span>
                </div>
              </div>
            </div>
            <div className="bd-card w-full md:w-1/2 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
              <p className="text-sm my-3 text-white text-left">
                What I love most about ThePayHub is the culture of ownership and innovation. We`re encouraged to think
                big, take risks, and learn from failures. The growth opportunities here are incredible, both
                professionally and personally.
              </p>
              <div className="flex flex-row items-center justify-start gap-5">
                <div
                  className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/cube.webp)'}}>
                  <span className="text-md font-bold text-black">ML</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-white">Maria Lopez</span>
                  <span className="text-sm text-gray-400">Product Manager, 3 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
