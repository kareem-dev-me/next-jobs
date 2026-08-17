import { applicantSummary, jobsOpened } from "@/data/dashboard";

export function DashboardSideStats() {
  const total = applicantSummary.breakdown.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <section className="border border-line p-6">
        <p className="text-5xl font-semibold text-navy">{jobsOpened}</p>
        <p className="mt-2 text-base text-muted">Jobs Opened</p>
      </section>

      <section className="flex flex-1 flex-col border border-line p-6">
        <p className="text-5xl font-semibold text-navy">{applicantSummary.total}</p>
        <p className="mt-2 text-base text-muted">Applicants</p>
        <div className="mt-6 flex h-3 overflow-hidden">
          {applicantSummary.breakdown.map((item) => (
            <span
              key={item.label}
              className={item.color}
              style={{ width: `${(item.value / total) * 100}%` }}
            />
          ))}
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
          {applicantSummary.breakdown.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm text-muted">
              <span className={`size-2.5 shrink-0 ${item.color}`} />
              <span>{item.label}</span>
              <span className="ml-auto font-semibold text-navy">{item.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
