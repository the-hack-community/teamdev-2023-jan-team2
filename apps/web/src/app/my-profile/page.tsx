// import type { ImageInput, UserInput } from '@ca11-ope/config/schema'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import MyProfileSection from 'ui/components/organisms/MyProfileSection'
// import getSingleImage from '../../libs/image-util'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import hero from 'assets/hero.webp'

const MyProfilePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  console.log(session)
  // TODO: SessionProviderからユーザデータを取得するように変更
  // const imageData: ImageInput = await getSingleImage(1)
  // const userData: UserInput = {
  //   username: session.user?.name,
  //   email: session.user?.email,
  //   avatarUrl: session.user?.image,
  // }
  const dummyData = {
    user: {
      name: 'にゃーんさん',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: hero,
      posts: [
        {
          image: hero,
          url: 'http://dummy.co.jp',
          caption: '画像キャプション1',
        },
        {
          image: hero,
          url: 'http://dummy.co.jp',
          caption: '画像キャプション1',
        },
        {
          image: hero,
          url: 'http://dummy.co.jp',
          caption: '画像キャプション1',
        },
        {
          image: hero,
          url: 'http://dummy.co.jp',
          caption: '画像キャプション1',
        },
      ],
    },
  }

  return (
    <div className='bg-orange h-screen pt-[120px]'>
      <MyProfileSection user={dummyData.user} />
    </div>
  )
}

export default MyProfilePage
