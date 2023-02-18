import type { ImageInput } from '@ca11-ope/config/schema'

const getSingleImageById = async (id: number) => {
  const response = await fetch(`/api/image/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      options: 'id',
    }),
  })
  if (!response.ok) return null
  const result = await response.json()
  if (!result) return null
  const ImageInput: ImageInput = result.imageById
  return ImageInput
}

export default getSingleImageById
