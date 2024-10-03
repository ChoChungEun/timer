'use client'

import { useRef } from 'react'

interface ICustomDateInput {
  value: string // 날짜 값은 일반적으로 ISO 8601 형식의 문자열로 처리
  setValue?: (e: string) => void
  disabled?: boolean
  placeholder?: string
  onChange?: (e: string) => void
}

export default function CustomDateInput(props: ICustomDateInput) {
  const { value, setValue, disabled, placeholder, onChange } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.showPicker() // 달력 UI를 강제로 표시
    }
  }
  const handleChange = (e) => {
    setValue?.(e.target.value)
    onChange?.(e.target.value)
  }
  return (
    <div className='flex h-11 items-center justify-center rounded-md border border-[#CCCCCC] bg-[#FFFFFF] px-[14px] py-[11px]'>
      <input
        ref={inputRef}
        type='date'
        className='w-full border-none text-[14px] font-normal focus:border-none focus:outline-none'
        value={value}
        onChange={(e) => handleChange(e)}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={handleFocus} // 포커스 시 달력 펼치기
      />
    </div>
  )
}
