import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//メアドPW構築中
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "xxx@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await fetch("https://jsonplaceholder.typicode.com//posts", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        if (response.statusText === "OK") {
          return response.json();
        } else {
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  // 以下は未実装
  // secret: process.env.SECRET,
  // session: {
  //   jwt: true,
  // },
  pages: {
    // ここはログインページを示す
    // signIn: "/signup",
  },
  // callbacks: {
  //   async session(session) {
  //     return session;
  //   },
  //   async jwt(token) {
  //     return token;
  //   },
  //   redirect() {
  //     return null;
  //   },
  // },
  // debug: false,
});
