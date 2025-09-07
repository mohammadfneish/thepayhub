import LogosGroup from '@images/solutions/logos-group.webp'
import Flame from '@images/solutions/flame.webp'
import Code from '@images/solutions/code.webp'
import Recycle from '@images/solutions/recycle.webp'
import ShieldOutline from '@images/solutions/shield-outline.webp'

import BardLine from '@svg/bardLine.svg'
import VideoAiLine from '@svg/videoAiLine.svg'
import TokenCircle from '@svg/tokenCircle.svg'
import AlphaCircle from '@svg/alphaCircle.svg'
import UserEdit from '@svg/userEdit.svg'
import TransactionHistory from '@svg/transactionHistory.svg'
import Blend2 from '@svg/blend2.svg'
import Agreement from '@svg/agreement.svg'
import Flag from '@svg/flag.svg'
import DashboardCircle from '@svg/dashboardCircle.svg'
import Audit from '@svg/audit.svg'
import Profile from '@svg/profile.svg'
import XPZLogo from '@svg/xpzLogo.svg'
import PXGLogo from '@svg/pxgLogo.svg'
import GKSSolutionsLogo from '@svg/gksSolutionsLogo.svg'
import MoonlightLogo from '@svg/moonlightLogo.svg'
import SmartLedgerLogo from '@svg/smartLedgerLogo.svg'
import CoinSwap from '@svg/coinSwap.svg'
import Connector from '@svg/connector.svg'
import Payment from '@svg/payment.svg'
import Download from '@svg/download.svg'
import Vision from '@svg/vision.svg'
import CheckCircular from '@svg/checkCircular.svg'
import Exchange2 from '@svg/exchange2.svg'
import LogoutCircle from '@svg/logoutCircle.svg'
import Analytics from '@svg/analytics.svg'
import SearchDollar from '@svg/searchDollar.svg'
import Idea from '@svg/idea.svg'
import ArrowTopRight from '@svg/arrowTopRight.svg'
import Computer from '@svg/computer.svg'
import Invoice2 from '@svg/invoice2.svg'
import Wallet from '@svg/wallet.svg'
import MazzeraLogo from '@svg/mazzeraLogo.svg'
import USXPLogo from '@svg/usxpLogo.svg'
import Tick from '@svg/tick.svg'

import Button from '@components/common/Button'
import Typography from '@components/common/Typography'
import Image from 'next/image'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import FooterTop from '@components/FooterTop'

