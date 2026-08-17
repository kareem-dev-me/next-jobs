"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "@/components/dashboard/icons";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import {
  dashboardNav,
  dashboardSettingsNav,
  isDashboardNavActive,
  type DashboardNavItem,
} from "@/data/dashboardNav";

function NavList({
  items,
  pathname,
  onNavigate,
}: {
  items: DashboardNavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const active = isDashboardNavActive(item.href, pathname);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`relative flex items-center gap-3 px-6 py-3 text-base font-medium ${
                active
                  ? "bg-ghost text-primary"
                  : "text-muted hover:bg-ghost hover:text-navy"
              }`}
            >
              {active ? (
                <span className="absolute inset-y-0 left-0 w-1 bg-primary" />
              ) : null}
              <DashboardIcon name={item.icon} className="size-5 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge ? (
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function DashboardSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-navy/40 lg:hidden"
          aria-label="Close menu"
          onClick={onClose}
        />
      ) : null}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-line bg-white transition-transform lg:static lg:z-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <FigmaAsset
              src="/landing/logo.svg"
              alt=""
              width={32}
              height={32}
              className="size-8"
            />
            <span className="text-xl font-bold tracking-[-0.01em] text-navy">
              JobHuntly
            </span>
          </Link>
          <button
            type="button"
            className="lg:hidden"
            aria-label="Close menu"
            onClick={onClose}
          >
            <DashboardIcon name="close" className="size-5 text-navy" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-8 overflow-y-auto py-4">
          <NavList items={dashboardNav} pathname={pathname} onNavigate={onClose} />
          <div>
            <p className="px-6 pb-2 text-sm font-semibold tracking-wide text-subtle">
              SETTINGS
            </p>
            <NavList
              items={dashboardSettingsNav}
              pathname={pathname}
              onNavigate={onClose}
            />
          </div>
        </nav>
      </aside>
    </>
  );
}
