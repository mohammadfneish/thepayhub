import FooterLogo from '@svg/footerLogo.svg'
import Facebook from '@svg/facebook.svg'
import Twitter from '@svg/twitter.svg'
import LinkedIn from '@svg/linkedIn.svg'
import Instagram from '@svg/instagram.svg'
import Link from 'next/link'

export default function Footer() {
  const icons = [
    {
      icon: <Facebook />,
      link: '#',
    },
    {
      icon: <Twitter />,
      link: '#',
    },
    {
      icon: <LinkedIn />,
      link: '#',
    },
    {
      icon: <Instagram />,
      link: '#',
    },
  ]

  const links = [
    {
      title: 'Navigation',
      items: [
        {
          name: 'Home',
          href: '#',
        },
        {
          name: 'Solutions',
          href: '#',
        },
        {
          name: 'About Us',
          href: '#',
        },
        {
          name: 'News',
          href: '#',
        },
        {
          name: 'FAQ',
          href: '#',
        },
        {
          name: 'Contact',
          href: '#',
        },
      ],
    },
    {
      title: 'Services',
      items: [
        {
          name: 'XPayz (XPZ)',
          href: '#',
        },
        {
          name: 'PayXGlobal (PXG)',
          href: '#',
        },
        {
          name: 'USXP',
          href: '#',
        },
        {
          name: 'GKS Solution',
          href: '#',
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

  return (
    <footer className="h-auto max-w-full flex justify-center py-20 px-10 bg-soft-100/60">
      <div className="flex flex-col md:flex-row gap-y-12 justify-between w-full max-w-[1200px]">
        <div className="flex flex-col gap-[30px]">
          <FooterLogo />
          <p className="max-w-[520px] text-base md:text-lg">
            Our innovative infrastructure is designed for contemporary B2B finance, seamlessly integrating tokenized
            payments with traditional banking systems into one cohesive global ecosystem.
          </p>
          <div className="flex gap-3">
            {icons.map((icon, index) => (
              <Link
                href={icon.link}
                key={index}
                className="flex justify-center items-center w-[34px] h-[34px] rounded-full bg-white">
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 md:gap-x-0 sm:grid grid-cols-2 lg:grid-cols-3 md:w-[572px] gap-y-8">
          {links.map((link, i) => (
            <div key={i} className="flex flex-col gap-6">
              <p className="font-medium text-2xl">{link.title}</p>
              <ul className='flex flex-col gap-3'>
                {link.items.map((item, j) => (
                  <li>
                    <Link href={item.href} className="text-sub-600 text-sm font-medium transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
