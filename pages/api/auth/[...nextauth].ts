import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials 1");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        // If we found an invalid user / no user at all
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials 2");
        }

        // Checking if the password is correct
        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials 3");
        }

        // If everything is good, return the user.
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  // I'll only see error on terminal in dev env.
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// auth options is the object that we just created.
export default NextAuth(authOptions);
