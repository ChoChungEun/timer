import { Dispatch, SetStateAction } from 'react'

export interface IHeader {
  setIsTextViewMode: Dispatch<SetStateAction<boolean>>
  isTextViewMode: boolean
}
