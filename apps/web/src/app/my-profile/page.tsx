import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import MyProfileSection from 'ui/components/organisms/MyProfileSection'
import getUserDataByEmail from 'ui/libs/user/get-user-data-by-email'
import getUserImageIdsByEmail from 'ui/libs/user/get-user-image-ids-by-email'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

const MyProfilePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  const imageIds = await getUserImageIdsByEmail(
    session.user?.email ?? '',
    'images {id description}',
  ).then((response) => response.images)

  const description = await getUserDataByEmail(session.user?.email ?? '', 'biography').then(
    (response) => response.biography,
  )
  const imagesArray = []
  for (const image of imageIds) {
    const result = await fetch(`${process.env.BASE_URL}/api/image/${image.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: image.id,
        options: 'id imageSrc description',
      }),
    }).then((response) => response.json())
    imagesArray.push(result.imageById)
  }
  if (!imagesArray) return <></>

  const userData = {
    user: {
      name: session.user?.name,
      description,
      icon: session.user?.image,
      posts: imagesArray.map((image) => {
        return {
          image: image.imageSrc,
          url: `/api/image/delete/${image.id}`,
          caption: image.description,
        }
      }),
    },
  }

  return (
    <div className='bg-orange pt-[120px]'>
      <MyProfileSection user={userData.user} />
    </div>
  )
}

export default MyProfilePage
