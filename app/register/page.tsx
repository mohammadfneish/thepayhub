import Typography from '@components/common/Typography'
import RegisterForm from '@components/register/RegisterForm'
import React from 'react'

function Register() {
  return (
    <div className="flex flex-col gap-24 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/common-top.webp')] bg-top bg-cover w-full h-[320px] flex items-center justify-center relative">
          <Typography size="xxl">Register</Typography>
        </div>
      </div>

      {/* Forum */}
      <RegisterForm />
    </div>
  )
}

export default Register