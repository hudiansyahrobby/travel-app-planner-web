/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultSession,
  NextAuthOptions,
  Session,
  User,
  getServerSession,
} from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

import { TUser } from "@/types/user";

declare module "next-auth" {
  interface User extends TUser {
    id: string;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser extends TUser {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends TUser {
    id: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: TUser & { id: string };
  }
}
