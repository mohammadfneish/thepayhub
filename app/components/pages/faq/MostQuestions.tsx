'use client'

import {useState} from 'react'
import {faqsData} from '../../../data/faq'

export default function MostQuestions() {
  const [open, setOpen] = useState(0)

  return (
    <div className="pt-10 h-auto">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-secondary-500 px-5 text-center max-w-[500px]">
            Most Common Questions
          </h1>
          <p className="text-xl mt-2 text-white text-center p-5 my-5">
            Quick answers to our most frequently asked questions
          </p>
          <div className="flex flex-col items-center gap-6 w-full">
            {faqsData.map((item, index) => (
              <div
                key={index}
                className="mx-auto md:mx-0 bg-card border border-primary-300 rounded-2xl flex flex-col items-center lg:items-start w-full max-w-[90%]">
                <div className="flex flex-row items-center justify-between w-full px-5 pt-5 pb-4">
                  <h3 className="flex-1 text-md font-bold text-secondary-500 text-center lg:text-left">
                    {item.question}
                  </h3>
                  <div
                    onClick={() => setOpen(index == open ? -1 : index)}
                    className="cursor-pointer flex flex-col justify-center items-center border border-primary-300 rounded-full w-8 h-8 bg-gray-500">
                    <span className="text-2xl font-bold ">{open === index ? '-' : '+'}</span>
                  </div>
                </div>
                {open === index && (
                  <div className="leading-6 text-sm mt-2 text-gray-400 p-5 flex-1 bg-primary-500 rounded-b-2xl w-full">
                    <div className="mb-1">{item.answer}</div>
                    {item.extras?.map((extra, index) => (
                      <div key={index} className="ml-2 mb-1">
                        {extra}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
