import './globals.css'
import type {Metadata} from 'next'
import NextTopLoader from 'nextjs-toploader'
import {Toaster} from 'react-hot-toast'

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
    {rel: 'icon', url: '/icons/favicon.ico'},
    {rel: 'apple-touch-icon', url: '/icons/apple-icon.png'},
  ],
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="text-white bg-linear-to-b from-primary-500 to-primary-400">
        <NextTopLoader height={4} color="#fff" />
        <Toaster position="top-right" reverseOrder={true} />
        {children}
      </body>
    </html>
  )
}
