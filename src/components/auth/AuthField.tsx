"use client";

import { useState } from "react";

type AuthFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  autoComplete?: string;
  required?: boolean;
  defaultValue?: string;
};

const inputClassName =
  "w-full rounded-[4px] border border-line bg-white px-4 py-3.5 text-base text-navy outline-none placeholder:text-subtle focus:border-primary";

export function AuthField({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
  defaultValue,
}: AuthFieldProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-base font-semibold text-navy">
        {label}
      </label>
      {isPassword ? (
        <div className="relative">
          <input
            id={id}
            name={name}
            type={visible ? "text" : "password"}
            autoComplete={autoComplete}
            required={required}
            defaultValue={defaultValue}
            className={`${inputClassName} pr-16`}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-primary hover:text-primary/80"
            onClick={() => setVisible((value) => !value)}
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? "Hide" : "Show"}
          </button>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          defaultValue={defaultValue}
          className={inputClassName}
        />
      )}
    </div>
  );
}
