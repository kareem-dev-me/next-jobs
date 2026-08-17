import type { Metadata } from "next";
import { SettingsPanel } from "@/components/dashboard/SettingsPanel";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">Settings</h1>
      <SettingsPanel />
    </div>
  );
}
