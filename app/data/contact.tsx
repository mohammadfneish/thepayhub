export const supportsData: Array<Supports> = [
  {
    title: 'Technical Support',
    desc: 'Need help with integration or experiencing technical issues? Our support engineers are here to assist.',
    button: 'Get Support',
    action: () => console.log('Get Support'),
  },
  {
    title: 'Sales Inquiry',
    desc: 'Interested in our solutions? Our sales team is ready to discuss how ThePayHub can help your business.',
    button: 'Contact Sales',
    action: () => console.log('Contact Sales'),
  },
  {
    title: 'Partnership Opportunities',
    desc: 'Interested in partnering with ThePayHub? Let`s explore how we can create value together.',
    button: 'Discuss Partnership',
    action: () => console.log('Discuss Partnership'),
  },
]

export const ourOfficesData: Array<OurOffices> = [
  {
    location: 'London',
    img: '/images/london.webp',
    address: ['123 Fintech Street', 'Canary Wharf', 'London, E14 5AB', 'United Kingdom'],
    phone: '+44 20 1234 5678',
    email: 'london@thepayhub.io',
  },
  {
    location: 'New York',
    img: '/images/newyork.webp',
    address: ['456 Finance Avenue', 'Floor 21', 'New York, NY 10001', 'United States'],
    phone: '+1 212 345 6789',
    email: 'newyork@thepayhub.io',
  },
  {
    location: 'Singapore',
    img: '/images/singapore.webp',
    address: ['789 Innovation Way', 'Marina Bay Financial Centre', 'Singapore 018983'],
    phone: '+65 6543 2109',
    email: 'singapore@thepayhub.io',
  },
]
