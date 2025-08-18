'use client'

import {useState, useEffect} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import {usePathname} from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState('/')

  useEffect(() => {
    setActiveMenu(pathname)
  }, [pathname])

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
    {href: '/', label: 'The Hub'},
    {href: '/solutions', label: 'Solutions of Business'},
    {href: '/company', label: 'The Company'},
    // {href: '/careers', label: 'Careers'},
    {href: '/news', label: 'News'},
    {href: '/faq', label: 'FAQ'},
    {href: '/contact', label: 'Contact'},
    {href: '/register', label: 'Register'},
  ]

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300`}>
      <div
        className={`w-full lg:container shadow-xl lg:mx-auto px-6 py-4 bg-linear-to-b from-primary-500 to-primary-400 rounded-br-xl rounded-bl-xl ${
          scrolled ? 'opacity-95' : ''
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
            <svg width="170" height="50" viewBox="0 0 208 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M117.516 8.51172V17.9584H101.89V52.9873H92.4437V17.9584H77.4492V8.51172H117.516Z"
                fill="#DBDAD8"
              />
              <path
                d="M162.182 21.0017C162.182 24.2134 160.978 27.2782 158.793 29.6285C157.482 31.0405 155.89 32.1163 154.136 32.8058C154.136 32.8058 154.04 32.8918 152.382 33.302C150.725 33.7109 150.446 33.7175 150.446 33.7175H135.205V52.7959H125.758V24.2134H135.205V24.2333H149.502C151.283 24.2333 152.735 22.7829 152.735 21.0017C152.735 19.2179 151.283 17.7688 149.502 17.7688C149.424 17.7688 149.353 17.7715 149.292 17.7768L149.268 17.7794L149.203 17.7887H147.67V17.7688H125.758V10.0922L125.759 8.32031H150.103C150.103 8.32031 151.114 8.4447 152.036 8.62335C152.959 8.80333 153.623 9.00315 153.623 9.00315C158.624 10.7155 162.182 15.4596 162.182 21.0017Z"
                fill="#DBDAD8"
              />
              <path
                d="M208.001 7.93359V52.2175H198.569V33.3486H178.132V52.2175H168.701V7.93359H178.132V23.9254H198.569V7.93359H208.001Z"
                fill="#DBDAD8"
              />
              <path
                d="M0.0443306 17.6106V5.91124L10.1485 0.0742188L20.2654 5.91124V17.6106L10.1485 23.4477L0.0443306 17.6106ZM43.425 17.6106V5.91124L53.5292 0.0742188L63.6461 5.91124V17.6106L53.5292 23.4477L43.425 17.6106ZM0 55.0077V43.3083L10.1042 37.4713L20.2211 43.3083V55.0077L10.1042 60.8448L0 55.0077ZM43.386 55.0077V43.3083L53.4902 37.4713L63.6071 43.3083V55.0077L53.4902 60.8448L43.386 55.0077ZM10.9254 36.4011V24.7028L21.0296 18.8657L31.1465 24.7028V36.4011L21.0296 42.2392L10.9254 36.4011ZM32.6432 36.4011V24.7028L42.7474 18.8657L52.8643 24.7028V36.4011L42.7474 42.2392L32.6432 36.4011Z"
                fill="#D8E60C"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-col gap-2">
          <Link href="/" className="text-2xl font-bold text-white hover:text-red-500 transition-colors duration-200">
            <svg width="242" height="50" viewBox="0 0 383 79" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M168.934 63.3145H162.25V39.5122L156 39.6288V63.3145H149.346V17.831H156V35.0369C157.551 34.8038 159.101 34.5625 160.651 34.3104C162.608 34.0001 164.157 33.8442 165.301 33.8442C167.723 33.8442 168.934 35.0369 168.934 37.4196V63.3145ZM186.314 38.844H180.064V45.8768H186.314V38.844ZM192.678 59.6809C192.678 62.1042 191.429 63.3145 188.93 63.3145H177.45C174.951 63.3145 173.701 62.1042 173.701 59.6809V37.5944C173.701 35.1724 174.951 33.9608 177.45 33.9608H188.93C191.429 33.9608 192.678 35.1724 192.678 37.5944V48.3761L190.847 50.2071H180.064V58.4313H186.314V53.5494H192.678V59.6809ZM255.288 57.4188V49.543H248.923V57.6519L255.288 57.4188ZM261.594 62.7087H255.23V61.6908C253.718 61.9239 252.207 62.1557 250.696 62.3888C248.72 62.6789 247.218 62.8239 246.191 62.8239C243.769 62.8239 242.559 61.6326 242.559 59.2499V48.6715C242.559 46.2495 243.808 45.0379 246.308 45.0379H255.288V38.2951H248.923V42.4804H242.907V36.9886C242.907 34.5666 244.157 33.3549 246.656 33.3549H257.904C260.364 33.3549 261.594 34.5666 261.594 36.9886V62.7087ZM285.849 33.4132L278.497 62.3888L275.678 73.4903H268.876L271.929 62.5338L264.489 33.4132H271.319L275.183 52.7104L279.05 33.4132H285.849ZM358.145 62.6789H351.519V61.6624C349.989 61.9145 348.449 62.1666 346.899 62.4173C345.019 62.7087 343.468 62.8537 342.249 62.8537C339.827 62.8537 338.616 61.6434 338.616 59.2214V33.3265H345.213V57.1572L351.519 57.0122V33.3265H358.145V62.6789ZM375.816 54.9481V38.8765L369.567 38.9931V57.1572H373.694C375.109 57.1572 375.816 56.4213 375.816 54.9481ZM382.501 56.7791C382.501 58.621 381.948 60.0631 380.843 61.1094C379.74 62.1557 378.267 62.6789 376.426 62.6789H362.912V17.1967H369.567V34.4012C371.117 34.1695 372.668 33.9269 374.217 33.6748C376.174 33.3658 377.724 33.2099 378.867 33.2099C381.289 33.2099 382.501 34.4012 382.501 36.7839V56.7791ZM144.58 17.7971V27.4728H128.575V63.3511H118.9V27.4728H103.541V17.7971H144.58ZM239.29 30.5901C239.29 33.8794 238.056 37.0184 235.819 39.4255C234.475 40.8716 232.845 41.9735 231.049 42.6796C231.049 42.6796 230.95 42.7677 229.252 43.1879C227.555 43.6067 227.269 43.6134 227.269 43.6134H211.658V63.1532H201.983V33.8794H211.658V33.8998H226.303C228.127 33.8998 229.614 32.4143 229.614 30.5901C229.614 28.7631 228.127 27.279 226.303 27.279C226.223 27.279 226.15 27.2817 226.087 27.2871L226.063 27.2898L225.997 27.2993H224.426V27.279H201.983V19.4167L201.984 17.6019H226.918C226.918 17.6019 227.954 17.7293 228.898 17.9123C229.843 18.0966 230.523 18.3013 230.523 18.3013C235.645 20.0551 239.29 24.9139 239.29 30.5901ZM333.85 17.1289V62.6057H324.173V43.2285H303.206V62.6057H293.53V17.1289H303.206V33.5515H324.173V17.1289H333.85Z"
                fill="#DBDAD8"
              />
              <path
                d="M0.556924 23.3682V8.3593L13.5315 0.871094L26.5224 8.3593V23.3682L13.5315 30.8564L0.556924 23.3682ZM56.261 23.3682V8.3593L69.2356 0.871094L82.2264 8.3593V23.3682L69.2356 30.8564L56.261 23.3682ZM0.5 71.3442V56.3353L13.4746 48.8471L26.4654 56.3353V71.3442L13.4746 78.8324L0.5 71.3442ZM56.2109 71.3442V56.3353L69.1855 48.8471L82.1763 56.3353V71.3442L69.1855 78.8324L56.2109 71.3442ZM14.529 47.4741V32.4666L27.5036 24.9784L40.4945 32.4666V47.4741L27.5036 54.9637L14.529 47.4741ZM42.4163 47.4741V32.4666L55.3909 24.9784L68.3817 32.4666V47.4741L55.3909 54.9637L42.4163 47.4741Z"
                fill="#D8E60C"
              />
            </svg>
          </Link>
          <div className="flex space-x-8">
            {menuItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link border rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  activeMenu === item.href ? 'active' : ' hover:text-secondary-500'
                } ${'/register' === item.href ? 'border-secondary-500' : 'border-transparent'}`}>
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
              className={`mobile-menu fixed top-0 left-0 h-full w-[300px] z-50 shadow-lg bg-linear-to-r from-primary-500 to-primary-400`}>
              <div className="mt-[20px] flex flex-col space-y-4 p-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ml-auto text-secondary-500 hover:text-secondary-500 transition-colors duration-200">
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
                <svg
                  className="mt-5 mb-10"
                  width="170"
                  height="50"
                  viewBox="0 0 208 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M117.516 8.51172V17.9584H101.89V52.9873H92.4437V17.9584H77.4492V8.51172H117.516Z"
                    fill="#DBDAD8"
                  />
                  <path
                    d="M162.182 21.0017C162.182 24.2134 160.978 27.2782 158.793 29.6285C157.482 31.0405 155.89 32.1163 154.136 32.8058C154.136 32.8058 154.04 32.8918 152.382 33.302C150.725 33.7109 150.446 33.7175 150.446 33.7175H135.205V52.7959H125.758V24.2134H135.205V24.2333H149.502C151.283 24.2333 152.735 22.7829 152.735 21.0017C152.735 19.2179 151.283 17.7688 149.502 17.7688C149.424 17.7688 149.353 17.7715 149.292 17.7768L149.268 17.7794L149.203 17.7887H147.67V17.7688H125.758V10.0922L125.759 8.32031H150.103C150.103 8.32031 151.114 8.4447 152.036 8.62335C152.959 8.80333 153.623 9.00315 153.623 9.00315C158.624 10.7155 162.182 15.4596 162.182 21.0017Z"
                    fill="#DBDAD8"
                  />
                  <path
                    d="M208.001 7.93359V52.2175H198.569V33.3486H178.132V52.2175H168.701V7.93359H178.132V23.9254H198.569V7.93359H208.001Z"
                    fill="#DBDAD8"
                  />
                  <path
                    d="M0.0443306 17.6106V5.91124L10.1485 0.0742188L20.2654 5.91124V17.6106L10.1485 23.4477L0.0443306 17.6106ZM43.425 17.6106V5.91124L53.5292 0.0742188L63.6461 5.91124V17.6106L53.5292 23.4477L43.425 17.6106ZM0 55.0077V43.3083L10.1042 37.4713L20.2211 43.3083V55.0077L10.1042 60.8448L0 55.0077ZM43.386 55.0077V43.3083L53.4902 37.4713L63.6071 43.3083V55.0077L53.4902 60.8448L43.386 55.0077ZM10.9254 36.4011V24.7028L21.0296 18.8657L31.1465 24.7028V36.4011L21.0296 42.2392L10.9254 36.4011ZM32.6432 36.4011V24.7028L42.7474 18.8657L52.8643 24.7028V36.4011L42.7474 42.2392L32.6432 36.4011Z"
                    fill="#D8E60C"
                  />
                </svg>
                {menuItems.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`mobile-menu-item block py-2 px-4 border nav-link rounded-full hover:bg-secondary-700 hover:text-white transition-colors duration-200 ${
                      activeMenu === item.href ? 'active' : ''
                    } ${'/register' === item.href ? 'border-secondary-500' : 'border-transparent'}`}
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
