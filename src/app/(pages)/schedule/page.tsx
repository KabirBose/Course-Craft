import Calendar from "@/components/calendar/calendar";

export default function () {
  return (
    <div className="flex justify-center items-center flex-col min-h-[100vh] gap-10">
      <h1>User's Schedule</h1>

      <div className="flex justify-center items-start gap-3 flex-col bg-gray-50 p-5 rounded-lg">
        <div className="flex justify-center items-center gap-5">
          <p>Year:</p>
          <button>2024</button>
          <button>2025</button>
        </div>

        <div className="flex justify-center items-center gap-5">
          <p>Semester:</p>
          <button>Fall</button>
          <button>Winter</button>
          <button>Spring</button>
        </div>

        <div className="flex justify-center items-center gap-5">
          <p>Courses:</p>
          <button>OOP (12:00AM - 3:00AM)</button>
          <button>Python (3:30AM - 5:00AM)</button>
          <button>CS (9:30PM - 11:00PM)</button>
        </div>
      </div>

      <Calendar />
    </div>
  );
}
