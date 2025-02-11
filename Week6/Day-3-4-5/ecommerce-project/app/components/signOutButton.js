import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut("google");
      }}
    >
      <button className="bg-white py-2 px-4 rounded-lg">Logout</button>
    </form>
  );
}
