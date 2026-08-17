"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { AuthField } from "@/components/auth/AuthField";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { signupCopy } from "@/data/auth";

export function SignUpForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
      <AuthField
        id="name"
        name="name"
        label="Full Name"
        type="text"
        autoComplete="name"
        required
      />
      <AuthField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        autoComplete="email"
        required
      />
      <AuthField
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        required
      />
      <button
        type="submit"
        className="rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90"
      >
        {signupCopy.submit}
      </button>
      <AuthDivider label={signupCopy.divider} />
      <GoogleButton label={signupCopy.google} />
      <p className="text-center text-base text-muted">
        {signupCopy.switchPrompt}{" "}
        <Link
          href="/login"
          className="font-semibold text-primary hover:text-primary/80"
        >
          {signupCopy.switchLabel}
        </Link>
      </p>
      <p className="text-center text-sm leading-6 text-subtle">
        {signupCopy.termsPrefix}{" "}
        <a href="#" className="font-medium text-navy underline underline-offset-2">
          {signupCopy.terms}
        </a>{" "}
        and{" "}
        <a href="#" className="font-medium text-navy underline underline-offset-2">
          {signupCopy.privacy}
        </a>
        .
      </p>
    </form>
  );
}
