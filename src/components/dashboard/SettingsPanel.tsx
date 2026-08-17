"use client";

import { useState } from "react";
import { AuthField } from "@/components/auth/AuthField";

const tabs = ["Overview", "Login Details", "Notifications"] as const;

export function SettingsPanel() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");

  return (
    <div>
      <div className="flex gap-6 border-b border-line">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`border-b-2 pb-3 text-sm font-semibold ${
              tab === item
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-navy"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <form
        className="mt-8 max-w-xl space-y-5"
        onSubmit={(event) => event.preventDefault()}
      >
        {tab === "Overview" ? (
          <>
            <AuthField
              id="company"
              name="company"
              label="Company Name"
              autoComplete="organization"
              defaultValue="Nomad"
            />
            <AuthField
              id="website"
              name="website"
              label="Website"
              defaultValue="nomad.com"
            />
            <div>
              <label
                htmlFor="about"
                className="mb-1 block text-base font-semibold text-navy"
              >
                About
              </label>
              <textarea
                id="about"
                name="about"
                rows={5}
                defaultValue="Nomad is located in Paris, France. Nomad has generated $728,000 in sales (USD)."
                className="w-full rounded-[4px] border border-line bg-white px-4 py-3.5 text-base text-navy outline-none focus:border-primary"
              />
            </div>
          </>
        ) : null}
        {tab === "Login Details" ? (
          <>
            <AuthField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              defaultValue="maria@nomad.com"
            />
            <AuthField
              id="password"
              name="password"
              label="New Password"
              type="password"
              autoComplete="new-password"
            />
          </>
        ) : null}
        {tab === "Notifications" ? (
          <fieldset className="space-y-3">
            <label className="flex items-center gap-3 text-base text-navy">
              <input type="checkbox" defaultChecked className="size-4 accent-primary" />
              New applicants
            </label>
            <label className="flex items-center gap-3 text-base text-navy">
              <input type="checkbox" defaultChecked className="size-4 accent-primary" />
              Interview reminders
            </label>
            <label className="flex items-center gap-3 text-base text-navy">
              <input type="checkbox" className="size-4 accent-primary" />
              Marketing emails
            </label>
          </fieldset>
        ) : null}
        <button
          type="submit"
          className="rounded-[4px] bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary/90"
        >
          Save changes
        </button>
      </form>
    </div>
  );
}
