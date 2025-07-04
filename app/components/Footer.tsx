import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="h-auto w-full bg-gradient-to-t from-primary-900 to-primary-400">
      <div className="h-3 w-full bg-gradient-to-r from-primary-400 to-secondary-500"></div>
      <div className="pt-12 md:px-6 mt-5 ">
        <div className="container mx-auto max-w-7xl">
          {/* Stay Updated Section */}
          <div className="flex flex-col justify-between items-center mb-5 pb-5">
            <h2 className="text-3xl font-bold text-secondary-400">Stay Updated</h2>
            <p className="text-sm mt-2 px-5 text-gray-400 text-center px-5">
              Subscribe to our newsletter to receive the latest news, product updates,
              <br />
              and industry insights directly in your inbox.
            </p>
            <div className="flex flex-row gap-0 mt-5 py-5">
              <div className="flex flex-row items-center justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-lg text-black outline-none bg-gray-200"
                />
                <button
                  type="button"
                  className="bg-secondary-500 px-4 py-2 text-black rounded-r-lg relative left-[-2px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-5">
            {/* Left - Branding */}
            <div className="flex flex-col items-center md:items-start px-3">
              <div className="flex flex-col sm:flex-row items-start gap-1">
                <Image
                  src={'/images/logo-mobile-header.webp'}
                  width={170}
                  height={60}
                  alt="ThePayHub Logo"
                  className="ml-5 sm:ml-0"></Image>
                <p className="flex-1 text-sm mt-2 px-5 text-gray-400">
                  Proprietary infrastructure for modern B2B finance, unifying tokenized and banking payments in a single
                  global ecosystem.
                </p>
              </div>
              <div className="flex flex-row gap-1 mt-2">
                <a href="https://facebook.com/thepayhub" target="_blank" rel="noopener noreferrer">
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      y="0.600098"
                      width="40"
                      height="40"
                      rx="20"
                      fill="url(#paint0_linear_94_1740)"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M18.6588 25.3101V18.5421H17.3788V17.2941H18.6588V16.3181C18.6588 15.3794 18.9201 14.6381 19.4428 14.0941C19.9654 13.5501 20.6481 13.2781 21.4908 13.2781C21.9281 13.2781 22.3121 13.3314 22.6428 13.4381C22.9734 13.5341 23.2881 13.6567 23.5868 13.8061L23.1548 15.0221C22.9308 14.9047 22.6908 14.7981 22.4348 14.7021C22.1788 14.6061 21.8961 14.5581 21.5868 14.5581C21.1388 14.5581 20.7761 14.7021 20.4988 14.9901C20.2321 15.2674 20.0988 15.6781 20.0988 16.2221V17.2941H22.5628V18.5421H20.0988V25.3101H18.6588Z"
                      fill="#747C88"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_94_1740"
                        x1="39.0323"
                        y1="0.600097"
                        x2="-8.06846"
                        y2="19.8595"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#2A4D81" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a href="https://linkedin.com/thepayhub" target="_blank" rel="noopener noreferrer">
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      y="0.600098"
                      width="40"
                      height="40"
                      rx="20"
                      fill="url(#paint0_linear_94_1741)"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M14.5456 25.3101V16.9901H15.9856V25.3101H14.5456ZM15.2656 15.5661C14.9883 15.5661 14.7483 15.4647 14.5456 15.2621C14.3536 15.0594 14.2576 14.8247 14.2576 14.5581C14.2576 14.2487 14.3483 14.0034 14.5296 13.8221C14.711 13.6407 14.9563 13.5501 15.2656 13.5501C15.543 13.5501 15.7776 13.6514 15.9696 13.8541C16.1723 14.0461 16.2736 14.2807 16.2736 14.5581C16.2736 14.8567 16.183 15.1021 16.0016 15.2941C15.8203 15.4754 15.575 15.5661 15.2656 15.5661ZM18.5456 25.3101V16.9901H19.9376V18.3821C20.2363 17.9341 20.615 17.5607 21.0736 17.2621C21.543 16.9527 22.0976 16.7981 22.7376 16.7981C23.6763 16.7981 24.375 17.0807 24.8336 17.6461C25.303 18.2114 25.5376 18.9581 25.5376 19.8861V25.3101H24.0976V20.0461C24.0976 19.4487 23.9536 18.9687 23.6656 18.6061C23.3883 18.2434 22.999 18.0621 22.4976 18.0621C22.007 18.0621 21.543 18.2381 21.1056 18.5901C20.6683 18.9314 20.295 19.3367 19.9856 19.8061V25.3101H18.5456Z"
                      fill="#747C88"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_94_1741"
                        x1="39.0323"
                        y1="0.600097"
                        x2="-8.06846"
                        y2="19.8595"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#2A4D81" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a href="https://x.com/thepayhub" target="_blank" rel="noopener noreferrer">
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      y="0.600098"
                      width="40"
                      height="40"
                      rx="20"
                      fill="url(#paint0_linear_94_1742)"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M21.0123 25.5021C20.2123 25.5021 19.5776 25.2407 19.1083 24.7181C18.6496 24.1847 18.4203 23.4274 18.4203 22.4461V18.5421H16.9803V17.2941H18.4523L18.7563 14.6701H19.8603V17.2941H22.1643V18.5421H19.8603V22.5581C19.8603 23.1767 19.9883 23.6087 20.2443 23.8541C20.511 24.0994 20.8256 24.2221 21.1883 24.2221C21.455 24.2221 21.7056 24.1794 21.9403 24.0941C22.1856 24.0087 22.4096 23.9074 22.6123 23.7901L23.0123 24.9421C22.799 25.0701 22.511 25.1927 22.1483 25.3101C21.7856 25.4381 21.407 25.5021 21.0123 25.5021Z"
                      fill="#747C88"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_94_1742"
                        x1="39.0323"
                        y1="0.600097"
                        x2="-8.06846"
                        y2="19.8595"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#2A4D81" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {/* Center Section */}
            <div className="flex flex-row justify-between items-center w-full px-3">
              {/* Company - Navigation */}
              <div className="flex flex-col mt-4 gap-2">
                <h3 className="text-gray-400">Company</h3>
                <nav className="flex flex-col text-gray-400 text-xs md:text-sm gap-2">
                  <Link href="/about-us" className="hover:text-white">
                    About us
                  </Link>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                  <Link href="/partners" className="hover:text-white">
                    Partners
                  </Link>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Solutions - Navigation */}
              <div className="flex flex-col mt-4 gap-2">
                <h3 className="text-gray-400">Solutions</h3>
                <nav className="flex flex-col text-gray-400 text-xs md:text-sm gap-2">
                  <Link href="#" className="hover:text-white">
                    Xpayz (XPZ)
                  </Link>
                  <Link href="#" className="hover:text-white">
                    PayXGlobal (PXG)
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Token Services
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Integrations
                  </Link>
                </nav>
              </div>
              {/* Resources - Navigation */}
              <div className="flex flex-col mt-4 gap-2">
                <h3 className="text-gray-400">Resources</h3>
                <nav className="flex flex-col text-gray-400 text-xs md:text-sm gap-2">
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 py-6 text-center text-sm text-gray-400 border-t border-gray-700">
            © 2025 ThePayHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
