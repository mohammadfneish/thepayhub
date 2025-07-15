import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import MostQuestions from '../components/pages/faq/MostQuestions'
import StillHaveQuestions from '../components/pages/faq/StillHaveQuestions'
import TopPage from '../components/pages/faq/TopPage'

export default function FAQ() {
  return (
    <div className="min-h-screen bg-linear-to-b from-primary-500 to-primary-400 ">
      <Navigation />
      <div
        className="min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/faq/lines.webp?v=1)',
        }}>
        <TopPage />
        <MostQuestions />
        <StillHaveQuestions />
      </div>
      <Footer />
    </div>
  )
}
