'use client'

import {useState, useEffect} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Listen for scroll events to update background
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scrollY threshold (e.g., 50px)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {href: '/', label: 'The Hub'},
    {href: '/solutions', label: 'Solutions of Business'},
    {href: '/company', label: 'The Company'},
    {href: '/careers', label: 'Careers'},
    {href: '/news', label: 'News'},
    {href: '/faq', label: 'FAQ'},
    {href: '/contact', label: 'Contact'},
  ]

  return (
    <nav className={`fixed w-full shadow-lg z-50 transition-colors duration-300`}>
      <div
        className={`w-full lg:container lg:mx-auto px-6 py-4 bg-gradient-to-b from-primary-500 to-primary-400 rounded-br-xl rounded-bl-xl ${
          scrolled ? 'bg-opacity-60 backdrop-blur-sm' : ''
        }`}>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <div className="">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200">
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          <Link href="/" className="flex flex-1 justify-center">
            <Image src={'/images/logo-mobile-header.webp'} width={100} height={40} alt="ThePayHub Logo"></Image>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-col gap-2">
          <Link href="/" className="text-2xl font-bold text-white hover:text-red-500 transition-colors duration-200">
            <svg width="318" height="35" viewBox="0 0 318 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.1209 7.75918H0.0234375V0.621094H34.568V7.75918H21.4705V39.1931H13.1209V7.75918Z"
                fill="#D9D9D9"
              />
              <path
                d="M37.6914 0.0292969H45.6809V13.1923C48.0056 10.0816 51.28 8.83734 54.8491 8.83734C62.5766 8.83734 65.458 13.7161 65.458 22.0657V39.2234H57.4686V23.0808C57.4686 18.7259 56.1588 16.4011 52.2296 16.4011C48.0057 16.4011 45.6809 19.8065 45.6809 24.0959V39.2234H37.6914V0.0292969Z"
                fill="#D9D9D9"
              />
              <path
                d="M70.2578 24.3305C70.2578 15.7517 76.9375 8.84277 85.6801 8.84277C93.7677 8.84277 100.153 15.7517 100.153 24.1995C100.153 25.6403 99.989 27.0482 99.989 27.0482H78.3782C79.3278 31.1739 82.7331 33.1385 86.6624 33.1385C89.5111 33.1385 92.4907 32.3199 94.7173 30.8137L97.697 36.5439C94.3571 38.7377 90.4934 39.8182 86.6296 39.8182C77.9198 39.8182 70.3233 34.1536 70.3233 24.3305H70.2578ZM92.6545 21.7765C92.0651 18.011 89.0854 15.5225 85.4509 15.5225C81.8163 15.5225 79.0331 18.011 78.2473 21.7765H92.6545Z"
                fill="#D9D9D9"
              />
              <path
                d="M106.188 0.621094H122.756C134.085 0.621094 140.012 7.30076 140.012 15.5194C140.012 23.7381 134.052 30.4178 122.69 30.4178H114.537V39.2258H106.188V0.621094ZM123.116 23.2469C128.06 23.2469 131.269 19.8088 131.269 15.5194C131.269 11.23 128.06 7.79191 123.181 7.79191H114.537V23.2797H123.116V23.2469Z"
                fill="#D9D9D9"
              />
              <path
                d="M144.344 24.3305C144.344 15.7517 149.583 8.84277 157.801 8.84277C161.239 8.84277 164.939 10.218 167.101 13.0667V9.43213H174.894V39.1961H167.101V35.627C165.005 38.4757 161.272 39.7855 157.801 39.7855C149.583 39.7855 144.344 32.8766 144.344 24.2978V24.3305ZM166.937 24.3305C166.937 19.6809 163.957 16.2428 159.864 16.2428C155.771 16.2428 152.464 19.6809 152.464 24.3305C152.464 28.9801 155.575 32.4182 159.864 32.4182C164.154 32.4182 166.937 29.0783 166.937 24.3305Z"
                fill="#D9D9D9"
              />
              <path
                d="M184.047 40.6979C187.748 40.6979 189.123 39.4537 190.171 37.1289L190.825 35.8191L178.383 9.42773H186.47L192.495 23.3766C193.379 25.4721 194.46 28.4518 194.46 28.4518C194.46 28.4518 195.704 24.9482 196.359 23.2128L201.795 9.46051H209.784L196.556 40.0758C193.347 47.4104 187.748 47.9997 184.047 47.9997V40.7307V40.6979Z"
                fill="#D9D9D9"
              />
              <path
                d="M214.01 0.621094H222.359V15.6831H238.862V0.621094H247.212V39.2258H238.862V22.854H222.359V39.2258H214.01V0.621094Z"
                fill="#D9D9D9"
              />
              <path
                d="M253.654 27.2403V9.42773H261.644V26.1597C261.644 30.3182 263.445 32.25 267.112 32.25C271.27 32.25 273.3 28.7465 273.3 24.6863V9.42773H281.29V39.1917H273.792V35.0333C271.991 37.9475 267.963 39.8138 264.492 39.8138C256.274 39.8138 253.654 35.0005 253.654 27.2403Z"
                fill="#D9D9D9"
              />
              <path
                d="M294.956 35.625V39.1941H287.393V0H295.382V12.7373C297.51 10.1833 300.916 8.80805 304.387 8.80805C312.605 8.80805 317.975 15.7169 317.975 24.2958C317.975 32.8746 312.736 39.7835 304.518 39.7835C300.948 39.7835 297.183 38.4737 294.989 35.625H294.956ZM309.855 24.3285C309.855 19.6789 306.744 16.2408 302.455 16.2408C298.165 16.2408 295.382 19.6789 295.382 24.3285C295.382 28.9781 298.427 32.4162 302.455 32.4162C306.744 32.4162 309.855 29.0108 309.855 24.3285Z"
                fill="#D9D9D9"
              />
            </svg>
          </Link>
          <div className="flex space-x-8">
            {menuItems.map(item => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{x: -300, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: -300, opacity: 0}}
              transition={{duration: 0.3, ease: 'easeOut'}}
              className={`fixed top-0 left-0 h-full w-[300px] z-50 shadow-lg bg-gradient-to-r from-primary-500 to-primary-400`}>
              <div className="mt-[20px] flex flex-col space-y-4 p-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ml-auto text-secondary-500 hover:text-secondary-500 transition-colors duration-200">
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
                <Image
                  src={'/images/logo-mobile-header.webp'}
                  width={100}
                  height={40}
                  alt="ThePayHub Logo"
                  className="my-5"></Image>
                {menuItems.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block py-2 px-4 nav-link hover:bg-secondary-700 hover:text-white transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
