import { Arrow } from "@/components/ui/Arrow";
import { JobCard } from "@/components/jobs/JobCard";
import { featuredJobs } from "@/data/landing";

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
              <JobCard {...job} />
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
