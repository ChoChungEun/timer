'use client'

import Image from 'next/image'
import RdtTypography from 'src/components/atoms/RdtTypography'

import CheckAfter from './image/ico_CheckAfter.svg'
import CheckBefore from './image/ico_CheckBefore.svg'

interface ICustomCheckBox {
  checked: boolean
  clickEvent: () => void
  title?: string
}
export default function CustomCheckBox(props: ICustomCheckBox) {
  const { checked, clickEvent, title } = props

  return (
    <div
      onClick={() => {
        clickEvent()
      }}
      className='flex max-w-[100%] cursor-pointer items-center justify-center gap-1'
    >
      {checked ? (
        <Image src={CheckAfter} alt='check' width={22} height={22} />
      ) : (
        <Image src={CheckBefore} alt='check' width={22} height={22} />
      )}
      {title && (
        <RdtTypography type='B2' weight='Medium'>
          {title}
        </RdtTypography>
      )}
    </div>
  )
}
