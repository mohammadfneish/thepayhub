'use client'

export default function WhyJoinUs() {
  return (
    <div className="pt-10 h-auto" style={{backgroundImage: 'url(/images/body-pattern.webp)'}}>
      <div className="lg:container lg:mx-auto mx-5 relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Why Join ThePayHub
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            We offer more than just a job - we offer a chance to make a real impact
          </p>
          <div className="flex flex-row md:flex-col gap-5 w-full overflow-x-auto scrollable-container">
            <div className="flex flex-row items-stretch justify-center gap-5">
              <div className="bd-card w-[300px] md:w-1/3 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  I
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">Meaningful Impact</h3>
                <p className="text-sm my-3 text-white text-left">
                  Work on technology that`s transforming how businesses operate globally. Your contributions will
                  directly impact thousands of companies and millions of transactions.
                </p>
              </div>
              <div className="bd-card w-[300px] md:w-1/3 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  G
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">Global Reach</h3>
                <p className="text-sm my-3 text-white text-left">
                  Join a diverse team with colleagues across multiple countries and time zones. Experience a truly
                  international work environment with global challenges and opportunities.
                </p>
              </div>
              <div className="bd-card w-[300px] md:w-1/3 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  C
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">Cutting-Edge Technology</h3>
                <p className="text-sm my-3 text-white text-left">
                  Work with the latest technologies in fintech, blockchain, and distributed systems. We`re building
                  proprietary infrastructure that combines the best of traditional and emerging technologies.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-stretch justify-center gap-5">
              <div className="bd-card w-[300px] md:w-1/3 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  F
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">Flexible Work</h3>
                <p className="text-sm my-3 text-white text-left">
                  We offer remote-first, flexible working arrangements that prioritize results over rigid schedules.
                  Work from anywhere and maintain a healthy work-life balance.
                </p>
              </div>
              <div className="bd-card w-[300px] md:w-1/3 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  G
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">Growth Opportunities</h3>
                <p className="text-sm my-3 text-white text-left">
                  Continuous learning is part of our DNA. We provide dedicated time for professional development,
                  internal knowledge sharing, and opportunities to attend conferences and courses.
                </p>
              </div>
              <div className="bd-card w-[300px] md:w-1/3 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl">
                <div className="w-10 h-10 rounded-full p-2 bg-secondary-500 text-black text-2xl flex items-center justify-center">
                  C
                </div>
                <h3 className="text-md my-3 font-bold text-white text-left">Competitive Compensation</h3>
                <p className="text-sm my-3 text-white text-left">
                  We offer competitive salaries, equity options, comprehensive health benefits, retirement plans, and
                  other perks designed to attract and retain the best talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
