import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import getSingleImage from '../../libs/image-util'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
const MyProfilePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  const imageData = await getSingleImage(1)
  return (
    <>
      <h1>MyProfilePage</h1>
      <Image
        src={`data:image/png;base64,${imageData}`}
        alt=''
        width={300}
        height={300}
      />
    </>
  )
}

export default MyProfilePage
