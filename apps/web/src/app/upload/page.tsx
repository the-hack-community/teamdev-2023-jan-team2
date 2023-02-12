import 'styles/globals.css'
import Image from 'next/image'
import UploadSection from 'ui/components/organisms/UploadSection'
import hero from 'assets/hero.webp'

const App = () => {
  return (
    <div className='bg-blue h-screen'>
      <Image
        src={hero}
        alt='hero'
        className='absolute top-0 left-0'
      />
      <UploadSection />
    </div>
  )
}

export default App
