import { CompanyCard } from "@/components/companies/CompanyCard";
import { recommendedCompanies } from "@/data/companies";

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
              <CompanyCard {...company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
