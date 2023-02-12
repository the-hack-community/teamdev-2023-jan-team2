'use client'

import { usePathname } from 'next/navigation'

const ProfileComponentSwitcher = ({
  profileComponent,
  otherComponent,
}: ProfileComponentSwitcher) => {
  const pathname = usePathname()
  return <>{pathname === '/my-profile' ? profileComponent : otherComponent}</>
}

export default ProfileComponentSwitcher
