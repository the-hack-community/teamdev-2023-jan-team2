import 'styles/globals.css'
import Image from 'next/image'
import hero from 'assets/hero.webp'

const App = () => {
  return (
    <div className=''>
      <Image
        src={hero}
        alt='hero'
        className='absolute top-0 left-0'
      />
    </div>
  )
}

export default App
