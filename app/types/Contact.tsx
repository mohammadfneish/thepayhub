interface Supports {
  title: string
  desc: string
  mailToText: string
  mailTo: string
}

interface OurOffices {
  img: string
  location: string
  address: Array<string>
  phone: string
  email: string
}

interface ApiResult {
  success: boolean
  message: string
  data: any
}
interface ApiResponse {
  status: Number
  data: ApiResult
}
