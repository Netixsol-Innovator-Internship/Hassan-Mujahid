import { signIn } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="bg-white py-2 px-4 rounded-lg">
        SignIn with Google
      </button>
    </form>
  );
}
