"use client";

import Link from "next/link";
import { DashboardIcon } from "@/components/dashboard/icons";
import { FigmaAsset } from "@/components/ui/FigmaAsset";

export function DashboardTopbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-line bg-white px-4 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="lg:hidden"
          aria-label="Open menu"
          onClick={onMenu}
        >
          <DashboardIcon name="menu" className="size-6 text-navy" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 text-left"
        >
          <FigmaAsset
            src="/landing/companies/nomad.svg"
            alt=""
            width={32}
            height={32}
            className="size-8"
          />
          <span className="text-base font-semibold text-navy">Company Nomad</span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block size-2 border-b-2 border-r-2 border-navy rotate-45"
          />
        </button>
      </div>
      <div className="flex items-center gap-3 lg:gap-4">
        <button
          type="button"
          className="flex size-10 items-center justify-center text-navy"
          aria-label="Notifications"
        >
          <DashboardIcon name="bell" className="size-6" />
        </button>
        <Link
          href="/dashboard/jobs/new"
          className="inline-flex items-center gap-2 rounded-[4px] bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary/90 lg:px-6 lg:text-base"
        >
          <DashboardIcon name="plus" className="size-4" />
          Post a job
        </Link>
      </div>
    </header>
  );
}
