import type { ImageInput } from '@ca11-ope/config/schema'

const getSingleImage = async (id: number) => {
  const response = await fetch(`${process.env.BASE_URL}/api/image/${id}`, {
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
  })
  if (!response.ok) return null
  const result = await response.json()
  const ImageInput: ImageInput = result.imageById
  return ImageInput.imageSrc
}

export default getSingleImage
