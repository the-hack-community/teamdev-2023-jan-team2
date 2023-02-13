import Link from 'next/link'

const LinkedComponent = ({ url, children }: LinkedComponent) => {
  return <Link href={url}>{children}</Link>
}

export default LinkedComponent
