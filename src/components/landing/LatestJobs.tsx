import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { latestJobs } from "@/data/landing";

function Tag({ label }: { label: string }) {
  const styles =
    label === "Marketing"
      ? "border-warning text-warning"
      : "border-primary text-primary";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-sm font-semibold ${styles}`}
    >
      {label}
    </span>
  );
}

export function LatestJobs() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <Image
        src="/landing/pattern-latest.svg"
        alt=""
        width={797}
        height={877}
        unoptimized
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-[min(50%,797px)] object-contain object-right opacity-70 lg:block"
      />
      <div className="landing-container relative">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[28px] font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Latest <span className="text-secondary">jobs open</span>
          </h2>
          <a
            href="#"
            className="hidden items-center gap-2 text-base font-semibold text-primary hover:opacity-80 sm:flex"
          >
            Show all jobs
            <Arrow />
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 lg:mt-12 lg:grid-cols-2 lg:gap-y-8">
          {latestJobs.map((job) => (
            <li key={`${job.company}-${job.title}`}>
              <a href="#" className="flex items-start gap-4 sm:gap-6">
                <FigmaAsset
                  src={job.logo}
                  alt=""
                  width={64}
                  height={64}
                  className="size-12 shrink-0 sm:size-16"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-xl font-semibold text-navy">
                    {job.title}
                  </span>
                  <span className="mt-1 flex flex-wrap items-center gap-x-2 text-base text-subtle">
                    <span>{job.company}</span>
                    <span className="size-1 rounded-full bg-subtle" />
                    <span>{job.location}</span>
                  </span>
                  <span className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-sm font-semibold text-success">
                      {job.type}
                    </span>
                    <span className="hidden h-6 w-px bg-line sm:block" />
                    {job.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </span>
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
