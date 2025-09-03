import Image from 'next/image'
import React from 'react'
import UsxpCoin from '@images/usxp-coin.webp'
import Typography from '@components/common/Typography'
import Button from '@components/common/Button'
import BardLine from '@svg/bardLine.svg'
import VideoAiLine from '@svg/videoAiLine.svg'
import HelpCircle from '@svg/helpCircle.svg'
import ChevronRight from '@svg/chevronRight.svg'
import Coins from '@svg/coins.svg'
import SecurityLock from '@svg/securityLock.svg'
import Asterisk from '@svg/asterisk.svg'
import AwsLogo from '@svg/awsLogo.svg'
import AlchemyLogo from '@svg/alchemyLogo.svg'
import PolygonLogo from '@svg/polygonLogo.svg'
import MetaMapLogo from '@svg/metaMapLogo.svg'
import UsxpLineRoad from '@json/usxpLineRoad.json'
import LottieClient from '@components/common/LottieClient'
import Divider from '@components/common/Divider'

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
        <div className="bg-[url('/images/usxp-top.webp')] bg-right-bottom bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex gap-20 pl-8 sm:pl-12 md:pl-20 lg:pl-36">
            <div className="flex flex-col gap-12">
              <Typography size="xxl" className="max-w-[750px]">
                Powering transactions in our ecosystem
              </Typography>

              <Typography size="md2" className="max-w-[500px]">
                The settlement token is a digital currency used within ThePayHub ecosystem. It enables fast, secure
                payments across services like XPZ and PXG.
              </Typography>

              <div className="flex gap-6">
                <Button variant="primary" className="min-w-fit" icon={<BardLine />}>
                  Get Started
                </Button>
                <Button variant="secondary" className="min-w-fit" icon={<VideoAiLine />}>
                  Schedule a Call
                </Button>
              </div>
            </div>
            <div className="max-w-[340px] max-h-[340px] min-w-[140px] min-h-[140px] ">
              <Image src={UsxpCoin} alt="usxp-coin" width="340" height="340" />
            </div>
          </div>
        </div>
      </div>

      {/* What is USXP */}
      <div className="flex flex-col gap-16 w-full max-w-[1200px] items-center relative">
        <div className="absolute inset-40 bg-[radial-gradient(circle,#004280_0%,#004280_100%)] blur-[140px] -z-1 rounded-full"></div>
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
        <div className="absolute inset-50 bg-[radial-gradient(circle,#004280_0%,#004280_100%)] blur-[200px] -z-1 rounded-full"></div>

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
      <div className="overflow-hidden w-full relative">
        <div className="bg-[url('/images/usxp-earth.webp')] bg-bottom bg-cover w-full h-[800px] flex flex-col justify-center items-center ">
          <div className="absolute inset-85 bg-[radial-gradient(circle,#004280_0%,#004280_100%)] blur-[200px] -z-1 rounded-full"></div>
          <div className="flex flex-col gap-20 justify-center items-center w-full">
            <div className="flex flex-col justify-center gap-12 max-w-[750px]">
              <Typography size="xl" className="text-center">
                Trusted by companies worldwide
              </Typography>

              <Typography size="md2" className="text-center">
                Over 4,000 businesses rely on our infrastructure to process more than $65 million in monthly transaction
                volume. Join the growing network of forward-thinking companies transforming how they manage global
                payments.
              </Typography>
            </div>
            <div className="flex justify-center items-center">
              <Button variant="primary" className="min-w-fit" postIcon={<ChevronRight />}>
                Start Today
              </Button>
            </div>
            <div className="flex flex-col gap-10 w-full">
              <Divider />
              <div className="flex justify-evenly flex-wrap md:flex-nowrap w-full gap-10">
                <AwsLogo className="w-24 h-14 md:w-[136px] md:h-[89px]" />
                <AlchemyLogo className="w-[220px] h-16 md:w-[320px] md:h-[70px]" />
                <PolygonLogo className="w-40 h-[50px]  md:w-[265px] md:h-[52px]" />
                <MetaMapLogo className="w-32 h-16 md:w-[200px] md:h-[68px]" />
              </div>
              <Divider />
            </div>
          </div>
        </div>
      </div>
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
