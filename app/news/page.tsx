import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopPage from '../components/pages/news/TopPage'
import LatestNews from '../components/pages/news/LatestNews'
import PressReleases from '../components/pages/news/PressReleases'

export default function News() {
  return (
    <div className="min-h-screen bg-linear-to-b from-primary-500 to-primary-400 ">
      <Navigation />
      <div
        className="min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/news/lines.webp?v=1)',
        }}>
        <TopPage />
        <LatestNews />
        <PressReleases />
      </div>
      <Footer />
    </div>
  )
}
