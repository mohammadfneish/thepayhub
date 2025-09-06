'use client'

import {useState, useEffect} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Logo from '@svg/logo.svg'
import Divider from './common/Divider'
import Button from './common/Button'

export default function Navigation() {
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const menuItems = [
    {href: '/', label: 'Home'},
    {href: '/products', label: 'Products'},
    {href: '/solutions', label: 'Solutions'},
    {href: '/industry', label: 'Industry'},
    {href: '/usxp', label: 'USXP'},
    {href: '/about', label: 'About GKS'},
    {href: '/news', label: 'News'},
    {href: '/faq', label: 'FAQ'},
    {href: '/contact', label: 'Contact'},
  ]

  return (
    <nav className={`fixed top-10 left-1/2 transform -translate-1/2 w-full max-w-[1512px] z-[99999] `}>
      <div
        className={`w-full transition-colors duration-300 bg-soft-100 rounded-full p-3 ${
          scrolled ? 'opacity-95' : ''
        }`}>
        <div className={`max-w-[1512px] mx-auto`}>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <div className="">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-primary-400 transition-colors duration-200">
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>

            <Link href="/" className="mx-auto font-medium text-2xl flex items-center gap-3">
              <Logo />
              ThePayHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href="/" className="mx-auto font-medium text-2xl flex items-center gap-3">
              <Logo />
              ThePayHub
            </Link>
            <div className="flex justify-around flex-1 ">
              <div className="flex items-center gap-4 !text-sm">
                <div className="flex  shadow-md items-center gap-4  ">
                  {menuItems.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-sub-600 hover:text-primary-400 font-medium ${
                        pathname === item.href ? 'text-white' : ''
                      }`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
                <Link href='/login'><Button variant='plain' className='text-sub-600 !text-sm'>Login</Button></Link>
                <Link href='/login'><Button variant='primary' className='!text-sm'>Register</Button></Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`mobile-menu fixed -top-10 left-0 w-[300px] z-[999999] overflow-y-auto bg-soft-100`}
              style={{height: 'calc(100vh + 40px)'}}>
              <div className="mt-[20px] flex flex-col space-y-4 p-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ml-auto hover:text-primary-400 transition-colors duration-200">
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
                <div className="flex items-center justify-center font-medium text-2xl gap-3">
                  <Logo />
                  ThePayHub
                </div>
                {menuItems.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block py-2 px-4 nav-link text-sub-600 hover:text-primary-400 transition-colors duration-200`}
                    onClick={() => setIsMenuOpen(false)}>
                    <span className={`mobile-menu-item ${pathname === item.href ? 'text-white' : ''}`}>
                      {item.label}
                    </span>
                  </Link>
                ))}
                <Divider />
                <Link
                  href={'/login'}
                  className={`block py-2 px-4 nav-link text-sub-600 hover:text-primary-400 transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}>
                  <span className={`mobile-menu-item ${pathname === '/login' ? 'text-white' : ''}`}>Login</span>
                </Link>
                <Link href='/login'><Button variant='primary' className='w-full'>Register</Button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
