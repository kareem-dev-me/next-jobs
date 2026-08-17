import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { dashboardStatCards } from "@/data/dashboard";

export function DashboardStatCards() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
      {dashboardStatCards.map((card) => (
        <li key={card.label}>
          <Link
            href={card.href}
            className={`flex items-center justify-between gap-4 rounded-[4px] px-6 py-5 text-white ${card.className}`}
          >
            <span>
              <span className="block text-3xl font-semibold">{card.value}</span>
              <span className="mt-1 block text-base font-medium text-white/90">
                {card.label}
              </span>
            </span>
            <Arrow className="border-white" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
