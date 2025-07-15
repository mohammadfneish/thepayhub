import Footer from './components/Footer'
import Navigation from './components/Navigation'
import TopPage from './components/pages/thehub/TopPage'
import HomeHubIntro from './components/pages/thehub/HomeHubIntro'
import PowerfulPayhub from './components/pages/thehub/PowerfulPayhub'
import BusinessesChoose from './components/pages/thehub/BusinessesChoose'
import HereOrThere from './components/pages/thehub/HereOrThere'
import TrustedCompanies from './components/pages/thehub/TrustedCompanies'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        className="pt-30 min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/home/lines.webp?v=1)',
        }}>
        <TopPage />
        <HomeHubIntro />
        <PowerfulPayhub />
        <BusinessesChoose />
        <HereOrThere />
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  )
}
