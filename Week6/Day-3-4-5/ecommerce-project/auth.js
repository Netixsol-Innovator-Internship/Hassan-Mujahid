import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "./lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
    ...authConfig,
  },
});
