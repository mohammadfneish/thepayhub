import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import OurCorePlatform from '../components/pages/solutions/OurCorePlatform'
import RedureTaxes from '../components/pages/solutions/RedureTaxes'
import TailoredSolutions from '../components/pages/solutions/TailoredSolutions'
import ThePayHubFeatures from '../components/pages/solutions/ThePayHubFeatures'
import TopPage from '../components/pages/solutions/TopPage'
import TrustedCompanies from '../components/pages/solutions/TrustedCompanies'

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 min-h-[calc(100vh-200px)] overflow-hidden">
        <TopPage />
        <OurCorePlatform />
        <TailoredSolutions />
        <ThePayHubFeatures />
        <RedureTaxes />
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  )
}