function Solutions() {
  const tokens = [
    {
      icon: (
        <span className="w-8 h-8">
          <TokenCircle />
        </span>
      ),
      content: 'Custom token creation for internal use',
    },
    {
      icon: <AlphaCircle />,
      content: 'Ledger-based value representation',
    },
    {
      icon: <UserEdit />,
      content: 'Jurisdiction-controlled access by client profile',
    },
    {
      icon: <TransactionHistory />,
      content: 'Audit trails for mint/burn history',
    },
    {
      icon: <Blend2 />,
      content: 'Fully integrated into XPZ and SmartLedger',
    },
  ]
  const mapping = [
    {
      icon: <Agreement />,
      content: 'Jurisdictional permissions by user type',
    },
    {
      icon: <Flag />,
      content: 'API-based compliance checkpoints',
    },
    {
      icon: <DashboardCircle />,
      content: 'Live mint/burn dashboards for reconciliation',
    },
    {
      icon: <Audit />,
      content: 'Banking partner audit trace',
    },
    {
      icon: <Profile />,
      content: 'Custom rulesets for fintech or enterprise use',
    },
  ]

  const whyItMattersList = [
    'Compliant with financial regulations',
    'Zero open-market exposure',
    'Reduces token volatility concerns',
    'Real-time balance tracking via burn-to-settlement flow',
  ]

  const howItWorksList = [
    {
      icon: (
        <span className="w-8 h-8">
          <Exchange2 />
        </span>
      ),
      content: 'Conversion happens instantly via ledger movement',
    },
    {icon: <LogoutCircle />, content: 'No external exchange involved'},
    {icon: <Analytics />, content: 'Reflects real-world FX rates and balances'},
    {icon: <SearchDollar />, content: 'Fully traceable per user or transaction'},
  ]

  const builtForList = [
    'Tokenized merchant settlements',
    'LATAM <-> USD treasury bridges',
    'Pre-authorized KYC-approved flows',
  ]

  const integrations = [
    {
      logo: <XPZLogo />,
      icon: <Computer />,
      content: 'XPZ merchant platform',
    },
    {
      logo: <PXGLogo />,
      icon: <Invoice2 />,
      content: 'PXG back-office ERP or payout logic',
    },
    {
      logo: <MazzeraLogo />,
      icon: <Wallet />,
      content: 'Liquidity flows with Mazzera / Moonlight',
    },
    {
      logo: <USXPLogo />,
      icon: <TokenCircle />,
      content: 'White-label token or treasury integrations',
    },
  ]

  const ecosystem = [
    {
      content: 'Tokenized environments with XPZ and SmartLedger',
      logos: [<XPZLogo />, <SmartLedgerLogo />],
    },
    {
      content: 'Fiat banking bridges with PXG',
      logos: [<PXGLogo />],
    },
    {
      content: 'Blockchain infrastructure built and maintained by GKS Solutions',
      logos: [<GKSSolutionsLogo />],
    },
    {
      content: 'Liquidity and FX rails operated through Mazzera and Moonlight',
      logos: [<MazzeraLogo />, <MoonlightLogo />],
    },
    {
      content: 'No outside swaps, exchanges, or public tokens',
      logos: [<CoinSwap />],
    },
  ]

  return (
    <div className="flex flex-col gap-32 items-center">
      {/* Top */}
      <div className="rounded-3xl w-full">
        <div className="bg-[url('/images/solutions-top.webp')] bg-center bg-cover w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center relative">
          <div className="flex justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-8 sm:px-12 md:px-20 w-full lg:px-36">
            <div className="flex flex-col gap-12 z-1">
              <div className="flex flex-col gap-6 z-1">
                <Typography size="xxl" className="max-w-[600px]">
                  Infrastructure built for real-world tokenization & treasury control
                </Typography>

                <Typography size="md2" className="max-w-[500px]">
                  Our proprietary infrastructure unifies tokenized and banking payments in a single global ecosystem,
                  delivering the speed, security, and scalability your business needs.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button variant="primary" className="min-w-fit" icon={<BardLine />}>
                  Get Started
                </Button>
                <Button variant="secondary" className="min-w-fit" icon={<VideoAiLine />}>
                  Schedule a Call
                </Button>
              </div>
            </div>
            <div className="hidden sm:block sm:max-w-[340px] sm:max-h-[420px] ">
              <Image src={LogosGroup} alt="Logos Group" width="340" height="420" />
            </div>
          </div>
        </div>
      </div>
      {/* Tokenized Asset Infrastructure */}
      <div className="flex flex-col w-full md:flex-row gap-6 overflow-hidden max-w-[1200px] relative">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-6 max-w-[600px]">
            <Typography size="xl" className="">
              Tokenized Asset Infrastructure
            </Typography>

            <Typography size="md2" className="max-w-[400px]">
              ThePayHub builds closed-loop, permissioned ecosystems where tokens represent real value used strictly
              within a controlled environment.
            </Typography>
          </div>

          <div>
            <Typography size="lg">Key Capabilities:</Typography>
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto overflow-auto w-full md:w-auto  md:grid grid-cols-2 lg:grid-cols-3 gap-2">
          <div></div>
          {tokens.map((token, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 min-w-[250px] md:min-w-auto max-w-[250px] h-[250px] justify-between rounded-lg p-6 ${
                index % 2 === 0 ? 'bg-soft-200' : 'bg-soft-100'
              }`}>
              {token.icon}
              <Typography size="md" className="text-white">
                {token.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Burn & Top-up Logic */}
      <div className="flex flex-col gap-20 w-full max-w-[1200px] relative">
        <RadialGradientBlur />

        <TopFrame
          title={'Burn & Top-up Logic'}
          description={
            "The foundation of how ThePayHub settles token transactions. Instead of 'exchanging,' tokens are burned, and clients are topped up in fiat or credited value via our banking infrastructure."
          }
          image={<Image src={Flame} alt="Flame" width="180" height="180" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  ">
          {/* Where is it used? */}
          <div className="rounded-3xl flex flex-col gap-6 p-8 bg-soft-100 ">
            <Typography size="lg">Where is it used?</Typography>
            <div className="py-6 flex flex-col gap-4">
              {/* XPZ */}
              <div className="flex items-center  gap-0.5">
                <span className="min-w-[72px] min-h-[72px]">
                  <XPZLogo />
                </span>
                <span className="w-[50px]">
                  <Connector />
                </span>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center bg-soft-200 p-3 rounded-lg grow-1">
                  <span className="rounded-full bg-soft-100 flex items-center justify-center w-12 h-12">
                    <Payment />
                  </span>
                  <Typography size="md3">Merchant payouts</Typography>
                </div>
              </div>
              {/* PXG */}
              <div className="flex items-center  gap-0.5">
                <span className="min-w-[72px] min-h-[72px]">
                  <PXGLogo />
                </span>
                <span className="w-[50px]">
                  <Connector />
                </span>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center bg-soft-200 p-3 rounded-lg grow-1">
                  <span className="rounded-full bg-soft-100 flex items-center justify-center w-12 h-12">
                    <Download />
                  </span>
                  <Typography size="md3">Institutional settlements</Typography>
                </div>
              </div>
              {/* Smart Ledger */}
              <div className="flex items-center  gap-0.5">
                <span className="min-w-[72px] min-h-[72px]">
                  <SmartLedgerLogo />
                </span>
                <span className="w-[50px]">
                  <Connector />
                </span>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center bg-soft-200 p-3 rounded-lg grow-1">
                  <span className="rounded-full bg-soft-100 flex items-center justify-center w-12 h-12">
                    <Vision />
                  </span>
                  <Typography size="md3">Treasury visibility</Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Why it matters? */}
          <div className="rounded-3xl flex flex-col gap-6 p-8 bg-soft-100 ">
            <Typography size="lg">Why it matters?</Typography>
            <ul className="py-6 flex flex-col gap-5">
              {whyItMattersList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary-400">
                    <CheckCircular />
                  </span>
                  <Typography size="md3">{item}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Burn & Top-up Logic */}
      <div className="flex flex-col gap-20 w-full max-w-[1200px] relative">
        <RadialGradientBlur />

        <TopFrame
          title={'Internal Ledger Conversion'}
          description={
            'Clients on XPZ can convert between different tokens (e.g., BRXP ↔ USXP) via a permissioned ledger interface — powered by internal swap mechanisms.'
          }
          image={<Image src={Recycle} alt="Recycle" width="180" height="180" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  ">
          {/* How it works (simplified) */}
          <div className="rounded-3xl flex flex-col gap-6 p-8 bg-soft-100 ">
            <Typography size="lg">How it works (simplified)</Typography>
            <div className="py-6 flex flex-col gap-4">
              {howItWorksList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-2 sm:items-center bg-soft-200 p-3 rounded-lg grow-1">
                  <span className="rounded-full bg-soft-100 flex items-center justify-center w-12 h-12">
                    {item.icon}
                  </span>
                  <Typography size="md3">{item.content}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Built for */}
          <div className="rounded-3xl flex flex-col gap-6 p-8 bg-soft-100 ">
            <Typography size="lg">Built for</Typography>
            <ul className="py-6 flex flex-col gap-5">
              {builtForList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary-400">
                    <CheckCircular />
                  </span>
                  <Typography size="md3">{item}</Typography>
                </li>
              ))}
            </ul>
            <div className="bg-soft-200 rounded-xl p-6 flex gap-5">
              <span className="min-w-8 min-h-8">
                <Idea />
              </span>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gp-2">
                  <Typography size="md3">For more in-depth information</Typography>
                  <Typography size="md2">
                    Our examples simplify the real processes. If you want to learn more about our full process, feel
                    free to reach out.
                  </Typography>
                </div>
                <div className="w-full sm:w-fit">
                  <Button variant="primary" className="min-w-fit" postIcon={<ArrowTopRight />}>
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Treasury Mapping */}
      <div className="flex flex-col w-full md:flex-row gap-6 overflow-hidden max-w-[1200px] relative">
        <div className="flex flex-col gap-6">
          <Typography size="xl" className="max-w-[600px]">
            Compliance & Treasury Mapping
          </Typography>

          <Typography size="md2" className="max-w-[400px]">
            KYC, AML, and treasury logic are embedded into all ThePayHub flows to meet internal risk and partner
            requirements.
          </Typography>
        </div>

        <div className="flex flex-nowrap overflow-x-auto overflow-auto w-full md:w-auto  md:grid grid-cols-2 lg:grid-cols-3 gap-2">
          <div></div>
          {mapping.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 min-w-[250px] md:min-w-auto max-w-[250px] h-[250px] justify-between rounded-lg p-6 ${
                index % 2 === 0 ? 'bg-soft-200' : 'bg-soft-100'
              }`}>
              <div
                className={`bg-soft-100 rounded-full flex items-center justify-center w-12 h-12 ${
                  index % 2 === 0 ? 'bg-soft-100' : 'bg-soft-200'
                }`}>
                {item.icon}
              </div>
              <Typography size="md" className="text-white">
                {item.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* API & System Integration */}
      <div className="flex flex-col gap-20 w-full max-w-[1200px] relative">
        <RadialGradientBlur inset={10} />
        <TopFrame
          title={'API & System Integration'}
          description={
            "A unified API layer connects ThePayHub's infrastructure to client platforms, partners, and fintech tools."
          }
          image={<Image src={Code} alt="Code" width="180" height="180" />}
        />
        <div className="flex flex-col gap-6">
          <Typography size="lg" className="max-w-[600px]">
            Integration uses
          </Typography>

          <Typography size="md2" className="max-w-[400px]">
            A unified API layer connects ThePayHub's infrastructure to client platforms, partners, and fintech tools.
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {integrations.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 rounded-lg p-6 bg-soft-200">
                <div className="flex justify-between gap-2">
                  <span className="w-[72px] h-[72px]">{item.logo}</span>
                  <span className="rounded-full bg-soft-100 flex items-center justify-center w-12 h-12">
                    {item.icon}
                  </span>
                </div>
                <Typography size="md3" className="text-white">
                  {item.content}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[url('/images/line-waves.webp')] bg-center bg-cover w-full min-h-[141px] h-fit flex flex-col sm:flex-row justify-between sm:items-center py-12 relative">
          <Typography size="lg2" className="flex items-center gap-2 ">
            <Tick className="text-white " />
            <span className="text-white">Developer ready</span>
          </Typography>
          <div className="flex flex-col flex-wrap sm:flex-row gap-3 sm:gap-12 ">
            {['RESTful API', 'Tiered access by platform', 'Real-time event hooks'].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary-400 w-8 h-8 flex items-center justify-center">
                  <CheckCircular />
                </span>
                <Typography size="md" className="text-white">
                  {text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closed-Loop Ecosystem Framework */}
      <div className="flex flex-col gap-20 w-full max-w-[1200px] relative">
        <RadialGradientBlur />
        <TopFrame
          title={'Closed-Loop Ecosystem Framework'}
          description={
            'All ThePayHub technology is built on a closed-loop model. This ensures internal liquidity, minimized compliance exposure, and transparent flows.'
          }
          image={<Image src={ShieldOutline} alt="ShieldOutline" width="180" height="180" />}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ecosystem.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between gap-8 rounded-lg p-6 border-dashed border border-sub-300">
              <Typography size="md3">{item.content}</Typography>
              <div className="flex gap-3">
                {item.logos.map((logo, index) => (
                  <span key={index} className="w-[56px] h-[56px]">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[url('/images/line-waves.webp')] bg-center bg-cover w-full min-h-[141px] h-fit flex flex-col sm:flex-row justify-between sm:items-center py-12 relative">
          <Typography size="lg2" className="flex items-center gap-2 ">
            <Tick className="text-white " />
            <span className="text-white">Benefits</span>
          </Typography>
          <div className="flex flex-col flex-wrap sm:flex-row gap-3 sm:gap-12 ">
            {[
              'Faster settlement times',
              'Greater control over funds',
              'Enhanced traceability for banks and regulators',
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary-400 w-8 h-8 flex items-center justify-center">
                  <CheckCircular />
                </span>
                <Typography size="md" className="text-white">
                  {text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterTop
        showLogos={false}
        title={'Custom Deployments'}
        description="We offer bespoke solutions for fintechs, banks, or enterprise platforms that need to launch their own token infrastructure or compliant treasury system."
        buttonText="Get in Touch"
      />
    </div>
  )
}

export default Solutions

interface TopFrameProps {
  title: string
  description: string
  image: React.ReactNode
}

const TopFrame = ({title, description, image}: TopFrameProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
      <div className="flex flex-col gap-6">
        <div className="block md:hidden w-[100px] h-[100px]">{image}</div>
        <Typography size="xl" className="max-w-[600px]">
          {title}
        </Typography>

        <Typography size="md2" className="max-w-[400px]">
          {description}
        </Typography>
      </div>
      <div className="hidden md:block w-[180px] h-[180px]">{image}</div>
    </div>
  )
}
