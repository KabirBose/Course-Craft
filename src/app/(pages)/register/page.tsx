import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <h1>Register</h1>

      <form className="flex flex-col gap-5 justify-center items-center">
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input placeholder="Student ID" type="number" />
        <input placeholder="Student Email" type="email" />
        <input placeholder="Password" type="password" />
      </form>

      <Link href="/login">Have an account? Login</Link>
    </div>
  );
}
