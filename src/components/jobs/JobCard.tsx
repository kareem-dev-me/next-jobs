import { CardLink } from "@/components/ui/CardLink";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { Tag } from "@/components/ui/Tag";

type JobCardProps = {
  company: string;
  title: string;
  location: string;
  type: string;
  tags: string[];
  logo: string;
};

export function JobCard({
  company,
  title,
  location,
  type,
  tags,
  logo,
}: JobCardProps) {
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
        <span className="rounded-[4px] border border-primary px-2.5 py-1 text-sm font-semibold text-primary">
          {type}
        </span>
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-lg font-semibold text-navy">{title}</span>
        <span className="flex items-center gap-2 text-base text-subtle">
          {company}
          <span className="size-1 rounded-full bg-subtle" />
          <FigmaAsset
            src="/landing/location-sm.svg"
            alt=""
            width={16}
            height={20}
            className="h-[14px] w-[12px] opacity-70"
          />
          {location}
        </span>
      </span>
      <span className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </span>
    </CardLink>
  );
}
