import './globals.css'
import type {Metadata} from 'next'
import NextTopLoader from 'nextjs-toploader'
import {Toaster} from 'react-hot-toast'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'

export const themeColor = '#2A4D81'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'ThePayHub',
  description: 'Your Gateway to smarter B2B Payments',
  keywords: 'crypto, payment, online payment, credit card, pay, payhub, thepayhub',
  creator: 'ThePayHub Tech Team',
  publisher: 'ThePayHub',
  icons: [
    {rel: 'icon', url: '/favicon.ico'},
  ],
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="text-white bg-black">
        <NextTopLoader height={4} color="#fff" />
        <Toaster position="top-right" reverseOrder={true} />
          <Navigation />
        <div className="min-h-screen max-w-[1512px] mx-auto overflow-hidden">
          <div className="px-3 ">{children}</div>
        </div>
          <Footer />
      </body>
    </html>
  )
}
