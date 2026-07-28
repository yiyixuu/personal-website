"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(email).then(
          () => setCopied(true),
          // Clipboard can be blocked (insecure context, denied permission).
          // Fall back to selecting nothing rather than claiming success.
          () => undefined,
        );
      }}
      className="quiet-link"
      aria-label={`Copy ${email} to clipboard`}
    >
      <span aria-live="polite">{copied ? "copied" : "email"}</span>
    </button>
  );
}
