import type { Session } from 'next-auth/core/types'
import AppLogo from 'atoms/AppLogo'
import AppLogoForAccountPage from 'atoms/AppLogoForAccountPage'
import Button from 'atoms/Button'
import LinkedComponent from 'molecules/LinkedComponent'
import LoginButton from 'molecules/LoginButton'
import LoginIcon from 'molecules/LoginIcon'
import LogoutButton from 'molecules/LogoutButton'
import ProfileComponentSwitcher from 'molecules/ProfileComponentSwitcher'

const Header = ({ session }: { session: Session | null }) => {
  return (
    <div className='fixed z-50 w-screen'>
      <ProfileComponentSwitcher
        profileComponent={
          <div className='relative z-10 flex justify-between bg-transparent'>
            <LinkedComponent url='/'>
              <div className='pl-4 pt-4'>
                <AppLogoForAccountPage
                  key='app-logo-for-account-page'
                  width={310}
                  height={46}
                />
              </div>
            </LinkedComponent>
            <div className='pt-24px pr-38px'>
              <LogoutButton />
            </div>
          </div>
        }
        otherComponent={
          <div className='relative z-10 flex justify-between bg-transparent'>
            <LinkedComponent url='/'>
              <div className='pl-32px pt-37px w-fit'>
                <AppLogo
                  key='app-logo'
                  width={433}
                  height={78}
                />
              </div>
            </LinkedComponent>
            <div className='pt-24px pr-38px'>
              {session ? (
                <div className='flex items-center gap-4'>
                  <LinkedComponent url='/upload'>
                    <Button title='トウコウスル' />
                  </LinkedComponent>
                  <LoginIcon session={session} />
                </div>
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
