'use client'

import 'regenerator-runtime/runtime'
import { useRouter } from 'next/navigation'
import { useEffect, useReducer, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import getSingleImageById from '../../../libs/image/get-single-image-by-id'
import MicIcon from 'atoms/MicIcon'
const UploadSection = ({ userId }: { userId: number }) => {
  const { resetTranscript, finalTranscript } = useSpeechRecognition()
  const [isMicActive, setIsMicActive] = useState(false)
  const [lastId, setLastId] = useState(0)
  const [, setJustFlg] = useReducer(() => true, false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const textTranslate = async (transcript: string) => {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: transcript,
      }),
    })
    if (!response.ok) throw new Error('error')
    return await response.json()
  }

  const createImage = async (prompt: string, keyword: string, userId: number) => {
    const response = await fetch('/api/image/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        userId,
        keyword,
      }),
    })
    if (!response.ok) throw new Error('error')
    return await response.json()
  }

  useEffect(
    () => () => {
      fetch('/api/image/all', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          options: 'id',
        }),
      })
        .then((res) => res.json())
        .then((responce) => {
          setLastId(Number(responce.allImages.at(0).id) + 1)
        })
    },
    [],
  )

  useEffect(() => {
    if (!finalTranscript) return
    setIsLoading(true)
    textTranslate(finalTranscript).then((translatedText) =>
      createImage(translatedText, finalTranscript.replace('。', ''), userId),
    )
    resetTranscript()

    const waitingGenerationToBeCompleted = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      const response = await getSingleImageById(lastId)
      response ? router.push('/') : await waitingGenerationToBeCompleted()
    }
    waitingGenerationToBeCompleted()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalTranscript])

  const startListening = async () => {
    setIsMicActive(true)
    setJustFlg()
    SpeechRecognition.startListening({ language: 'ja-JP', continuous: true })
    await new Promise((resolve) => setTimeout(resolve, 3000))
    SpeechRecognition.stopListening()
    setIsMicActive(false)
  }

  return (
    <section className='bg-yellow mx-auto flex h-[678px] w-[951px] flex-col items-center justify-center rounded-3xl'>
      {isLoading ? (
        <div className='pb-4px animate-pulse rounded-full border-[6px] px-4 ease-linear'>
          now generating...
        </div>
      ) : (
        <>
          <MicIcon
            onClick={() => startListening()}
            color={isMicActive ? '#ff5c00' : 'black'}
          />
          <div className='text-orange text-center text-4xl'>イラストセイセイ</div>
        </>
      )}
    </section>
  )
}
export default UploadSection
