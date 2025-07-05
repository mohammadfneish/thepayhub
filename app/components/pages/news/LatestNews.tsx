'use client'

import {useState} from 'react'
import Image from 'next/image'
import {newsData, newsCategories} from '../../../data/news'

export default function LatestNews() {
  const allNews = 'All'
  const [activeCategory, setActiveCategory] = useState<string>(allNews)
  return (
    <div className="container mx-3 md:mx-auto flex flex-col w-full items-center">
      <h1 className="text-4xl font-bold text-secondary-500 mt-5 p-5">Latest News</h1>

      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-5 w-full">
        <div className="flex flex-row gap-2 w-full overflow-x-auto scrollable-container items-center justify-center">
          <div
            onClick={() => setActiveCategory(allNews)}
            className={`bg-card border rounded-full px-5 py-2 whitespace-nowrap ${
              activeCategory === allNews ? 'border-secondary-500' : 'border-primary-500'
            }`}>
            {allNews}
          </div>
          {newsCategories.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(item.title)}
              className={`bg-card border rounded-full px-5 py-2 whitespace-nowrap ${
                activeCategory === item.title ? 'border-secondary-500' : 'border-primary-500'
              }`}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex flex-row items-stretch gap-5 w-full overflow-x-auto scrollable-container">
        {newsData.map(
          (item, index) =>
            (activeCategory === allNews || item.category == activeCategory) && (
              <div key={index} className="flex flex-col bg-card border border-primary-300 rounded-2xl w-[300px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100px"
                  className="w-full h-[180px] rounded-t-2xl"
                />
                <div className="flex flex-row justify-between items-center px-5 py-2">
                  <h5 className="text-sm font-bold text-secondary-500 whitespace-nowrap">{item.category}</h5>
                  <h5 className="text-sm font-bold text-secondary-500 whitespace-nowrap">{item.date}</h5>
                </div>
                <div className="px-5 flex flex-col flex-1 justify-end">
                  <h3 className="text-md font-bold text-white text-left">{item.title}</h3>
                  <p className="text-sm mt-1 mb-2 text-gray-400 text-left flex-1">{item.desc}</p>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}
