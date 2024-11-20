"use client";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  createViewWeek,
  CalendarApp,
  createViewMonthGrid,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";

export default function () {
  const calendar: CalendarApp = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid()],
    events: [
      {
        id: 1,
        title: "Event 1",
        start: "2025-01-01 00:00",
        end: "2025-01-01 02:00",
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
