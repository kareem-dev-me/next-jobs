export const dashboardGreeting = {
  title: "Good morning, Maria",
  subtitle: "Here is your job listings statistic report from July 19 - July 25.",
  range: "Jul 19 - Jul 25",
};

export const dashboardStatCards = [
  {
    value: "76",
    label: "New candidates to review",
    href: "/dashboard/applicants",
    className: "bg-primary",
  },
  {
    value: "3",
    label: "Schedule for today",
    href: "/dashboard/schedule",
    className: "bg-success",
  },
  {
    value: "24",
    label: "Messages received",
    href: "/dashboard/messages",
    className: "bg-secondary",
  },
];

export const jobStatDays = [
  { day: "Mon", applied: 48, view: 96 },
  { day: "Tue", applied: 62, view: 108 },
  { day: "Wed", applied: 34, view: 122, tooltip: true },
  { day: "Thu", applied: 70, view: 130 },
  { day: "Fri", applied: 58, view: 118 },
  { day: "Sat", applied: 28, view: 64 },
  { day: "Sun", applied: 22, view: 50 },
];

export const jobStatDaysMonth = [
  { day: "W1", applied: 180, view: 420 },
  { day: "W2", applied: 210, view: 510 },
  { day: "W3", applied: 164, view: 460 },
  { day: "W4", applied: 198, view: 490 },
];

export const jobStatDaysYear = [
  { day: "Q1", applied: 1400, view: 3800 },
  { day: "Q2", applied: 1650, view: 4200 },
  { day: "Q3", applied: 1540, view: 4010 },
  { day: "Q4", applied: 1720, view: 4500 },
];

export const jobViewSummary = {
  label: "Job Views",
  value: "2,342",
  change: "6.4%",
  up: true,
};

export const jobAppliedSummary = {
  label: "Job Applied",
  value: "654",
  change: "0.5%",
  up: false,
};

export const jobsOpened = 12;

export const applicantSummary = {
  total: 67,
  breakdown: [
    { label: "Full Time", value: 45, color: "bg-primary" },
    { label: "Part-Time", value: 24, color: "bg-success" },
    { label: "Remote", value: 22, color: "bg-secondary" },
    { label: "Internship", value: 32, color: "bg-warning" },
    { label: "Contract", value: 30, color: "bg-[#FF6550]" },
  ],
};
