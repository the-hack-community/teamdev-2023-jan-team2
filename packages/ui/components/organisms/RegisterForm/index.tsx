'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import AppLogo from 'atoms/AppLogo'
import Button from 'atoms/Button'

async function postUser({ username, email, password }: Inputs) {
  const param = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  }

  const res = await fetch(`/api/user/create`, param)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const RegisterForm = () => {
  const router = useRouter()
  const [isLoginMode, setIsLoginMode] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const submitHandler: SubmitHandler<Inputs> = async ({ username, email, password }: Inputs) => {
    await postUser({ username, email, password })
  }
  const Login: SubmitHandler<Inputs> = ({ email: username, password }: Inputs) => {
    signIn('credentials', { username, password, redirect: false }).then((res) => {
      if (res?.ok) router.push('/my-profile')
    })
  }

  return (
    <div className='bg-orange flex h-[620px] w-[800px] flex-col items-center justify-center rounded-3xl'>
      {isLoginMode ? (
        <>
          <form
            onSubmit={handleSubmit(Login)}
            className='pb-8'>
            <div className='flex justify-center'>
              <AppLogo className='h-[60px] w-[400px]' />
            </div>
            <div className='mt-16px flex flex-col'>
              <label
                className='text-yellow'
                htmlFor='email'>
                メールアドレス
              </label>
              <input
                className='mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-yellow font-sans'>メールアドレスを入力してください</span>
              )}
            </div>
            <div className='mt-16px flex flex-col'>
              <label
                className='text-yellow'
                htmlFor='password'>
                パスワード
              </label>
              <input
                className='mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans'
                type='password'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className='text-yellow font-sans'>パスワードを入力してください</span>
              )}
            </div>
            <div className='mt-80px flex items-center justify-center'>
              <Button title='ログイン' />
            </div>
          </form>
          <Button
            title='トウロク カイシ'
            onClick={() => setIsLoginMode(!isLoginMode)}
          />
        </>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className='flex justify-center'>
            <AppLogo className='h-[60px] w-[400px]' />
          </div>
          <div className='mt-56px flex flex-col'>
            <label
              className='text-yellow'
              htmlFor='username'>
              ユーザーメイ
            </label>
            <input
              className='mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans'
              {...register('username', { required: true })}
            />
            {errors.username && (
              <span className='text-yellow font-sans'>ユーザー名を入力してください</span>
            )}
          </div>
          <div className='mt-16px flex flex-col'>
            <label
              className='text-yellow'
              htmlFor='email'>
              メールアドレス
            </label>
            <input
              className='mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans'
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className='text-yellow font-sans'>メールアドレスを入力してください</span>
            )}
          </div>
          <div className='mt-16px flex flex-col'>
            <label
              className='text-yellow'
              htmlFor='password'>
              パスワード
            </label>
            <input
              className='mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans'
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className='text-yellow font-sans'>パスワードを入力してください</span>
            )}
          </div>
          <div className='mt-80px flex items-center justify-center'>
            <Button title='トウロク' />
          </div>
        </form>
      )}
    </div>
  )
}

export default RegisterForm
