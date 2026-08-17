import type { Metadata } from "next";
import { CompaniesByCategory } from "@/components/companies/CompaniesByCategory";
import { CompaniesHero } from "@/components/companies/CompaniesHero";
import { RecommendedCompanies } from "@/components/companies/RecommendedCompanies";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Browse Companies — JobHuntly",
};

export default function CompaniesPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main>
        <CompaniesHero />
        <RecommendedCompanies />
        <CompaniesByCategory />
      </main>
      <Footer />
    </div>
  );
}
