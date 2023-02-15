import Image from 'next/image'
import Link from 'next/link'
import Card from 'molecules/Card'

const MyProfileSection = ({ user }: MyProfileSection) => {
  let cardBackgroundColor: 'bg-orange' | 'bg-yellow' | 'bg-blue' | 'bg-navy' = 'bg-orange'

  return (
    <section className='bg-yellow mx-auto w-[951px] rounded-3xl pb-32'>
      <div className='flex w-[744px] pt-8 pl-8'>
        <Image
          src={user.icon}
          alt={`${user.name}-icon`}
          width={227}
          height={227}
          className='h-[227px] w-[227px] rounded-full border-black'
        />
        <div className='pl-8 pt-8 font-sans font-black '>
          <div className='text-left text-2xl font-bold'>{user.name}</div>
          <div className='whitespace-pre-wrap break-words pt-8 text-left text-sm font-light'>
            {user.description}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-8 px-8 pt-8'>
        {user &&
          user.posts.map((post, index) => {
            index % 3 === 0 ? (cardBackgroundColor = 'bg-orange') : ''
            index % 3 === 1 ? (cardBackgroundColor = 'bg-navy') : 'bg-orange'
            index % 3 === 2 ? (cardBackgroundColor = 'bg-blue') : 'bg-orange'
            return (
              <Link
                href={post.url}
                key={index}>
                <Card
                  size='small'
                  icon=''
                  bgColor={cardBackgroundColor}
                  username=''
                  img={`data:image/png;base64,${post.image}`}
                  description=''
                  caption={post.caption}
                />
              </Link>
            )
          })}
      </div>
    </section>
  )
}

export default MyProfileSection
