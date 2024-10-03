import { IProps } from './interfaces'

const Chip = (props: Readonly<IProps>) => {
  const { text } = props
  return (
    <section className='h-[36px] rounded-[18px] bg-white px-4 py-[7px]'>
      <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
        {text}
      </span>
    </section>
  )
}

export default Chip
