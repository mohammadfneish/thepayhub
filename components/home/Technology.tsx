'use client'
import Typography from '@components/common/Typography'
import Image, {StaticImageData} from 'next/image'
import Button from '@components/common/Button'

import GksSolutionsLogo from '@images/gkssolutions-logo.png'
import MasseraLogo from '@images/massera-logo.png'
import MoonlightLogo from '@images/moonlight-logo.png'
import ChevronRightFill from '@svg/chevronRightFill.svg'
import NavigationArrowLeft from '@svg/navigationArrowLeft.svg'
import NavigationArrowRight from '@svg/navigationArrowRight.svg'
import {useEffect, useState} from 'react'
import RadialGradientBlur from '@components/common/RadialGradientBlur'

interface Card {
  imageSrc: StaticImageData
  imgWidth?: number
  title: string
  description: string
}

function Technology() {

  const cards: Card[] = [
    {
      imageSrc: GksSolutionsLogo,
      imgWidth: 128,
      title: 'Global compliance and fund routing',
      description:
        'Atrusted partner in transforming traditional B2B operations through secure, efficient, and transparent ledger-based systems. By using the power of blockchain and tokenization.',
    },
    {
      imageSrc: MasseraLogo,
      title: 'Cross-Border Liquidity Provider',
      description:
        'Cross-border payment processor and liquidity provider that facilitates international settlements  through secure banking rails and supports fiat conversions for digital asset ecosystems.',
    },
    {
      imageSrc: MoonlightLogo,
      title: 'FX and Merchant Services',
      description:
        'Moonlight is a financial service provider that facilitates currency conversion and liquidity management for stablecoin transactions within connected digital  payment platforms.',
    },
  ]

  return (
    <div className="flex flex-col gap-20 relative w-full">
      <RadialGradientBlur/>
      <Typography size="xl" className='text-center'>The Underlying Technology</Typography>
      <div className="flex flex-col gap-6">
        <div id="scrollable" className="flex flex-nowrap gap-6 h-full overflow-x-auto no-scrollbar">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div className="flex gap-2 justify-end items-center text-white">
          <LeftArrow />
          <RightArrow />
        </div>
      </div>
    </div>
  )
}

export default Technology

const Card = (card: Card) => {
  return (
    <div className="flex flex-col min-w-[350px] max-w-[450px] border border-soft-200 rounded-2xl bg-soft-100 py-6 px-3">
      <div className="mb-auto" style={{width: card.imgWidth ?? 320 + 'px', height: '120px'}}>
        <Image
          src={card.imageSrc}
          alt={card.title}
          width={card.imgWidth ?? 320}
          height={120}
          className={`w-full h-[120px] object-contain`}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '320px',
            maxHeight: '120px',
          }}
        />
      </div>
      <div className="flex flex-col flex-1 gap-2.5 px-3 py-6">
        <Typography size="lg2">{card.title}</Typography>
        <Typography size="md2" className="flex-1">
          {card.description}
        </Typography>
        <Button variant="plain" postIcon={<ChevronRightFill />} className="w-fit ml-auto hover:bg-[#211d2d]">
          Learn More
        </Button>
      </div>
    </div>
  )
}

const LeftArrow = () => {
  const handleClicked = () => {
    console.log('clicked')
    const div = document.getElementById('scrollable')
    if (!div) return

    const scrollLeft = div.scrollLeft ?? 0
    const newScroll = scrollLeft - 375

    if (newScroll > 0) {
      div.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      })
    } else {
      div.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <span onClick={handleClicked} className="opacity-50 hover:opacity-100 cursor-pointer">
      <NavigationArrowLeft />
    </span>
  )
}
const RightArrow = () => {
  const handleClicked = () => {
    const div = document.getElementById('scrollable')
    if (!div) return
    
    const scrollLeft = div.scrollLeft ?? 0
    const newScroll = scrollLeft + 375

    if (newScroll > 0) {
      div.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      })
    } else {
      div.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <span onClick={handleClicked} className="opacity-50 hover:opacity-100 cursor-pointer">
      <NavigationArrowRight />
    </span>
  )
}
