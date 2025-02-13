import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/clientPromise";
import authConfig from "./auth.config";
import User from "./models/users";
import { verifyPassword, saltAndHashPassword } from "./utils/password";
import dbConnect from "./lib/mongodb";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { type: "email", required: true },
        password: { type: "password", required: true },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          await dbConnect();

          // logic to verify if the user exists
          const user = await User.findOne({
            email: email.toLowerCase(),
          }).exec();

          if (!user) {
            throw new Error("Invalid credentials.");
          }

          const passwordsMatch = verifyPassword(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Invalid credentials.");
          }

          // return JSON object with the user data
          return {
            id: user._id,
            username: user.username,
            email: user.email,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            throw new Error("Invalid credentials.");
            // Return `null` to indicate that the credentials are invalid
          }
          throw error;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    ...authConfig,
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          // Check if user already exists
          const existingUser = await User.findOne({ email: profile.email });

          if (!existingUser) {
            // Generate a random password for Google users
            const randomPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = await saltAndHashPassword(randomPassword);

            // Create new user with custom fields
            const newUser = await User.create({
              email: profile.email,
              username: profile.email.split("@")[0], // Create username from email
              password: hashedPassword,
              // You can add more custom fields here
            });

            // Update the user object that will be saved in the session
            user.id = newUser._id;
            user.username = newUser.username;
            delete user.name; // Remove default name field
            delete user.image; // Remove default image field
          } else {
            // If user exists, update the user object for the session
            user.id = existingUser._id;
            user.username = existingUser.username;
            delete user.name;
            delete user.image;
          }
        } catch (error) {
          console.error("Google sign in error:", error);
          return false; // Return false to prevent sign in on error
        }
      }
      return true;
    },
    async session({ session, token }) {
      // Add user info to session
      if (token) {
        session.user.id = token.sub;
        session.user.username = token.username;

        delete session.user.name;
        delete session.user.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add user info to token
      if (user) {
        token.username = user.username;
        token.email = user.email;

        delete token.name;
        delete token.picture;
      }
      return token;
    },
  },
});
