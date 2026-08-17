import { Categories } from "@/components/landing/Categories";
import { CompanyLogos } from "@/components/landing/CompanyLogos";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { FeaturedJobs } from "@/components/landing/FeaturedJobs";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LatestJobs } from "@/components/landing/LatestJobs";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Categories />
        <CtaBanner />
        <FeaturedJobs />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
}
