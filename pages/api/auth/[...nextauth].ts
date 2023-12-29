import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import LineProvider from "next-auth/providers/line";
const secret = process.env.NEXTAUTH_SECRET
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',

        }),
        LineProvider({
            clientId: process.env.LINE_CLIENT_ID || '',
            clientSecret: process.env.LINE_CLIENT_SECRET || ''
        })
    ],
    callbacks: {
        async jwt({ token, account }: any) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }: any) {
            session.accessToken = token.accessToken
            return session
        }
    }
};
export default NextAuth(authOptions)