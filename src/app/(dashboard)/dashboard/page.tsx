import type { Metadata } from "next";
import { DashboardIcon } from "@/components/dashboard/icons";
import { DashboardSideStats } from "@/components/dashboard/DashboardSideStats";
import { DashboardStatCards } from "@/components/dashboard/DashboardStatCards";
import { JobStatistics } from "@/components/dashboard/JobStatistics";
import { dashboardGreeting } from "@/data/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-[28px] font-semibold text-navy lg:text-3xl">
            {dashboardGreeting.title}
          </h1>
          <p className="mt-2 text-base text-muted">{dashboardGreeting.subtitle}</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 self-start border border-line px-4 py-2.5 text-sm font-semibold text-navy"
        >
          <DashboardIcon name="calendar" className="size-5 text-muted" />
          {dashboardGreeting.range}
        </button>
      </div>
      <DashboardStatCards />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,1fr)]">
        <JobStatistics />
        <DashboardSideStats />
      </div>
    </div>
  );
}
