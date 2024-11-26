"use client";

const years = [2024, 2025];
const semesters = ["Fall", "Winter", "Spring/Summer"];
const courses = [
  "Introduction to Computer Science",
  "Object Oriented Programming",
  "Calculus I",
];

export default function Courses() {
  return (
    <div className="flex justify-center items-start gap-3 flex-col bg-gray-50 p-5 rounded-lg">
      <div className="flex justify-center items-center gap-5">
        <p>Year:</p>
        {years.map((year, i) => {
          return <button key={i}>{year}</button>;
        })}
      </div>

      <div className="flex justify-center items-center gap-5">
        <p>Semester:</p>
        {semesters.map((semester, i) => {
          return <button key={i}>{semester}</button>;
        })}
      </div>

      <div className="flex justify-center items-center gap-5">
        <p>Courses:</p>
        {courses.map((course, i) => {
          return <button key={i}>{course}</button>;
        })}
      </div>
    </div>
  );
}
