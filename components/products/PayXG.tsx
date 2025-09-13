import PxgPhone from '@images/pxg-phone.webp'
import PxgPhoneSm from '@images/pxg-phone-sm.webp'
import Image from 'next/image'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import PXGLogo from '@svg/pxgLogo.svg'
import Typography from '@components/common/Typography'
import Button from '@components/common/Button'
import ArrowTopRight from '@svg/arrowTopRight.svg'

import ArrowDataTransferHorizontal from '@svg/arrowDataTransferHorizontal.svg'
import Bank from '@svg/bank.svg'
import UserIdVerification from '@svg/userIdVerification.svg'
import Book from '@svg/book.svg'

import Bank2 from '@svg/bank2.svg'
import ArrowDataTransferDiagonal from '@svg/arrowDataTransferDiagonal.svg'
import DashboardBrowsing from '@svg/dashboardBrowsing.svg'
import Safe from '@svg/safe.svg'
import Rocket from '@svg/rocket.svg'
import MoneyAdd from '@svg/moneyAdd.svg'
import LockKey from '@svg/lockKey.svg'

import MessageQuestion from '@svg/messageQuestion.svg'
import ArrowsDown from '@svg/arrowsDown.svg'
import CheckmarkBadge from '@svg/checkmarkBadge.svg'
import Link from 'next/link'

