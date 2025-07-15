interface Category {
  title: string
  desc: string
  icon: CallableFunction
}

interface FAQ {
  question: string
  answer: string
  category?: string
  extras?: Array<string>
}
