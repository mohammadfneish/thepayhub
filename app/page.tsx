'use client'

import Button from '@components/common/Button'
import Typography from '@components/common/Typography'
import HomeEarth from '@images/home-earth.webp'
import BardLine from '@svg/bardLine.svg'
import VideoAiLine from '@svg/videoAiLine.svg'
import CoinLine from '@svg/coinLine.svg'
import ArrowTopRight from '@svg/arrowTopRight.svg'
import Image from 'next/image'
import LottieClient from '@components/common/LottieClient'
import HomeLineRoad from '@json/homeLineRoad.json'
import ProductLineRoad from '@json/productLineRoad.json'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import ClientsShield from '@images/home/clients-shield.webp'
import Saving from '@images/home/savings.webp'
import TransactionGraph from '@images/home/transaction-graph.webp'
import Shield from '@images/home/shield.png'
import Transaction from '@images/home/transaction.png'
import Coins from '@images/home/coins.png'
import Chain from '@images/home/chain.png'
import Bolt from '@images/home/bolt.png'
import XpzPhone from '@images/xpz-phone.webp'
import PxgPhone from '@images/pxg-phone.webp'
import XpzPhoneSm from '@images/xpz-phone-sm.webp'
import PxgPhoneSm from '@images/pxg-phone-sm.webp'
import DoneCircular from '@images/home/done-circular.png'
import CheckCircular from '@svg/checkCircular.svg'
import XPZLogo from '@svg/xpzLogo.svg'
import PXGLogo from '@svg/pxgLogo.svg'
import SmartLedgerLogo from '@svg/smartLedgerLogo.svg'
import Technology from '@components/home/Technology'
import ChevronRight from '@svg/chevronRight.svg'
import Link from 'next/link'

