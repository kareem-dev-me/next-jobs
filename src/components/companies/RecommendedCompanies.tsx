import { Arrow } from "@/components/ui/Arrow";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { recommendedCompanies } from "@/data/companies";

function Tag({ label }: { label: string }) {
  const styles =
    label === "Design"
      ? "border-primary text-primary"
      : label === "Technology"
        ? "border-[#FF6550] text-[#FF6550]"
        : "border-warning text-warning";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-sm font-semibold ${styles}`}
    >
      {label}
    </span>
  );
}

export function RecommendedCompanies() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="landing-container">
        <h2 className="text-[28px] font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
          Recommended <span className="text-secondary">companies</span>
        </h2>
        <p className="mt-3 text-base text-muted">
          Based on your profile, company preferences, and recent activity
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {recommendedCompanies.map((company) => (
            <li key={company.name}>
              <a
                href="#"
                className="flex h-full flex-col gap-4 border border-line p-6 hover:border-primary"
              >
                <span className="flex items-start justify-between gap-3">
                  <FigmaAsset
                    src={company.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12"
                  />
                  <span className="flex items-center gap-2 text-base font-semibold text-primary">
                    {company.jobs} Jobs
                    <Arrow className="border-primary" />
                  </span>
                </span>
                <span className="flex flex-col gap-2">
                  <span className="text-xl font-semibold text-navy">
                    {company.name}
                  </span>
                  <span className="text-base leading-7 text-muted">
                    {company.description}
                  </span>
                </span>
                <span className="mt-auto flex flex-wrap gap-2">
                  {company.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
