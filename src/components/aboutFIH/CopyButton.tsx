"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyButtonProps = {
  /** The text placed on the clipboard */
  value: string;
  /** Human label used for the accessible name, e.g. "PAN No." */
  label: string;
  className?: string;
};

export default function CopyButton({
  value,
  label,
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear the pending reset if the button unmounts mid-countdown
  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard can be blocked (insecure origin, denied permission).
      // Fail quietly — the value is on screen and selectable either way.
      return;
    }

    setCopied(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied!" : `Copy ${label}`}
      className={`shrink-0 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-black/5 text-black/60 transition-all duration-200 hover:bg-amber-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 active:scale-95 ${className}`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-700 stroke-[2.5]" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4 stroke-[2]" aria-hidden="true" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}
