import { Arrow } from "@/components/ui/Arrow";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CompanyResultCard } from "@/components/companies/CompanyResultCard";
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
              <CategoryCard
                name={category.name}
                icon={category.icon}
                highlighted={category.highlighted}
                compact
              />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xl font-semibold text-navy lg:mt-12">
          {categoryCompanies.length} Results
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {categoryCompanies.map((company) => (
            <li key={company.name}>
              <CompanyResultCard {...company} />
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
