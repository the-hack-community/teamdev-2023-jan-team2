import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import UploadSection from 'ui/components/organisms/UploadSection'
import getUserDataByEmail from 'ui/libs/user/get-user-data-by-email'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import hero from 'assets/hero.webp'

const UploadPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  const userId = await getUserDataByEmail(session.user?.email ?? '', 'id').then(
    (response) => response.id,
  )
  console.log(userId)

  return (
    <div className='bg-blue relative min-h-screen pt-48'>
      <div className='w-full '>
        <Image
          src={hero}
          alt='hero'
          className='absolute -mt-24'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='absolute z-0 grid w-screen place-content-center'>
        <UploadSection userId={userId} />
      </div>
    </div>
  )
}

export default UploadPage
