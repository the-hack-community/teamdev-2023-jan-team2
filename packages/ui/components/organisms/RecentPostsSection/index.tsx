import type { ImageInput } from '@ca11-ope/config/schema'
import FetchedUserDataCard from 'molecules/FetchedUserDataCard'

const RecentPostsSection = async () => {
  const imagesArray: { allImages: ImageInput[] } = await fetch(
    `${process.env.BASE_URL}/api/image/all`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        options: 'id imageSrc updatedAt description userId keyword',
      }),
    },
  ).then((res) => res.json())
  if (!imagesArray) return <></>
  return (
    <section className='bg-yellow mx-auto w-[951px] rounded-3xl pb-32'>
      <h1 className='text-orange	py-8 pl-8 text-5xl'>サイキンノトウコウ</h1>
      {imagesArray.allImages.map((image: ImageInput) => (
        <div
          className='py-8 pl-8'
          key={image.id}>
          {/*@ts-expect-error Async Server Component*/}
          <FetchedUserDataCard
            image={image}
            key={image.id}
          />
        </div>
      ))}
    </section>
  )
}

export default RecentPostsSection
