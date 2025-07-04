'use client'

export default function OpenPositions() {
  return (
    <div className="pt-10 h-auto">
      <div className="lg:container lg:mx-auto mx-5 relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Open Positions
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            Join our team and help shape the future of financial infrastructure
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-5 w-full">
            <div className="flex flex-row gap-2 w-full overflow-x-auto scrollable-container items-center justify-center">
              <div className="bg-card border border-secondary-500 rounded-full px-5 py-2 whitespace-nowrap">
                All Departments
              </div>
              <div className="bg-card border border-primary-500 rounded-full px-5 py-2 whitespace-nowrap">
                Engineering
              </div>
              <div className="bg-card border border-primary-500 rounded-full px-5 py-2 whitespace-nowrap">Product</div>
              <div className="bg-card border border-primary-500 rounded-full px-5 py-2 whitespace-nowrap">
                Opertaions
              </div>
              <div className="bg-card border border-primary-500 rounded-full px-5 py-2 whitespace-nowrap">
                Sales and Marketing
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mt-5 w-full">
            <div className="bg-card rounded-2xl p-5 flex flex-col gap-5 w-full">
              <h3 className="text-md font-bold text-white">Senior Backend Engineer</h3>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">D</div>
                    <div className="text-sm text-gray-400">Engineering</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">L</div>
                    <div className="text-sm text-gray-400">Remote</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">T</div>
                    <div className="text-sm text-gray-400">Full-time</div>
                  </div>
                </div>
                <button className="text-sm text-white px-5 py-2 rounded-full bg-primary-300">Apply Now</button>
              </div>
              <p className="text-sm text-gray-400">
                Design and build high-performance, scalable systems that power our global financial infrastructure.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-5 flex flex-col gap-5 w-full">
              <h3 className="text-md font-bold text-white">Product Manager - Payments</h3>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">D</div>
                    <div className="text-sm text-gray-400">Product</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">L</div>
                    <div className="text-sm text-gray-400">London or Remote</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">T</div>
                    <div className="text-sm text-gray-400">Full-time</div>
                  </div>
                </div>
                <button className="text-sm text-white px-5 py-2 rounded-full bg-primary-300">Apply Now</button>
              </div>
              <p className="text-sm text-gray-400">
                Lead the strategy and execution of our payment products, working closely with engineering, design, and
                business teams.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-5 flex flex-col gap-5 w-full">
              <h3 className="text-md font-bold text-white">Compliance Specialist</h3>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">D</div>
                    <div className="text-sm text-gray-400">Operations</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">L</div>
                    <div className="text-sm text-gray-400">Singapore</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">T</div>
                    <div className="text-sm text-gray-400">Full-time</div>
                  </div>
                </div>
                <button className="text-sm text-white px-5 py-2 rounded-full bg-primary-300">Apply Now</button>
              </div>
              <p className="text-sm text-gray-400">
                Ensure our operations meet global regulatory requirements and help build our compliance infrastructure.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-5 flex flex-col gap-5 w-full">
              <h3 className="text-md font-bold text-white">Enterprise Sales Executive</h3>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">D</div>
                    <div className="text-sm text-gray-400">Sales & Marketing</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">L</div>
                    <div className="text-sm text-gray-400">New York</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-primary-400 rounded-full w-7 h-7 flex items-center justify-center">T</div>
                    <div className="text-sm text-gray-400">Full-time</div>
                  </div>
                </div>
                <button className="text-sm text-white px-5 py-2 rounded-full bg-primary-300">Apply Now</button>
              </div>
              <p className="text-sm text-gray-400">
                Drive revenue growth by building relationships with enterprise clients and showcasing our solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
