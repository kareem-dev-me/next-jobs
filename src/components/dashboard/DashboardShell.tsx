"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-full flex-1 bg-white">
      <DashboardSidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar onMenu={() => setOpen(true)} />
        <main className="flex-1 overflow-x-auto bg-white p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
