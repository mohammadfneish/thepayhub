'use client'

import {FormEvent, useEffect, useState} from 'react'
import Mail from '@svg/mail.svg'
import Phone from '@svg/phone.svg'
import LocationMarker from '@svg/locationMarker.svg'
import SendMessage from '@svg/sendMessage.svg'
import Button from './common/Button'
import {toast} from 'react-hot-toast'

interface Field {
  id: string
  model: string
  label: string
  type?: string
  placeholder: string
  required: boolean
  rows?: number
  options?: Record<string, string>
}

const services = {
  tokenized_asset_infrastructure: 'Tokenized Asset Infrastructure',
  bridging_mechanisms: 'Bridging Mechanisms',
  private_ecosystem_development: 'Private Ecosystem Development',
  smart_contract_logic: 'Smart Contract Logic',
}

function ContactUsForm() {
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('Tokenized Asset Infrastructure')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash.indexOf('service=') === 0) {
        const value = hash.split('=')[1] as keyof typeof services
        setSelectedService(services[value] ?? '')
        ;(document.getElementById('service') as HTMLInputElement).value = services[value]
        console.log(services[value])
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const fields: Field[] = [
    {id: 'name', model: 'name', label: 'Name', placeholder: 'Your Full Name', required: true},
    {id: 'email', model: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true},
    {
      id: 'company_name',
      model: 'company_name',
      label: 'Company Name',
      placeholder: 'Your company name',
      required: true,
    },
    {
      id: 'service',
      model: 'service',
      label: 'Service Interest (Optional)',
      placeholder: 'Select a service',
      required: false,
      type: 'select',
      options: services,
    },
    {
      id: 'message',
      model: 'message',
      label: 'Message / what are you looking for?',
      type: 'textarea',
      placeholder: 'Tell us about your project requirements, timeline, and any specific questions you have...',
      required: true,
      rows: 5,
    },
  ]

  const contacts = [
    {
      icon: <Mail />,
      title: 'Email Us',
      description: 'contact@gkssolution.com',
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      description: 'Available for scheduled consultations',
    },
    {
      icon: <LocationMarker />,
      title: 'Global Reach',
      description: 'Serving enterprise clients worldwide',
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
        toast.success(json.message)
      } else {
        toast.error(json.message)
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong')
    }
    setLoading(false)

    // reset the form
    for (let i = 0; i < fields.length; i++) {
      ;(document.getElementById(fields[i].id) as HTMLInputElement).value = ''
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 md:px-16 lg:px-20 py-12 gap-12 rounded-4xl shadow-lg bg-primary-200">
      <div className="flex flex-col gap-11 max-w-[600px] w-full">
        <p className="font-bold text-2xl lg:text-3xl">Send us a Message</p>
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="font-medium">
                {field.label}
                {field.required && <span className="text-error">*</span>}
              </p>
              {field?.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  name={field.model}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`rounded-2xl py-4 px-6 ${
                    field.required && errors.includes(field.model) ? 'border border-error' : ''
                  } outline-none bg-white`}
                  rows={field.rows ? field.rows : 1}
                />
              ) : field?.type === 'select' ? (
                <select
                  id={field.id}
                  name={field.model}
                  defaultValue={selectedService}
                  className="rounded-2xl py-4 px-6 outline-none bg-white">
                  {Object.values(field.options!)?.map((option, index) => (
                    <option key={index} value={option} className="py-5">
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.id}
                  type={field?.type ?? 'text'}
                  name={field.model}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`rounded-2xl py-4 px-6 ${
                    field.required && errors.includes(field.model) ? 'border border-error' : ''
                  } outline-none bg-white`}
                />
              )}
              {field.required && errors.includes(field.model) && (
                <p className="text-error text-xs">This field is required</p>
              )}
            </div>
          ))}
          <Button variant="primary" type="submit">
            {loading ? (
              <div className="flex justify-center items-center h-[30px]">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <SendMessage /> Send Message
              </>
            )}
          </Button>
        </form>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
          <p className="font-bold text-3xl lg:text-4xl">Let&apos;s Discuss Your Project</p>
          <p className="text-xl lg:text-2xl max-w-[600px] leading-[30px] md:leading-[40px] lg:leading-[50px]">
            Whether you&apos;re a fintech looking to integrate blockchain technology, a bank exploring tokenized
            settlement solutions, or an enterprise platform needing custom infrastructure, we&apos;re here to help.
          </p>
        </div>
        <div className="flex flex-col gap-14">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-5 md:gap-7 lg:gap-9">
              <div className="p-4 bg-primary-400 text-on-primary rounded-full w-14 h-14 flex justify-center items-center">
                {contact.icon}
              </div>
              <div className="flex flex-col gap-3 text-xl lg:text-2xl">
                <p className="font-bold ">{contact.title}</p>
                <p className="">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm
