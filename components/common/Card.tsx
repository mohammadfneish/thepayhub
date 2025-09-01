import React from 'react'
import Button from './Button'

interface Props {
  icon?: React.ReactNode
  title: string
  description: string
  list?: string[]
  vertical?: boolean
  content?: string
  currentIcon?: boolean
  className?: string
  button?: string
  link?: string
}

function Card({
  icon,
  title,
  description,
  list = [],
  className = '',
  button,
  vertical = true,
  content = 'lg',
  currentIcon = false,
  link,
}: Props) {
  return (
    <div
      className={`bg-primary-200 rounded-4xl shadow-md h-auto  ${
        vertical
          ? 'flex flex-col items-center justify-start p-10'
          : 'flex flex-col xl:flex-row justify-start lg:justify-center p-5 md:p-10 xl:p-24 '
      } gap-9 ${className}`}>
      {!currentIcon && icon ? (
        <span className="flex flex-col items-center justify-center p-5 rounded-full text-on-primary bg-primary-400 w-fit h-fit">
          {icon}
        </span>
      ) : (
        icon
      )}
      <div
        className={`flex flex-col ${vertical ? 'justify-center items-center' : 'ml-5'} ${
          content == 'sm' ? 'max-w-[400px]' : content == 'md' ? 'max-w-[530px]' : ''
        } gap-9`}>
        <p className={` ${vertical ? 'text-center' : ''} font-bold text-2xl`}>{title}</p>
        <p className={` ${vertical ? 'text-center' : ''} text-2xl`}>{description}</p>
        {list.length > 0 && (
          <ul>
            {list.map((item, index) => (
              <li key={index} className={`text-2xl list-disc ml-6`}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {!!link?.length ? (
        <Button variant="secondary" className="shadow-md mt-auto">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {button}
          </a>
        </Button>
      ) : (
        button?.length && (
          <Button variant="secondary" className="shadow-md mt-auto">
            {button}
          </Button>
        )
      )}
    </div>
  )
}

export default Card
