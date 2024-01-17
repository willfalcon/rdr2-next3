// import GitHubProvider from 'next-auth/providers/github';
// import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

// import crypto from 'crypto';
// import { getUser } from '@/lib/fetching';
// import { MyAdapter } from './adapter';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import prisma from '@/lib/prisma';

export const options = {
  // adapter: MyAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: {
    //       label: 'Email',
    //       type: 'text',
    //     },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //     },
    //   },
    //   async authorize(credentials) {
    //     // const user = await fetch(`/api/verification`, {
    //     //   method: 'POST',
    //     //   body: JSON.stringify(credentials),
    //     //   cache: 'no-cache', //TODO: remove for production
    //     // }).then(async res => {
    //     //   if (res.ok) return await res.json();
    //     //   else return null;
    //     // });
    //     const user = await getUser(credentials.email);
    //     if (!user) return nul;
    //     if (user) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
  ],
  adapter: PrismaAdapter(prisma),
  // callbacks: {
  //   session: async ({ session, user }) => {
  //     if (session?.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
};
