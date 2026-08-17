import Image from "next/image";

type CategoryCardProps = {
  name: string;
  icon: string;
  highlighted?: boolean;
  compact?: boolean;
  footer?: React.ReactNode;
};

export function CategoryCard({
  name,
  icon,
  highlighted = false,
  compact = false,
  footer,
}: CategoryCardProps) {
  return (
    <a
      href="#"
      className={`flex h-full flex-col border transition ${
        compact ? "gap-6 p-6" : "gap-8 p-8"
      } ${
        highlighted
          ? "border-primary bg-primary shadow-[0_24px_48px_-12px_rgba(70,64,222,0.28)]"
          : "border-line bg-white hover:border-primary"
      }`}
    >
      <span className="flex size-12 overflow-clip">
        <Image
          src={icon}
          alt=""
          width={48}
          height={48}
          unoptimized={icon.endsWith(".svg")}
          className="size-full object-contain"
        />
      </span>
      <span className={`flex flex-col ${footer ? "gap-3" : ""}`}>
        <span
          className={`font-semibold leading-7 ${
            compact ? "text-xl" : "text-2xl"
          } ${highlighted ? "text-white" : "text-navy"}`}
        >
          {name}
        </span>
        {footer}
      </span>
    </a>
  );
}
