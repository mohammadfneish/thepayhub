import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopPage from '../components/pages/usxp/TopPage'

export default function usxp() {
  return (
    <div className="min-h-screen bg-linear-to-b from-primary-500 to-primary-400 ">
      <Navigation />
      <div
        className="min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/usxp/lines.webp?v=3)',
        }}>
        <TopPage />
      </div>
      <Footer />
    </div>
  )
}
