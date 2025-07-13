'use client'

import Image from 'next/image'
import {ourOfficesData} from '../../../data/contact'

export default function OurOffices() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-secondary-500 mt-5 p-5">Our Global Offices</h1>
        <p className="text-xl my-4 px-5 text-white text-center max-w-[450px]">
          Want to reach us directly? Visit us at one of our locations around the world
        </p>
      </div>
      <div className="w-[100%] overflow-x-auto scrollable-container items-start justify-start flex flex-row items-stretch gap-6 px-5 sm:w-auto sm:inline-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ourOfficesData.map((item, index) => (
          <div key={index} className="flex flex-col bg-card border border-primary-300 rounded-2xl min-w-[250px]">
            <Image
              src={item.img}
              alt={item.location}
              width={0}
              height={0}
              sizes="100px"
              className="w-full h-[150px] rounded-t-2xl"
            />
            <div className="px-5 flex flex-col gap-3 flex-1">
              <h3 className="text-md mt-5 mb-2 font-bold text-white text-left whitespace-nowrap">{item.location}</h3>
              {item.address?.length > 0 && (
                <p className="text-sm my-3 text-white text-left whitespace-pre flex-1">{item.address.join('\n')}</p>
              )}
              {(item.phone?.length > 0 || item.email?.length > 0) && (
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-white text-left">
                    <span className="font-bold">Phone:</span>{' '}
                    <a href={`tel:${item.phone}`} className="font-semibold text-secondary-500">
                      {item.phone}
                    </a>
                  </p>
                  <p className="text-sm text-white text-left">
                    <span className="font-bold">Email:</span>{' '}
                    <a href={`mailto:${item.email}`} className="font-semibold text-secondary-500">
                      {item.email}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
