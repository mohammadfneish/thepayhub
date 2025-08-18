export const faqCategories: Array<Category> = [
  {
    title: 'About ThePayHub Ecosystem',
    desc: 'Basic information about our platform and how to begin using our services',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="#070e28"
          d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"
        />
      </svg>
    ),
  },
  {
    title: 'Compliance, KYC & Onboarding',
    desc: 'Questions about our tokenized payment platform and digital asset services',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="#070e28"
          d="M3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v20l-1.5-1.5L18 22l-1.5-1.5L15 22l-1.5-1.5L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5zm3-5h12v-2H6zm0-4h12v-2H6zm0-4h12V7H6z"
        />
      </svg>
    ),
  },
  {
    title: 'Using PXG, XPZ, Mazzera & Others',
    desc: 'Information about our global banking infrastructure and fiat payment services',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="#070e28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <rect width="18.5" height="3" x="2.75" y="18.376" rx="1" />
          <path d="M11.04 3.15L3.27 7.4a1 1 0 0 0-.52.877v.997a.6.6 0 0 0 .6.6h17.3a.6.6 0 0 0 .6-.6v-.997a1 1 0 0 0-.52-.877l-7.77-4.25a2 2 0 0 0-1.92 0M5.25 9.874v8.51m13.5-8.51v8.51m-4.25-8.51v8.51m-5-8.51v8.51" />
        </g>
      </svg>
    ),
  },
  {
    title: 'Affiliates, Vendors & White Labels',
    desc: 'Technical questions about integrating with our platforms and using our APIs',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 640 512">
        <path
          fill="#070e28"
          d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-80.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2m22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h108.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8z"
        />
      </svg>
    ),
  },
  {
    title: 'Accounts & Services',
    desc: 'Help with managing your ThePayHub account, settings, and preferences',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="#070e28"
          d="M17 15q-1.05 0-1.775-.725T14.5 12.5q0-1.05.725-1.775T17 10q1.05 0 1.775.725T19.5 12.5q0 1.05-.725 1.775T17 15Zm-5 5v-1.4q0-.6.313-1.113t.887-.737q.9-.375 1.863-.563T17 16q.975 0 1.938.188t1.862.562q.575.225.888.738T22 18.6V20H12Zm-2-8q-1.65 0-2.825-1.175T6 8q0-1.65 1.175-2.825T10 4q1.65 0 2.825 1.175T14 8q0 1.65-1.175 2.825T10 12Zm-8 8v-3q0-.65.45-1.288T3.775 14.6q1.35-.725 2.95-1.163T10 13q.675 0 1.438.1t1.562.3v1.3q-.35.125-.6.25t-.525.275q-.45-.125-.938-.175T10 15q-1.45 0-2.838.35t-2.662 1q-.25.125-.375.35T4 17.2v.8h6v2H2Zm8-2Zm0-8q.825 0 1.413-.588T12 8q0-.825-.588-1.413T10 6q-.825 0-1.413.588T8 8q0 .825.588 1.413T10 10Zm0-2Z"
        />
      </svg>
    ),
  },
  {
    title: 'Security, Support & Legal',
    desc: 'Information about our security measures and regulatory compliance',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="#070e28"
          d="M12 19.9q2.425-.75 4.05-2.962T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12zm0 2q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9"
        />
      </svg>
    ),
  },
]

