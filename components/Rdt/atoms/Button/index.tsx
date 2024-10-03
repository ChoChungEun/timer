'use client'

import {
  ButtonColor,
  ButtonLinColor,
  ButtonSize,
  IProps
} from '@/rdtbiz/components/atoms/Button/interfaces'
import { mergeClass } from '@/shared'
import { CustomLink } from '@/ui/components/biz'

const Button = (props: Readonly<IProps>) => {
  const {
    className,
    isPill,
    isFlexible = true,
    size,
    color,
    href,
    target = '_self',
    ...rest
  } = props

  const BUTTON_WIDTH: { [key in ButtonSize]?: string } = {
    XL: 'w-[200px]',
    L: 'w-[140px]'
  }

  const getWidthClass = (isFlexible: boolean, size: ButtonSize) =>
    isFlexible ? '' : BUTTON_WIDTH[size] || ''

  const buttonClassName = mergeClass(
    'transition-colors duration-200 ease-in-out',
    'flex items-center justify-center',
    BUTTON_SIZE[size],
    isPill ? BUTTON_COLOR[color] : BUTTON_LINE_COLOR[color],
    getWidthClass(isFlexible, size),
    className
  )

  if (href != null) {
    return (
      <CustomLink className={buttonClassName} href={href} target={target}>
        {rest.children}
      </CustomLink>
    )
  }

  return <button className={buttonClassName} {...rest} />
}

export default Button

const BUTTON_SIZE: { [key in ButtonSize]: string } = {
  XL: 'h-[50px] rounded-[8px] py-[14px] px-[24px] font-bold text-text-xl',
  L: 'h-[44px] rounded-[8px] py-3 px-5 font-bold text-text-l',
  M: 'h-[38px] rounded-[8px] py-[9px] px-[14px] font-medium text-text-l',
  S: 'h-[30px] rounded-[4px] py-[6px] px-[10px] font-medium text-text-m',
  XS: 'h-[24px] rounded-[4px] py-[3px] px-[6px] font-medium text-text-m'
}

const BUTTON_COLOR: { [key in ButtonColor]: string } = {
  blue: 'text-white bg-blue-700 hover:bg-blue-900 disabled:bg-blue-400',
  red: 'text-white bg-red-700 hover:bg-[#AC2619] disabled:bg-red-400',
  gray: 'text-white bg-gray-700 hover:bg-gray-800 disabled:bg-gray-500',
  black: 'text-white bg-black hover:bg-black hover:bg-black'
}
const BUTTON_LINE_COLOR: { [key in ButtonLinColor]: string } = {
  blue: 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-200 disabled:border-blue-500 disabled:text-blue-500 ',
  red: 'bg-white text-red-700 border border-red-700 hover:bg-red-100 disabled:border-red-400 disabled:text-red-400',
  gray: 'bg-white border-gray-500 text-black hover:border-gray-500 hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-600',
  black:
    'bg-white border-gray-500 text-black hover:border-gray-500 hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-600'
}
