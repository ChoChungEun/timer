import { type ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from 'react'
type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
export type ButtonSize = 'XL' | 'L' | 'M' | 'S' | 'XS'
export type ButtonColor = 'blue' | 'red' | 'gray' | 'black'
export type ButtonLinColor = 'blue' | 'red' | 'gray' | 'black'
export interface IProps extends ButtonAttributes {
  className?: string
  isPill?: boolean
  isFlexible?: boolean
  size: ButtonSize
  color: ButtonColor
  href?: string
  target?: HTMLAttributeAnchorTarget
}
