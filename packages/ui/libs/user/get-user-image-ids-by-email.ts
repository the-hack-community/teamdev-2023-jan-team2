const getUserImageIdsByEmail = async (email: string) => {
  const response = await fetch(`${process.env.BASE_URL}/api/user/email`, {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
  })
  if (!response.ok) return null
  const result = await response.json()
  return result.userByEmail
}

export default getUserImageIdsByEmail
