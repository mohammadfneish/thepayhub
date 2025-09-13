'use client'
import FileLine from '@svg/fileLine.svg'
import Upload from '@svg/upload.svg'
import Typography from './Typography'
import {useState} from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
  id: string
  label?: string
  maxLength?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function FileInput({id, label, maxLength = 2 * 1024 * 1024, onChange}: Props) {
  const [files, setFiles] = useState<FileList | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files)
      onChange(e)
    }
  }

  return (
    <div className="flex flex-col gap-1">
      {label && <p className="font-medium text-xs ">{label}</p>}
      <div className="relative w-full">
        <input
          type="file"
          className="hidden"
          id={'file-upload-input' + '-' + id}
          onChange={onFileChange}
          maxLength={maxLength}
          multiple
        />
        {!files?.length ? (
          <div
            onClick={() => document.getElementById('file-upload-input' + '-' + id)?.click()}
            className={`flex w-full rounded-2xl p-2.5 border border-soft-200 outline-none bg-soft-100 gap-3 items-center cursor-pointer`}>
            <FileLine />
            <Typography size="md2" className="mr-auto ">
              Select File
            </Typography>
            <div className="border-l border-soft-200 pl-3 -py-2.5">
              <Upload />
            </div>
          </div>
        ) : (
          <div className="flex w-full rounded-2xl p-2.5 border border-soft-200 outline-none bg-soft-100 gap-3 items-center cursor-pointer">
            <FileLine />
            <Typography size="md2" className="mr-auto truncate">
              {files?.length} {files?.length > 1 ? 'files' : 'file'} selected
            </Typography>
            <div className="border-l border-soft-200 pl-3 -py-2.5">
              <XMarkIcon className="w-4 h-4" onClick={() => {setFiles(null); onChange({target: {files: null}} as any)}} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileInput
