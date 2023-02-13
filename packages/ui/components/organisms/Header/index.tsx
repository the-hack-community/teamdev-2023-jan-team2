import type { Session } from 'next-auth/core/types'
import AppLogo from 'atoms/AppLogo'
import AppLogoForAccountPage from 'atoms/AppLogoForAccountPage'
import LoginButton from 'molecules/LoginButton'
import ProfileComponentSwitcher from 'molecules/ProfileComponentSwitcher'

const Header = ({ session }: { session: Session | null }) => {
  return (
    <div className='fixed w-screen'>
      <ProfileComponentSwitcher
        profileComponent={
          <div className='pl-4 pt-4'>
            <AppLogoForAccountPage
              key='app-logo-for-account-page'
              width={310}
              height={46}
            />
          </div>
        }
        otherComponent={
          <div className='relative z-10 flex justify-between bg-transparent'>
            <div className='pl-32px pt-37px w-fit'>
              <AppLogo
                key='app-logo'
                width={433}
                height={78}
              />
            </div>
            <div className='pt-24px pr-38px'>
              {session ? (
                // TODO: ユーザアイコンを表示する
                <div>ログインOK</div>
              ) : (
                <LoginButton />
              )}
            </div>
          </div>
        }
      />
    </div>
  )
}

export default Header
