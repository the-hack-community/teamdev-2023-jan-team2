import type { UserInput } from '@ca11-ope/config/schema'
import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null
        const authResponse = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `{userByCredential(email:"${credentials.username}",password:"${credentials.password}"){id username email avatarUrl biography}}`,
          }),
        })

        const result = await authResponse.json()
        const userData: UserInput = result.data.userByCredential

        const authorizedUser = {
          id: String(userData.id),
          name: userData.username,
          email: userData.email,
          image: userData.avatarUrl,
        }

        if (authorizedUser) {
          // Any object returned will be saved in `user` property of the JWT
          return authorizedUser
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
}

export default NextAuth(authOptions)
