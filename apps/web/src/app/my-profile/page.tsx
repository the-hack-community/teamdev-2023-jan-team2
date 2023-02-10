import MyProfileSection from 'ui/components/organisms/MyProfileSection'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import getSingleImage from '../../libs/image-util'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

const MyProfilePage = async() => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  const imageData = await getSingleImage(1)
  const dummyData = {
    user: {
      name: 'にゃーんさん',
      description: '自己紹介文です。',
      icon: '/icon.png',
      posts: [
        {
          image: '/sample.png',
          url: 'http://dummy.co.jp',
          caption: '画像キャプション1',
        },
        {
          image: '/sample.png',
          url: 'http://dummy.co.jp',
          caption: '画像キャプション2',
        },
        {
          image: '/sample.png',
          url: 'http://dummy.co.jp',
          caption: '画像キャプション3',
        },
        {
          image: '/sample.png',
          url: 'http://dummy.co.jp',
          caption: '画像キャプション4',
        },
      ],
    },
  }

  return (
    <div>
      <MyProfileSection user={dummyData.user} />
      <Image
        src={`data:image/png;base64,${imageData}`}
        alt=''
        width={300}
        height={300}
      />
    </div>
  )
}

export default MyProfilePage
