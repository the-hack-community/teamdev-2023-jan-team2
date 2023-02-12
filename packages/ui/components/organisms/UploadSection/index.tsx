import MicIcon from 'atoms/MicIcon'

const UploadSection = () => {
  const handleClick = () => {
    // 音声入力を開始する
    console.log('clicked!')
  }

  return (
    <section className='mx-auto mt-12 flex h-[678px] w-[951px] flex-col items-center justify-center rounded-3xl bg-yellow-500'>
      <MicIcon onClick={handleClick} />
      <div className='text-center text-4xl text-orange-500'>イラストセイセイ</div>
    </section>
  )
}
export default UploadSection
