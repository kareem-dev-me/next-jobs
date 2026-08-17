import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { JobRow } from "@/components/jobs/JobRow";
import { latestJobs } from "@/data/landing";

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
              <JobRow {...job} />
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
