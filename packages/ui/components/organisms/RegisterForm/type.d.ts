declare type RegisterForm = {
  onSubmit: (username: string, email: string, password: string) => void
}

declare type Inputs = {
  username?: string
  email: string
  password: string
}
