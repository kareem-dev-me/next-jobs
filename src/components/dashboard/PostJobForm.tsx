"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthField } from "@/components/auth/AuthField";

export function PostJobForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard/jobs");
  }

  return (
    <form className="max-w-2xl space-y-5" onSubmit={handleSubmit}>
      <AuthField id="title" name="title" label="Job Title" required />
      <div>
        <label htmlFor="type" className="mb-1 block text-base font-semibold text-navy">
          Type of Employment
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded-[4px] border border-line bg-white px-4 py-3.5 text-base text-navy outline-none focus:border-primary"
          defaultValue="Full-Time"
        >
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Remote</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="category"
          className="mb-1 block text-base font-semibold text-navy"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full rounded-[4px] border border-line bg-white px-4 py-3.5 text-base text-navy outline-none focus:border-primary"
          defaultValue="Marketing"
        >
          <option>Marketing</option>
          <option>Design</option>
          <option>Technology</option>
          <option>Business</option>
        </select>
      </div>
      <AuthField
        id="location"
        name="location"
        label="Location"
        autoComplete="address-level2"
        required
      />
      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-base font-semibold text-navy"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          className="w-full rounded-[4px] border border-line bg-white px-4 py-3.5 text-base text-navy outline-none placeholder:text-subtle focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90"
      >
        Post job
      </button>
    </form>
  );
}
