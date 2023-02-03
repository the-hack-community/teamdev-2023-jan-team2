import Image from 'next/image'
import ellipsis from '../../../libs/ellipsis'

const Card = ({ bgColor, icon, username, img, description, caption }: Card) => {
  const CAPTION_MAX_LENGTH = 16

  return (
    <div className={`${bgColor} w-[471px] rounded-3xl font-sans`}>
      <div className='flex h-[60px]'>
        <div className='pt-1.5 pl-2'>
          <Image
            src={icon}
            alt={`${username}-icon`}
            width={48}
            height={48}
            className='rounded-full border-black'
          />
        </div>
        <div className='ml-4 pt-3 text-2xl font-bold text-white'>{username}</div>
      </div>
      <Image
        src={img}
        alt={description || 'image'}
        width={471}
        height={471}
        style={{ objectFit: 'cover' }}
      />
      <div className='py-8 pl-8 text-2xl font-bold text-white'>
        {ellipsis(caption, CAPTION_MAX_LENGTH)}
      </div>
    </div>
  )
}

export default Card
