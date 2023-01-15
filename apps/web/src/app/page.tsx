import Image from 'next/image'
import Button from 'ui/atoms/Button'
import Logo from 'assets/logo.svg'
import 'styles/globals.css'

const App = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-600 px-10'>
      <div className='relative'>
        <div className='absolute top-0 -left-40 h-72 w-72 animate-[bounce_10s_ease-in-out_infinite] rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl' />
        <div className='[bounce_15s_ease-in-out_infinite] absolute top-0 -right-4 h-72 w-96 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl' />
        <div className='[bounce_8s_ease-in-out_infinite] absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl' />
        <div className='relative m-8 space-y-4'>
          <Image
            src={Logo}
            alt='happy hacking'
          />
        </div>
      </div>
      <div className='text-4xl text-[#eee]'>
        <Button title={"Let's Development !"} />
      </div>
    </div>
  )
}

export default App
