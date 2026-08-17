import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { Tag } from "@/components/ui/Tag";

type JobRowProps = {
  company: string;
  title: string;
  location: string;
  type: string;
  tags: string[];
  logo: string;
};

export function JobRow({
  company,
  title,
  location,
  type,
  tags,
  logo,
}: JobRowProps) {
  return (
    <a href="#" className="flex items-start gap-4 sm:gap-6">
      <FigmaAsset
        src={logo}
        alt=""
        width={64}
        height={64}
        className="size-12 shrink-0 sm:size-16"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-xl font-semibold text-navy">{title}</span>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 text-base text-subtle">
          <span>{company}</span>
          <span className="size-1 rounded-full bg-subtle" />
          <span>{location}</span>
        </span>
        <span className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-success/10 px-2.5 py-1 text-sm font-semibold text-success">
            {type}
          </span>
          <span className="hidden h-6 w-px bg-line sm:block" />
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </span>
      </span>
    </a>
  );
}
