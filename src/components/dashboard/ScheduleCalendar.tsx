import { interviews, scheduleMonth } from "@/data/dashboardSchedule";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function monthCells(year: number, month: number) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  return [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
}

export function ScheduleCalendar() {
  const cells = monthCells(scheduleMonth.year, scheduleMonth.month);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,1fr)]">
      <section className="border border-line p-6">
        <h2 className="text-xl font-semibold text-navy">{scheduleMonth.label}</h2>
        <div className="mt-6 grid grid-cols-7 gap-2 text-center text-sm">
          {weekdays.map((day) => (
            <span key={day} className="font-semibold text-subtle">
              {day}
            </span>
          ))}
          {cells.map((day, index) => {
            const highlighted = day !== null && scheduleMonth.highlight.includes(day);
            return (
              <span
                key={`${day ?? "empty"}-${index}`}
                className={`flex h-10 items-center justify-center ${
                  highlighted ? "bg-primary font-semibold text-white" : "text-navy"
                }`}
              >
                {day ?? ""}
              </span>
            );
          })}
        </div>
      </section>
      <section className="border border-line p-6">
        <h2 className="text-xl font-semibold text-navy">Today’s interviews</h2>
        <ul className="mt-6 space-y-4">
          {interviews.map((item) => (
            <li key={item.title} className="border border-line p-4">
              <p className="font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
              <p className="mt-2 text-sm font-medium text-primary">{item.time}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
