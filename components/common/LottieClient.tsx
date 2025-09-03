'use client'
import Lottie, { LottieComponentProps } from 'lottie-react'

function LottieClient({animationData, ...props}: LottieComponentProps) {
  return <Lottie animationData={animationData} loop autoplay {...props} />
}

export default LottieClient
