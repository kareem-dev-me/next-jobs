import type { Metadata } from "next";
import { ScheduleCalendar } from "@/components/dashboard/ScheduleCalendar";

export const metadata: Metadata = {
  title: "My Schedule",
};

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">My Schedule</h1>
      <ScheduleCalendar />
    </div>
  );
}
