'use client'

import 'regenerator-runtime/runtime'
import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import MicIcon from 'atoms/MicIcon'
const UploadSection = ({ userId }: { userId: number }) => {
  const { transcript, resetTranscript } = useSpeechRecognition()

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
  const createImage = async (prompt: string, userId: number) => {
    const response = await fetch('/api/image/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        userId,
      }),
    })
    if (!response.ok) throw new Error('error')
    return await response.json()
  }

  useEffect(() => {
    if (transcript) {
      textTranslate(transcript).then((result) => createImage(result, userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript])

  const startListening = async () => {
    SpeechRecognition.startListening({ language: 'ja-JP' })
    await new Promise((resolve) => setTimeout(resolve, 3000))
    SpeechRecognition.stopListening()
    resetTranscript()
  }

  return (
    <section className='bg-yellow mx-auto flex h-[678px] w-[951px] flex-col items-center justify-center rounded-3xl'>
      <MicIcon onClick={() => startListening()} />
      <div className='text-orange text-center text-4xl'>イラストセイセイ</div>
    </section>
  )
}
export default UploadSection
