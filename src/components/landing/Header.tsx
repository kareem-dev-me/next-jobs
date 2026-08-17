"use client";

import { useState } from "react";
import Link from "next/link";
import { FigmaAsset } from "@/components/ui/FigmaAsset";

const navLinks = [
  { label: "Find Jobs", href: "#" },
  { label: "Browse Companies", href: "#" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-ghost">
      <div className="landing-container flex h-20 items-center justify-between lg:h-[80px]">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="flex items-center gap-2">
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
          <nav className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2 py-1 text-base font-medium text-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center md:flex">
          <Link
            href="/login"
            className="px-6 py-2.5 text-base font-bold text-primary hover:text-primary/80"
          >
            Login
          </Link>
          <span className="mx-2 h-12 w-px bg-line" aria-hidden="true" />
          <Link
            href="/signup"
            className="rounded-[4px] bg-primary px-6 py-2.5 text-base font-bold text-white hover:bg-primary/90"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-navy transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-ghost px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-base font-medium text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              className="py-2 text-base font-bold text-primary"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-[4px] bg-primary px-6 py-3 text-center text-base font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
