import FileLine from '@svg/fileLine.svg'
import Upload from '@svg/upload.svg'
import toast from 'react-hot-toast'
import Typography from './Typography'

interface Props {
  id: string
  label?: string
  maxLength?: number
  onChange: (file: File) => void
}
function FileInput({id, label, maxLength = 2 * 1024 * 1024, onChange}: Props) {
  const getBytesNumber = (nbr: number) => {
    const kb = 1024,
      mb = kb * 1024,
      gb = mb * 1024

    if (nbr < kb) return nbr.toFixed(2) + ' bytes'
    else if (nbr < mb) return (nbr / kb).toFixed(2) + ' KB'
    else if (nbr < gb) return (nbr / mb).toFixed(2) + ' MB'
    else return (nbr / gb).toFixed(2) + ' GB'
  }
  const onFileChange = (files: FileList | null) => {
    if (files) {
      const file = files[0]
      if (file.size > maxLength) {
        toast.error('File size should be less than ' + getBytesNumber(maxLength))

        files = null
        return
      }
      onChange(file)
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
          onChange={e => onFileChange(e.target.files)}
          maxLength={maxLength}
        />
        <div
          onClick={() => document.getElementById('file-upload-input' + '-' + id)?.click()}
          className={`flex w-full rounded-2xl p-2.5 border border-soft-200 outline-none bg-soft-100 gap-3 items-center cursor-pointer`}>
          <FileLine />
          <Typography size="md2" className="mr-auto ">
            Select File
          </Typography>
          <div className="border-l border-soft-200 pl-3 -py-2.5" >
            <Upload />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileInput
