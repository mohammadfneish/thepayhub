import Footer from './components/Footer'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 h-[calc(100vh-200px)]"></div>
      <Footer />
    </div>
  )
}
