'use client'
interface ICustomInput {
  value: string
  setValue: (e: string) => void
  disabled?: boolean
  maxLength?: number
  placeholder?: string
}

export default function CustomInput(props: ICustomInput) {
  const { value, setValue, disabled, maxLength, placeholder } = props

  return (
    <div className='flex h-11 w-[200px] items-center justify-center rounded-md border border-[#CCCCCC] bg-[#FFFFFF] px-[14px] py-[11px]'>
      <input
        className='border-none text-[14px] font-normal focus:border-none focus:outline-none'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </div>
  )
}
