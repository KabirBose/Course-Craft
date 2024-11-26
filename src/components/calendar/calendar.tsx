"use client";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  CalendarApp,
  createViewMonthGrid,
  createViewDay,
  createViewWeek,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createEventRecurrencePlugin } from "@schedule-x/event-recurrence";

export default function Calendar() {
  const calendar: CalendarApp = useCalendarApp({
    views: [createViewMonthGrid(), createViewDay(), createViewWeek()],
    events: [
      {
        id: Math.random(),
        title: "Object Oriented Programming (OOP)",
        start: "2025-01-01 00:00",
        end: "2025-01-01 03:00",
      },
      {
        id: Math.random(),
        title: "Python",
        start: "2025-01-03 03:30",
        end: "2025-01-03 05:00",
      },
    ],
    selectedDate: "2025-01-01",
    plugins: [createEventModalPlugin(), createEventRecurrencePlugin()],
  });

  return (
    <>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}
