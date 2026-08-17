import { Arrow } from "@/components/ui/Arrow";
import { CardLink } from "@/components/ui/CardLink";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { Tag } from "@/components/ui/Tag";

type CompanyCardProps = {
  name: string;
  jobs: number;
  description: string;
  tags: string[];
  logo: string;
};

export function CompanyCard({
  name,
  jobs,
  description,
  tags,
  logo,
}: CompanyCardProps) {
  return (
    <CardLink className="flex-col gap-4">
      <span className="flex items-start justify-between gap-3">
        <FigmaAsset
          src={logo}
          alt=""
          width={48}
          height={48}
          className="size-12"
        />
        <span className="flex items-center gap-2 text-base font-semibold text-primary">
          {jobs} Jobs
          <Arrow className="border-primary" />
        </span>
      </span>
      <span className="flex flex-col gap-2">
        <span className="text-xl font-semibold text-navy">{name}</span>
        <span className="text-base leading-7 text-muted">{description}</span>
      </span>
      <span className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </span>
    </CardLink>
  );
}
