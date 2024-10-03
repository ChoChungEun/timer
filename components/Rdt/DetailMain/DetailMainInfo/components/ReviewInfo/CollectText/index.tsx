import Trigger from './ico_trigger.png'
import Image from 'next/image'

const CollectText = () => {
  return (
    <section className='flex w-full flex-col gap-5'>
      <div className='flex w-full flex-row gap-2.5'>
        <span className='text-[20px] font-bold leading-[30px]'>
          문장수집 (17)
        </span>
        <button>
          <Image
            src={Trigger.src}
            height={22}
            width={22}
            alt={'trigger button'}
          />
        </button>
      </div>
      <div className='flex flex-row gap-5'>
        {Array.from(Array(2).keys()).map((_, i) => (
          <div className='flex flex-col gap-5' key={i}>
            <div className='relative mx-5 mb-6 mt-5 flex h-[397px] w-[397px] flex-col items-center justify-center rounded-[8px]'>
              <span className='text-text-l text-center font-normal tracking-[-0.01em]'>
                무엇을 생각하면 견딜 수 있나
                <br />
                가슴에 활활 일어나는 불이 없다면
                <br />
                기어이 돌아가 껴안을 네가 없다면
              </span>
              <button className='absolute bottom-5 flex h-[30px] flex-row items-center gap-4 rounded-[4px] border px-[10px] py-[6px]'>
                <span className='fong-medium text-text-m tracking-[-0.01em]'>
                  다운로드
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollectText
