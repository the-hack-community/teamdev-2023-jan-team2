import MyProfileHeader from 'ui/components/organisms/MyProfileHeader'

const AccountPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head />
      <body className='bg-orange-500'>
        <MyProfileHeader />
        {children}
      </body>
    </html>
  )
}

export default AccountPageLayout
