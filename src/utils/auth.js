import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const authOptions= {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.envGOOGLE_SECRET,
        }),
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.envGITHUB_SECRET,
        }),
    ],
}