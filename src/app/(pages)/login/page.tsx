import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <h1>Login</h1>

      <form className="flex flex-col gap-5 justify-center items-center">
        <input
          className="bg-gray-100"
          placeholder="Student Email"
          type="email"
        />
        <input className="bg-gray-100" placeholder="Password" type="password" />
      </form>

      <Link href="/register">No account? Register</Link>
    </div>
  );
}
