type CardLinkProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export function CardLink({ href = "#", className, children }: CardLinkProps) {
  return (
    <a
      href={href}
      className={`flex h-full border border-line p-6 hover:border-primary ${className ?? ""}`}
    >
      {children}
    </a>
  );
}