export default function Home() {
  const preferring = [
    {
      icon: Chain,
      title: 'Seamless Integration',
      description:
        'Connect once to access both traditional and tokenized payment rails through a single API. Reduce integration complexity and accelerate your time to market.',
    },
    {
      icon: Bolt,
      title: 'Instant Transactions',
      description:
        'Experience real-time settlement across borders with our proprietary infrastructure. Say goodbye to the delays and uncertainties of traditional cross-border payments.',
    },
    {
      icon: DoneCircular,
      title: 'Built-in Compliance',
      description:
        'Our platform automatically handles regulatory requirements across multiple jurisdictions, reducing your compliance burden while ensuring security and trust.',
    },
  ]

  return (
    <div className="flex flex-col gap-20 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/home-top.webp')] bg-center bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 pl-8 pr-8 sm:pl-12 sm:pr-0 md:pl-20 lg:pl-36">
            <div className="flex flex-col gap-12 z-1">
              <Typography size="xxl" className="max-w-[600px]">
                Your gateway to smarter B2B payments
              </Typography>

              <Typography size="md2" className="max-w-[500px]">
                Uniting tokenized and traditional banking into a seamless ecosystem that improves financial interactions
                and accessibility for all.
              </Typography>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link className="w-full" href="/contact">
                  <Button variant="primary" className="min-w-fit w-full" icon={<BardLine />}>
                    Explore Solutions
                  </Button>
                </Link>
                <Link
                  className="w-full"
                  href="https://calendly.com/thepayhub-sales/30min"
                  target="_blank"
                  rel="noreferrer noopenner">
                  <Button variant="secondary" className="min-w-fit w-full" icon={<VideoAiLine />}>
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute right-1/2 -bottom-[60%] transform  translate-x-1/2 z-0 sm:relative size-[520px]  sm:max-w-[520px] sm:max-h-[520px] sm:right-0 sm:-bottom-0 sm:-translate-0 ">
              <Image src={HomeEarth} alt="usxp-coin" width="520" height="520" />
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-col max-w-[1200px] w-full items-center justify-center gap-20 relative">
        {/* Payment Process */}
        <Frame
          title={'Your payment process flow made simple'}
          description={
            'Uniting tokenized and traditional banking into a seamless ecosystem that improves financial interactions and accessibility for all.'
          }
          button={
            <Button variant="primary" className="min-w-fit" icon={<CoinLine />}>
              Learn more about <span className="font-bold">USXP</span>
            </Button>
          }
          image={<LottieClient animationData={HomeLineRoad} className="sm:max-w-[550px] sm:max-h-[550px]" />}
        />

        {/* ecosystem */}
        <Frame
          title={'An entire ecosystem of payment solutions'}
          description={
            'A unified ecosystem of proprietary platforms delivering instant, compliant, and transparent treasury movement for businesses worldwide.'
          }
          button={
            <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
              View Solutions
            </Button>
          }
          image={<LottieClient animationData={ProductLineRoad} className="sm:max-w-[550px] sm:max-h-[550px]" />}
        />

        {/* XPayz */}
        <Frame
          title={'Tokenized Payment Platform'}
          description={
            'Our blockchain-based solution enables instant settlement, programmable payments, and reduced transaction costs through our proprietary USXP stablecoin.'
          }
          button={
            <Link href="https://app.xpayz.us" target="_blank">
              <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
                Go to XPayz
              </Button>
            </Link>
          }
          list={[
            'Tokenized Payments',
            'Merchant Gateway',
            'Blockchain Ledger Interface',
            'High-Speed Checkout',
            'No Custody Services',
          ]}
          topIcon={
            <span className="w-32 h-32">
              <XPZLogo />
            </span>
          }
          image={<Image src={XpzPhone} alt="XpzPhone" className="sm:max-w-[340px]  sm:max-h-[750px] " />}
          mobileImage={
            <div className="rounded-4xl overflow-hidden">
              <Image src={XpzPhoneSm} alt="XpzPhoneSm" className="sm:max-w-[340px] " />
            </div>
          }
        />

        {/* PayXG */}
        <Frame
          title={'Traditional Banking Infrastructure'}
          description={
            'Access a global network of banking partners, manage multi-currency accounts, and optimize traditional payment operations through a single powerful platform.'
          }
          button={
            <Link href="https://app.payxglobal.com" target="_blank">
              <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
                Go to PayXG
              </Button>
            </Link>
          }
          list={[
            'B2B Payment Platform',
            'Banking & SWIFT Access',
            'KYC-Integrated',
            'Ledger-Based Top-Ups',
            'Ecosystem-Connected',
          ]}
          topIcon={
            <span className="w-32 h-32">
              <PXGLogo />
            </span>
          }
          image={<Image src={PxgPhone} alt="PxgPhone" className="sm:max-w-[340px] sm:max-h-[750px] " />}
          mobileImage={
            <div className="rounded-4xl overflow-hidden">
              <Image src={PxgPhoneSm} alt="PxgPhoneSm" className="sm:max-w-[340px] " />
            </div>
          }
        />

        <div className="flex flex-col gap-10 w-full items-center justify-center mt-10">
          <span className="w-[120px] h-[124px]">
            <SmartLedgerLogo />
          </span>
          <Typography size="lg">Coming soon...</Typography>
          <Link href="/contact">
            <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
              Contact us to know more
            </Button>
          </Link>
        </div>

        {/* Technology */}
        <Technology />

        {/* Trusted */}
        <Frame
          title={'Trusted by over 60,000 clients'}
          description={
            'We empower a vibrant network of clients in fintech, e-commerce, and enterprise sectors, all seamlessly connected through our integrated ecosystem.'
          }
          image={<Image src={ClientsShield} alt="ClientsShield" className="sm:max-w-[550px] sm:max-h-[550px]" />}
          mobileImage={<Image src={Shield} alt="Shield" className="sm:max-w-[550px] sm:max-h-[550px]" />}
        />

        {/* transactions */}
        <Frame
          title={'High-impact transactions'}
          description={
            'Handling an average of $90M USD in monthly transaction volume and facilitating over $75M USD in settlements, ensuring scale and reliability at every level.'
          }
          imageOrder="left"
          image={<Image src={TransactionGraph} alt="TransactionGraph" className="sm:max-w-[550px] sm:max-h-[550px]" />}
          mobileImage={<Image src={Transaction} alt="Transaction" className="sm:max-w-[550px] sm:max-h-[550px]" />}
        />

        {/* cost savings */}
        <Frame
          title={'Significant cost savings'}
          description={
            'Clients save an average of 3-4% per transaction by operating within our financial hub — unlocking efficiency, transparency, and real value.'
          }
          image={<Image src={Saving} alt="Saving" className="sm:max-w-[550px] sm:max-h-[550px]" />}
          mobileImage={<Image src={Coins} alt="Coins" className="sm:max-w-[550px] sm:max-h-[550px]" />}
        />

        {/* Preferring Our Services */}
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20 w-full relative">
          <RadialGradientBlur />

          <Typography size="xl" className="text-start sm:text-center">
            Why businesses trust our platform
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preferring.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 p-6">
                <Image src={item.icon} alt={item.title} className="max-w-[100px] max-h-[100px]" />
                <Typography size="lg">{item.title}</Typography>
                <Typography size="md">{item.description}</Typography>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link href="/contact">
              <Button variant="primary" className="w-fit" postIcon={<ChevronRight />}>
                {'Join Today'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
interface FrameProps {
  title: string
  description: string
  button?: React.ReactNode
  image: React.ReactNode
  mobileImage?: React.ReactNode
  topIcon?: React.ReactNode
  imageOrder?: 'left' | 'right'
  list?: string[]
}

const Frame = ({
  title,
  description,
  button,
  image,
  mobileImage,
  topIcon,
  imageOrder = 'right',
  list = [],
}: FrameProps) => {
  return (
    <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row w-full relative">
      <RadialGradientBlur />
      {<div className="flex w-full items-center justify-center sm:hidden">{mobileImage ?? image}</div>}
      <div
        className={`flex flex-col gap-6 md:gap-8 lg:gap-12 w-full items-start sm:items-center lg:items-start ${
          imageOrder == 'left' ? 'order-1 lg:order-2' : ''
        }`}>
        <div className="hidden sm:block">{topIcon}</div>
        <Typography size="xl" className="lg:max-w-[320px] text-start sm:text-center lg:text-start leading-[70px]">
          {title}
        </Typography>

        <Typography size="md2" className="max-w-[600px] lg:max-w-[400px] text-start sm:text-center lg:text-start">
          {description}
        </Typography>

        {list?.length > 0 && (
          <div className="flex flex-col gap-4 items-start sm:items-center lg:items-start">
            <ul className="flex flex-col gap-2">
              {list.map((item, index) => (
                <li key={index} className="flex items-center gap-4 ">
                  <CheckCircular className="text-primary-400" />
                  <Typography size="md2" className="text-white">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {button && <div className="w-full flex justify-center sm:justify-start sm:w-fit">{button}</div>}
      </div>
      <div className={`${imageOrder == 'left' ? 'order-2 lg:order-1' : ''} hidden sm:flex items-center justify-center`}>
        {image}
      </div>
    </div>
  )
}
