import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_ID_SECRET!,
        }),
    ],
    secret: process.env.AUTH_SECRET,
})
