import Image from 'next/image'
import UploadSection from 'ui/components/organisms/UploadSection'
import hero from 'assets/hero.webp'

const App = () => {
  return (
    <div className='bg-blue relative -z-10 h-screen pt-48'>
      <div className='w-full'>
        <Image
          src={hero}
          alt='hero'
          className='absolute -z-10 -mt-24'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='relative'>
        <UploadSection />
      </div>
    </div>
  )
}

export default App
