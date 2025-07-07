import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import JoinUs from '../components/pages/company/JoinUs'
import OurCoreValues from '../components/pages/company/OurCoreValues'
import OurFoundation from '../components/pages/company/OurFoundation'
import OurPartners from '../components/pages/company/OurPartners'
import TopPage from '../components/pages/company/TopPage'

export default function Company() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        className="pt-20 min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/company/lines.webp)',
        }}>
        <TopPage />
        <OurFoundation />
        <OurCoreValues />
        <OurPartners />
        <JoinUs />
      </div>
      <Footer />
    </div>
  )
}
