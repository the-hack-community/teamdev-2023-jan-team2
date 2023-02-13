'use client'

import { signOut } from 'next-auth/react'
import Button from 'atoms/Button'

const LogoutButton = () => {
  return (
    <div
      className='bg-yellow font-zou grid h-7 place-content-center rounded-full'
      onClick={() => signOut()}>
      <Button title='ログアウト' />
    </div>
  )
}

export default LogoutButton
