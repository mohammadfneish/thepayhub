'use client'
import Featured from '@images/news/featured.webp'
import New1 from '@images/news/news-1.webp'
import New2 from '@images/news/news-2.webp'
import New3 from '@images/news/news-3.webp'
import New4 from '@images/news/news-4.webp'
import New5 from '@images/news/news-5.webp'
import New6 from '@images/news/news-6.webp'

import Typography from '@components/common/Typography'
import {CheckIcon} from '@heroicons/react/24/outline'
import {useState} from 'react'
import Image, {StaticImageData} from 'next/image'
import FooterTop from '@components/FooterTop'

type News = {
  imageSrc: StaticImageData
  category: string
  date: string
  title: string
  desc: string
}

function News() {
  const newsCategories = ['All', 'Company News', 'Product Updates', 'Industry Insights', 'Events']
  const [selectedCategory, setSelectedCategory] = useState('All')
  const newsData: News[] = [
    {
      imageSrc: New1,
      category: 'Product Updates',
      date: 'May 10, 2025',
      title: 'TPH Nears Completion of U.S. MSB License',
      desc: 'ThePayHub is in the final stage of securing its U.S. Money Services Business (MSB) license. This will enhance its regulatory framework and allow affiliated fintechs and clients to operate under a robust and compliant ecosystem. Stay tuned for the official announcement.',
    },
    {
      imageSrc: New2,
      category: 'Company News',
      date: 'April 28, 2025',
      title: 'ThePayHub Opens New Office in Singapore to Serve APAC Clients',
      desc: 'Our expansion into Singapore marks a significant milestone in our mission to provide global financial infrastructure.',
    },
    {
      imageSrc: New3,
      category: 'Company News',
      date: 'April 28, 2025',
      title: 'TPH Ecosystem Hits $175M+ Monthly Volume',
      desc: 'In Q2 2025, total ecosystem volume across XPZ and PXG surpassed $175 million per month. With a consistent quarterly growth rate of 20%, TPH is on track to reach $300–$500 million in monthly volume by early 2026.',
    },
    {
      imageSrc: New4,
      category: 'Product Updates',
      date: 'April 10, 2025',
      title: 'XPZ Launches Built-In Token Payment Gateway',
      desc: 'XPZ now offers merchants a built-in payment gateway that supports tokenized invoice settlement using USXP. The gateway enables near-instant client payments and internal conversion for fiat payouts, with full compliance and transparency.',
    },
    {
      imageSrc: New5,
      category: 'Industry Insights',
      date: 'May 5, 2025',
      title: 'TPH Opens Door to New Fintech Affiliates',
      desc: 'ThePayHub welcomes new fintechs and payment providers to join its ecosystem. Applicants must meet internal KYC/AML standards and demonstrate strong compliance and tech integration capabilities. Successful affiliates gain access to shared infrastructure, faster onboarding, and ecosystem-wide liquidity.',
    },
    {
      imageSrc: New6,
      category: 'Company News',
      date: 'April 28, 2025',
      title: 'BRXP Token Goes Live for Brazilian Clients',
      desc: 'BRXP is now active within XPZ, enabling Brazilian users to buy, hold, and settle transactions using a compliant stable format. This is part of TPH’s ongoing initiative to simplify regional settlement while maintaining transparency and speed.',
    },
  ]
  return (
    <div className="flex flex-col gap-24 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/common-top.webp')] bg-top bg-cover w-full h-[320px] flex items-center justify-center relative">
          <Typography size="xxl">Latest News</Typography>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-soft-100 flex rounded-lg border border-soft-200">
        {newsCategories.map((category, index) => (
          <button
            onClick={() => setSelectedCategory(category)}
            key={index}
            className={`flex items-center justify-center h-12 py-2 px-4 ${
              index + 1 !== newsCategories.length ? 'border-r border-soft-200' : ''
            } font-medium text-xs ${selectedCategory === category ? 'bg-soft-200 text-white' : 'text-sub-600'}`}>
            {selectedCategory === category && <CheckIcon className="w-4 h-4 mr-2" />}
            {category}
          </button>
        ))}
      </div>

      {/* Featured */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-soft-200 lg:max-w-2/3">
          <Image
            src={Featured}
            alt="Featured"
            width={375}
            height={210}
            className="w-full md:w-1/2 h-[210px] md:h-full md:rounded-tr-2xl md:rounded-bl-2xl"
          />
          <div className="flex flex-col gap-10 justify-center p-6">
            <Typography size="md" className="text-primary-400! uppercase">
              Featured
            </Typography>
            <div className='flex flex-col gap-3'>
              <Typography size="lg" className="">
                Why We Use Blockchain?
              </Typography>
              <Typography size="md2" className="">
                Blockchain helps power the TPH ecosystem by making payments faster, more secure, and fully transparent.
                It keeps a clear record of every transaction so our clients and partners can trust the system and
                operate with confidence.
              </Typography>
            </div>
            <Typography size="sm" className="text-sub-600!">
              Mon, Sep 8 2025
            </Typography>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-6">
          {[...newsData]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3)
            .map((news, index) => (
              <CardSmall news={news} key={index} />
            ))}
        </div>
      </div>

      {/* News */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-[1200px]">
        {newsData.map(
          (news, index) =>
            (selectedCategory === 'All' || selectedCategory === news.category) && <Card news={news} key={index} />,
        )}
      </div>

      {/* Footer */}
      <FooterTop />
    </div>
  )
}

export default News

const Card = ({news}: {news: News}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-soft-100 p-2 rounded-2xl ">
      <div className="relative rounded-2xl overflow-hidden">
        <Image src={news.imageSrc} alt={news.title} width={375} height={210} className="w-full h-[210px]" />
      </div>
      <div className="flex flex-col gap-2 mb-auto">
        <Typography size="sm" className="text-primary-400! uppercase">
          {news.category}
        </Typography>
        <Typography size="sm" className="font-medium">
          {news.title}
        </Typography>
        <Typography size="sm" className="text-sub-600!">
          {news.desc}
        </Typography>
      </div>
      <Typography size="sm" className="text-sub-600!">
        {news.date}
      </Typography>
    </div>
  )
}

const CardSmall = ({news}: {news: News}) => {
  return (
    <div className="flex gap-3.5 p-2 ">
        <Image src={news.imageSrc} alt={news.title} width={140} height={140} className="min-w-[140px] max-h-[140px] rounded-2xl" />
      <div className="flex flex-col gap-3  p-2">
        <Typography size="sm" className="text-primary-400! uppercase">
          {news.category}
        </Typography>
        <Typography size="sm" className="font-medium">
          {news.title}
        </Typography>
        <Typography size="sm" className="text-sub-600!">
          {news.date}
        </Typography>
      </div>
    </div>
  )
}
