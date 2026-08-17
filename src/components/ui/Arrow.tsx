export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-[10px] shrink-0 border-r-2 border-t-2 border-current translate-y-px rotate-45 ${className ?? ""}`}
    />
  );
}
