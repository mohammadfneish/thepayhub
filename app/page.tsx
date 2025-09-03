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
import DoneCircular from '@images/home/done-circular.png'

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
        <div className="bg-[url('/images/home-top.webp')] bg-right-bottom bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 pl-8 sm:pl-12 md:pl-20 lg:pl-36">
            <div className="flex flex-col gap-12 z-1">
              <Typography size="xxl" className="max-w-[600px]">
                Your gateway to smarter B2B payments
              </Typography>

              <Typography size="md2" className="max-w-[500px]">
                Uniting tokenized and traditional banking into a seamless ecosystem that improves financial interactions
                and accessibility for all.
              </Typography>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button variant="primary" className="min-w-fit" icon={<BardLine />}>
                  Explore Solutions
                </Button>
                <Button variant="secondary" className="min-w-fit" icon={<VideoAiLine />}>
                  Schedule a Call
                </Button>
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
        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row w-full relative">
          <RadialGradientBlur />
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full lg:mt-12 lg:items-center order-2 lg:order-1">
            <Typography size="xl" className="lg:max-w-[550px] lg:text-center">
              Your payment process flow made simple
            </Typography>

            <Typography size="md2" className="lg:max-w-[400px] lg:text-center">
              Uniting tokenized and traditional banking into a seamless ecosystem that improves financial interactions
              and accessibility for all.
            </Typography>

            <div className="w-full md:w-fit">
              <Button variant="primary" className="min-w-fit" icon={<CoinLine />}>
                Learn more about <span className="font-bold">USXP</span>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <LottieClient animationData={HomeLineRoad} className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
        </div>

        {/* ecosystem */}
        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row w-full relative">
          <RadialGradientBlur />
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full lg:mt-12 lg:items-center order-2 lg:order-1">
            <Typography size="xl" className="lg:max-w-[550px] lg:text-center">
              An entire ecosystem of payment solutions
            </Typography>

            <Typography size="md2" className="lg:max-w-[400px] lg:text-center">
              Uniting tokenized and traditional banking into a seamless ecosystem that improves financial interactions
              and accessibility for all.
            </Typography>

            <div className="w-full md:w-fit">
              <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
                View Solutions
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <LottieClient animationData={ProductLineRoad} className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
        </div>

        {/* Trusted */}
        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row w-full relative">
          <RadialGradientBlur />
          <div className="flex w-full items-center justify-center sm:hidden">
            <Image src={Shield} alt="Shield" className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full lg:mt-12 lg:items-center">
            <Typography size="xl" className="lg:max-w-[550px] lg:text-center">
              Trusted by over 60,000 clients
            </Typography>

            <Typography size="md2" className="lg:max-w-[400px] lg:text-center">
              We empower a vibrant network of clients in fintech, e-commerce, and enterprise sectors, all seamlessly
              connected through our integrated ecosystem.
            </Typography>
          </div>
          <div className="hidden sm:flex items-center justify-center">
            <Image src={ClientsShield} alt="ClientsShield" className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
        </div>

        {/* transactions */}
        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row w-full relative">
          <RadialGradientBlur />
          <div className="flex w-full items-center justify-center sm:hidden">
            <Image src={Transaction} alt="Transaction" className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full lg:mt-12 lg:items-center order-2 ">
            <Typography size="xl" className="lg:max-w-[550px] lg:text-center">
              High-impact transactions
            </Typography>

            <Typography size="md2" className="lg:max-w-[400px] lg:text-center">
              Handling an average of $90M USD in monthly transaction volume and facilitating over $75M USD in
              settlements, ensuring scale and reliability at every level.
            </Typography>
          </div>
          <div className="order-2 lg:order-1 hidden sm:flex items-center justify-center">
            <Image src={TransactionGraph} alt="TransactionGraph" className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
        </div>

        {/* cost savings */}
        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row w-full relative">
          <RadialGradientBlur />
          <div className="flex w-full items-center justify-center sm:hidden">
            <Image src={Coins} alt="Coins" className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full lg:mt-12 lg:items-center order-2 lg:order-1">
            <Typography size="xl" className="lg:max-w-[550px] lg:text-center">
              Significant cost savings
            </Typography>

            <Typography size="md2" className="lg:max-w-[400px] lg:text-center">
              Clients save an average of 3-4% per transaction by operating within our financial hub — unlocking
              efficiency, transparency, and real value.
            </Typography>
          </div>
          <div className="order-2 lg:order-1 hidden sm:flex items-center justify-center">
            <Image src={Saving} alt="Saving" className="sm:max-w-[550px] sm:max-h-[550px]" />
          </div>
        </div>

        {/* Preferring Our Services */}
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20 w-full relative">
          <RadialGradientBlur />

          <Typography size="xl" className="text-center">
            Why businesses are preferring our services
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
        </div>
      </div>
    </div>
  )
}
