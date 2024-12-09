import { NextAuthOptions, Session, User, getServerSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { TUser } from "@/types/user";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // TODO handle call API to authenticate user
        console.log("CREDENTIEALS", credentials);
        // Add your own logic here to find the user from your database
        const user = {
          id: "asdhusdhu",
          name: "User",
          avatar: "https://www.gravatar.com/avatar/",
          email: "user@example.com",
          password: "test",
          accessToken: "accessToken",
          refreshToken: "refreshToken",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }: { token: JWT; user: AdapterUser | User }) {
      // Add the user properties to the token after signing in
      if (user) {
        token.id = user.id;
        token.avatar = user.avatar;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token as TUser;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Create a user object with token properties
      const userObject: TUser = {
        id: token.id,
        avatar: token.avatar,
        name: token.name,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        email: token.email ? token.email : "", // Ensure email is not undefined
      };

      // Add the user object to the session
      session.user = userObject;

      return session;
    },
  },
} satisfies NextAuthOptions;

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
