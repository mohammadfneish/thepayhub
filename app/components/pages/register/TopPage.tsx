'use client'

export default function TopPage() {
  return (
    <div className="pt-20 h-auto bg-no-repeat bg-[url(/images/cubes.webp)]">
      <div className="pt-20 relative px-5 bg-no-repeat bg-contain bg-right lg:ml-[6rem] xl:ml-[10rem] lg:bg-[url(/images/register/globo.webp)]">
        <div className="pt-20 flex flex-col items-center lg:items-start justify-start">
          <h1 className="text-4xl font-bold text-secondary-500 text-center lg:text-left">
            Welcome to ThePayHub Sign-Up Portal
          </h1>
          <p className="text-xl mt-4 text-white text-left my-5 max-w-[600px]">
            Your One-Stop Access to a World of Payment Solutions Join
            <br />
            ThePayHub and instantly unlock access to a complete suite of financial services across our global ecosystem.
            Whether you’re a business, fintech, or enterprise, one registration connects you to all our affiliated
            platforms — from traditional banking to tokenized payments.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-start">
          <h1 className="text-4xl font-bold text-secondary-500 text-center lg:text-left">
            Why Sign Up With ThePayHub?
          </h1>
          <div className="text-xl mt-4 text-white text-left my-5 max-w-[600px]">
            <ul className="list-disc">
              <li>
                Unified KYC & Compliance: Complete one onboarding process and gain access to multiple platforms — no
                need to repeat verification.
              </li>
              <li>
                Access All TPH Vendors & Services:
                <ul className="list-disc ml-5">
                  <li>PXG - USD settlement & wire services</li>
                  <li>XPZ - Token-based payment gateway</li>
                  <li>Moonlight - FX & liquidity services</li>
                  <li>GKS - Global compliance and fund routing</li>
                  <li>Mazzera - Swift & local payouts</li>
                  <li>STM & NSegundos - Crypto-to-fiat & fiat-to-crypto in LATAM & Europe</li>
                </ul>
              </li>
              <li>Built for Business: Ideal for wholesalers, fintechs, merchants, OTC desks, and digital platforms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
