import Button from '@components/common/Button'
import Link from 'next/link'

export default function NotFound() {
  
  return (
    <div className="min-h-screen">
      <div
        className="py-40 h-auto bg-no-repeat bg-top overflow-hidden">
        <div className="my-5 py-5 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-secondary-500">404</h2>
          <h1 className="text-4xl font-bold text-secondary-500 my-5">Page Not Found</h1>
          <p className="text-sm font-bold mb-5 text-center px-5 text-secondary-400">
            Try again later or click on the button below
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
           <Link href={'/solutions'}>
             <Button variant="secondary" className="text-xl !font-bold">
               Explore our solutions
             </Button>
           </Link>
           <Link href={'/solutions'}>
             <Button variant="outline" className="text-xl !font-bold">
               Return to home
             </Button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
