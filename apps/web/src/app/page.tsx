import Image from 'next/image'
import RecentPostsSection from 'organisms/RecentPostsSection'
import hero from 'assets/hero.webp'

const App = () => {
  return (
    <div className='bg-orange relative -z-10 pt-48'>
      <div className='w-full'>
        <Image
          src={hero}
          alt='hero'
          className='absolute -z-10 -mt-24 max-h-screen'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='relative'>
        {/* @ts-expect-error Async Server Component */}
        <RecentPostsSection />
      </div>
    </div>
  )
}

export default App
