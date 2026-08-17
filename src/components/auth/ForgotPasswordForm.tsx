"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { AuthField } from "@/components/auth/AuthField";
import { forgotCopy } from "@/data/auth";

export function ForgotPasswordForm() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    setSubmittedEmail(email || "your email");
  }

  if (submittedEmail) {
    return (
      <>
        <h1 className="text-[32px] font-semibold leading-[1.2] text-navy">
          {forgotCopy.successTitle}
        </h1>
        <p className="mt-3 text-base leading-7 text-muted">
          {forgotCopy.successBody(submittedEmail)}
        </p>
        <Link
          href="/login"
          className="mt-8 inline-flex rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90"
        >
          {forgotCopy.back}
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="text-[32px] font-semibold leading-[1.2] text-navy">
        {forgotCopy.title}
      </h1>
      <p className="mt-3 text-base leading-7 text-muted">{forgotCopy.subtitle}</p>
      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
        <AuthField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          required
        />
        <button
          type="submit"
          className="rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90"
        >
          {forgotCopy.submit}
        </button>
        <p className="text-center text-base text-muted">
          <Link
            href="/login"
            className="font-semibold text-primary hover:text-primary/80"
          >
            {forgotCopy.back}
          </Link>
        </p>
      </form>
    </>
  );
}
