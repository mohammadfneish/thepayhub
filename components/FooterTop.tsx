'use client'

import RadialGradientBlur from './common/RadialGradientBlur'
import Typography from './common/Typography'
import Button from './common/Button'
import Divider from './common/Divider'

import AwsLogo from '@svg/awsLogo.svg'
import AlchemyLogo from '@svg/alchemyLogo.svg'
import PolygonLogo from '@svg/polygonLogo.svg'
import MetaMapLogo from '@svg/metaMapLogo.svg'
import ChevronRight from '@svg/chevronRight.svg'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'

// {
//   showLogos = true,
//   title,
//   description,
//   buttonText,
// }: {
//   showLogos?: boolean
//   title?: string
//   description?: string
//   buttonText?: string
// }

function FooterTop() {
  const pathname = usePathname()
  const [showLogos, setShowLogos] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [buttonText, setButtonText] = useState('')

  useEffect(() => {
    switch (pathname) {
      case '/industry':
        setShowLogos(false)
        setTitle('Ready to Scale?')
        setDescription(
          'Whether you operate a wholesale business or a cutting-edge fintech, ThePayHub provides the infrastructure you need to achieve your goals and thrive in the digital economy.',
        )
        setButtonText('Start Today')
        break

      case '/solutions':
        setShowLogos(false)
        setTitle('Custom Deployments')
        setDescription(
          'We offer bespoke solutions for fintechs, banks, or enterprise platforms that need to launch their own token infrastructure or compliant treasury system.',
        )
        setButtonText('Get in Touch')
        break
      default:
        setShowLogos(true)
        setTitle('Trusted by companies worldwide')
        setDescription(
          'Over 4,000 businesses rely on our infrastructure to process more than $90 million in monthly transaction volume. Join the growing network of forward-thinking companies transforming how they manage global payments.',
        )
        setButtonText('Start Today')
    }
  }, [pathname])

  return (
    <div className="overflow-hidden w-full relative mt-20">
      <div className="bg-[url('/images/usxp-earth.webp')] bg-bottom bg-cover w-full min-h-[500px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-center items-center ">
        <RadialGradientBlur inset={250} />

        <div className="flex flex-col gap-20 justify-center items-center w-full">
          <div className="flex flex-col justify-center gap-12 max-w-[750px]">
            <Typography size="xl" className="text-center">
              {title}
            </Typography>

            <Typography size="md2" className="text-center">
              {description}
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <Link href="/contact">
              <Button variant="primary" className="min-w-fit" postIcon={<ChevronRight />}>
                {buttonText}
              </Button>
            </Link>
          </div>
          {showLogos && (
            <div className="flex flex-col gap-10 w-full">
              <Divider />
              <div className="flex justify-evenly flex-wrap md:flex-nowrap w-full gap-10">
                <AwsLogo className="w-24 h-14 md:w-[136px] md:h-[89px]" />
                <AlchemyLogo className="w-[220px] h-16 md:w-[320px] md:h-[70px]" />
                <PolygonLogo className="w-40 h-[50px]  md:w-[265px] md:h-[52px]" />
                <MetaMapLogo className="w-32 h-16 md:w-[200px] md:h-[68px]" />
              </div>
              <Divider className="mb-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FooterTop
