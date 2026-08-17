"use client";

import { useState } from "react";
import { DashboardIcon } from "@/components/dashboard/icons";
import {
  jobAppliedSummary,
  jobStatDays,
  jobStatDaysMonth,
  jobStatDaysYear,
  jobViewSummary,
} from "@/data/dashboard";

const ranges = ["Week", "Month", "Year"] as const;
const tabs = ["Overview", "Jobs View", "Jobs Applied"] as const;

export function JobStatistics() {
  const [range, setRange] = useState<(typeof ranges)[number]>("Week");
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");

  const days =
    range === "Month"
      ? jobStatDaysMonth
      : range === "Year"
        ? jobStatDaysYear
        : jobStatDays;

  const max = Math.max(...days.map((d) => d.applied + d.view), 1);
  const showApplied = tab !== "Jobs View";
  const showView = tab !== "Jobs Applied";

  return (
    <section className="border border-line p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-navy">Job statistics</h2>
          <p className="mt-1 text-sm text-subtle">
            Showing jobstatistic Jul 19-25
          </p>
        </div>
        <div className="flex rounded-[4px] border border-line p-1">
          {ranges.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRange(item)}
              className={`px-3 py-1.5 text-sm font-semibold ${
                range === item
                  ? "bg-ghost text-primary"
                  : "text-muted hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-6 border-b border-line">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`border-b-2 pb-3 text-sm font-semibold ${
              tab === item
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-navy"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_200px]">
        <div className="flex h-56 items-end gap-3 sm:gap-4">
          {days.map((item) => {
            const appliedHeight = showApplied ? (item.applied / max) * 100 : 0;
            const viewHeight = showView ? (item.view / max) * 100 : 0;
            return (
              <div
                key={item.day}
                className="relative flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                {"tooltip" in item && item.tooltip ? (
                  <div className="absolute -top-2 z-10 rounded-[4px] bg-navy px-3 py-2 text-xs text-white">
                    <p>{item.view}</p>
                    <p className="text-lilac">{item.applied}</p>
                  </div>
                ) : null}
                <div className="flex w-full max-w-8 flex-1 items-end">
                  <div className="flex w-full flex-col justify-end">
                    <div
                      className="w-full bg-warning"
                      style={{ height: `${viewHeight}%` }}
                    />
                    <div
                      className="w-full bg-primary"
                      style={{ height: `${appliedHeight}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-subtle">{item.day}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-center gap-8">
          <StatSide
            icon="eye"
            label={jobViewSummary.label}
            value={jobViewSummary.value}
            change={jobViewSummary.change}
            up={jobViewSummary.up}
          />
          <StatSide
            icon="file"
            label={jobAppliedSummary.label}
            value={jobAppliedSummary.value}
            change={jobAppliedSummary.change}
            up={jobAppliedSummary.up}
          />
        </div>
      </div>
    </section>
  );
}

function StatSide({
  icon,
  label,
  value,
  change,
  up,
}: {
  icon: "eye" | "file";
  label: string;
  value: string;
  change: string;
  up: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center bg-ghost text-primary">
          <DashboardIcon name={icon} className="size-5" />
        </span>
        <div>
          <p className="text-sm text-subtle">{label}</p>
          <p className="text-2xl font-semibold text-navy">{value}</p>
        </div>
      </div>
      <p className={`mt-2 text-sm font-medium ${up ? "text-primary" : "text-[#FF6550]"}`}>
        This Week {change} {up ? "↑" : "↓"}
      </p>
    </div>
  );
}
