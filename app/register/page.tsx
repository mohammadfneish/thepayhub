import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopPage from '../components/pages/register/TopPage'
import CreateAccount from '../components/pages/register/CreateAccount'

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
        <CreateAccount />
      </div>
      <Footer />
    </div>
  )
}
