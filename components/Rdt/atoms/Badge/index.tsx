'use client'

import clsx from 'clsx'

export type BadgeColor =
  | 'blue'
  | 'bluelight'
  | 'green'
  | 'gray'
  | 'red'
  | 'darkgray'

export type BadgeProps = {
  title: string
  isFilled?: boolean
  isPill?: boolean
  color?: BadgeColor
}

const Badge: React.FC<BadgeProps> = ({
  title,
  color = 'blue',
  isFilled,
  isPill
}) => {
  const badgeClassName = clsx(
    'font-text-m rounded border border-solid py-0.5 font-medium',
    isFilled ? BADGE_FILLED[color] : BADGE_COLOR[color],
    isPill ? 'rounded-full px-1.5' : 'rounded px-1'
  )
  return <span className={badgeClassName}>{title}</span>
}

export default Badge

const BADGE_COLOR: { [key in BadgeColor]: string } = {
  blue: 'text-blue-800 border-blue-800',
  bluelight: 'text-bluelight-700 border-bluelight-700',
  green: 'text-green-800 border-green-800',
  gray: 'text-gray-700 border-gray-700',
  red: 'text-red-500 border-red-500',
  darkgray: 'border-gray-600 text-gray-600'
}

const BADGE_FILLED: { [key in BadgeColor]: string } = {
  blue: 'text-blue-800 bg-blue-200',
  bluelight: 'text-bluelight-700 bg-bluelight-200',
  green: 'text-green-800 bg-green-200',
  gray: 'text-gray-700 bg-gray-200',
  red: 'text-red-500 bg-red-100',
  darkgray: 'bg-gray-600 text-white'
}
