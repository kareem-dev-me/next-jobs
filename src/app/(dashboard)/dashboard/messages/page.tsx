import type { Metadata } from "next";
import { MessagesInbox } from "@/components/dashboard/MessagesInbox";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">Messages</h1>
      <MessagesInbox />
    </div>
  );
}
