interface Category {
  title: string
  desc: string
  icon?: string
}

interface FAQ {
  question: string
  answer: string
  category?: string
  extras?: Array<string>
}