export const faqsData: Array<FAQ> = [
  {
    question: 'What is ThePayHub?',
    answer:
      'ThePayHub is a fintech infrastructure platform that brings together licensed payment gateways, digital banking rails, FX providers, and crypto on/off ramps into one unified ecosystem. It enables users to access multiple financial services from different fintech partners through a single point of access.',
    category: 'About ThePayHub Ecosystem',
  },
  {
    question: 'Which companies are part of ThePayHub ecosystem?',
    answer: 'ThePayHub currently integrates the following affiliated service providers and vendors:',
    extras: [
      '● PayXGlobal (PXG) - USD digital banking services (Fedwire, SWIFT, ACH)',
      '● Xpayz (XPZ) - Token-based payment gateway for B2B merchants',
      '● Moonlight SA - FX and merchant services provider',
      '● GKS Solutions - Operational liquidity and settlement processor',
      '● Mazzera - Cross-border liquidity and token conversion bridge',
      '● STM - Licensed OTC crypto desk (Poland + DMCC Dubai in process)',
    ],
    category: 'About ThePayHub Ecosystem',
  },
  {
    question: 'Can other fintech companies or payment providers join ThePayHub?',
    answer:
      'Yes. ThePayHub accepts new fintechs, payment processors, and liquidity partners into the ecosystem if they meet TPH’s due diligence, compliance, infrastructure compatibility, and service standards.',
    category: 'About ThePayHub Ecosystem',
  },
  {
    question: 'How does ThePayHub operate?',
    answer:
      'ThePayHub acts as a facilitator. It provides a central onboarding layer and compliance gateway, giving clients instant access to multiple services and vendors—all sharing one unified KYC/AML profile.',
    category: 'About ThePayHub Ecosystem',
  },
  {
    question: 'Do I need to complete separate KYC for each service (PXG, XPZ, etc.)?',
    answer:
      'No. ThePayHub uses a unified compliance model. Once your KYC is approved, it applies across all affiliated platforms, eliminating the need for duplicate onboarding.',
    category: 'Compliance, KYC & Onboarding',
  },
  {
    question: 'Who handles compliance and KYC verifications?',
    answer:
      'KYC and AML verifications are managed centrally by ThePayHub, in partnership with trusted vendors such as MetaMap. All partners recognize and accept the shared compliance profile.',
    category: 'Compliance, KYC & Onboarding',
  },
  {
    question: 'Is ThePayHub a regulated financial institution?',
    answer:
      'ThePayHub is currently finalizing its MSB (Money Services Business) license. In the meantime, it operates through regulated and licensed partners, ensuring all activities meet international compliance standards.',
    category: 'Compliance, KYC & Onboarding',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. ThePayHub follows strict data protection protocols, including encrypted data storage and GDPR-compliant handling, ensuring your information is kept secure. 🏦 Using PXG, XPZ, Mazzera & Others.',
    category: 'Compliance, KYC & Onboarding',
  },
  {
    question: 'What is PayXGlobal (PXG)?',
    answer:
      'PXG offers digital USD banking rails including SWIFT, Fedwire, ACH, and internal ledger transfers. It is designed for high-volume business transactions and international settlements.',
    category: 'Using PXG, XPZ, Mazzera & Others',
  },
  {
    question: 'What is Xpayz (XPZ)?',
    answer:
      'XPZ is a payment gateway that allows merchants to receive payments and clients to settle invoices using USXP—a proprietary token that operates within the closed ecosystem for fast and traceable settlement.',
    category: 'Using PXG, XPZ, Mazzera & Others',
  },
  {
    question: 'What is Mazzera’s role in the ecosystem?',
    answer:
      'Mazzera is a liquidity bridge between tokens and fiat. It supports currency conversion, cross-border transfers, and backend settlement for ecosystem flows such as USXP to fiat or vice versa.',
    category: 'Using PXG, XPZ, Mazzera & Others',
  },
  {
    question: 'Can I move funds between XPZ and PXG?',
    answer:
      'Yes. Clients can withdraw USXP from XPZ and have it internally routed through GKS and Mazzera, which results in a fiat top-up to their PXG account. This flow is handled entirely through internal ledger processes.',
    category: 'Using PXG, XPZ, Mazzera & Others',
  },
  {
    question: 'Can I fund XPZ using PXG or external fiat sources?',
    answer: 'You can:',
    extras: [
      '● Fund XPZ via PXG transfers',
      '● Purchase tokens via card',
      '● Convert local fiat via Mazzera or Nsegundos (where available)',
    ],
    category: 'Using PXG, XPZ, Mazzera & Others',
  },
  {
    question: 'What is USXP?',
    answer:
      'USXP is a ledger-based token used within XPZ. It is not a public stablecoin or cryptocurrency, but a proprietary settlement token used for invoice payment, tracking, and internal transfer within the ThePayHub ecosystem.',
    category: 'Using PXG, XPZ, Mazzera & Others',
  },
  {
    question: 'What is the role of GKS, Moonlight, STM, Mazzera, and Nsegundos?',
    answer: 'Below is a list of all ThePayHub partners:',
    extras: [
      '● GKS Solutions - Handles backend ledger transfers and liquidity for PXG and XPZ',
      '● Moonlight SA - Offers FX services and merchant top-ups, especially in LATAM',
      '● Mazzera - Provides fiat/token liquidity for international settlement',
      '● STM - Licensed OTC crypto desk supporting fiat on/off ramps and white-label services',
      '● Nsegundos - MSB-registered fiat access provider for Latin America',
    ],
    category: 'Affiliates, Vendors & White Labels',
  },
  {
    question: 'Are these vendors owned by ThePayHub?',
    answer:
      'No. These companies are independent affiliated service providers that operate under their own licenses. They are integrated with ThePayHub through formal partnerships and follow the same compliance framework.',
    category: 'Affiliates, Vendors & White Labels',
  },
  {
    question: 'Can new vendors or fintechs become part of ThePayHub?',
    answer:
      'Yes. ThePayHub welcomes partnerships with fintechs, payment platforms, and liquidity providers who meet TPH’s technology, compliance, and operational requirements.',
    category: 'Affiliates, Vendors & White Labels',
  },
  {
    question: 'Do I receive a standalone bank account through PXG?',
    answer:
      'PXG offers both standalone named accounts and pooled sub-accounts depending on your business profile, jurisdiction, and partner approval.',
    category: 'Accounts & Services',
  },
  {
    question: 'What services can I access once onboarded to ThePayHub?',
    answer: 'After onboarding, you can access:',
    extras: [
      '● USD bank accounts via PXG',
      '● Token payments via XPZ',
      '● Invoice and merchant payments via Moonlight',
      '● Crypto to fiat conversion via STM and Mazzera',
      '● Local currency access in LATAM via Nsegundos',
    ],
    category: 'Accounts & Services',
  },
  {
    question: 'Can I use XPZ to pay invoices or merchants?',
    answer:
      'Yes. XPZ allows clients to settle invoices using USXP. Once paid, merchants receive the token in their XPZ wallet, which can be converted or withdrawn via internal rails (e.g., PXG or Moonlight).',
    category: 'Accounts & Services',
  },
  {
    question: 'Who do I contact for support?',
    answer: 'For support or onboarding help, contact:',
    extras: ['📧 Support@thepayhub.com'],
    category: 'Security, Support & Legal',
  },
  {
    question: 'How are transactions tracked?',
    answer:
      'All transactions are tracked via internal ledger systems across PXG, XPZ, and partner platforms. This ensures transparency, auditability, and regulatory compliance.',
    category: 'Security, Support & Legal',
  },
  {
    question: 'Can individual users or consumers sign up?',
    answer:
      'ThePayHub is a B2B platform. Consumer use is restricted and only approved on a case-by-case basis depending on jurisdiction and compliance eligibility.',
    category: 'Security, Support & Legal',
  },
  {
    question: 'What happens if one service (e.g. PXG or Moonlight) becomes unavailable?',
    answer:
      'ThePayHub’s ecosystem includes multiple vendors for redundancy. If one service is delayed or unavailable, alternatives can be used to maintain business continuity.',
    category: 'Security, Support & Legal',
  },
]
