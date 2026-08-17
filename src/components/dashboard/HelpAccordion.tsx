"use client";

import { useMemo, useState } from "react";
import { helpTopics } from "@/data/dashboardHelp";

export function HelpAccordion() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(helpTopics[0].question);

  const topics = useMemo(
    () =>
      helpTopics.filter((item) =>
        item.question.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <div className="max-w-3xl">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search help"
        className="w-full rounded-[4px] border border-line px-4 py-3 text-base text-navy outline-none placeholder:text-subtle focus:border-primary"
      />
      <ul className="mt-6 divide-y divide-line border border-line">
        {topics.map((item) => {
          const expanded = open === item.question;
          return (
            <li key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy"
                onClick={() => setOpen(expanded ? null : item.question)}
                aria-expanded={expanded}
              >
                {item.question}
                <span aria-hidden="true" className="text-subtle">
                  {expanded ? "–" : "+"}
                </span>
              </button>
              {expanded ? (
                <p className="px-5 pb-4 text-base leading-7 text-muted">{item.answer}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
