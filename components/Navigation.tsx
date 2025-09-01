'use client'

import {useState, useEffect} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

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
    {href: '/about', label: 'About GKS'},
    {href: '/solutions', label: 'Solutions'},
    {href: '/usxp', label: 'USXP'},
    {href: '/partners', label: 'Partners'},
  ]

  return (
    <nav className={`fixed w-full z-[99999] `}>
      <div
        className={`w-full transition-colors duration-300 px-4 py-6 md:py-10 lg:py-14 bg-background ${
          scrolled ? 'opacity-95' : ''
        }`}>
        <div className={`max-w-[1512px] mx-auto`}>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <div className="">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-primary-500 transition-colors duration-200">
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>

            <Link href="/" className="mx-auto">
              {/* <Logo /> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href="/">
              {/* <Logo /> */}
            </Link>
            <div className="flex justify-around flex-1">
              <div className="flex items-center gap-4 max-w-[830px] w-full">
                <div className="flex bg-white  shadow-md items-center gap-4 justify-evenly rounded-[30px] p-5 max-w-[700px] w-full ">
                  {menuItems.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`${
                        pathname === item.href
                          ? 'text-primary-400 hover:text-secondary-400 border-b border-primary-400 hover:border-secondary-400'
                          : 'hover:text-primary-400'
                      }`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/contact-us"
                  className={`bg-secondary-400 text-on-secondary relative flex flex-row flex-nowrap gap-2 items-center justify-center h-fit px-6 py-2.5 rounded-full font-medium text-sm sm:text-base ${
                    pathname === 'contact-us'
                      ? 'text-primary-400 hover:text-secondary-400 border-b border-primary-400 hover:border-secondary-400'
                      : 'hover:text-primary-400'
                  }`}>
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`mobile-menu fixed top-0 left-0 h-full w-[300px] z-[999999] bg-background`}>
              <div className="mt-[20px] flex flex-col space-y-4 p-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ml-auto hover:text-primary-500 transition-colors duration-200">
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
                <div className="flex items-center justify-center">
                  {/* <Logo /> */}
                </div>
                {menuItems.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block py-2 px-4 nav-link hover:text-primary-400 transition-colors duration-200`}
                    onClick={() => setIsMenuOpen(false)}>
                    <span
                      className={`mobile-menu-item ${
                        pathname === item.href
                          ? 'border-b text-primary-400 border-primary-400 hover:border-secondary-400'
                          : ''
                      }`}>
                      {item.label}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/contact-us"
                  className={`mobile-menu-item nav-link bg-secondary-400 text-on-secondary relative flex flex-row flex-nowrap gap-2 items-center justify-center h-fit px-6 py-2.5 rounded-full font-medium text-sm sm:text-base ${
                    pathname === 'contact-us'
                      ? 'text-primary-400 hover:text-secondary-400 border-b border-primary-400 hover:border-secondary-400'
                      : 'hover:text-primary-400'
                  }`}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
