import { db } from "./lib/db";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {
        async session({ token, session }) {
            console.log(`session token: ${token}`)
            return session;
        },
        async jwt({ token }) {
            console.log({ token });
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
});
