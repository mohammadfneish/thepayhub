'use client'
import User from '@svg/user.svg'
import AtLine from '@svg/atLine.svg'
import BuildingLine from '@svg/buildingLine.svg'
import CustomerService from '@svg/customerService.svg'
import ChevronRight from '@svg/chevronRight.svg'
import ArrowRightUp from '@svg/arrowRightUp.svg'

import Divider from '@components/common/Divider'
import Typography from '@components/common/Typography'
import {CheckIcon} from '@heroicons/react/24/outline'
import React, {FormEvent, useState} from 'react'
import Input, {Field} from '@components/common/Input'
import Button from '@components/common/Button'
import FileInput from '@components/common/FileInput'
import Link from 'next/link'

interface RegisterPlatforms {
  name: string
  type: string
  desc: string
}

function RegisterForm() {
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const profile = ['Business', 'Fintech', 'Merchant', 'Institutional Client']

  const [selectedProfile, setSelectedProfile] = useState('Business')
  const fields: Field[] = [
    {
      id: 'first_name',
      model: 'first_name',
      label: 'First Name',
      placeholder: 'Enter Your First Name',
      icon: <User />,
      required: true,
    },
    {
      id: 'last_name',
      model: 'last_name',
      label: 'Last Name',
      placeholder: 'Enter Your Last Name',
      icon: <User />,
      required: true,
    },
    {
      id: 'email',
      model: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'your@email.com',
      icon: <AtLine />,
      required: true,
    },
    {
      id: 'phone_number',
      model: 'phone_number',
      label: 'Phone Number',
      type: 'phone',
      placeholder: '(555) 000-0000',
      required: true,
    },
    {
      id: 'company_name',
      model: 'company_name',
      label: 'Company Name',
      placeholder: 'Your company name',
      icon: <BuildingLine />,
      required: true,
    },
  ]

  const registerPlatforms: RegisterPlatforms[] = [
    {name: 'PXG', type: 'PXG', desc: 'USD settlement & wire services'},
    {name: 'XPZ', type: 'XPZ', desc: 'Token-based payment gateway'},
    {name: 'Moonlight', type: 'Moonlight', desc: 'FX & liquidity services'},
    {name: 'Mazzera', type: 'Mazzera', desc: 'Global compliance and fund routing'},
    {name: 'STM', type: 'STM', desc: 'Crypto-to-fiat & fiat-to-crypto services in LATAM & Europe'},
    {name: 'NSegundos', type: 'NSegundos', desc: 'Crypto-to-fiat & fiat-to-crypto services in LATAM & Europe'},
    {name: 'GKS', type: 'GKS', desc: 'Global compliance and fund routing'},
  ]

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {}

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Typography size="lg">Create your account</Typography>
        <Typography size="md2">One account to use on all our apps</Typography>
      </div>

      <div className="flex flex-col gap-5">
        {/* Choose your profile */}
        <div className="flex flex-col gap-2">
          <Typography size="sm">Choose your profile*</Typography>
          <div className="flex gap-3">
            {profile.map((item, index) => (
              <span
                className={`flex items-center gap-2 p-2.5 border rounded-2xl  bg-soft-100 cursor-pointer ${
                  selectedProfile === item ? 'text-white border-white' : 'text-sub-600 border-soft-200'
                } `}
                key={index}
                onClick={() => setSelectedProfile(item)}>
                {selectedProfile === item && <CheckIcon width={20} height={20} />}
                {item}
              </span>
            ))}
          </div>
        </div>
        <Divider />

        {/* Form */}
        <form className="flex flex-col gap-5 mb-10" onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-2 ${
                    fields.length % 2 === 1 && fields.length - 1 === index ? 'col-span-2' : 'col-span-2 md:col-span-1'
                  } `}>
                  <Input field={field} errors={errors} />
                </div>
              )
            })}
          </div>
          <Divider />
          <Typography size="sm">Select which platforms you would like to access:</Typography>

          <div className="flex flex-col gap-3">
            {registerPlatforms.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <input
                  type="checkbox"
                  id={item.name}
                  name="platforms"
                  value={item.type}
                  className="cursor-pointer w-5 h-5"
                />
                <label htmlFor={item.name}>
                  {item.name} - {item.desc}
                </label>
              </div>
            ))}
          </div>

          <Divider />
          <Typography size="sm">
            KYC Upload * <span className="text-sub-600">(Upload your required documents once)</span>
          </Typography>
          <FileInput id={'kyc'} onChange={file => setFile(file)} />

          <div className="flex w-full col-span-2 justify-between">
            <Button variant="primary" type="submit" loading={loading} postIcon={<ChevronRight />}>
              Create Account
            </Button>
          </div>
        </form>

        <Divider text="OR ACCESS OUR OTHER APPS" />
        <div className="flex gap-3 mb-10">
          <Link href={'#'}>
            <Button variant="secondary" postIcon={<ArrowRightUp />}>
              Sign up to Mazzera
            </Button>
          </Link>
          <Link href={'#'}>
            <Button variant="secondary" postIcon={<ArrowRightUp />}>
              Sign up to Moonlight
            </Button>
          </Link>
          <Link href={'#'}>
            <Button variant="secondary" postIcon={<ArrowRightUp />}>
              Sign up to SKG
            </Button>
          </Link>
        </div>

        <div className='flex justify-between gap-3 items-center'>
            <div className='flex flex-col gap-3'>
              <Typography size='xl'>Need assistance?</Typography>
              <Typography size='md3'>Don't hesitate to send us a message</Typography>
            </div>
            <Link href={'#'}>
            <Button variant="secondary" postIcon={<CustomerService />}>
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
