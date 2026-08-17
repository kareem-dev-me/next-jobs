import { CardLink } from "@/components/ui/CardLink";
import { FigmaAsset } from "@/components/ui/FigmaAsset";

type CompanyResultCardProps = {
  name: string;
  jobs: number;
  logo: string;
};

export function CompanyResultCard({
  name,
  jobs,
  logo,
}: CompanyResultCardProps) {
  return (
    <CardLink className="items-center gap-4">
      <FigmaAsset
        src={logo}
        alt=""
        width={48}
        height={48}
        className="size-12 shrink-0"
      />
      <span className="min-w-0">
        <span className="block truncate text-lg font-semibold text-navy">
          {name}
        </span>
        <span className="mt-1 block text-base text-subtle">{jobs} Jobs</span>
      </span>
    </CardLink>
  );
}
