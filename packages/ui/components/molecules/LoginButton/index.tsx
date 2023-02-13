'use client'

import { useState } from 'react'
import Button from 'atoms/Button'
import RegisterForm from 'organisms/RegisterForm'

const LoginButton = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false)
  const callRegisterForm = () => setIsVisibleForm(!isVisibleForm)
  return (
    <div className='bg-yellow font-zou grid h-7 place-content-center rounded-full'>
      <div onClick={() => callRegisterForm()}>
        <Button title='ログイン' />
      </div>
      {isVisibleForm ? (
        <div className='absolute top-1/2 left-1/2 mt-20 -translate-x-1/2'>
          <RegisterForm />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default LoginButton
