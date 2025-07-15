import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import OurTeams from '../components/pages/careers/OurTeams'
import TopPage from '../components/pages/careers/TopPage'
import WhyJoinUs from '../components/pages/careers/WhyJoinUs'
import BuildingTogether from '../components/pages/careers/BuildingTogether'
import LifeAtUs from '../components/pages/careers/LifeAtUs'
import OpenPositions from '../components/pages/careers/OpenPositions'
import RightPosition from '../components/pages/careers/RightPosition'

export default function Careers() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        className="pt-20 min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/careers/lines.webp?v=1)',
        }}>
        <TopPage />
        <WhyJoinUs />
        <OurTeams />
        <BuildingTogether />
        <LifeAtUs />
        <OpenPositions />
        <RightPosition />
      </div>
      <Footer />
    </div>
  )
}
