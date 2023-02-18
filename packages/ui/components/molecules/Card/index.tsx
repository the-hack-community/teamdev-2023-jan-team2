'use client'

import Image from 'next/image'
import type { MouseEvent } from 'react'
import { useState } from 'react'

import ellipsis from '../../../libs/ellipsis'
const Card = ({ size, bgColor, icon, username, img, description, caption, removeLink }: Card) => {
  const CAPTION_MAX_LENGTH = 16
  const [isDeleted, setIsDeleted] = useState(false)
  const deleteImage = (event: MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
    setIsDeleted(true)
    fetch(removeLink ?? '')
  }

  if (size === 'small') {
    return (
      <div className={`${bgColor} w-[422px] rounded-3xl`}>
        {isDeleted ? (
          <div className='grid h-[422px] w-[422px] place-content-center text-white'>deleted</div>
        ) : (
          <Image
            onClick={(event) => deleteImage(event)}
            src={img}
            alt={description || 'image'}
            width={422}
            height={422}
            style={{ objectFit: 'cover' }}
            className={`${size === 'small' ? 'rounded-t-3xl' : ''} `}
          />
        )}
        <div className='py-8 pl-8 font-sans text-2xl font-bold text-white'>
          {ellipsis(caption, CAPTION_MAX_LENGTH)}
        </div>
      </div>
    )
  }

  return (
    <div className={`${bgColor} w-[471px] rounded-3xl font-sans`}>
      <div className='flex h-[60px] items-center'>
        <div className='relative ml-3 h-10 w-10 rounded-full bg-white'>
          <Image
            src={icon}
            alt={`${username}-icon`}
            width={48}
            height={48}
            style={{ height: '170%', objectFit: 'cover' }}
            className='-mt-15px cursor-pointer items-center'
          />
        </div>
        <div className='ml-4 text-2xl font-bold text-white'>{username}</div>
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
