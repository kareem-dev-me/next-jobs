import type { IconName } from "@/components/dashboard/icons";

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: IconName;
  badge?: number;
};

export const dashboardNav: DashboardNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "home" },
  { label: "Messages", href: "/dashboard/messages", icon: "messages", badge: 1 },
  { label: "Company Profile", href: "/dashboard/company-profile", icon: "building" },
  { label: "All Applicants", href: "/dashboard/applicants", icon: "users" },
  { label: "Job Listing", href: "/dashboard/jobs", icon: "briefcase" },
  { label: "My Schedule", href: "/dashboard/schedule", icon: "calendar" },
];

export const dashboardSettingsNav: DashboardNavItem[] = [
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
  { label: "Help Center", href: "/dashboard/help", icon: "help" },
];

export function isDashboardNavActive(href: string, pathname: string) {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
