'use client'

export default function TopPage() {
  return (
    <div className="pt-20 h-auto bg-no-repeat bg-[url(/images/cubes.webp)]">
      <div className="pt-20 relative px-5 bg-no-repeat bg-contain bg-right lg:ml-[6rem] xl:ml-[10rem] lg:bg-[url(/images/register/globo.webp)]">
        <div className="pt-20 flex flex-col items-center lg:items-start justify-start">
          <h1 className="text-4xl font-bold text-secondary-500 text-left">Welcome to ThePayHub Sign-Up Portal</h1>
          <p className="leading-10 text-xl mt-4 text-white text-left my-5 max-w-[600px]">
            Your One-Stop Access to a World of Payment Solutions Join
            <br />
            ThePayHub and instantly unlock access to a complete suite of financial services across our global ecosystem.
            Whether you’re a business, fintech, or enterprise, one registration connects you to all our affiliated
            platforms — from traditional banking to tokenized payments.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center lg:items-start justify-start">
          <h1 className="text-4xl font-bold text-secondary-500 text-left">Why Sign Up With ThePayHub?</h1>
          <div className="leading-10 text-xl mt-4 text-white text-left my-5 max-w-[600px]">
            ThePayHub offers a unified KYC and compliance process, allowing you to onboard once and access multiple
            platforms without repeated verification. As a centralized gateway to all TPH vendors and services, it’s
            built specifically for wholesalers, fintechs, merchants, OTC desks, and digital platforms—making it the
            ideal solution for businesses that need speed, scale, and simplicity.
          </div>
        </div>
      </div>
    </div>
  )
}
