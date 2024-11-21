"use client";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  CalendarApp,
  createViewMonthGrid,
  createViewDay,
  createViewWeek,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createResizePlugin } from "@schedule-x/resize";

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
    ],
    selectedDate: "2025-01-01",
    plugins: [
      createDragAndDropPlugin(),
      createEventModalPlugin(),
      createResizePlugin(),
    ],
  });

  return (
    <>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}
