import type { ReactNode } from "react";

type IconName =
  | "home"
  | "messages"
  | "building"
  | "users"
  | "briefcase"
  | "calendar"
  | "settings"
  | "help"
  | "bell"
  | "plus"
  | "menu"
  | "close"
  | "eye"
  | "file";

const paths: Record<IconName, ReactNode> = {
  home: (
    <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
  ),
  messages: (
    <>
      <path d="M5 6h14v10H8l-3 3z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5h10v16M15 10h4v11" />
      <path d="M8 9h4M8 13h4M8 17h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-2.8 2.8-4.5 5.5-4.5s4.9 1.7 5.5 4.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.5c2.2.3 3.8 1.7 4.5 4.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="4" y="8" width="16" height="11" />
      <path d="M9 8V6h6v2M4 13h16" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" />
      <path d="M4 10h16M8 4v4M16 4v4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.5v2.2M12 17.3V19.5M19.5 12h-2.2M6.7 12H4.5M17.3 6.7l-1.6 1.6M8.3 15.7 6.7 17.3M17.3 17.3l-1.6-1.6M8.3 8.3 6.7 6.7" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.8.4-1.4 1-1.4 1.9V14" />
      <path d="M12 17h.01" />
    </>
  ),
  bell: (
    <>
      <path d="M6 17h12l-1.5-2.5A6 6 0 0 1 16 11V9a4 4 0 1 0-8 0v2a6 6 0 0 1-.5 3.5z" />
      <path d="M10 17v1a2 2 0 0 0 4 0v-1" />
    </>
  ),
  plus: <path d="M12 6v12M6 12h12" />,
  menu: <path d="M5 7h14M5 12h14M5 17h14" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  eye: (
    <>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  file: (
    <>
      <path d="M7 4h7l5 5v11H7z" />
      <path d="M14 4v5h5M9 13h6M9 16h4" />
    </>
  ),
};

export function DashboardIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "size-6"}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
