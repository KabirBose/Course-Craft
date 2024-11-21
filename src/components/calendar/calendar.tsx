"use client";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  CalendarApp,
  createViewWeek,
  createViewMonthGrid,
  createViewDay,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";

export default function Calendar() {
  const calendar: CalendarApp = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid(), createViewDay()],
    events: [
      {
        id: Math.random(),
        title: "Object Oriented Programming (OOP)",
        start: "2025-01-01 00:00",
        end: "2025-01-01 03:00",
      },
    ],
    selectedDate: "2025-01-01",
  });

  return (
    <>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}
