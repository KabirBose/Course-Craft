import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <h1>Login</h1>

      <form className="flex flex-col gap-5 justify-center items-center">
        <input placeholder="Student Email" type="email" />
        <input placeholder="Password" type="password" />
      </form>

      <Link href="/register">
        No account? <span className="underline">Register</span>
      </Link>
    </div>
  );
}
