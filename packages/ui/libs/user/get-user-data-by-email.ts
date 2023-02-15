const getUserDataByEmail = async (email: string, options: string) => {
  const response = await fetch(`${process.env.BASE_URL}/api/user/email`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      options,
    }),
  })
  if (!response.ok) return null
  const result = await response.json()
  return result.userByEmail
}

export default getUserDataByEmail
