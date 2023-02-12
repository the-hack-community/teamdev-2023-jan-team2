import type { Session } from 'next-auth/core/types'
import AppLogo from 'atoms/AppLogo'
import LoginButton from 'molecules/LoginButton'

const Header = ({ session }: { session: Session | null }) => {
  return (
    <div className='relative z-10 flex justify-between'>
      <div className='pl-32px pt-37px w-fit'>
        <AppLogo
          width={433}
          height={78}
        />
      </div>
      <div className='pt-24px pr-38px'>
        {session ? (
          // TODO: ユーザアイコンを表示する
          <div>ログインOK</div>
        ) : (
          <LoginButton
            username='test@example.com'
            password='password'
          />
        )}
      </div>
    </div>
  )
}

export default Header
