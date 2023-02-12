import Image from 'next/image'
import hero from 'assets/hero.webp'

const App = () => {
  return (
    <>
      <Image
        src={hero}
        alt='hero'
        className='relative top-0 left-0 -z-10'
      />
    </>
  )
}

export default App
