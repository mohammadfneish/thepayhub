import XpzPhone from '@images/xpz-phone.webp'
import XpzPhoneSm from '@images/xpz-phone-sm.webp'
import Image from 'next/image'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import XPZLogo from '@svg/xpzLogo.svg'
import Typography from '@components/common/Typography'
import Button from '@components/common/Button'
import ArrowTopRight from '@svg/arrowTopRight.svg'
import DeviceAccess from '@svg/deviceAccess.svg'
import QrCode from '@svg/qrCode.svg'
import BlockChain from '@svg/blockChain.svg'
import DashboardSpeed2 from '@svg/dashboardSpeed2.svg'
import CreditCardPos from '@svg/creditCardPos.svg'
import Affiliate from '@svg/affiliate.svg'
import TimeSchedule from '@svg/timeSchedule.svg'
import MoneyReceiveCircle from '@svg/moneyReceiveCircle.svg'
import Exchange from '@svg/exchange.svg'
import Invoice from '@svg/invoice.svg'
import UserMultiple from '@svg/userMultiple.svg'
import UserAi from '@svg/userAi.svg'
import TablePin from '@svg/tablePin.svg'
import LoginDoor from '@svg/loginDoor.svg'
import Route from '@svg/route.svg'
import MessageQuestion from '@svg/messageQuestion.svg'
import ArrowsDown from '@svg/arrowsDown.svg'
import CheckmarkBadge from '@svg/checkmarkBadge.svg'
import Link from 'next/link'

function XPayZ() {
  const features = [
    {
      icon: <DeviceAccess />,
      title: 'Tokenized Payments',
      description: 'Make payments using digital tokens that represent real money, giving extra speed and security.',
    },
    {
      icon: <QrCode />,
      title: 'Merchant Gateway',
      description:
        'A tool that lets businesses accept digital and traditional payments from their customers in one place.',
    },
    {
      icon: <BlockChain />,
      title: 'Blockchain Ledger Interface',
      description: 'Simple way to connect with blockchain technology so every payment is transparent and tamper-proof.',
    },
    {
      icon: <DashboardSpeed2 />,
      title: 'High-Speed Checkout',
      description: 'A fast, hassle-free checkout process that makes paying quick and easy for customers.',
    },
  ]

  const data = [
    {
      icon: <CreditCardPos />,
      title: 'Payment Gateway',
      description:
        'Accepts token-based payments (e.g., USXP, BRXP). Merchants can receive and settle purchases instantly.',
    },
    {
      icon: <Affiliate />,
      title: 'Merchant Processing',
      description:
        'Designed for B2B wholesalers and distributors. Handles high-volume, high-ticket merchant transactions.',
    },
    {
      icon: <TimeSchedule />,
      title: 'Ledger-Based Token System',
      description:
        'Balances tracked as ledger entries (USXP, BRXP). Real-time reporting with full compliance transparency.',
    },
    {
      icon: <MoneyReceiveCircle />,
      title: 'E-Money Top-Ups',
      description:
        'Clients can top up balances instantly in tokens. Integrated via API for seamless merchant operations.',
    },
    {
      icon: <Exchange />,
      title: 'Conversion / Swap (Ledger-Based)',
      description:
        'Clients can convert between tokens (e.g., BRL ↔ BRXP, USD ↔ USXP). Front-end conversion on XPZ; backend handled by liquidity partners.',
    },
    {
      icon: <Invoice />,
      title: 'Billing & Invoicing',
      description:
        'Merchants can issue invoices directly to clients. Supports token-denominated billing and reconciliations.',
    },
    {
      icon: <UserMultiple />,
      title: 'Sub-Accounts for Merchants',
      description:
        'Merchants can create and manage sub-accounts under their main account. Useful for separating clients, departments, or supplier flows.',
    },
    {
      icon: <UserAi />,
      title: 'PIX Payments',
      description:
        "Pay to self or directly to merchants using Brazil's PIX network. Bridges token balances with instant local settlement.",
    },
    {
      icon: <TablePin />,
      title: 'PXG Tab Access Integration',
      description: 'Built-in PXG tab inside XPZ for fiat banking access. Includes KYC verification and 2FA security.',
    },
    {
      icon: <LoginDoor />,
      title: 'Merchant Sign-Up & KYC Flow',
      description:
        'Jurisdiction-based permissions applied automatically. Example: U.S. consumers restricted from opening personal accounts.',
    },
    {
      icon: <Route />,
      title: 'Transaction Tracking & Compliance Layer',
      description:
        'Ability to backtrack payments down to the end consumer level. Ensures audit-ready compliance for wholesale and retail flows.',
    },
  ]

  return (
    <div id="product_xpz_section" className="relative w-full max-w-[1200px]">
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 bg-[radial-gradient(circle,#00428055_0%,#00428055_100%)] rounded-full w-2/3 h-full blur-[400px]`}
      />

      <div className="flex flex-col justify-between md:flex-row gap-20 w-full h-fit">
        {/* Sticky Component */}
        <div className="md:sticky md:top-10 self-start h-fit">
          <div className="flex w-full items-center justify-center sm:hidden">
            <div className="rounded-4xl overflow-hidden">
              <Image src={XpzPhoneSm} alt="XpzPhoneSm" className="sm:max-w-[340px] " />
            </div>
          </div>

          <div
            className={`flex flex-col gap-10 md:gap-16 lg:gap-24 w-full lg:mt-12 items-start sm:items-center lg:items-start `}>
            <div className="flex flex-col gap-4">
              <div className="hidden sm:block w-20 h-20">
                <XPZLogo />
              </div>
              <Typography size="lg" className="lg:max-w-[600px]">
                Tokenized Payment Platform
              </Typography>

              <Typography size="md2" className="max-w-[600px] lg:max-w-[670px]">
                Uniting tokenized and traditional banking into a seamless ecosystem that improves financial interactions
                and accessibility for all.
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
              <Link href="https://app.xpayz.us" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
                  Go to XPayz
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right Component */}
        <div className="flex flex-col gap-20">
          <Image
            src={XpzPhone}
            alt="XPayZ"
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
                  <div className="w-12 h-12">{item.icon}</div>
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
                In a world where instant transactions are the expectation, why do B2B payments still take days to
                process? Why do global companies still face delays, unpredictable fees, and lack of transparency in
                their financial operations?
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
                In a world where instant transactions are the expectation, why do B2B payments still take days to
                process? Why do global companies still face delays, unpredictable fees, and lack of transparency in
                their financial operations?
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XPayZ
