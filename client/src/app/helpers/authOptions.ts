import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { DefaultSession, User as NextAuthUser, Session as NextAuthSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// Module augmentation
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    accessToken?: string;
  }

  interface JWT {
    id: string;
    accessToken?: string;
  }
}

// Use imported types for callbacks
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!res.ok) return null;

        const data = await res.json();

        if (data?.user.id && data.accessToken) {
          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            accessToken: data.accessToken,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser & { accessToken?: string } }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }: { session: NextAuthSession; token: JWT }) {
      console.log(session,"from authoptions")
      if (session.user) {
        session.user.id = token.id as string;
         session.user.accessToken = token.accessToken as string | undefined;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};



export default NextAuth(authOptions);
