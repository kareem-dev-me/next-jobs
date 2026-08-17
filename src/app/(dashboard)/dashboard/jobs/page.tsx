import type { Metadata } from "next";
import Link from "next/link";
import { postedJobs } from "@/data/dashboardJobs";

export const metadata: Metadata = {
  title: "Job Listing",
};

export default function JobsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-[28px] font-semibold text-navy">Job Listing</h1>
        <Link
          href="/dashboard/jobs/new"
          className="rounded-[4px] bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary/90"
        >
          Post a job
        </Link>
      </div>
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-ghost text-subtle">
            <tr>
              <th className="px-4 py-3 font-semibold">Role</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Applicants</th>
              <th className="px-4 py-3 font-semibold">Posted</th>
            </tr>
          </thead>
          <tbody>
            {postedJobs.map((job) => (
              <tr key={job.title} className="border-t border-line">
                <td className="px-4 py-4 font-semibold text-navy">{job.title}</td>
                <td className="px-4 py-4 text-muted">{job.type}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      job.status === "Open"
                        ? "bg-success/10 text-success"
                        : "bg-ghost text-subtle"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-muted">{job.applicants}</td>
                <td className="px-4 py-4 text-muted">{job.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
