import FileLine from '@svg/fileLine.svg'
import Upload from '@svg/upload.svg'
import toast from 'react-hot-toast'
import Typography from './Typography'

interface Props {
  id: string
  label?: string
  maxLength?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function FileInput({id, label, maxLength = 2 * 1024 * 1024, onChange}: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <p className="font-medium text-xs ">{label}</p>}
      <div className="relative w-full">
        <input
          type="file"
          className="hidden"
          id={'file-upload-input' + '-' + id}
          onChange={onChange}
          maxLength={maxLength}
          multiple
        />
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
      </div>
    </div>
  )
}

export default FileInput
