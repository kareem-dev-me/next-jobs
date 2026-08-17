import type { Metadata } from "next";
import { HelpAccordion } from "@/components/dashboard/HelpAccordion";

export const metadata: Metadata = {
  title: "Help Center",
};

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">Help Center</h1>
      <HelpAccordion />
    </div>
  );
}
