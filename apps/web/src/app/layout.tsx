'use client'

// import localFont from '@next/font/local'
import { SessionProvider } from 'next-auth/react';
import Header from 'ui/components/organisms/Header'
// const zou = localFont({ src: '../assets/zou.ttf' })

const RootLayout = ({ children ,session}: { children: React.ReactNode,session:any }) => {
  return (
  <SessionProvider session={session}>
    <html className="">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
    </SessionProvider>
  )
}
export default RootLayout
