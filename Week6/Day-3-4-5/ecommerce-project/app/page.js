import SignInButton from "./components/signInButton";
import SignOutButton from "./components/signOutButton";

export default function Home() {
  return (
    <div className="bg-blue-900 w-screen h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
}
