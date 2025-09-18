'use client'

import Button from '@components/common/Button'
import Typography from '@components/common/Typography'
import BardLine from '@svg/bardLine.svg'
import VideoAiLine from '@svg/videoAiLine.svg'
import SmartLedgerLogo from '@svg/smartLedgerLogo.svg'
import Purse from '@svg/purse.svg'
import SimCardDual from '@svg/simCardDual.svg'
import FlowConnection from '@svg/flowConnection.svg'
import Safe from '@svg/safe.svg'
import Api from '@svg/api.svg'
import Cash2 from '@svg/cash2.svg'
import DashboardBrowsing from '@svg/dashboardBrowsing.svg'
import Beta from '@svg/beta.svg'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import ArrowTopRight from '@svg/arrowTopRight.svg'
import LeftArrowScroll from '@components/common/LeftArrowScroll'
import RightArrowScroll from '@components/common/RightArrowScroll'
import Home from '@images/products/home.png'
import ConsoleCursor from '@images/products/console-cursor.png'
import Building from '@images/products/building.png'
import Key from '@images/products/key.png'
import Image from 'next/image'
import Versus from '@components/products/Versus'
import XPayZ from '@components/products/XPayZ'
import PayXG from '@components/products/PayXG'
import {useEffect} from 'react'
import Link from 'next/link'

