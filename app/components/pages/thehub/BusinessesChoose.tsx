'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function BusinessesChoose() {
  const router = useRouter()
  return (
    <div className="mt-20 lg:mt-10 h-auto">
      <div className="px-2 md:px-5 lg:px-0 lg:container mx-auto flex flex-col items-center">
        <h2 className="text-md lg:text-4xl font-bold text-secondary-500">Why businesses choose ThePayHub</h2>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5 my-5">
          <div className="w-[90%] md:w-1/3">
            <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl h-full">
              <div className="w-10 h-10 rounded-full p-2 bg-secondary-500">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 13.75C10.4295 14.3241 10.9774 14.7991 11.6066 15.1429C12.2357 15.4867 12.9315 15.6911 13.6467 15.7423C14.3618 15.7935 15.0796 15.6903 15.7513 15.4397C16.4231 15.1892 17.0331 14.797 17.54 14.29L20.54 11.29C21.4508 10.347 21.9548 9.08394 21.9434 7.77296C21.932 6.46198 21.4061 5.20791 20.4791 4.28087C19.5521 3.35383 18.298 2.82799 16.987 2.8166C15.676 2.8052 14.413 3.30918 13.47 4.21997L11.75 5.92997"
                    stroke="#070E28"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0002 11.7502C13.5707 11.1761 13.0228 10.701 12.3936 10.3573C11.7645 10.0135 11.0687 9.80911 10.3535 9.75789C9.63841 9.70667 8.92061 9.80986 8.24885 10.0604C7.5771 10.311 6.96709 10.7032 6.4602 11.2102L3.4602 14.2102C2.54941 15.1532 2.04544 16.4162 2.05683 17.7272C2.06822 19.0382 2.59407 20.2923 3.52111 21.2193C4.44815 22.1464 5.70221 22.6722 7.01319 22.6836C8.32418 22.695 9.58719 22.191 10.5302 21.2802L12.2402 19.5702"
                    stroke="#070E28"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-md my-3 font-bold text-secondary-500 text-left">Seamless Integration</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">
                Connect once to access both traditional and tokenized payment rails through a single API. Reduce
                integration complexity and accelerate your time to market.
              </p>
            </div>
          </div>
          <div className="w-[90%] md:w-1/3">
            <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl h-full">
              <div className="w-10 h-10 rounded-full p-2 bg-secondary-500">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.666 2.75L3.66602 14.75H12.666L11.666 22.75L21.666 10.75H12.666L13.666 2.75Z"
                    stroke="#070E28"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-md my-3 font-bold text-secondary-500 text-left">Instant Transactions</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">
                Experience real-time settlement across borders with our proprietary infrastructure. Say goodbye to the
                delays and uncertainties of traditional cross-border payments.
              </p>
            </div>
          </div>
          <div className="w-[90%] md:w-1/3">
            <div className="flex flex-col p-5 bg-card border border-primary-300 rounded-2xl h-full">
              <div className="w-10 h-10 rounded-full p-2 bg-secondary-500">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.334 22.75C12.334 22.75 20.334 18.75 20.334 12.75V5.75L12.334 2.75L4.33398 5.75V12.75C4.33398 18.75 12.334 22.75 12.334 22.75Z"
                    stroke="#070E28"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-md my-3 font-bold text-secondary-500 text-left">Built-in Compliance</h3>
              <p className="flex-1 text-sm my-3 text-white text-left">
                Our platform automatically handles regulatory requirements across multiple jurisdictions, reducing your
                compliance burden while ensuring security and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
