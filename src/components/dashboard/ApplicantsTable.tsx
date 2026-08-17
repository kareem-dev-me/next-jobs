"use client";

import { useMemo, useState } from "react";
import { applicantStatuses, applicants } from "@/data/dashboardApplicants";

const statusClass: Record<string, string> = {
  "In Review": "bg-ghost text-primary",
  Interview: "bg-secondary/10 text-secondary",
  Shortlisted: "bg-success/10 text-success",
  Hired: "bg-success text-white",
  Declined: "bg-[#FF6550]/10 text-[#FF6550]",
};

export function ApplicantsTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const rows = useMemo(() => {
    return applicants.filter((item) => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "All" || item.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search applicants"
          className="w-full rounded-[4px] border border-line px-4 py-2.5 text-sm text-navy outline-none placeholder:text-subtle focus:border-primary sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {applicantStatuses.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`rounded-[4px] px-3 py-1.5 text-sm font-semibold ${
                status === item
                  ? "bg-primary text-white"
                  : "border border-line text-muted hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-ghost text-subtle">
            <tr>
              <th className="px-4 py-3 font-semibold">Full Name</th>
              <th className="px-4 py-3 font-semibold">Job</th>
              <th className="px-4 py-3 font-semibold">Applied</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={`${item.name}-${item.job}`} className="border-t border-line">
                <td className="px-4 py-4 font-semibold text-navy">{item.name}</td>
                <td className="px-4 py-4 text-muted">{item.job}</td>
                <td className="px-4 py-4 text-muted">{item.date}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
