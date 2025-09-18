'use client'
import {useEffect, useState} from 'react'

export interface Field {
  id: string
  model: string
  label: string
  type?: string
  placeholder: string
  required: boolean
  rows?: number
  options?: string[]
  icon?: React.ReactNode
}

function Input({field}: {field: Field}) {
  const className = `w-full rounded-2xl p-2.5 border border-soft-200 outline-none bg-soft-100 ${
    field.icon ? 'pl-10' : ''
  }`

  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    const res = await fetch('https://restcountries.com/v3/all?fields=name,flags,idd')
    const data = await res.json()
    const cs = data.map((c: any) => ({
      name: c.name.common,
      flag: c.flags[1],
      code: c.idd.root ? `${c.idd.root}${c.idd.suffixes?.[0] || ''}` : '',
    }))
    return cs
      .filter((c: any) => c.code)
      .sort((a: any, b: any) => Number(a.code.replace('+', '')) - Number(b.code.replace('+', '')))
  }

  useEffect(() => {
    const loadCountries = async () => {
      const cs = await fetchCountries()
      setCountries(cs)
    }
    loadCountries()
  }, [])

  return (
    <div className="flex flex-col gap-1">
      <p className="font-medium text-xs ">
        {field.label}
        {field.required && <span className=""> *</span>}
      </p>
      <div className="relative w-full">
        {field?.type === 'textarea' ? (
          <textarea
            id={field.id}
            name={field.model}
            placeholder={field.placeholder}
            required={field.required}
            className={className}
            rows={field.rows ? field.rows : 1}
          />
        ) : field?.type === 'select' ? (
          <select id={field.id} name={field.model} className={className}>
            {Object.values(field.options!)?.map((option, index) => (
              <option key={index} value={option} className="pr-5">
                {option}
              </option>
            ))}
          </select>
        ) : field?.type === 'phone' ? (
          <div className="flex ">
            <select
              id={'country_code'}
              name={'country_code'}
              className={`${className} w-20! rounded-r-none!`}>
              {countries.map((country: any, index: number) => (
                <option key={index} value={country.code} className="pr-5 flex gap-1 items-center justify-center">
                  {country.code}
                </option>
              ))}
            </select>

            <input
              id={field.id}
              type={field?.type ?? 'text'}
              name={field.model}
              placeholder={field.placeholder}
              required={field.required}
              className={`${className} rounded-l-none!`}
            />
          </div>
        ) : (
          <input
            id={field.id}
            type={field?.type ?? 'text'}
            name={field.model}
            placeholder={field.placeholder}
            required={field.required}
            className={className}
          />
        )}
        {field.icon && <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5">{field.icon}</div>}
      </div>
    </div>
  )
}

export default Input
