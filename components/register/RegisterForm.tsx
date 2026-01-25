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
import {FormEvent, useEffect, useState} from 'react'
import Input, {Field} from '@components/common/Input'
import Button from '@components/common/Button'
import Link from 'next/link'
import {errorToast, successToast} from 'utils/Toast'
import FileInput from '@components/common/FileInput'
import {load as loadRecaptchaV3, ReCaptchaInstance} from 'recaptcha-v3'

interface RegisterPlatforms {
  name: string
  type: string
  desc: string
}

function RegisterForm() {
  const profile = ['Business', 'Fintech', 'Merchant', 'Institutional Client']

  const [selectedProfile, setSelectedProfile] = useState('Business')
  const [loading, setLoading] = useState(false)
  const [uploadFiles, setUploadFiles] = useState<Array<string>>([])
  const [recaptchaInstance, setRecaptchaInstance] = useState<ReCaptchaInstance | null>(null)

  useEffect(() => {
    async function loadRecaptcha() {
      const instance = await loadRecaptchaV3(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '', {
        autoHideBadge: true,
      })
      setRecaptchaInstance(instance)
    }
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      loadRecaptcha()
    }
  }, [])

  const fields: Field[] = [
    {
      id: 'firstName',
      model: 'firstName',
      label: 'First Name',
      placeholder: 'Enter Your First Name',
      icon: <User />,
      required: true,
    },
    {
      id: 'lastName',
      model: 'lastName',
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
      id: 'phone',
      model: 'phone',
      label: 'Phone Number',
      type: 'phone',
      placeholder: '(555) 000-0000',
      required: true,
    },
    {
      id: 'company',
      model: 'company',
      label: 'Company Name',
      placeholder: 'Your company name',
      icon: <BuildingLine />,
      required: true,
    },
  ]

  const registerPlatforms: RegisterPlatforms[] = [
    {name: 'PXG', type: 'PXG', desc: 'USD settlement & wire services'},
    {name: 'XPZ', type: 'XPZ', desc: 'Token-based payment gateway'},
  ]

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (loading) return

    const fields = ['firstName', 'lastName', 'email', 'phone', 'country_code', 'company']
    try {
      const formData = new FormData()
      formData.append('func', 'create-account')
      formData.append('toCmp', 'ThePayHub')

      if (!selectedProfile) {
        errorToast('Please select a profile')
        return false
      } else {
        formData.append('profile', selectedProfile)
      }

      let hasError = false
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        const val = (document.getElementById(field) as HTMLInputElement)?.value
        if (!val) {
          errorToast(`${field} is required`)
          hasError = true
          break
        } else {
          formData.append(field, val)
        }
      }

      if (hasError) {
        return false
      }

      const platforms = document.querySelectorAll('input[type=checkbox]:checked')
      if (!platforms.length) {
        errorToast('Please select at least one platform')
        return false
      }
      platforms.forEach(function (input, key) {
        formData.append(`platforms[${key}]`, (input as HTMLInputElement).value)
      })

      const files: FileList | null = (document.getElementById('file-upload-input-kyc') as HTMLInputElement).files
      if (!files?.length) {
        errorToast('Please select at least one document')
        return false
      }
      Array.from(files).forEach(function (file, key) {
        formData.append(`files[${key}]`, file)
      })

      let recaptcha = ''
      if (recaptchaInstance) {
        recaptcha = await recaptchaInstance.execute('form_submit')
      }
      formData.append('recaptcha', recaptcha)

      setLoading(true)
      const resp: Response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
      const json = await resp.json()

      if (json.success) {
        successToast(json.message)
      } else {
        errorToast(json.message)
      }
    } catch (error) {
      errorToast('Something went wrong')
    }

    setLoading(false)

    // reset the form
    ;(document.getElementById('file-upload-input-kyc') as HTMLInputElement).files = null
    for (let i = 0; i < fields.length; i++) {
      ;(document.getElementById(fields[i]) as HTMLInputElement).value = ''
    }
    document.querySelectorAll('input[type=checkbox]:checked').forEach(function (input) {
      ;(input as HTMLInputElement).checked = false
    })
    setSelectedProfile('Business')
  }

  const handleFile = (e: any) => {
    let fileNames = []
    const files = e.target.files
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name + ` (${(files[i].size / (1024 * 1024)).toFixed(2)} MB)`)
      }
    }
    setUploadFiles(fileNames)
  }

  return (
    <div className="flex flex-col gap-6 w-fit">
      <div className="flex flex-col gap-3">
        <Typography size="lg">Create your account</Typography>
        <Typography size="md2">One account to use on all our apps</Typography>
      </div>

      <div className="flex flex-col gap-5">
        {/* Choose your profile */}
        <div className="flex flex-col gap-2">
          <Typography size="sm">Choose your profile*</Typography>
          <div className="flex gap-3 flex-wrap">
            {profile.map((item, index) => (
              <div
                className={`flex items-center gap-2 p-2.5 border rounded-2xl  bg-soft-100 cursor-pointer ${
                  selectedProfile === item ? 'text-white border-white' : 'text-sub-600 border-soft-200'
                } `}
                key={index}
                onClick={() => setSelectedProfile(item)}>
                {selectedProfile === item && <CheckIcon width={20} height={20} />}
                {item}
              </div>
            ))}
          </div>
        </div>
        <Divider />

        {/* Form */}
        <form name="register-form" onSubmit={handleOnSubmit} className="flex flex-col gap-5 mb-10">
          <input type="hidden" name="form-name" value="register-form" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" type="text" />
            </label>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-2 ${
                    fields.length % 2 === 1 && fields.length - 1 === index ? 'col-span-2' : 'col-span-2 md:col-span-1'
                  } `}>
                  <Input field={field} />
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
          <FileInput id={'kyc'} onChange={handleFile} />
          {uploadFiles?.length > 0 && (
            <div className="flex flex-col gap-2 overflow-x-auto scrollable-container items-start">
              {uploadFiles.map((item, index) => (
                <div key={index} className="m-2 border-b-1 border-gray-500 px-2 opacity-80">
                  {item}
                </div>
              ))}
            </div>
          )}

          <div className="flex w-full col-span-2 justify-center sm:justify-start">
            <Button variant="primary" type="submit" loading={loading} postIcon={<ChevronRight />}>
              Create Account
            </Button>
          </div>
        </form>

        <Divider text="OR ACCESS OUR OTHER APPS" />
        <div className="flex gap-3 flex-wrap justify-center mb-10">
          <Link href={'https://mazzera.finance/'} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" postIcon={<ArrowRightUp />}>
              Sign up to Mazzera
            </Button>
          </Link>
          <Link href={'https://www.mazzera.finance/'} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" postIcon={<ArrowRightUp />}>
              Sign up to Moonlight
            </Button>
          </Link>
          <Link href={'https://gkssolution.com'} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" postIcon={<ArrowRightUp />}>
              Sign up to GKS
            </Button>
          </Link>
        </div>

        <div className="flex justify-between gap-6 flex-wrap items-center">
          <div className="flex flex-col gap-3">
            <Typography size="xl">Need assistance?</Typography>
            <Typography size="md3">Don&apos;t hesitate to send us a message</Typography>
          </div>
          <Link href={'/contact'} className="flex justify-center w-full sm:w-fit">
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
