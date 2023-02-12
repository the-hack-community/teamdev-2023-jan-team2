import localFont from '@next/font/local'
import { getServerSession } from 'next-auth/next'
import Header from 'organisms/Header'
import { authOptions } from '../pages/api/auth/[...nextauth]'

const zou = localFont({ src: '../assets/zou.ttf' })

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)
  return (
    <html lang='en'>
      <head />
      <body className={zou.className}>
        <Header session={session} />
        {children}
      </body>
    </html>
  )
}
export default RootLayout
