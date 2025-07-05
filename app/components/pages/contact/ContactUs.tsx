'use client'

import Image from 'next/image'
import ContactUsForm from '../../ContactUsForm'

export default function ContactUs() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-secondary-500 mt-5 p-5">Send Us a Message</h1>
        <p className="text-xl my-4 px-5 text-white text-center max-w-[450px]">
          FindFill out the form below and we`ll get back to you as soon as possible
        </p>
      </div>
      <div className="bg-card px-5 py-5 w-[90%] max-w-[900px] rounded-2xl">
        <ContactUsForm />
      </div>
    </div>
  )
}
