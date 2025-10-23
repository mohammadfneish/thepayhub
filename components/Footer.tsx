'use client'

import FooterLogo from '@svg/footerLogo.svg'
import Facebook from '@svg/facebook.svg'
import Twitter from '@svg/twitter.svg'
import LinkedIn from '@svg/linkedIn.svg'
import Instagram from '@svg/instagram.svg'
import Link from 'next/link'
import Typography from './common/Typography'
import {useState} from 'react'
import DocsDialog from './common/DocsDialog'

export default function Footer() {
  const icons = [
    {
      icon: <Facebook />,
      link: 'https://facebook.com',
    },
    {
      icon: <Twitter />,
      link: 'https://twitter.com',
    },
    {
      icon: <LinkedIn />,
      link: 'https://linkedin.com',
    },
    {
      icon: <Instagram />,
      link: 'https://instagram.com',
    },
  ]

  const links = [
    {
      title: 'Navigation',
      items: [
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'Solutions',
          href: '/solutions',
        },
        {
          name: 'About Us',
          href: '/about',
        },
        {
          name: 'News',
          href: '/news',
        },
        {
          name: 'FAQ',
          href: '/faq',
        },
        {
          name: 'Contact',
          href: '/contact',
        },
      ],
    },
    {
      title: 'Services',
      items: [
        {
          name: 'XPayz (XPZ)',
          href: '/products#xpz',
        },
        {
          name: 'PayXGlobal (PXG)',
          href: '/products#pxg',
        },
        {
          name: 'Smart Ledger (SML)',
          href: '/products#sml',
        },
        {
          name: 'USXP',
          href: '/usxp',
        },
        {
          name: 'GKS Solution',
          href: '/about',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          name: 'Documentation',
          href: '#',
        },
        {
          name: 'API',
          href: '#',
        },
        {
          name: 'Support',
          href: '#',
        },
        {
          name: 'Blog',
          href: '#',
        },
      ],
    },
  ]

  const [showDocDialog, setShowDocDialog] = useState(false)
  const docs = [
    {
      title: 'ThePayHub Patent Ecosystem',
      url: '/docs/spec.pdf',
    },
    {
      title: 'TPH Patent filing number',
      url: '/docs/n417.pdf',
    },
  ]

  return (
    <footer className="h-auto max-w-full flex flex-col gap-4 py-4  px-10 bg-soft-100/60">
      <div className="flex justify-center py-16">
        <div className="flex flex-col md:flex-row gap-8 gap-y-12 justify-between w-full max-w-[1200px]">
          <div className="flex flex-col gap-[30px]">
            <FooterLogo />
            <p className="max-w-[520px] text-base md:text-lg">
              Our innovative infrastructure is designed for contemporary B2B finance, seamlessly integrating tokenized
              payments with traditional banking systems into one cohesive global ecosystem.
            </p>
            {/* <div className="flex gap-3">
              {icons.map((icon, index) => (
                <Link
                  href={icon.link}
                  key={index}
                  className="flex justify-center items-center w-[34px] h-[34px] rounded-full bg-white">
                  {icon.icon}
                </Link>
              ))}
            </div> */}
          </div>

          <div className="flex flex-wrap gap-x-8 md:gap-x-0 sm:grid grid-cols-2 lg:grid-cols-3 md:w-[572px] gap-y-8">
            {links.map((link, i) => (
              <div key={i} className="flex flex-col gap-6">
                <p className="font-medium text-2xl">{link.title}</p>
                <ul className="flex flex-col gap-3">
                  {link.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        className="text-sub-600 text-sm font-medium transition-colors hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-end">
        <Typography size="sm" className="text-end text-sub-600">
          &copy; {new Date().getFullYear()} ThePayHub. All rights reserved.
        </Typography>
        <div onClick={() => setShowDocDialog(true)} className="underline cursor-pointer text-sm text-primary-400">
          Patent pending
        </div>
      </div>
      {/* Docs Dialog */}
      <DocsDialog open={showDocDialog} onClose={() => setShowDocDialog(false)} docs={docs} />
    </footer>
  )
}
