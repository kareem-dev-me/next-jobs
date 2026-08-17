import { Arrow } from "@/components/ui/Arrow";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { featuredJobs } from "@/data/landing";

function Tag({ label }: { label: string }) {
  const styles =
    label === "Marketing"
      ? "border-warning text-warning"
      : label === "Design"
        ? "border-primary text-primary"
        : "border-[#FF6550] text-[#FF6550]";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-sm font-semibold ${styles}`}
    >
      {label}
    </span>
  );
}

export function FeaturedJobs() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="landing-container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[28px] font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Featured <span className="text-secondary">jobs</span>
          </h2>
          <a
            href="#"
            className="hidden items-center gap-2 text-base font-semibold text-primary hover:opacity-80 sm:flex"
          >
            Show all jobs
            <Arrow />
          </a>
        </div>

        <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {featuredJobs.map((job) => (
            <li
              key={`${job.company}-${job.title}-${job.location}`}
              className="w-[260px] shrink-0 snap-start sm:w-auto"
            >
              <a
                href="#"
                className="flex h-full flex-col gap-4 border border-line p-6 hover:border-primary"
              >
                <span className="flex items-start justify-between gap-3">
                  <FigmaAsset
                    src={job.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12"
                  />
                  <span className="rounded-[4px] border border-primary px-2.5 py-1 text-sm font-semibold text-primary">
                    {job.type}
                  </span>
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-semibold text-navy">
                    {job.title}
                  </span>
                  <span className="flex items-center gap-2 text-base text-subtle">
                    {job.company}
                    <span className="size-1 rounded-full bg-subtle" />
                    <FigmaAsset
                      src="/landing/location-sm.svg"
                      alt=""
                      width={16}
                      height={20}
                      className="h-[14px] w-[12px] opacity-70"
                    />
                    {job.location}
                  </span>
                </span>
                <span className="mt-auto flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-6 flex items-center gap-2 text-base font-semibold text-primary sm:hidden"
        >
          Show all jobs
          <Arrow />
        </a>
      </div>
    </section>
  );
}
