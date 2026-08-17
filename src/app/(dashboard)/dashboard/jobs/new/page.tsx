import type { Metadata } from "next";
import { PostJobForm } from "@/components/dashboard/PostJobForm";

export const metadata: Metadata = {
  title: "Post a job",
};

export default function NewJobPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">Post a job</h1>
      <PostJobForm />
    </div>
  );
}
