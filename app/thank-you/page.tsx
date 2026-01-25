import Typography from '@components/common/Typography'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center">
      <p style={{fontSize: '50px'}}>🎉</p>
      <Typography size="xl">Thank you</Typography>
      <Typography size="md" className="max-w-[200px]">
        Your message has been successfully submitted. We’ll get back to you shortly.
      </Typography>
      <Link href="/">
        <span className="text-primary underline">Back to home</span>
      </Link>
    </div>
  )
}