function PayXG() {
  const features = [
    {
      icon: <ArrowDataTransferHorizontal />,
      title: 'B2B Payment Platform',
      description:
        'A secure system that helps businesses send and receive payments from each other smoothly and quickly',
    },
    {
      icon: (
        <span className="min-w-12 min-h-12">
          <Bank />
        </span>
      ),
      title: 'Banking & SWIFT Access',
      description: 'Direct access to global banks and the SWIFT network for easy international money transfers.',
    },
    {
      icon: <UserIdVerification />,
      title: 'KYC-Integrated',
      description:
        "Built-in identity verification that keeps payments safe and compliant by confirming who's using the platform.",
    },
    {
      icon: <Book />,
      title: 'Ledger-Based Top-Ups',
      description:
        'Add funds to your account with full tracking on a digital ledger so every transaction is recorded and clear.',
    },
  ]

  const data = [
    {
      icon: <Bank2 />,
      title: 'Standalone Digital Bank Accounts',
      description:
        'Provides clients with dedicated accounts in North America and globally. Supports large-ticket B2B transactions.',
    },
    {
      icon: <ArrowDataTransferDiagonal />,
      title: 'Fedwire & SWIFT Payments',
      description:
        'Traditional banking rails for domestic and international transfers. Payouts processed within 15-30 minutes.',
    },
    {
      icon: <DashboardBrowsing />,
      title: 'PXG Dashboard',
      description:
        'Full client access to balances, transactions, and payments. Direct log-in available, or access via the XPZ PXG tab.',
    },
    {
      icon: <Safe />,
      title: 'Compliance & KYC Framework',
      description: 'Standalone KYC/KYB verification for clients. Shared compliance across ThePayHub ecosystem.',
    },
    {
      icon: <Bank2 />,
      title: 'Institutional Banking Access',
      description:
        'Direct partnerships with regulated banks and financial institutions. PXG is not a bank, but leverages banking partners for settlement.',
    },
    {
      icon: <Rocket />,
      title: 'Instant Treasury Movement',
      description:
        'Handles treasury movement for high-volume suppliers and distributors. Optimized for B2B payments from the USA to LATAM and beyond.',
    },
    {
      icon: <MoneyAdd />,
      title: 'Liquidity Provider Access',
      description:
        'Connects to multiple liquidity providers for large transactions. Ensures better pricing and faster execution.',
    },
    {
      icon: <LockKey />,
      title: '2FA & Security Layer',
      description: 'Strong authentication for payouts and fund movements. Full compliance with audit-ready tracking.',
    },
  ]
  return (
    <div id="product_pxg_section" className="relative w-full max-w-[1200px]">
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 bg-[radial-gradient(circle,#00428055_0%,#00428055_100%)] rounded-full w-2/3 h-full blur-[400px]`}
      />

      <div className="flex flex-col justify-between md:flex-row gap-20 w-full h-fit">
        {/* Sticky Component */}
        <div className="md:sticky md:top-10 self-start h-fit">
          <div className="flex w-full items-center justify-center sm:hidden">
            <div className="rounded-4xl overflow-hidden">
              <Image src={PxgPhoneSm} alt="PxgPhoneSm" className="sm:max-w-[340px] " />
            </div>
          </div>

          <div
            className={`flex flex-col gap-10 md:gap-16 lg:gap-24 w-full lg:mt-12 items-start sm:items-center lg:items-start `}>
            <div className="flex flex-col gap-4">
              <div className="hidden sm:block w-20 h-20">
                <PXGLogo />
              </div>
              <Typography size="lg" className="lg:max-w-[600px]">
                Traditional Banking Infrastructure
              </Typography>

              <Typography size="md2" className="max-w-[600px] lg:max-w-[670px]">
                Access a global network of banking partners, manage multi-currency accounts, and optimize traditional
                payment operations through a single powerful platform.
              </Typography>
            </div>

            <div className="grid grid-cols-2 gap-7">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-4 max-w-[290px]">
                  <div className="w-12 h-12">{feature.icon}</div>
                  <Typography size="lg">{feature.title}</Typography>
                  <Typography size="md">{feature.description}</Typography>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-fit">
              <Link href="https://app.payxglobal.com" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
                  Go to PXG
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right Component */}
        <div className="flex flex-col gap-20">
          <Image
            src={PxgPhone}
            alt="PxgPhone"
            className="hidden md:block sm:max-w-[340px] sm:max-h-[750px] "
            width={340}
            height={750}
          />
          <div className="grid grid-cols-2 gap-2">
            {data.map((item, index) => {
              const rowIndex = Math.floor(index / 2)
              const isEvenRow = rowIndex % 2 === 0
              const isEvenItemInRow = index % 2 === 0
              const bg =
                (isEvenRow && isEvenItemInRow) || (!isEvenRow && !isEvenItemInRow) ? 'bg-soft-200' : 'bg-soft-100'

              return (
                <div key={index} className={`flex flex-col gap-7 md:max-w-[250px] p-6 rounded-lg ${bg}`}>
                  <div className="w-8 h-8">{item.icon}</div>
                  <Typography size="lg">{item.title}</Typography>
                  <Typography size="xs">{item.description}</Typography>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-center gap-2.5">
            {/* Problem */}
            <div className={`flex flex-col gap-4 max-w-[460px] p-6 rounded-2xl bg-soft-100`}>
              <div className="flex justify-between items-center gap-6">
                <Typography size="lg">The Problem</Typography>
                <MessageQuestion />
              </div>
              <Typography size="md">
                B2B Businesses Face Slow and unreliable cross-border payments. B2B companies—especially in emerging
                markets—struggle to receive international payments quickly and securely. Traditional banking is slow,
                expensive, and full of compliance friction, often delaying or blocking legitimate transactions.
              </Typography>
            </div>

            <ArrowsDown />

            {/* Solution */}
            <div className={`flex flex-col gap-4 max-w-[460px] p-6 rounded-2xl bg-soft-100`}>
              <div className="flex justify-between items-center gap-6">
                <Typography size="lg">The Solution</Typography>
                <CheckmarkBadge />
              </div>
              <Typography size="md">
                Fast Settlements We process SWIFT and FedWire payments within 15-30 minutes through trusted banking
                partners. Reliable Account Access Clients get standalone digital accounts, improving transparency and
                reducing dependency on intermediaries. Simplified Compliance Our shared KYC across PXG, XPZ, and
                partners makes onboarding and ongoing compliance faster and easier.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayXG
