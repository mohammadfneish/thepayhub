'use client'

import {teamMembersExperience} from '../../../data/careers'

export default function LifeAtUs() {
  return (
    <div className="pt-10 h-auto">
      <div className="lg:container lg:mx-auto mx-5 relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Life at ThePayHub
          </h1>
          <p className="text-lg mt-2 text-gray-400 text-center p-5 my-5">
            Hear from our team members about their experiences
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5">
            {teamMembersExperience.map((member, index) => (
              <div
                key={index}
                className="bd-card w-full md:w-1/2 flex flex-col p-5 bg-card border border-primary-300 rounded-2xl max-w-[600px]">
                <p className="text-sm my-3 text-white text-left">{member.desc}</p>
                <div className="flex flex-row items-center justify-start gap-5">
                  <div
                    className="bg-contain bg-no-repeat bg-center w-[70px] h-[70px] flex items-center justify-center"
                    style={{backgroundImage: 'url(/images/cube.webp?v=3)'}}>
                    <span className="text-md font-bold text-black">
                      {member.firstName.charAt(0)}
                      {member.lastName.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-white">
                      {member.firstName} {member.lastName}
                    </span>
                    <span className="text-sm text-gray-400">
                      {member.role}, {member.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
