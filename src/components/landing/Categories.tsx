import { Arrow } from "@/components/ui/Arrow";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { categories } from "@/data/landing";

export function Categories() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="landing-container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[28px] font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Explore by <span className="text-secondary">category</span>
          </h2>
          <a
            href="#"
            className="hidden items-center gap-2 text-base font-semibold text-primary hover:opacity-80 sm:flex"
          >
            Show all jobs
            <Arrow />
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {categories.map((category) => (
            <li key={category.name}>
              <CategoryCard
                name={category.name}
                icon={category.icon}
                highlighted={category.highlighted}
                footer={
                  <span
                    className={`flex items-center justify-between text-lg leading-7 ${
                      category.highlighted ? "text-white/80" : "text-subtle"
                    }`}
                  >
                    {category.jobs} jobs available
                    <Arrow
                      className={
                        category.highlighted ? "border-white" : "border-subtle"
                      }
                    />
                  </span>
                }
              />
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
