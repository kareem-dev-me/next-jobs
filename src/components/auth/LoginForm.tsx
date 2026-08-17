"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { AuthField } from "@/components/auth/AuthField";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { loginCopy } from "@/data/auth";

export function LoginForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
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
        autoComplete="current-password"
        required
      />
      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-base text-muted">
          <input
            type="checkbox"
            name="remember"
            className="size-4 rounded-[4px] border-line accent-primary"
          />
          {loginCopy.remember}
        </label>
        <Link
          href="/forgot-password"
          className="text-base font-medium text-primary hover:text-primary/80"
        >
          {loginCopy.forgot}
        </Link>
      </div>
      <button
        type="submit"
        className="rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90"
      >
        {loginCopy.submit}
      </button>
      <AuthDivider label={loginCopy.divider} />
      <GoogleButton label={loginCopy.google} />
      <p className="text-center text-base text-muted">
        {loginCopy.switchPrompt}{" "}
        <Link
          href="/signup"
          className="font-semibold text-primary hover:text-primary/80"
        >
          {loginCopy.switchLabel}
        </Link>
      </p>
    </form>
  );
}
