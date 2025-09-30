import UserQuestion from '@svg/userQuestion.svg'
import Safe from '@svg/safe.svg'
import Cells from '@svg/cells.svg'
import CheckmarkBadgeOutline from '@svg/checkmarkBadgeOutline.svg'
import UserAccount from '@svg/userAccount.svg'
import LegalDocument from '@svg/legalDocument.svg'

import Typography from '@components/common/Typography'
import RadialGradientBlur from '@components/common/RadialGradientBlur'
import Accordion from '@components/common/Accordion'

function FAQ() {
  const informations = [
    {
      icon: <UserQuestion />,
      title: 'About ThePayHub Ecosystem',
      description: 'Basic information about our platform and how to begin using our services',
    },
    {
      icon: <Safe />,
      title: 'Compliance, KYC & Onboarding',
      description: 'Questions about our tokenized payment platform and digital asset services',
    },
    {
      icon: <Cells />,
      title: 'Using PXG, XPZ, Mazzera & Others',
      description: 'Information about our global banking infrastructure and fiat payment services',
    },
    {
      icon: <CheckmarkBadgeOutline />,
      title: 'Affiliates, Vendors & White Labels',
      description: 'Technical questions about integrating with our platforms and using our APIs',
    },
    {
      icon: <UserAccount />,
      title: 'Accounts & Services',
      description: 'Help with managing your ThePayHub account, settings, and preferences',
    },
    {
      icon: <LegalDocument />,
      title: 'Security, Support & Legal',
      description: 'Information about our security measures and regulatory compliance',
    },
  ]

  const faqs = [
    {
      title: 'What are the main benefits of using ThePayHub?',
      description:
        'ThePayHub simplifies access to multiple financial services, enhances transaction efficiency, and provides a unified compliance framework.',
    },
    {
      title: 'How do I get started with ThePayHub?',
      description:
        'To get started, visit our website, complete the registration form, and undergo the onboarding process.',
    },
    {
      title: 'What kind of support does ThePayHub offer?',
      description:
        'ThePayHub provides 24/7 customer support, onboarding assistance, and dedicated account managers for business clients.',
    },
    {
      title: 'Is there a fee for using ThePayHub services?',
      description: 'Yes, ThePayHub charges fees which vary by service type, transaction volume, and currency.',
    },
    {
      title: 'How can I track my transactions?',
      description:
        'You can track transactions via the ThePayHub dashboard, which provides real-time updates and records.',
    },
    {
      title: 'What currencies does ThePayHub support?',
      description:
        'ThePayHub supports a variety of currencies, including USD, EUR, and local currencies depending on the service provider.',
    },
    {
      title: 'Can I integrate ThePayHub with my existing systems?',
      description:
        'Yes, ThePayHub offers API integrations to connect with your existing financial systems and platforms.',
    },
    {
      title: 'What measures does ThePayHub take for fraud prevention?',
      description:
        'ThePayHub employs advanced fraud detection algorithms and a robust monitoring system to safeguard transactions.',
    },
    {
      title: 'How long does onboarding take?',
      description: 'Onboarding duration varies but typically takes 3-5 business days, subject to compliance checks.',
    },
    {
      title: 'What happens if I forget my account password?',
      description: "You can reset your password through the 'Forgot Password' link on the login page.",
    },
    {
      title: 'Are there any withdrawal limits?',
      description: 'Withdrawal limits vary based on your account type, transaction history, and compliance status.',
    },
    {
      title: 'Can I change my account details after registration?',
      description: 'Yes, account details can be updated by contacting support, subject to verification.',
    },
    {
      title: 'What is the process for reporting issues?',
      description: 'Issues can be reported via email or through the support section on our website.',
    },
    {
      title: 'Does ThePayHub offer multi-currency accounts?',
      description: 'Yes, ThePayHub provides multi-currency accounts to facilitate international transactions.',
    },
    {
      title: 'What customer verification methods are used?',
      description:
        'ThePayHub uses a combination of document verification, biometric checks, and real-time identity validation.',
    },
    {
      title: 'Can businesses from any country access ThePayHub?',
      description: "Access is subject to compliance with local regulations and ThePayHub's own eligibility criteria.",
    },
    {
      title: 'What type of businesses can benefit from ThePayHub?',
      description:
        'ThePayHub is designed for SMEs, large corporations, and fintech startups needing streamlined payment solutions.',
    },
    {
      title: 'Is there a mobile app for ThePayHub?',
      description: 'Yes, ThePayHub offers a mobile app for easier management of accounts and transactions on-the-go.',
    },
    {
      title: 'Can I automate my payments through ThePayHub?',
      description: 'Yes, ThePayHub allows for automated payment scheduling and recurring billing features.',
    },
    {
      title: 'What security certifications does ThePayHub hold?',
      description: 'ThePayHub adheres to PCI DSS compliance standards and is certified by relevant regulatory bodies.',
    },
    {
      title: 'How often does ThePayHub update its technology?',
      description: 'ThePayHub continuously updates its technology to ensure security, efficiency, and compliance.',
    },
    {
      title: 'Can I view transaction history?',
      description: 'Yes, users can access their complete transaction history via the ThePayHub dashboard.',
    },
    {
      title: 'What is the customer feedback process?',
      description: 'Customer feedback can be submitted through surveys and direct support interactions.',
    },
  ]

  return (
    <div className="flex flex-col gap-24 items-center">
      {/* Top */}
      <div className="rounded-3xl overflow-hidden w-full">
        <div className="bg-[url('/images/common-top.webp')] bg-top bg-cover w-full h-[320px] flex items-center justify-center relative">
          <Typography size="xxl">FAQ</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-12 pt-12 pb-10 relative">
        <RadialGradientBlur />
        <div className="flex flex-col gap-4">
          <Typography size="lg">Frequently Asked Questions</Typography>
          <Typography size="md2">
            Find answers to common questions about ThePayHub&apos;s solutions and services
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {informations.map((info, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="w-12 h-12">{info.icon}</span>
              <Typography size="md3">{info.title}</Typography>
              <Typography size="md2">{info.description}</Typography>
            </div>
          ))}
        </div>
      </div>
      {/* FAQS */}
      <div className="flex flex-col gap-20 pt-12 pb-10 relative max-w-[1200px] w-full">
        <RadialGradientBlur />
        <div className="flex flex-col gap-4 items-center">
          <Typography size="xl">Most Common Questions</Typography>
          <Typography size="md2">Quick answers to our most frequently asked questions</Typography>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} description={faq.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
