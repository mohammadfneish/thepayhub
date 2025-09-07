'use client'

import Logo from '@svg/logo.svg'
import Menu3Lines from '@svg/menu3Lines.svg'
import HomeLine from '@svg/homeLine.svg'
import BoxLine from '@svg/boxLine.svg'
import PuzzleLine from '@svg/puzzleLine.svg'
import BriefcaseLine from '@svg/briefcaseLine.svg'
import InformationLine from '@svg/informationLine.svg'
import NewspaperLine from '@svg/newspaperLine.svg'
import QuestionLine from '@svg/questionLine.svg'
import QuestionAnswerLine from '@svg/questionAnswerLine.svg'
import ArrowDownLine from '@svg/arrowDownLine.svg'

import XPZLogo from '@svg/xpzLogo.svg'
import PXGLogo from '@svg/pxgLogo.svg'
import SmartLedgerLogo from '@svg/smartLedgerLogo.svg'

import TokenCircle from '@svg/tokenCircle.svg'
import Fire from '@svg/fire.svg'
import Exchange2 from '@svg/exchange2.svg'
import Safe from '@svg/safe.svg'
import Api from '@svg/api2.svg'
import Orbit from '@svg/orbit.svg'
import Briefcase from '@svg/briefcase.svg'
import Bank from '@svg/bank.svg'

import {useState, useEffect} from 'react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Divider from './common/Divider'
import Button from './common/Button'
import Typography from './common/Typography'

interface MenuItemProps {
  item: MenuItem
  selectedItem: MenuItem | null
  setSelectedItem: (item: MenuItem | null) => void
  setIsMenuOpen: (b: boolean) => void
}

interface MenuItem {
  icon: React.ReactNode
  href: string
  label: string
  items?: MenuItemSub[]
  navigation?: MenuItemNav[]
}

interface MenuItemNav {
  title: string
  href: string
}

