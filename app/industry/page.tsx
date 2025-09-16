'use client'

import PaymentProcess from '@images/industry/payment-process.webp'
import ClothingApparel from '@images/industry/clothing-apparel.webp'
import ConsumerElectronics from '@images/industry/consumer-electronics.webp'
import ImportExportCompanies from '@images/industry/import-export-companies.webp'
import PerfumesCosmetics from '@images/industry/perfumes-cosmetics.webp'
import Infrastructure from '@images/industry/infrastructure.webp'
import ApiCable from '@images/industry/api-cable.webp'
import LicenseExpansionSupport from '@images/industry/license-expansion-support.webp'
import TokenPaymentFlows from '@images/industry/token-payment-flows.webp'

import BardLine from '@svg/bardLine.svg'
import VideoAiLine from '@svg/videoAiLine.svg'
import FlowChart from '@svg/flowChart.svg'
import StackShareLine from '@svg/stackShareLine.svg'
import TokenSwapLine from '@svg/tokenSwapLine.svg'
import LicenseThirdParty from '@svg/licenseThirdParty.svg'

import Button from '@components/common/Button'
import Typography from '@components/common/Typography'
import Image from 'next/image'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import LeftArrowScroll from '@components/common/LeftArrowScroll'
import RightArrowScroll from '@components/common/RightArrowScroll'
import FooterTop from '@components/FooterTop'
import {useEffect} from 'react'
import Link from 'next/link'

