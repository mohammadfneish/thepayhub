import {useState} from 'react'
import {toast} from 'react-hot-toast'

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false)

  const sendData = async () => {
    if (loading) return

    const fields = ['firstName', 'lastName', 'email', 'phone', 'company', 'message', 'inquiry']
    try {
      const formData = new FormData()
      formData.append('func', 'contact')

      let hasError = false
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        const val = (document.getElementById(field) as HTMLInputElement)?.value
        if (!val) {
          toast.error(`${field} is required`)
          hasError = true
          break
        } else {
          formData.append(field, val)
        }
      }

      if (hasError) {
        return
      }

      setLoading(true)
      const resp: Response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
      const json = await resp.json()

      if (json.success) {
        toast.success(json.message)
      } else {
        toast.error(json.message)
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong')
    }
    setLoading(false)
    // reset the form
    for (let i = 0; i < fields.length; i++) {
      ;(document.getElementById(fields[i]) as HTMLInputElement).value = ''
    }
  }

  return (
    <div className="form w-full h-full flex flex-col items-center gap-3">
      <div className="w-full flex flex-col md:flex-row items-center gap-4">
        <div className="flex flex-col gap-4 w-full md:w-[calc(50%-5px)]">
          <label className="text-sm text-gray-400" htmlFor="firstName">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            className="bg-transparent border border-gray-200 p-4 rounded-lg text-sm"
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[calc(50%-5px)]">
          <label className="text-sm text-gray-400" htmlFor="lastName">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            className="bg-transparent border border-gray-200 p-4 rounded-lg text-sm"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-4">
        <div className="flex flex-col gap-4 w-full md:w-[calc(50%-5px)]">
          <label className="text-sm text-gray-400" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="text"
            className="bg-transparent border border-gray-200 p-4 rounded-lg text-sm"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[calc(50%-5px)]">
          <label className="text-sm text-gray-400" htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            type="text"
            className="bg-transparent border border-gray-200 p-4 rounded-lg text-sm"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-4">
        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400" htmlFor="company">
            Company Name *
          </label>
          <input
            id="company"
            type="text"
            className="bg-transparent border border-gray-200 p-4 rounded-lg text-sm"
            placeholder="Enter your company name"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-4">
        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400" htmlFor="inquiry">
            Inquiry Type *
          </label>
          <select id="inquiry" className="bg-transparent border border-gray-200 p-4 rounded-lg">
            <option value="business" className="text-black">
              Business Inquiry
            </option>
            <option value="product" className="text-black">
              Product Inquiry
            </option>
            <option value="other" className="text-black">
              Other
            </option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-4">
        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            className="bg-transparent border border-gray-200 p-4 rounded-lg"
            rows={5}
            placeholder="Enter your message"></textarea>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-4">
        {loading ? (
          <div className="bg-transparent border border-secondary-500 p-4 rounded-xl flex items-center justify-center w-[100px]">
            <div className="loader"></div>
          </div>
        ) : (
          <button
            onClick={sendData}
            className="bg-secondary-500 hover:bg-secondary-600 text-black py-2 px-4 rounded-lg">
            Submit message
          </button>
        )}
      </div>
    </div>
  )
}
