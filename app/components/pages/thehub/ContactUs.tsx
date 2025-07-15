'use client'

import Image from 'next/image'
import ContactUsForm from '../../ContactUsForm'

export default function ContactUs() {
  return (
    <div className="lg:bg-linear-to-r from-primary-500 to-primary-400 flex flex-col lg:flex-row items-stretch justify-center lg:border lg:border-white lg:rounded-2xl w-full lg:w-auto mb-5">
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
          src={'/images/home/ContactUs.webp?v=1'}
          alt="contact us"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto object-cover hidden lg:block flex-1 rounded-2xl lg:rounded-none lg:rounded-l-2xl"
        />
      </div>
      <div className="bg-linear-to-r from-primary-500 to-primary-400 px-5 py-5 w-full lg:w-1/2 rounded-2xl lg:rounded-none lg:rounded-r-2xl">
        <ContactUsForm />
      </div>
    </div>
  )
}
