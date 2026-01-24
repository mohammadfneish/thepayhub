'use client'
import User from '@svg/user.svg'
import AtLine from '@svg/atLine.svg'
import BuildingLine from '@svg/buildingLine.svg'
import MessageLine from '@svg/messageLine.svg'
import ChevronRight from '@svg/chevronRight.svg'

import {FormEvent, useState} from 'react'
import Button from '@components/common/Button'
import Typography from '@components/common/Typography'
import {CheckIcon} from '@heroicons/react/24/outline'
import Input, {Field} from '@components/common/Input'
import {errorToast, successToast} from 'utils/Toast'

const inquiries = ['Business Inquiry', 'Product Inquiry', 'Other']
function ContactUsForm() {
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)

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
    {
      id: 'inquiry',
      model: 'inquiry',
      label: 'Inquiry Type',
      placeholder: 'Select an Inquiry Type',
      icon: <MessageLine />,
      required: true,
      type: 'select',
      options: inquiries,
    },
    {
      id: 'message',
      model: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message here...',
      required: true,
      rows: 5,
    },
  ]

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (loading) return

    setErrors([])
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    const requiredFields = fields.filter(field => field.required)
    const missingFields = requiredFields.filter(field => !data[field.model])
    if (missingFields.length > 0) {
      setErrors(missingFields.map(field => field.model))
      return
    }

    try {
      formData.append('func', 'contact')
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
        setSuccess(true)
        successToast(json.message)
      } else {
        errorToast(json.message)
      }
    } catch (error) {
      errorToast('Something went wrong')
    }
    setLoading(false)

    // reset the form
    for (let i = 0; i < fields.length; i++) {
      ;(document.getElementById(fields[i].id) as HTMLInputElement).value = ''
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Typography size="lg">Send us a message</Typography>
        <Typography size="md2">Fill out the form below and we&apos;ll get back to you as soon as possible</Typography>
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleOnSubmit}
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        data-netlify="true">
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" type="text" />
          </label>
        </p>
        {fields.map((field, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-2 ${
                field?.type === 'textarea' ? 'col-span-2' : 'col-span-2 md:col-span-1'
              } `}>
              <Input field={field} />
            </div>
          )
        })}
        <div data-netlify-recaptcha="true" />
        <div className="flex w-full col-span-2 justify-center sm:justify-start">
          <Button variant="primary" type="submit" loading={loading} postIcon={<ChevronRight />}>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm
