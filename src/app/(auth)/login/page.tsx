import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import { loginCopy } from "@/data/auth";

export const metadata: Metadata = {
  title: "Login — JobHuntly",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="text-[32px] font-semibold leading-[1.2] text-navy">
        {loginCopy.title}
      </h1>
      <p className="mt-3 text-base leading-7 text-muted">{loginCopy.subtitle}</p>
      <LoginForm />
    </>
  );
}
