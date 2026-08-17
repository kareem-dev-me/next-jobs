import { AuthShell } from "@/components/auth/AuthShell";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <AuthShell>{children}</AuthShell>
    </div>
  );
}
