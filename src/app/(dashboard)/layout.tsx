import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
  title: {
    template: "%s — JobHuntly",
    default: "Dashboard — JobHuntly",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <DashboardShell>{children}</DashboardShell>
    </div>
  );
}
