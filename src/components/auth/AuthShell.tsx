import Link from "next/link";
import Image from "next/image";
import { FigmaAsset } from "@/components/ui/FigmaAsset";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-full flex-1 lg:grid-cols-2">
      <div className="flex flex-col bg-white px-6 py-8 sm:px-10 lg:px-16 lg:py-10">
        <Link href="/" className="inline-flex w-fit items-center gap-2">
          <FigmaAsset
            src="/landing/logo.svg"
            alt=""
            width={32}
            height={32}
            className="size-8"
          />
          <span className="text-2xl font-bold leading-9 tracking-[-0.01em] text-navy">
            JobHuntly
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-center py-10 lg:py-12">
          <div className="w-full max-w-[408px]">{children}</div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-ghost lg:block">
        <Image
          src="/landing/pattern.svg"
          alt=""
          width={997}
          height={794}
          unoptimized
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      </div>
    </div>
  );
}
