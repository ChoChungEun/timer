'use client'

import clsx from 'clsx'

export type BubbleColor = 'blue' | 'green' | 'gray'
export type BubblePositionY = 'top' | 'bottom'
export type BubblePositionX = 'left' | 'right' | 'center'

export type BubbleProps = {
  msg: string
  positionY?: BubblePositionY
  positionX?: BubblePositionX
  color?: BubbleColor
}

const Bubble: React.FC<BubbleProps> = ({
  color = 'blue',
  msg,
  positionY = 'top',
  positionX = 'left'
}) => {
  const bubbleClass = clsx(
    'relative z-10 whitespace-nowrap rounded-3xl border px-3 py-1.5 text-center text-[12px] font-medium',
    BUBBLE_COLOR[color],
    BUBBLE_POSITIONY[positionY],
    BUBBLE_POSITIONX[positionX]
  )

  const bubbleIconClass = clsx(
    'absolute block h-1.5 w-1.5 border-r border-t',
    BUBBLE_ICON_COLOR[color],
    BUBBLE_ICON_POSITIONY[positionY],
    BUBBLE_ICON_POSITIONX[positionX]
  )

  return (
    <div className={bubbleClass}>
      <i className={bubbleIconClass} />
      {msg}
    </div>
  )
}

const BUBBLE_COLOR: { [key in BubbleColor]: string } = {
  blue: 'text-blue-700 border-blue-700 bg-blue-200',
  green: 'text-green-800 bg-green-100 border-green-800',
  gray: 'text-[#767676] border-[#EAEAEA] bg-[#F2F2F2]'
}

const BUBBLE_POSITIONY: { [key in BubblePositionY]: string } = {
  bottom: 'top-[calc(100%+8px)]',
  top: 'bottom-[calc(100%+8px)]'
}

const BUBBLE_POSITIONX: { [key in BubblePositionX]: string } = {
  right: 'left-0',
  left: 'right-0',
  center: 'left-1/2 -translate-x-1/2'
}

const BUBBLE_ICON_COLOR: { [key in BubbleColor]: string } = {
  blue: 'border-r-blue-800 border-t-blue-800 bg-blue-100',
  green: 'border-r-green-800 border-t-green-800 bg-green-100',
  gray: 'border-r-[#EAEAEA] border-t-[#EAEAEA] bg-[#F2F2F2]'
}

const BUBBLE_ICON_POSITIONY: { [key in BubblePositionY]: string } = {
  top: '-bottom-1 rotate-[135deg]',
  bottom: '-top-1 -rotate-45'
}

const BUBBLE_ICON_POSITIONX: { [key in BubblePositionX]: string } = {
  left: 'left-5',
  right: 'right-5',
  center: 'left-1/2 -translate-x-1/2'
}

export default Bubble
