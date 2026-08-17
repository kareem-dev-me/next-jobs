"use client";

import { useState } from "react";
import { conversations, threads } from "@/data/dashboardMessages";

export function MessagesInbox() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const active = conversations.find((item) => item.id === activeId) ?? conversations[0];
  const messages = threads[activeId] ?? [];

  return (
    <div className="grid min-h-[560px] border border-line lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="border-b border-line lg:border-b-0 lg:border-r">
        <div className="border-b border-line p-4">
          <input
            type="search"
            placeholder="Search messages"
            className="w-full rounded-[4px] border border-line px-3 py-2.5 text-sm text-navy outline-none placeholder:text-subtle focus:border-primary"
          />
        </div>
        <ul>
          {conversations.map((item) => {
            const selected = item.id === activeId;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex w-full flex-col gap-1 border-b border-line px-4 py-4 text-left ${
                    selected ? "bg-ghost" : "hover:bg-ghost/60"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-navy">{item.name}</span>
                    <span className="text-xs text-subtle">{item.time}</span>
                  </span>
                  <span className="truncate text-sm text-muted">{item.preview}</span>
                  {item.unread ? (
                    <span className="mt-1 size-2 rounded-full bg-primary" />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="border-b border-line px-6 py-4">
          <h2 className="text-lg font-semibold text-navy">{active.name}</h2>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          {messages.map((message, index) => (
            <div
              key={`${message.time}-${index}`}
              className={`max-w-[80%] rounded-[4px] px-4 py-3 text-sm leading-6 ${
                message.from === "me"
                  ? "ml-auto bg-primary text-white"
                  : "bg-ghost text-navy"
              }`}
            >
              <p>{message.text}</p>
              <p
                className={`mt-1 text-xs ${
                  message.from === "me" ? "text-white/70" : "text-subtle"
                }`}
              >
                {message.time}
              </p>
            </div>
          ))}
        </div>
        <form
          className="flex gap-3 border-t border-line p-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Type a message"
            className="min-w-0 flex-1 rounded-[4px] border border-line px-4 py-3 text-sm text-navy outline-none placeholder:text-subtle focus:border-primary"
          />
          <button
            type="submit"
            className="rounded-[4px] bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/90"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
