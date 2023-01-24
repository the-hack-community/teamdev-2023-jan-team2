import localFont from '@next/font/local'
import Header from 'ui/components/organisms/Header'
const zou = localFont({ src: '../assets/zou.ttf' })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={zou.className}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
export default RootLayout