function Industry() {
  const industries = [
    {
      imageSrc: ClothingApparel,
      title: ' Consumer Electronics',
      description: 'Rapid settlements for high-ticket items like phones & devices.',
    },
    {
      imageSrc: ConsumerElectronics,
      title: 'Perfumes & Cosmetics',
      description: 'Treasury solutions for bulk shipments and international buyers.',
    },
    {
      imageSrc: ImportExportCompanies,
      title: 'Clothing & Apparel',
      description: 'Scalable payments for seasonal demand and global supply chains.',
    },
    {
      imageSrc: PerfumesCosmetics,
      title: 'Import & Export Companies',
      description: 'Reliable movement of funds across multiple jurisdictions.',
    },
  ]

  const fintechList = [
    {
      imageSrc: Infrastructure,
      icon: <FlowChart />,
      title: 'Next-Gen Infrastructure',
      description:
        'robust and scalable frameworks designed to facilitate the development of innovative fintech projects.',
    },
    {
      imageSrc: ApiCable,
      icon: <StackShareLine />,
      title: 'Seamless API Connectivity',
      description: 'Plug-and-play integration for payments, treasury, and compliance.',
    },
    {
      imageSrc: TokenPaymentFlows,
      icon: <TokenSwapLine />,
      title: 'Tokenized Payment Flows',
      description: 'Instant settlements with USXP and BRXP.',
    },
    {
      imageSrc: LicenseExpansionSupport,
      icon: <LicenseThirdParty />,
      title: 'Licensed Expansion Support',
      description: 'Access to regulated partners across jurisdictions.',
    },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const idSection = document.getElementById(hash) as HTMLDivElement
      if (idSection) {
        idSection.scrollIntoView({behavior: 'smooth'})
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="flex flex-col gap-32 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/industry-top.webp')] bg-center bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-8 sm:px-12 md:px-20 w-full lg:px-36">
            <div className="flex flex-col gap-12 z-1">
              <div className="flex flex-col gap-6 z-1">
                <Typography size="xxl" className="max-w-[600px]">
                  Fueling global trade. powering fintech innovation
                </Typography>

                <Typography size="md2" className="max-w-[500px]">
                  At ThePayHub, we focus on two core industries — B2B wholesale and fintechs — delivering the rails,
                  compliance, and infrastructure to scale globally.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link className='w-full' href={'/contact'}>
                  <Button variant="primary" className="min-w-fit w-full" icon={<BardLine />}>
                    Get Started
                  </Button>
                </Link>
                <Link className='w-full' href="https://calendly.com/thepayhub-sales/30min" target="_blank" rel="noreferrer noopenner">
                  <Button variant="secondary" className="min-w-fit w-full" icon={<VideoAiLine />}>
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden sm:block sm:max-w-[340px] sm:max-h-[420px] ">
              <Image src={PaymentProcess} alt="Payment Process" width="340" height="420" />
            </div>
          </div>
        </div>
      </div>

      {/* B2B Wholesale – Powering Global Trade */}
      <div className="flex flex-col gap-20 relative w-full max-w-[1200px] ">
        <RadialGradientBlur />
        <div className="flex flex-col gap-6 max-w-[600px]">
          <Typography size="xl" className="">
            B2B Wholesale - Powering Global Trade
          </Typography>

          <Typography size="md2" className="max-w-[600px]">
            We work with high-volume wholesale businesses and import/export companies, ensuring speed, transparency, and
            compliance at every step.
          </Typography>
        </div>
        <div className="flex flex-col gap-6 justify-center w-full overflow-hidden">
          <Typography size="lg2">Industries we support</Typography>

          <div className="flex flex-col gap-6">
            <div
              id="industries-scrollbar"
              className="flex flex-nowrap gap-6 h-full overflow-x-auto no-scrollbar"
              style={{WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none'}}>
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 py-6 px-4 z-[1] items-center rounded-2xl bg-soft-100 border border-soft-200 shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] min-w-[350px]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={164}
                    height={164}
                    className="w-[164px] h-[164px] object-contain"
                  />
                  <div className="flex flex-col gap-2.5 p-6 ">
                    <Typography size="lg">{item.title}</Typography>
                    <Typography size="md2">{item.description}</Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-end items-center text-white">
              <LeftArrowScroll id="industries-scrollbar" />
              <RightArrowScroll id="industries-scrollbar" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/images/line-waves.webp')] bg-center bg-cover w-full min-h-[141px] h-fit flex justify-center py-12 relative">
        <Typography size="xl" className="text-center">
          &quot;We move money as fast as goods move&quot;
        </Typography>
      </div>

      {/* Fintechs – The Engine Behind Fintech Vision */}
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 relative w-full max-w-[1200px] px-4 sm:px-8 md:px-16 ">
        <RadialGradientBlur />
        {/* Left Line */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white/30 "></div>

        {/* Middle Line */}
        <div className="absolute hidden md:block top-0 right-[428px] w-[1px] h-full border-r border-dashed border-white/30 "></div>

        {/* Right Line */}
        <div className="absolute hidden md:block top-0 right-0 w-[1px] h-full border-r border-dashed border-white/30 "></div>

        <div className="flex flex-col gap-6 max-w-[600px] relative">
          <div className="absolute -left-4 sm:-left-8 md:-left-16 w-[1px] h-full bg-linear-to-b from-[#000] to-white/30"></div>
          <Typography size="xl" className="">
            Fintechs - The Engine Behind Fintech Vision
          </Typography>

          <Typography size="md2" className="max-w-[600px]">
            For fintech companies, ThePayHub provides the infrastructure to innovate, integrate, and expand globally.
          </Typography>
        </div>
        {fintechList.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-between relative">
            <div className="flex flex-col gap-4 justify-center  order-2 sm:order-1">
              <Typography size="lg2">
                {fintechList.length - 1 === index && (
                  <span className="absolute -left-4 sm:-left-8 md:-left-16 w-[1px] h-full bg-linear-to-t from-[#000] to-white/30 z-10"></span>
                )}

                <span className="absolute -left-4 sm:-left-8 md:-left-16 transform -translate-x-2 z-20 bg-linear-to-b from-[#00274C] to-[#000000] w-5 h-5 rounded-full flex items-center justify-center ">
                  {item.icon}
                </span>
                {item.title}
              </Typography>
              <Typography size="md2" className="max-w-[400px]">
                {item.description}
              </Typography>
            </div>
            <div className="order-1 sm:order-2">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={328}
                height={328}
                className="w-[200px] h-[200px] md:w-[328px]  md:h-[328px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[url('/images/line-waves.webp')] bg-center bg-cover w-full min-h-[141px] h-fit flex justify-center py-12 relative">
        <Typography size="xl" className="text-center">
          “With ThePayHub, fintechs scale faster, smarter, and stronger”
        </Typography>
      </div>

      <FooterTop
        showLogos={false}
        title={'Ready to Scale?'}
        description="No matter if you operate a wholesale business or are a cutting-edge fintech innovator, ThePayHub provides the essential infrastructure to help you reach your goals and thrive in the digital economy."
      />
    </div>
  )
}

export default Industry