interface MenuItemSub {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Navigation() {
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = (e: Event) => {
      let target = e.target as HTMLElement
      if (
        (!target.classList.contains('mobile-menu') && !target.closest('div.mobile-menu')) ||
        target.classList.contains('mobile-menu-item') ||
        target.closest('div.mobile-menu-item')
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [isMenuOpen])

  const menuItems: MenuItem[] = [
    {icon: <HomeLine />, href: '/', label: 'Home'},
    {
      icon: <BoxLine />,
      href: '/products',
      label: 'Products',
      items: [
        {
          icon: (
            <span className="min-w-12 min-h-12">
              <XPZLogo />
            </span>
          ),
          title: 'XPayZ',
          description: 'Tokenized payment platform',
        },
        {
          icon: (
            <span className="min-w-12 min-h-12">
              <PXGLogo />
            </span>
          ),
          title: 'PayXG',
          description: 'Traditional Banking Infrastructure',
        },
        {
          icon: (
            <span className="min-w-12 min-h-12">
              <SmartLedgerLogo />
            </span>
          ),
          title: 'Smart Ledger',
          description: 'Coming soon...',
        },
      ],
      navigation: [
        {
          title: 'View Products',
          href: '/products',
        },
        {
          title: 'Go to XPZ Website',
          href: '#',
        },
        {
          title: 'Go to PXG Website',
          href: '#',
        },
      ],
    },
    {
      icon: <PuzzleLine />,
      href: '/solutions',
      label: 'Solutions',
      items: [
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <TokenCircle />
            </span>
          ),
          title: 'Tokenized Asset Infrastructure',
          description: 'Closed-loop ecosystems where tokens carry real value.',
        },
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Fire />
            </span>
          ),
          title: 'Burn & Top-up Logic',
          description: 'Tokens are burned while clients are credited in fiat through our banking infrastructure.',
        },
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Exchange2 />
            </span>
          ),
          title: 'Internal Ledger Conversion',
          description: 'Clients swap tokens securely through a permissioned internal ledger.',
        },
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Safe />
            </span>
          ),
          title: 'Compliance & Treasury Mapping',
          description: 'KYC, AML, and treasury controls are embedded across all flows.',
        },
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Api />
            </span>
          ),
          title: 'API & System Integration',
          description: 'A unified API layer links ThePayHub to client platforms and partners.',
        },
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Orbit />
            </span>
          ),
          title: 'Closed-Loop Ecosystem Framework',
          description: 'Built on a closed-loop model ensuring liquidity, compliance, and transparency.',
        },
      ],
      navigation: [
        {
          title: 'View Solutions',
          href: '/solutions',
        },
      ],
    },
    {
      icon: <BriefcaseLine />,
      href: '/industry',
      label: 'Industry',
      items: [
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Briefcase />
            </span>
          ),
          title: 'Industries We Support',
          description: 'Tokenized payment platform',
        },
        {
          icon: (
            <span className="min-w-[21.5px] min-h-[21.5px]">
              <Bank />
            </span>
          ),
          title: 'The Engine Behind Fintech',
          description: 'Tokenized payment platform',
        },
      ],
      navigation: [
        {
          title: 'View Industry',
          href: '/industry',
        },
        {
          title: 'Contact',
          href: '/contact',
        },
      ],
    },
    {icon: <BriefcaseLine />, href: '/usxp', label: 'USXP'},
    {icon: <InformationLine />, href: '/about', label: 'About GKS'},
    {icon: <NewspaperLine />, href: '/news', label: 'News'},
    {icon: <QuestionLine />, href: '/faq', label: 'FAQ'},
    {icon: <QuestionAnswerLine />, href: '/contact', label: 'Contact'},
  ]

  return (
    <nav className={`fixed top-2 left-6 right-6 lg:left-0 lg:right-0 max-w-[1512px] z-[99999] `}>
      <div
        className={`w-full transition-colors duration-300 bg-soft-100 rounded-full p-3 ${
          scrolled ? 'opacity-95' : ''
        }`}>
        <div className={`max-w-[1512px] mx-auto`}>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Link href="/" className=" mr-auto font-medium text-2xl flex items-center gap-3">
              <Logo />
              ThePayHub
            </Link>
            <div className="">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-primary-400 transition-colors duration-500">
                <span className="h-10 w-10 bg-primary-400 rounded-full flex items-center text-soft-100 justify-center">
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Menu3Lines />}
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href="/" className="mx-auto font-medium text-2xl flex items-center gap-3">
              <Logo />
              ThePayHub
            </Link>
            <div className="flex justify-around flex-1 ">
              <div className="flex items-center gap-4 !text-sm">
                <div className="flex  items-center gap-4  ">
                  {menuItems.map((item, index) => (
                    <MenuItemDesktop
                      key={index}
                      item={item}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Link href="/login">
              <Button variant="plain" className="text-sub-600 !text-sm">
                Login
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="primary" className="!text-sm">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`mobile-menu fixed top-20 left-6 right-6 rounded-3xl z-[999999] overflow-y-auto bg-soft-100`}
              style={{maxHeight: 'calc(100vh - 88px)'}}>
              <div className="flex flex-col space-y-4 p-4">
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                ))}
                <Divider />
                <Link
                  href={'/login'}
                  className={`block py-2 px-4 nav-link text-sub-600 hover:text-primary-400 transition-colors duration-500`}
                  onClick={() => setIsMenuOpen(false)}>
                  <span className={`mobile-menu-item ${pathname === '/login' ? 'text-white' : ''}`}>Login</span>
                </Link>
                <Link href="/login">
                  <Button variant="primary" className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

