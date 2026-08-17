import Image from "next/image";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { popularSearches } from "@/data/landing";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ghost">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(997px,70%)] lg:block">
        <Image
          src="/landing/pattern.svg"
          alt=""
          width={997}
          height={794}
          unoptimized
          className="h-full w-full object-cover object-left"
        />
      </div>

      <div className="landing-container relative pb-16 pt-8 lg:min-h-[714px] lg:pb-20 lg:pt-16">
        <div className="relative z-10 max-w-[850px]">
          <div className="relative mb-6 max-w-[500px] lg:mb-8">
            <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-navy sm:text-5xl lg:text-[72px] lg:leading-[1.08]">
              Discover more than 5000+ Jobs
            </h1>
            <span className="mt-2 block h-6 w-[min(100%,322px)] overflow-clip sm:h-8 sm:w-[380px] lg:h-10 lg:w-[455px]">
              <Image
                src="/landing/underline.svg"
                alt=""
                width={455}
                height={40}
                unoptimized
                className="size-full object-contain object-left"
              />
            </span>
          </div>

          <p className="mb-6 max-w-[491px] text-base leading-7 text-muted lg:mb-8 lg:text-xl lg:leading-8">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

            <form
            className="flex w-full flex-col gap-4 bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_33px_54px_-23px_rgba(0,0,0,0.12)] sm:p-5 lg:flex-row lg:items-center lg:gap-0 lg:p-4"
            action="#"
            method="get"
          >
            <label className="flex min-w-0 flex-1 items-center gap-4 border-b border-line px-2 py-3 lg:border-b-0 lg:border-r lg:py-2">
              <FigmaAsset
                src="/landing/search.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <input
                type="text"
                name="q"
                placeholder="Job title or keyword"
                className="w-full bg-transparent text-base text-navy outline-none placeholder:text-subtle"
              />
            </label>
            <label className="flex min-w-0 flex-1 items-center gap-4 border-b border-line px-2 py-3 lg:border-b-0 lg:py-2">
              <FigmaAsset
                src="/landing/location.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <input
                type="text"
                name="location"
                defaultValue="Florence, Italy"
                className="w-full bg-transparent text-base text-navy outline-none placeholder:text-subtle"
              />
            </label>
            <button
              type="submit"
              className="rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90 lg:ml-4 lg:shrink-0"
            >
              Search my job
            </button>
          </form>

          <p className="mt-5 text-base leading-6 text-muted">
            <span className="font-medium">Popular:</span>{" "}
            {popularSearches.map((term, index) => (
              <span key={term}>
                <a href="#" className="underline decoration-muted/60 underline-offset-4 hover:text-primary">
                  {term}
                </a>
                {index < popularSearches.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
