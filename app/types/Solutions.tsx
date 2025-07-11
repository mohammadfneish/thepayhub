interface Platforms {
  name: string
  symbol: string
  problem: string
  solution: string
  img: string
  lists: Array<string>
}

interface TailoredSolution {
  name: string
  desc: string
}

interface PayHubFeature {
  feature: string
  traditionalSolution: string
  thePayHubSolution: string
}
