// import { KdsCheckBox } from '@/kds'
import Image from 'next/image'

import { IHeader } from '../interfaces'
import TotalIcon from './icon_total.png'
import TextMode from './text_mode_btn.png'
import SlideMode from './view_mode_btn.png'

// import React, { useState } from 'react'

const BookSeriesHeader = (props: Readonly<IHeader>) => {
  const { isTextViewMode, setIsTextViewMode } = props
  // const [isTotalChecked, setIsTotalChecked] = useState(false)

  return (
    <section className='flex w-full justify-between'>
      <div className='flex flex-row gap-1'>
        <span className='text-title-s font-bold'>이책의 시리즈(8)</span>
        {/* todo 하트 버튼 */}
      </div>
      <div className='flex flex-row items-center justify-center gap-5'>
        <div className='flex flex-row gap-2'>
          {/* <KdsCheckBox
            initChecked={isTotalChecked}
            onChange={(e) => setIsTotalChecked(e.target.checked)}
          /> */}
          <span className='text-text-xl font-normal'>전체선택</span>
        </div>
        <div className='flex flex-row gap-2'>
          <button onClick={() => setIsTextViewMode(!isTextViewMode)}>
            <Image
              src={isTextViewMode ? TextMode.src : SlideMode.src}
              width={75}
              height={38}
              alt={'viewMode button'}
            />
          </button>
          <button className='flex h-[38px] flex-row gap-1 rounded-[8px] border border-[#CCCCCC] px-[14px] py-[9px]'>
            <Image
              src={TotalIcon.src}
              height={20}
              width={20}
              alt={'전체 목록 리스트'}
              className='flex-shrink-0'
            />
            <span className='text-text-l font-normal'>전체목록</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookSeriesHeader
