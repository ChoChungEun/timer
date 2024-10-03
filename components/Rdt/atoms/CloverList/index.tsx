import Image from 'next/image'
import CloverOn from './ico_clover_16_on.png'
import CloverOff from './ico_clover_16_off.png'

interface IProps {
  size?: number
  rate?: number
}

const CloverList = (props: Readonly<IProps>) => {
  const { size = 18, rate = 2 } = props
  const icons = Array(4)
    .fill(false)
    .map((_, i) => i < rate)
  return (
    <div className='flex  flex-row items-center'>
      {icons.map((icon, i) => (
        <Image
          src={icon ? CloverOn.src : CloverOff.src}
          width={size}
          height={size}
          alt='cloverIcon'
          key={i}
        />
      ))}
    </div>
  )
}

export default CloverList
