import type { Metadata } from "next";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { signupCopy } from "@/data/auth";

export const metadata: Metadata = {
  title: "Sign Up — JobHuntly",
};

export default function SignUpPage() {
  return (
    <>
      <h1 className="text-[32px] font-semibold leading-[1.2] text-navy">
        {signupCopy.title}
      </h1>
      <p className="mt-3 text-base leading-7 text-muted">{signupCopy.subtitle}</p>
      <SignUpForm />
    </>
  );
}
