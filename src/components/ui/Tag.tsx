const tagStyles: Record<string, string> = {
  Marketing: "border-warning text-warning",
  Design: "border-primary text-primary",
  Technology: "border-[#FF6550] text-[#FF6550]",
  Business: "border-[#FF6550] text-[#FF6550]",
};

export function Tag({ label }: { label: string }) {
  const styles = tagStyles[label] ?? "border-[#FF6550] text-[#FF6550]";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-sm font-semibold ${styles}`}
    >
      {label}
    </span>
  );
}
