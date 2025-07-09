// export const faqCategories: Array<Category> = [
//   {
//     title: 'Getting Started',
//     desc: 'Basic information about our platform and how to begin using our services',
//     icon: '🧩',
//   },
//   {
//     title: 'Xpayz (XPZ)',
//     desc: 'Questions about our tokenized payment platform and digital asset services',
//   },
//   {
//     title: 'PayXGlobal (PXG)',
//     desc: 'Information about our global banking infrastructure and fiat payment services',
//   },
//   {
//     title: 'Integration & API',
//     desc: 'Technical questions about integrating with our platforms and using our APIs',
//   },
//   {
//     title: 'Account Management',
//     desc: 'Help with managing your ThePayHub account, settings, and preferences',
//   },
//   {
//     title: 'Security & Compliance',
//     desc: 'Information about our security measures and regulatory compliance',
//     icon: '🧾',
//   },
// ]

export const faqCategories: Array<Category> = [
  {
    title: 'About ThePayHub Ecosystem',
    desc: 'Basic information about our platform and how to begin using our services',
    icon: '🧩',
  },
  {
    title: 'Compliance, KYC & Onboarding',
    desc: 'Questions about our tokenized payment platform and digital asset services',
    icon: '🧾',
  },
  {
    title: 'Using PXG, XPZ, Mazzera & Others',
    desc: 'Information about our global banking infrastructure and fiat payment services',
    icon: '🏦',
  },
  {
    title: 'Affiliates, Vendors & White Labels',
    desc: 'Technical questions about integrating with our platforms and using our APIs',
    icon: '🤝',
  },
  {
    title: 'Accounts & Services',
    desc: 'Help with managing your ThePayHub account, settings, and preferences',
    icon: '📋',
  },
  {
    title: 'Security, Support & Legal',
    desc: 'Information about our security measures and regulatory compliance',
    icon: '🔐',
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
      '● PayXGlobal (PXG) – USD digital banking services (Fedwire, SWIFT, ACH)',
      '● Xpayz (XPZ) – Token-based payment gateway for B2B merchants',
      '● Moonlight SA – FX and merchant services provider',
      '● GKS Solutions – Operational liquidity and settlement processor',
      '● Mazzera – Cross-border liquidity and token conversion bridge',
      '● STM – Licensed OTC crypto desk (Poland + DMCC Dubai in process)',
      '● Nsegundos – FinCEN-registered fiat payment access in Panama, Chile, Colombia, and Peru',
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
      '● GKS Solutions – Handles backend ledger transfers and liquidity for PXG and XPZ',
      '● Moonlight SA – Offers FX services and merchant top-ups, especially in LATAM',
      '● Mazzera – Provides fiat/token liquidity for international settlement',
      '● STM – Licensed OTC crypto desk supporting fiat on/off ramps and white-label services',
      '● Nsegundos – MSB-registered fiat access provider for Latin America',
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
