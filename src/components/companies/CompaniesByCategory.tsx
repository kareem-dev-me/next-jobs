import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { categoryCompanies, companyCategories } from "@/data/companies";

export function CompaniesByCategory() {
  return (
    <section className="bg-white pb-12 lg:pb-16">
      <div className="landing-container">
        <h2 className="text-[28px] font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
          Companies by <span className="text-secondary">category</span>
        </h2>

        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:mt-12 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 lg:gap-8">
          {companyCategories.map((category) => (
            <li key={category.name} className="min-w-[200px] lg:min-w-0">
              <a
                href="#"
                className={`flex h-full flex-col gap-6 border p-6 transition ${
                  category.highlighted
                    ? "border-primary bg-primary shadow-[0_24px_48px_-12px_rgba(70,64,222,0.28)]"
                    : "border-line bg-white hover:border-primary"
                }`}
              >
                <span className="flex size-12 overflow-clip">
                  <Image
                    src={category.icon}
                    alt=""
                    width={48}
                    height={48}
                    unoptimized={category.icon.endsWith(".svg")}
                    className="size-full object-contain"
                  />
                </span>
                <span
                  className={`text-xl font-semibold leading-7 ${
                    category.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {category.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xl font-semibold text-navy lg:mt-12">
          {categoryCompanies.length} Results
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {categoryCompanies.map((company) => (
            <li key={company.name}>
              <a
                href="#"
                className="flex h-full items-center gap-4 border border-line p-6 hover:border-primary"
              >
                <FigmaAsset
                  src={company.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 shrink-0"
                />
                <span className="min-w-0">
                  <span className="block truncate text-lg font-semibold text-navy">
                    {company.name}
                  </span>
                  <span className="mt-1 block text-base text-subtle">
                    {company.jobs} Jobs
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary hover:opacity-80"
        >
          View more Design companies
          <Arrow />
        </a>
      </div>
    </section>
  );
}
