'use client'

import AppLogo from 'atoms/AppLogo'
import Button from 'atoms/Button'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'


async function postUser(email: string, password: string) {
  const param = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  const res = await fetch("https://jsonplaceholder.typicode.com/users/", param) ;
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// 同コンポーネント内から呼び出しています。
// const RegisterForm = ({ onSubmit}: RegisterForm) => {
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    // onSubmit(data.email, data.password);
    postUser(data.email, data.password);
  };

  return (
    <div className="bg-orange flex h-[620px] w-[800px] flex-col items-center justify-center rounded-3xl">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex justify-center">
          <AppLogo className="h-[60px] w-[400px]" />
        </div>
        <div className="mt-56px flex flex-col">
          <label className="text-yellow" htmlFor="email">
            メールアドレス
          </label>
          <input
            className="mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-yellow font-sans">
              メールアドレスを入力してください
            </span>
          )}
        </div>
        <div className="mt-16px flex flex-col">
          <label className="text-yellow" htmlFor="password">
            パスワード
          </label>
          <input
            className="mt-16px bg-navy px-26px text-gray h-[48px] w-[632px] rounded-full font-sans"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-yellow font-sans">
              パスワードを入力してください
            </span>
          )}
        </div>
        <div className="mt-80px flex items-center justify-center">
          <Button>トウロク</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
function fetch(arg0: string, param: { method: string; body: string; headers: { "Content-type": string } }) {
  throw new Error('Function not implemented.')
}

