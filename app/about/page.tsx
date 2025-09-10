import NestedCircles from "@images/about/nestedCircles.png"
import HandCursor from "@images/about/handCursor.png"
import Shield from "@images/about/shield.png"

import UserAccountHexagon from '@svg/userAccountHexagon.svg'
import IdeaHexagon from '@svg/ideaHexagon.svg'
import Target from '@svg/target.svg'
import Calendar from '@svg/calendar.svg'

import RadialGradientBlur from '@components/common/RadialGradientBlur'
import Typography from '@components/common/Typography'
import FooterTop from '@components/FooterTop'
import Image from "next/image"

function AboutUs() {
  const storyDates = [
    {
      title: 'Launch & Vision',
      date: '2016',
      description:
        'Identified the market gap in fragmented cross-border payments. Formed the core team and defined the mission to unify traditional finance and emerging technologies.',
    },
    {
      title: 'First Integration Live',
      date: '2018',
      description:
        'Deployed our first platform prototype with integrated blockchain and traditional banking rails. Partnered with key players in global finance.',
    },
    {
      title: 'Scaling the Future',
      date: '2025',
      description:
        'Launched full-scale, tokenized infrastructure for seamless international payments. Expanded platform to support businesses in 50+ countries.',
    },
  ]

  const foundation = [
    {
      icon: <Target />,
      title: 'Mission',
      description:
        'To transform the way the world transacts by building a payment ecosystem that is frictionless, intelligent, and universally connected. We empower seamless financial solutions that enhance security, efficiency, and accessibility, driving the future of digital finance.',
    },
    {
      icon: <IdeaHexagon />,
      title: 'Vision',
      description:
        'We see a world where financial connectivity is borderless, intelligent, and frictionless. A global ecosystem where payment solutions adapt seamlessly to evolving technologies, fostering trust, inclusion, and economic empowerment. In this future, free from inefficiencies and limitations, unlocking new possibilities for growth and innovation',
    },
  ]

  const core = [
    {
      imageSrc: NestedCircles,
      title: 'Simplicity',
      description: 'We believe the most powerful technology is the one you barely notice. Behind our intuitive interface lies a complex infrastructure working to make every transaction simple, fast, and reliable.',
    },
    {
      imageSrc: HandCursor,
      title: 'Accessible Innovation',
      description: 'We built every component of our platform with security and transparency as absolute priorities. We only work with regulated financial partners and implement the most rigorous data protection standards.',
    },
    {
      imageSrc: Shield,
      title: 'Trust',
      description: 'We develop cutting-edge technologies that eliminate barriers, not create new ones. Our innovation has a purpose: making global financial operations accessible to businesses of all sizes.',
    },
  ]

  return (
    <div className="flex flex-col gap-24 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/common-top.webp')] bg-top bg-cover w-full h-[320px] flex items-center justify-center relative">
          <Typography size="xxl">About Us</Typography>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-12 pb-10 relative">
        <RadialGradientBlur />
        <div className="flex flex-col gap-4 py-6 md:py-12">
          <UserAccountHexagon />
          <Typography size="lg">Our Story</Typography>
          <Typography size="md2" className="max-w-[550px]">
            Transforming global business operations, ThePayHub emerged from the belief that the future of finance lies
            in integrating traditional systems with emerging technologies. We recognized a significant market gap:
            global companies faced challenges managing international financial flows through multiple providers and
            processes, leading to complexity and delays. To address this, we created a unified, proprietary financial
            infrastructure from the ground up, merging traditional banking with the speed and transparency of
            blockchain. Today, ThePayHub bridges the established financial world and the tokenized future, providing
            businesses with a single platform for all their global payment needs.
          </Typography>
        </div>
        <div className="flex flex-col py-6 pl-3 relative">
          <div className="absolute top-0 -left-4 w-[1px] h-full bg-white/50 "></div>
          {storyDates.map((story, index) => (
            <div key={index} className="flex flex-col gap-4 justify-center py-6 pl-3 relative">
              <Typography size="lg2">
                {index === 0 && (
                  <span className="absolute -left-7 -top-[30px] w-[1px] h-[50px] bg-linear-to-t from-white/50 to-[#000] z-0"></span>
                )}
                {storyDates.length - 1 === index && (
                  <span className="absolute -left-7 -bottom-[30px] w-[1px] h-[50px] bg-linear-to-t from-[#000] to-white/50 z-0"></span>
                )}
                <span className="absolute -left-7 top-[80px] transform -translate-x-3 z-20 bg-linear-to-b from-[#00274C] to-[#000000] w-5 h-5 rounded-full flex items-center justify-center ">
                  <Calendar />
                </span>
                {story.title}
              </Typography>
              <Typography size="md2">{story.date}</Typography>
              <Typography size="md2" className="max-w-[400px]">
                {story.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* we develop */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-20">
        <div className="h-[300px] rounded-2xl overflow-hidden bg-[url('/images/thepayhub.webp')] bg-left bg-cover "></div>
        <Typography size="md3" className="max-w-[600px]">
          &quot;We develop cutting-edge technologies that eliminate barriers, not create new ones. Our innovation has a
          purpose: making global financial operations accessible to businesses of all sizes.&quot;
        </Typography>
      </div>

      {/* Our Foundation */}
      <div className="flex flex-col gap-20 relative">
        <RadialGradientBlur />
        <div className="flex flex-col gap-6">
          <Typography size="xl" className="text-center">
            Our Foundation
          </Typography>
          <Typography size="md2" className="text-center">
            The mission and vision that guide our journey are fundamental to our purpose and aspirations. They define
            who we are and where we aim to go.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 z-10">
          {foundation.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-3xl bg-soft-100 p-8">
              {item.icon}
              <Typography size="lg">{item.title}</Typography>
              <Typography size="md2">{item.description}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-20 relative">
        <RadialGradientBlur />
        <div className="flex flex-col gap-6">
          <Typography size="xl" className="text-center">
            Our Core Values
          </Typography>
          <Typography size="md2" className="text-center">
            The principles we live by every day
          </Typography>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 z-10">
           {core.map((item, index) => (
             <div key={index} className="flex flex-col gap-4 rounded-3xl p-8">
               <Image src={item.imageSrc} alt={item.title} width={100} height={100} />
               <Typography size="lg">{item.title}</Typography>
               <Typography size="md2">{item.description}</Typography>
             </div>
           ))}
         </div>
      </div>
      {/* Footer */}
      <FooterTop />
    </div>
  )
}

export default AboutUs
