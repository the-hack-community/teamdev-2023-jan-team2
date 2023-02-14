import type { UserInput, ImageInput } from '@ca11-ope/config/schema'
import Card from 'molecules/Card'

const FetchedUserDataCard = async ({ image }: { image: ImageInput }) => {
  const userData: { userById: UserInput } = await fetch(
    `${process.env.BASE_URL}/api/user/${image.userId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: image.userId,
        options: 'id avatarUrl username',
      }),
    },
  ).then((res) => res.json())
  return (
    <Card
      size='medium'
      icon={userData.userById.avatarUrl ?? ''}
      bgColor='bg-blue'
      username={userData.userById.username ?? ''}
      img={`data:image/png;base64,${image?.imageSrc}`}
      description={image.description ?? ''}
      caption={image.keyword ?? ''}
    />
  )
}

export default FetchedUserDataCard
