import Image from "next/image";
import { brands } from "@/data/landing";

export function CompanyLogos() {
  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="landing-container">
        <h2 className="text-lg font-normal leading-7 text-ink/50">
          Companies we helped grow
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-6 lg:mt-8">
          {brands.map((brand) => (
            <li key={brand.name} className="flex h-10 items-center">
              <span
                className="inline-flex overflow-clip"
                style={{ width: brand.width, height: brand.height }}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  unoptimized
                  className="size-full object-contain object-left"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
