import Calendar from "@/components/calendar/calendar";
import Courses from "@/components/courses/courses";

export default function () {
  return (
    <div className="flex justify-center items-center flex-col min-h-[100vh] gap-10">
      <h1>User's Schedule</h1>
      <Courses />
      <Calendar />
    </div>
  );
}
