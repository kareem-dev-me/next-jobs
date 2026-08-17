import type { Metadata } from "next";
import { ApplicantsTable } from "@/components/dashboard/ApplicantsTable";

export const metadata: Metadata = {
  title: "All Applicants",
};

export default function ApplicantsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">All Applicants</h1>
      <ApplicantsTable />
    </div>
  );
}
