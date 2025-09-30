import RadialGradientBlur from '@components/common/RadialGradientBlur'
import Typography from '@components/common/Typography'
import ThePayHubLogo from '@svg/ThePayHubLogo.svg'
import UserCircle from '@svg/userCircle.svg'
import Blend from '@svg/blend.svg'
import DashboardSpeed from '@svg/dashboardSpeed.svg'
import Key from '@svg/key.svg'
import Database from '@svg/database.svg'
import AiVision from '@svg/aiVision.svg'
import Divider from '@components/common/Divider'
import CheckCircular from '@svg/checkCircular.svg'
import ErrorWarning from '@svg/errorWarning.svg'

interface DataValueProps {
  icon: React.ReactNode
  thePayHub: string
  others: string
}

interface DataProps {
  [key: string]: DataValueProps
}

function Versus() {
  const data: DataProps = {
    Onboarding: {
      icon: <UserCircle />,
      thePayHub: 'Single process for the entire ecosystem',
      others: 'Multiple KYC/KYB processes for each service',
    },
    'Technical Integration': {
      icon: <Blend />,
      thePayHub: 'One unified API',
      others: 'Multiple distinct APIs and interfaces',
    },
    'Settlement Speed': {
      icon: <DashboardSpeed />,
      thePayHub: '15-30 minutes',
      others: '2 - 5 business days',
    },
    'Token Support': {
      icon: <Key />,
      thePayHub: 'Native and fully integrated',
      others: 'Limited or via third parties',
    },
    'Infrastructure Control': {
      icon: <Database />,
      thePayHub: 'Proprietary end-to-end infrastructure',
      others: 'Dependency on multiple providers',
    },
    'Transaction Visibility': {
      icon: <AiVision />,
      thePayHub: 'Unified real-time view',
      others: 'Fragmented across platforms',
    },
  }
  return (
    <div className="flex flex-col gap-20 relative w-full">
      <RadialGradientBlur />
      <div className="flex flex-col gap-6">
        <Typography size="xl" className="text-center">
          ThePayHub Solutions VS Others
        </Typography>
        <Typography size="md" className="text-center">
          See how our ecosystem compares to fragmented alternatives
        </Typography>
      </div>
      <div className="hidden md:block">
        <Table data={data} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
        {Object.keys(data).map((key, index) => (
          <Card key={index} name={key} item={data[key]} />
        ))}
      </div>
    </div>
  )
}

export default Versus

const Table = ({data}: {data: DataProps}) => {
  return (
    <table className="rounded-4xl bg-soft-100 w-full z-10">
      <thead className="">
        <tr>
          <th className="px-6 pb-3 pt-9 text-sub-600 text-start font-medium">Feature</th>
          <th className="px-6 pb-3 pt-9  text-start">
            <div className="">
              <ThePayHubLogo className="w-[143px] h-[26px]" />
            </div>
          </th>
          <th className="px-6 pb-3 pt-9 text-sub-600 text-start font-medium ">Traditional Solution</th>
        </tr>
      </thead>
      <tbody className="pb-6">
        {Object.keys(data).map((key, index) => (
          <tr key={key}>
            <td
              className={`px-6 py-3 border-t ${Object.keys(data)?.length - 1 == index ? 'pb-9' : ''} border-soft-300`}>
              <Typography size="sm" className="flex gap-3 ">
                {data[key].icon} {key}
              </Typography>
            </td>
            <td
              className={`px-6 py-3 border-t ${Object.keys(data)?.length - 1 == index ? 'pb-9' : ''} border-soft-300`}>
              <Typography size="sm">{data[key].thePayHub}</Typography>
            </td>
            <td
              className={`px-6 py-3 border-t ${Object.keys(data)?.length - 1 == index ? 'pb-9' : ''} border-soft-300`}>
              <Typography size="sm">{data[key].others}</Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Card = ({name, item}: {name: string; item: DataValueProps}) => {
  return (
    <div className="flex flex-col rounded-2xl bg-soft-100 w-full z-10">
      <div className="flex items-center gap-3 py-3 px-4 md:px-6 ">
        {item.icon}
        <Typography size="sm">{name}</Typography>
      </div>

      <Divider />

      <div className="flex flex-col gap-4 py-3 px-4 md:px-6 ">
        <span className="w-[111px] h-5">
          <ThePayHubLogo />
        </span>
        <div className="flex items-center gap-3 ">
          <CheckCircular className="text-primary-400" />
          <Typography size="sm">{item.thePayHub}</Typography>
        </div>
      </div>

      <Divider />
      <div className="flex flex-col gap-3 py-3 px-4 md:px-6 ">
        <Typography size="sm">Others</Typography>
        <div className="flex items-center gap-3">
          <ErrorWarning className="text-sub-600" />
          <Typography size="sm">{item.others}</Typography>
        </div>
      </div>
    </div>
  )
}