const MenuItemDesktop = ({item, selectedItem, setSelectedItem, setIsMenuOpen}: MenuItemProps) => {
  const pathname = usePathname()
  if (!item?.items?.length) {
    return (
      <Link
        key={item.label}
        href={item.href}
        className={`block ${
          pathname === item.href ? 'text-white' : ''
        } rounded-full nav-link text-sub-600 hover:text-primary-400 w-fit transition-colors duration-500`}
        onClick={() => setIsMenuOpen(false)}>
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className={`flex flex-col gap-7 text-sub-600 w-fit rounded-3xl transition-colors duration-500 relative
        ${pathname === item.href ? 'text-white' : ''}`}>
      <div
        onClick={() => setSelectedItem(selectedItem?.href === item.href ? null : item)}
        className="flex items-center justify-between gap-1 cursor-pointer hover:text-primary-400 ">
        {item.label}
        <span className={`transition-all duration-500 ${selectedItem?.href === item.href ? 'rotate-180 ' : ''}`}>
          <ArrowDownLine />
        </span>
      </div>
      {selectedItem?.href === item.href && (
        <div className={`absolute flex bg-soft-200 top-16 left-14 transform -translate-x-1/2 rounded-2xl ${item?.items?.length > 4 ? 'min-w-[700px]' : 'min-w-[340px]'}  p-1 w-full`}>
          <div className='absolute -top-2 left-1/2 transform -translate-x-full w-5 h-5 bg-soft-200 rotate-45'></div>
          <div className="flex flex-col w-full">
            <div className={`py-5 px-6 grid ${item?.items?.length > 4 ? 'grid-cols-2' : 'grid-cols-1 '} gap-4`}>
              {item?.items?.map((subItem: any, index: number) => (
                <div key={index} className="flex gap-2">
                  {subItem.icon}
                  <div className="flex flex-col gap-0.5">
                    <Typography size="md3">{subItem.title}</Typography>
                    <Typography size="xs" className="text-sub-600!">
                      {subItem.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 bg-soft-300 p-6 rounded-2xl w-full">
              {item?.navigation?.map((nav: any, index: number) => (
                <Link key={index} href={nav.href} className="flex items-center gap-1">
                  <Typography size="sm" className="text-sub-600!">
                    {nav.title}
                  </Typography>
                  <span className="-rotate-90">
                    <ArrowDownLine />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const MenuItem = ({item, selectedItem, setSelectedItem, setIsMenuOpen}: MenuItemProps) => {
  const pathname = usePathname()
  if (!item?.items?.length) {
    return (
      <Link
        key={item.label}
        href={item.href}
        className={`block py-3.5 px-4 ${
          pathname === item.href ? 'bg-soft-200' : ''
        } rounded-full w-full nav-link text-sub-600 hover:text-primary-400 transition-colors duration-500`}
        onClick={() => setIsMenuOpen(false)}>
        <div className={`flex items-center gap-1 `}>
          {item.icon}
          {item.label}
        </div>
      </Link>
    )
  }

  return (
    <div
      className={`flex flex-col gap-7 py-3.5 px-4 w-full nav-link text-sub-600 rounded-3xl transition-colors duration-500 
        ${pathname === item.href ? 'bg-soft-200' : ''} ${
        selectedItem?.href === item.href ? 'border border-soft-200' : ''
      } `}>
      <div
        onClick={() => setSelectedItem(selectedItem?.href === item.href ? null : item)}
        className="flex items-center justify-between gap-1 cursor-pointer hover:text-primary-400 ">
        <div className={`flex items-center gap-1 `}>
          {item.icon}
          {item.label}
        </div>
        <span className={`transition-all duration-500 ${selectedItem?.href === item.href ? 'rotate-180 ' : ''}`}>
          <ArrowDownLine />
        </span>
      </div>
      {selectedItem?.href === item.href && (
        <div className="flex flex-col gap-5">
          {item?.items?.map((subItem: any, index: number) => (
            <div key={index} className="flex gap-2">
              {subItem.icon}
              <div className="flex flex-col gap-0.5">
                <Typography size="md3">{subItem.title}</Typography>
                <Typography size="xs" className="text-sub-600!">
                  {subItem.description}
                </Typography>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2.5 bg-soft-200 py-3.5 px-4 rounded-lg w-full">
            {item?.navigation?.map((nav: any, index: number) => (
              <Link key={index} href={nav.href} className="flex items-center gap-1">
                <Typography size="sm" className="text-sub-600!">
                  {nav.title}
                </Typography>
                <span className="-rotate-90">
                  <ArrowDownLine />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
