import './globals.css'
import type {Metadata} from 'next'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'ThePayHub',
  description: 'Your Gateway to smarter B2B Payments',
  keywords: 'crypto, payment, online payment, credit card, pay, payhub, thepayhub',
  themeColor: '#2A4D81',
  viewport: {width: 'device-width', initialScale: 1},
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
      <body>
        <NextTopLoader height={4} color="#fff" />
        {children}
      </body>
    </html>
  )
}
