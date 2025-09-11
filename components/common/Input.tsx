import React from 'react'

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

function Input({field, errors = []}: {field: Field; errors: string[]}) {
  const className = `w-full rounded-2xl p-2.5 border border-soft-200 outline-none bg-soft-100 ${
    field.required && errors.includes(field.model) ? 'border border-error' : ''
  } ${field.icon ? 'pl-10' : ''}`

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
      {field.required && errors.includes(field.model) && <p className="text-error text-xs">This field is required</p>}
    </div>
  )
}

export default Input
