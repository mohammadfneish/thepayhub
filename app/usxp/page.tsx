import Image from 'next/image'
import React from 'react'
import UsxpCoin from '@images/usxp-coin.webp'
import Typography from '@components/common/Typography'
import Button from '@components/common/Button'
import BardLine from '@svg/bardLine.svg'
import VideoAiLine from '@svg/videoAiLine.svg'
import HelpCircle from '@svg/helpCircle.svg'
import Coins from '@svg/coins.svg'
import SecurityLock from '@svg/securityLock.svg'
import Asterisk from '@svg/asterisk.svg'
import UsxpLineRoad from '@json/usxpLineRoad.json'
import LottieClient from '@components/common/LottieClient'
import Divider from '@components/common/Divider'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import FooterTop from '@components/FooterTop'
import Link from 'next/link'

interface FrameProps {
  icon: React.ReactNode
  title: string
  description: string
}

function USXP() {
  return (
    <div className="flex flex-col gap-12 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/common-top.webp')] bg-right-bottom bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-14 lg:gap-20 px-8 sm:pr-0 sm:pl-12 md:pl-20 lg:pl-36">
            <div className="flex flex-col gap-12 z-1">
              <Typography size="xxl" className="max-w-[750px]">
                Powering transactions in our ecosystem
              </Typography>

              <Typography size="md2" className="max-w-[500px]">
                The settlement token is a digital currency used within ThePayHub ecosystem. It enables fast, secure
                payments across services like XPZ and PXG.
              </Typography>

              <div className="flex flex-col sm:flex-row gap-6 max-w-[400px]">
                <Link className='w-full' href={'/contact'}>
                  <Button variant="primary" className="w-full min-w-fit" icon={<BardLine />}>
                    Get Started
                  </Button>
                </Link>
                <Link className='w-full' href="https://calendly.com/thepayhub-sales/30min" target="_blank" rel="noreferrer noopenner">
                  <Button variant="secondary" className="w-full min-w-fit" icon={<VideoAiLine />}>
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute right-1/2 -bottom-1/2 transform -translate-y-1/2 translate-x-1/2 z-0 sm:relative size-[340px]  sm:max-w-[340px] sm:max-h-[340px] sm:right-0 sm:-bottom-0 sm:-translate-0">
              <Image src={UsxpCoin} alt="usxp-coin" width="340" height="340" />
            </div>
          </div>
        </div>
      </div>

      {/* What is USXP */}
      <div className="flex flex-col gap-16 w-full max-w-[1200px] items-center relative">
        <RadialGradientBlur />

        <div className="max-w-[600px]">
          <Frame
            icon={<HelpCircle />}
            title="What is USXP"
            description="USXP is a settlement token used exclusively within ThePayHub ecosystem to facilitate transactions between
              platforms and clients. It enables faster, more secure, and transparent payments by acting as an internal
              unit of settlement across affiliated services like XPZ and PXG. is not available for public trading or
              speculation and is strictly used to support operational efficiency, compliance, and reconciliation within
              the ecosystem."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[600px]">
          <Frame
            icon={<Coins />}
            title="Built for our Ecosystem"
            description="Designed solely for ThePayHub ecosystem, it streamlines transactions between platforms and clients."
          />
          <Frame
            icon={<SecurityLock />}
            title="Faster & More Secure"
            description="It facilitates quicker and safer payments by serving as a central settlement unit among connected services."
          />
        </div>
      </div>

      {/* How USXP Works? */}
      <div className="flex flex-col gap-16 w-full max-w-[1200px] items-center relative">
        <RadialGradientBlur />

        <div className="max-w-[600px]">
          <Frame
            icon={<Asterisk />}
            title="How USXP Works?"
            description="When a customer makes a payment on XPZ, the merchant receives the equivalent amount in USXP. The merchant then transfers these USXP tokens to PXG, where GKS burns them and releases the corresponding fiat directly into the merchant's bank account."
          />
          <LottieClient animationData={UsxpLineRoad} />
        </div>
      </div>

      {/* Trusted by companies worldwide */}
      <FooterTop />
    </div>
  )
}

export default USXP

const Frame = ({icon, title, description}: FrameProps) => {
  return (
    <div className="flex flex-col gap-4">
      {icon}
      <Typography size="lg">{title}</Typography>
      <Typography size="md">{description}</Typography>
    </div>
  )
}
