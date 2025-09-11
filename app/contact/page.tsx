import Typography from '@components/common/Typography'
import ContactUsForm from '@components/contact/ContactUsForm'
import FooterTop from '@components/FooterTop'
import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col gap-24 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/common-top.webp')] bg-top bg-cover w-full h-[320px] flex items-center justify-center relative">
          <Typography size="xxl">Contact Us</Typography>
        </div>
      </div>

      {/* Forum */}
      <ContactUsForm />

      {/* Footer */}
      <FooterTop />
    </div>
  )
}

export default Contact
