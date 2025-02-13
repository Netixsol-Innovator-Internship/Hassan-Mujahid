import SignInButton from "./components/signInButton";
import SignOutButton from "./components/signOutButton";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <div className="bg-blue-900 w-screen h-screen">
        <div className="flex gap-4">
          <h1>User LoggedIn: {session.user.email}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 w-screen h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
}
