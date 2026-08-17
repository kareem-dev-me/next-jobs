import { FigmaAsset } from "@/components/ui/FigmaAsset";

export function GoogleButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-[4px] border border-line bg-white px-6 py-3.5 text-base font-bold text-navy hover:bg-ghost"
    >
      <FigmaAsset
        src="/landing/google.svg"
        alt=""
        width={20}
        height={20}
        className="size-5"
      />
      {label}
    </button>
  );
}
