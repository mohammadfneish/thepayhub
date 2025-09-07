import React from 'react'
import RadialGradientBlur from './common/RadialGradientBlur'
import Typography from './common/Typography'
import Button from './common/Button'
import Divider from './common/Divider'

import AwsLogo from '@svg/awsLogo.svg'
import AlchemyLogo from '@svg/alchemyLogo.svg'
import PolygonLogo from '@svg/polygonLogo.svg'
import MetaMapLogo from '@svg/metaMapLogo.svg'
import ChevronRight from '@svg/chevronRight.svg'

function FooterTop({
  showLogos = true,
  title,
  description,
  buttonText,
}: {
  showLogos?: boolean
  title?: string
  description?: string
  buttonText?: string
}) {
  return (
    <div className="overflow-hidden w-full relative">
      <div className="bg-[url('/images/usxp-earth.webp')] bg-bottom bg-cover w-full h-[800px] flex flex-col justify-center items-center ">
        <RadialGradientBlur inset={250} />

        <div className="flex flex-col gap-20 justify-center items-center w-full">
          <div className="flex flex-col justify-center gap-12 max-w-[750px]">
            <Typography size="xl" className="text-center">
              {title ?? 'Trusted by companies worldwide'}
            </Typography>

            <Typography size="md2" className="text-center">
              {description ??
                'Over 4,000 businesses rely on our infrastructure to process more than $65 million in monthly transaction volume. Join the growing network of forward-thinking companies transforming how they manage global payments.'}
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <Button variant="primary" className="min-w-fit" postIcon={<ChevronRight />}>
              {buttonText ?? 'Start Today'}
            </Button>
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
              <Divider />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FooterTop
