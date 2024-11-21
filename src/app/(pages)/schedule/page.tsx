import Calendar from "@/components/calendar/calendar";

export default function () {
  return (
    <div className="flex justify-center items-center flex-col gap-10 h-[100vh]">
      <h1>Schedule</h1>
      <Calendar />
    </div>
  );
}
