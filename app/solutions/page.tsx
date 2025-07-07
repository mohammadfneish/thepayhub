import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import OurCorePlatform from '../components/pages/solutions/OurCorePlatform'
import TopPage from '../components/pages/solutions/TopPage'

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 min-h-[calc(100vh-200px)]overflow-hidden">
        <TopPage />
        <OurCorePlatform />
      </div>
      <Footer />
    </div>
  )
}
