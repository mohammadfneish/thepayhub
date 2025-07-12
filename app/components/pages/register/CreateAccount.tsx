'use client'

import {useState} from 'react'
import {regiterProfiles, regiterPlatforms} from '../../../data/register'
import {toast} from 'react-hot-toast'

export default function CreateAccount() {
  const [selectedProfile, setSelectedProfile] = useState('Bussiness')
  const [loading, setLoading] = useState(false)
  const [uploadFiles, setUploadFiles] = useState<Array<string>>([])

  const sendData = async () => {
    if (loading) return

    const fields = ['firstName', 'lastName', 'email', 'phone', 'company']
    try {
      const formData = new FormData()
      formData.append('func', 'create-account')

      if (!selectedProfile) {
        toast.error('Please select a profile')
        return false
      } else {
        formData.append('profile', selectedProfile)
      }

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
        return false
      }

      const platforms = document.querySelectorAll('input[type=checkbox]:checked')
      if (!platforms.length) {
        toast.error('Please select at least one platform')
        return false
      }
      platforms.forEach(function (input, key) {
        formData.append(`platforms[${key}]`, (input as HTMLInputElement).value)
      })

      const files: FileList | null = (document.getElementById('docs') as HTMLInputElement).files
      if (!files?.length) {
        toast.error('Please select at least one document')
        return false
      }
      Array.from(files).forEach(function (file, key) {
        formData.append(`files[${key}]`, file)
      })

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
    ;(document.getElementById('docs') as HTMLInputElement).files = null
    for (let i = 0; i < fields.length; i++) {
      ;(document.getElementById(fields[i]) as HTMLInputElement).value = ''
    }
    document.querySelectorAll('input[type=checkbox]:checked').forEach(function (input) {
      ;(input as HTMLInputElement).checked = false
    })
    setSelectedProfile('Bussiness')
  }

  const handleFile = (e: any) => {
    let fileNames = []
    const files = e.target.files
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name + ` (${(files[i].size / (1024 * 1024)).toFixed(2)} MB)`)
      }
    }
    setUploadFiles(fileNames)
  }

  return (
    <div className="mb-20 py-20 h-auto bg-no-repeat bg-[url(/images/cubes.webp)]">
      <div className="pt-20 container mx-auto relative px-5 flex flex-col lg:flex-row items-center justify:between lg:justify-around gap-5">
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl">
          <div className="bg-card p-5 rounded-xl  flex flex-col items-start flex-1">
            <h2 className="text-2xl font-bold text-secondary-500">Create Your TPH Account</h2>
            <h5 className="text-lg my-3 text-secondary-500">1. Choose Your Profile</h5>
            <div className="w-full flex sm:flex-row flex-col sm:items-center gap-2 justify-between">
              {regiterProfiles.map((item, index) => (
                <button
                  key={index}
                  className={`cursor-pointer text-sm px-5 py-2 rounded-2xl ${
                    item.type == selectedProfile ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'
                  }`}
                  onClick={() => setSelectedProfile(item.type)}>
                  {item.name}
                </button>
              ))}
            </div>
            <div className="my-5 w-full h-px bg-linear-to-r from-secondary-500 to-secondary-400">&nbsp;</div>
            <h5 className="text-lg my-3 text-secondary-500">2. Submit Basic Details</h5>
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
            </div>
            <div className="my-5 w-full h-px bg-linear-to-r from-secondary-500 to-secondary-400">&nbsp;</div>
            <h5 className="text-lg mb-1 text-secondary-500">3. Platform Access Preferences</h5>
            <p className="text-sm mb-3 text-secondary-500">Select which platforms you want access to:</p>
            <div className="flex sm:flex-row flex-col sm:items-center gap-5 justify-between">
              {regiterPlatforms.map((item, index) => (
                <label className="cursor-pointer flex flex-row items-center gap-1" key={index}>
                  <input type="checkbox" name="platforms" value={item.type} />
                  {item.name}
                </label>
              ))}
            </div>
            <div className="my-5 w-full h-px bg-linear-to-r from-secondary-500 to-secondary-400">&nbsp;</div>
            <h5 className="text-lg mb-1 text-secondary-500">4. KYC Upload</h5>
            <p className="text-sm mb-3 text-secondary-500">Upload your required documents once:</p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-transparent border border-gray-200 p-4 rounded-lg text-sm w-[200px]"
                onClick={() => {
                  document.getElementById('docs')?.click()
                }}>
                Upload Documents
              </button>
              <input type="file" className="hidden" id="docs" multiple onChange={handleFile} />
              {uploadFiles?.length > 0 && (
                <div className="flex flex-row gap-2 overflow-x-auto scrollable-container items-center justify-center">
                  {uploadFiles.map((item, index) => (
                    <div key={index} className="m-2 rounded-lg border-b-1 border-gray-500 px-2 opacity-80">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {loading ? (
              <div className="bg-transparent border border-secondary-500 p-4 rounded-xl flex items-center justify-center w-[100px]">
                <div className="loader"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-secondary-500 text-primary-500 text-sm px-5 py-2 rounded-2xl w-full mt-5"
                onClick={sendData}>
                Submit
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-stretch justify-between gap-5">
          <div className="bg-card flex flex-col p-5 rounded-xl items-start flex-1">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="#DCFF01" />
              <path
                d="M30 40C30 40 38 36 38 30V23L30 20L22 23V30C22 36 30 40 30 40Z"
                stroke="#070E28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="text-xl my-3 font-bold text-secondary-500 text-left">Secure. Unified. Scalable.</h3>
            <p className="text-sm my-4 text-white text-left max-w-[500px]">
              Experience seamless onboarding across our global infrastructure.
              <br />
              Let ThePayHub be your gateway to compliant, fast, and modern financial operations.
            </p>
          </div>
          <div className="bg-card flex flex-col p-5 rounded-xl items-start flex-1">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="#DCFF01" />
              <path
                d="M30 40C30 40 38 36 38 30V23L30 20L22 23V30C22 36 30 40 30 40Z"
                stroke="#070E28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="text-lg my-3 font-bold text-secondary-500 text-left">Secure. Unified. Scalable.</h3>
            <p className="text-sm my-4 text-white text-left max-w-[500px]">
              Experience seamless onboarding across our global infrastructure.
              <br />
              Let ThePayHub be your gateway to compliant, fast, and modern financial operations.
            </p>
          </div>
          <div className="bg-card flex flex-col p-5 rounded-xl items-start flex-1">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="#DCFF01" />
              <path
                d="M30.5 44C28.6325 44 26.8775 43.6454 25.235 42.9362C23.5925 42.227 22.1637 41.2653 20.9487 40.0512C19.7337 38.8371 18.7721 37.4084 18.0638 35.765C17.3555 34.1216 17.0009 32.3666 17 30.5C16.9991 28.6334 17.3537 26.8784 18.0638 25.235C18.7739 23.5916 19.7355 22.1628 20.9487 20.9487C22.1619 19.7346 23.5907 18.773 25.235 18.0638C26.8793 17.3546 28.6343 17 30.5 17C32.3657 17 34.1207 17.3546 35.765 18.0638C37.4093 18.773 38.838 19.7346 40.0512 20.9487C41.2644 22.1628 42.2265 23.5916 42.9375 25.235C43.6485 26.8784 44.0027 28.6334 44 30.5V32.4575C44 33.785 43.5446 34.9158 42.6338 35.85C41.723 36.7842 40.6034 37.2509 39.275 37.25C38.4875 37.25 37.745 37.0812 37.0475 36.7437C36.35 36.4062 35.765 35.9225 35.2925 35.2925C34.64 35.945 33.9029 36.4346 33.0812 36.7613C32.2595 37.088 31.3991 37.2509 30.5 37.25C28.6325 37.25 27.0408 36.5916 25.725 35.2749C24.4092 33.9582 23.7509 32.3666 23.75 30.5C23.7491 28.6334 24.4074 27.0417 25.725 25.725C27.0426 24.4083 28.6343 23.75 30.5 23.75C32.3657 23.75 33.9578 24.4083 35.2763 25.725C36.5948 27.0417 37.2527 28.6334 37.25 30.5V32.4575C37.25 33.0425 37.4412 33.5375 37.8237 33.9425C38.2062 34.3475 38.69 34.55 39.275 34.55C39.86 34.55 40.3437 34.3475 40.7262 33.9425C41.1087 33.5375 41.3 33.0425 41.3 32.4575V30.5C41.3 27.485 40.2537 24.9312 38.1612 22.8387C36.0687 20.7462 33.515 19.7 30.5 19.7C27.485 19.7 24.9312 20.7462 22.8387 22.8387C20.7462 24.9312 19.7 27.485 19.7 30.5C19.7 33.515 20.7462 36.0687 22.8387 38.1612C24.9312 40.2537 27.485 41.3 30.5 41.3H35.9C36.2825 41.3 36.6033 41.4296 36.8625 41.6888C37.1217 41.948 37.2509 42.2684 37.25 42.65C37.2491 43.0316 37.1195 43.3524 36.8612 43.6125C36.6029 43.8726 36.2825 44.0018 35.9 44H30.5ZM30.5 34.55C31.625 34.55 32.5812 34.1562 33.3687 33.3687C34.1562 32.5812 34.55 31.625 34.55 30.5C34.55 29.375 34.1562 28.4187 33.3687 27.6312C32.5812 26.8437 31.625 26.45 30.5 26.45C29.375 26.45 28.4187 26.8437 27.6312 27.6312C26.8437 28.4187 26.45 29.375 26.45 30.5C26.45 31.625 26.8437 32.5812 27.6312 33.3687C28.4187 34.1562 29.375 34.55 30.5 34.55Z"
                fill="black"
              />
            </svg>

            <h3 className="text-lg my-3 font-bold text-secondary-500 text-left">Have any Questions?</h3>
            <p className="text-sm my-4 text-white text-left max-w-[500px]">Don`t hesitate to contact us</p>
            <a
              className="text-primary-500 bg-secondary-500 border px-4 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              href="mailto:contact@thepayhub.io">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
