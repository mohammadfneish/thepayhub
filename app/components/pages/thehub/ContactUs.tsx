'use client'

import Image from 'next/image'

export default function ContactUs() {
  return (
    <div className="lg:bg-gradient-to-r from-primary-500 to-primary-400 flex flex-col lg:flex-row items-stretch justify-center lg:border lg:border-white lg:rounded-2xl w-full lg:w-auto mb-5">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mt-5 p-5">
          Need some help?
          <br />
          Our team can make it clear!
        </h1>
        <p className="text-sm my-4 px-5 text-secondary-500">
          Find out how PayHub is reshaping the way global businesses move money.
        </p>
        <Image
          src={'/images/ContactUs.webp'}
          alt="contact us"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto object-cover hidden lg:block"
        />
      </div>
      <div className="bg-gradient-to-r from-primary-500 to-primary-400 px-5 py-5 w-full lg:w-1/2 rounded-2xl lg:rounded-none lg:rounded-r-2xl">
        <div className="form w-full h-full flex flex-col items-center gap-3">
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="flex flex-col gap-2 w-full md:w-[calc(50%-5px)]">
              <label className="text-sm text-gray-400" htmlFor="firstName">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                className="bg-transparent border border-gray-200 p-2 rounded-lg text-sm"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[calc(50%-5px)]">
              <label className="text-sm text-gray-400" htmlFor="lastName">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                className="bg-transparent border border-gray-200 p-2 rounded-lg text-sm"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="flex flex-col gap-2 w-full md:w-[calc(50%-5px)]">
              <label className="text-sm text-gray-400" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                type="text"
                className="bg-transparent border border-gray-200 p-2 rounded-lg text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[calc(50%-5px)]">
              <label className="text-sm text-gray-400" htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                type="text"
                className="bg-transparent border border-gray-200 p-2 rounded-lg text-sm"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="w-full flex flex-row items-center gap-2">
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm text-gray-400" htmlFor="company">
                Company Name *
              </label>
              <input
                id="company"
                type="text"
                className="bg-transparent border border-gray-200 p-2 rounded-lg text-sm"
                placeholder="Enter your company name"
              />
            </div>
          </div>
          <div className="w-full flex flex-row items-center gap-2">
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm text-gray-400" htmlFor="inquiry">
                Inquiry Type *
              </label>
              <select id="inquiry" className="bg-transparent border border-gray-200 p-2 rounded-lg">
                <option value="business" className="text-black">
                  Business Inquiry
                </option>
                <option value="product" className="text-black">
                  Product Inquiry
                </option>
                <option value="other" className="text-black">
                  Other
                </option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row items-center gap-2">
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm text-gray-400" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                className="bg-transparent border border-gray-200 p-2 rounded-lg"
                rows={5}
                placeholder="Enter your message"></textarea>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-2">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-black py-2 px-4 rounded-lg">
              Submit message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
