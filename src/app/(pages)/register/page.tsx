export default function () {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <h1>Register</h1>

      <form className="flex flex-col gap-5 justify-center items-center">
        <input className="bg-gray-100" placeholder="First Name" type="text" />
        <input className="bg-gray-100" placeholder="Last Name" type="text" />
        <input className="bg-gray-100" placeholder="Student ID" type="number" />
        <input
          className="bg-gray-100"
          placeholder="Student Email"
          type="email"
        />
        <input className="bg-gray-100" placeholder="Password" type="password" />
      </form>
    </div>
  );
}
