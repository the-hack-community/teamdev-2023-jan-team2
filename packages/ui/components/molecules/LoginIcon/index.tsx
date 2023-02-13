'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { Session } from 'next-auth/core/types'
const LoginIcon = ({ session }: { session: Session }) => {
  const router = useRouter()
  return (
    <Image
      src={session.user?.image ?? ''}
      alt={`${session.user?.name}-icon`}
      width={60}
      height={60}
      className='border-blue cursor-pointer rounded-full border-4 bg-white'
      priority
      onClick={() => router.push('/my-profile')}
    />
  )
}

export default LoginIcon
