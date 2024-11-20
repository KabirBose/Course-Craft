import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <h1>Course Craft</h1>

      <Link href="/register">Register</Link>
    </div>
  );
}
