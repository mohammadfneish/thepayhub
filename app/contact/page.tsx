import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopPage from '../components/pages/contact/TopPage'
import ContactUs from '../components/pages/contact/ContactUs'
import OurOffices from '../components/pages/contact/OurOffices'
import NeedTechSupport from '../components/pages/contact/NeedTechSupport'

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-600">
      <Navigation />
      <div
        className="min-h-[calc(100vh-200px)] bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/images/contact-lines.webp)',
        }}>
        <TopPage />
        <ContactUs />
        <OurOffices />
        <NeedTechSupport />
      </div>
      <Footer />
    </div>
  )
}
