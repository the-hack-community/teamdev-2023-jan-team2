import AppLogo from 'atoms/AppLogo'
import Button from 'atoms/Button'

const Header = () => {
  return (
    <div className='relative z-10 flex justify-between'>
      <div className='pl-32px pt-37px w-fit'>
        <AppLogo
          width={433}
          height={78}
        />
      </div>
      <div className='pt-24px pr-38px'>
        <Button title='ログイン' />
      </div>
    </div>
  )
}

export default Header
