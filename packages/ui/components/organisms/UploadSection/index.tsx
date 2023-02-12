'use client'

import MicIcon from 'atoms/MicIcon'

const UploadSection = () => {
  const handleClick = () => {
    // 音声入力を開始する
    console.log('clicked!')
  }

  return (
    <section className='bg-yellow mx-auto flex h-[678px] w-[951px] flex-col items-center justify-center rounded-3xl'>
      <MicIcon onClick={handleClick} />
      <div className='text-orange text-center text-4xl'>イラストセイセイ</div>
    </section>
  )
}
export default UploadSection