function Products() {
  const sections = ['product_xpz_section', 'product_pxg_section', 'product_sml_section']

  const SmartLedgerList = [
    {
      icon: <Purse />,
      title: 'Hybrid Ledger Wallet',
      description:
        'Combines blockchain ledger technology with traditional treasury movement. Provides a unified record of transactions across ecosystems.',
    },
    {
      icon: <SimCardDual />,
      title: 'Dual Balance System',
      description:
        'Clients see both incoming funds and a main balance. Clear separation for tracking and reconciliation.',
    },
    {
      icon: <FlowConnection />,
      title: 'Internal Ledger Mapping',
      description:
        'Maps transactions across XPZ, PXG, and affiliated partners. Ensures full visibility of fund flows from entry to payout.',
    },
    {
      icon: (
        <span className="w-12 h-12">
          <DashboardBrowsing />
        </span>
      ),
      title: 'Multi-Platform Dashboard Integration',
      description:
        'Unified dashboard linking XPZ, PXG, and SmartLedger. Clients can track and manage all treasury movements in one place.',
    },
    {
      icon: (
        <span className="w-12 h-12">
          <Safe />
        </span>
      ),
      title: 'Compliance & Transparency Layer',
      description:
        'End-to-end transaction tracking with detailed reporting. Built-in compliance features to support AML/KYC requirements.',
    },
    {
      icon: <Api />,
      title: 'API Connectivity',
      description:
        'Provides APIs for balance checks, transaction data, and reporting. Easy integration into client back-office systems.',
    },
    {
      icon: <Cash2 />,
      title: 'Liquidity & Settlement via Mazzera',
      description:
        'Powered by Mazzera for liquidity and settlement execution. Ensures fast and reliable transaction processing.',
    },
    {
      icon: <Beta />,
      title: 'Beta Testing Status',
      description:
        'Currently in beta phase with select clients. Testing performance, security, and compliance before full rollout.',
    },
  ]

  const solutionsList = [
    {
      imageSrc: Home,
      title: 'Small and Medium Businesses',
      description:
        'Access enterprise-grade financial infrastructure without complexity. We offer SMBs the same capabilities that large corporations use, but with simplified implementation, affordable costs, and scalability to grow with your business.',
    },
    {
      imageSrc: ConsoleCursor,
      title: 'Online Merchants',
      description:
        'Expand your e-commerce globally with integrated checkout, multiple currency acceptance, and fast settlement. Our platform unifies tokenized checkout, flat processing, and fast settlement in a single integration.',
    },
    {
      imageSrc: Building,
      title: 'Large Enterprises',
      description:
        'Centralize your global financial operations, optimize treasury flows, and gain complete visibility over transactions. Our enterprise-grade solution provides complete visibility, granular control, and operational efficiency.',
    },
    {
      imageSrc: Key,
      title: 'Token-Based Businesses',
      description:
        'Develop, launch, and manage your own tokenized ecosystem with complete backend support. Our integrated solution eliminates external dependencies, providing total control over your operation.',
    },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const idSection = document.getElementById(`product_${hash}_section`) as HTMLDivElement
      if (idSection) {
        idSection.scrollIntoView({behavior: 'smooth'})
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="flex flex-col gap-20 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/products-top.webp')] bg-center bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-8 sm:pl-12 sm:pr-0 md:pl-20 lg:pl-36">
            <div className="flex flex-col gap-12 z-1">
              <Typography size="xxl" className="max-w-[670px]">
                Powerful products for modern business
              </Typography>

              <Typography size="md2" className="max-w-[500px]">
                Our proprietary infrastructure unifies tokenized and banking payments in a single global ecosystem,
                delivering the speed, security, and scalability your business needs.
              </Typography>

              <div className="flex gap-3 md:gap-6 ">
                <div className="flex flex-col md:border-r md:border-white/40 md:pr-6 md:border-dashed ">
                  <Typography size="lg2" className="lg:text-4xl text-primary-400!">
                    60,000+
                  </Typography>
                  <Typography size="md">Active clients</Typography>
                </div>
                <div className="flex flex-col md:border-r md:border-white/40 md:pr-6 md:border-dashed ">
                  <Typography size="lg2" className="lg:text-4xl text-primary-400!">
                    2545
                  </Typography>
                  <Typography size="md">Active API Integrations</Typography>
                </div>
                <div className="flex flex-col ">
                  <Typography size="lg2" className="lg:text-4xl text-primary-400!">
                    $65M
                  </Typography>
                  <Typography size="md">Monthly transaction volume</Typography>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link className='w-full' href="/contact">
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
          </div>
        </div>
      </div>

      {/* XPZ */}
      <XPayZ />

      {/* PayXG */}
      <PayXG />

      {/* SmartLedger */}
      <div id="product_sml_section" className="flex flex-col gap-16 relative max-w-[1200px]">
        <RadialGradientBlur />
        <div className="flex flex-col gap-4">
          <span className="w-[120px] h-[124px]">
            <SmartLedgerLogo />
          </span>
          <Typography size="lg2">SmartLedger (Powered by Mazzera) - Beta</Typography>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7">
            {SmartLedgerList.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 z-10 ">
                {item.icon}
                <Typography size="md2" className="text-white">
                  {item.title}
                </Typography>
                <Typography size="sm2">{item.description}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center sm:justify-start">
          <Link href="/contact" className='w-fit'>
            <Button postIcon={<ArrowTopRight />}>Learn More</Button>
          </Link>
        </div>
      </div>

      {/* Solutions */}
      <div className="flex flex-col gap-20 relative justify-center w-full">
        <RadialGradientBlur />
        <Typography size="xl" className="text-center">
          Tailored solutions for your business
        </Typography>
        <Typography size="md2" className="text-center max-w-[800px] mx-auto">
          Our company provides tailored solutions designed to meet the unique requirements of various types of
          businesses, ensuring that we address their specific needs effectively.
        </Typography>
        <div className="flex flex-col gap-6">
          <div
            id="solutions-scrollbar"
            className="flex flex-nowrap gap-6 h-full overflow-x-auto no-scrollbar"
            style={{WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none'}}>
            {solutionsList.map((item, index) => (
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
            <LeftArrowScroll id="solutions-scrollbar" />
            <RightArrowScroll id="solutions-scrollbar" />
          </div>
        </div>
      </div>

      {/* ThePayHub vs other solutions */}
      <Versus />
    </div>
  )
}

export default Products
