'use client'

import { signIn } from 'next-auth/react'
import Button from 'atoms/Button'
const LoginButton = ({ username, password }: LoginButton) => {
  return (
    <div
      className='bg-yellow font-zou grid h-7 place-content-center rounded-full'
      onClick={() => {
        signIn('credentials', {
          redirect: true,
          username,
          password,
        })
      }}>
      <Button title='ログイン' />
    </div>
  )
}

export default LoginButton
