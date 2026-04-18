"use client";

import { useState } from "react";

export function Composer({
  onSend,
  loading,
}: {
  onSend: (text: string) => Promise<void> | void;
  loading: boolean;
}) {
  const [value, setValue] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = value.trim();
    if (!text || loading) return;

    setValue("");
    await onSend(text);
  }

  return (
    <div className="border-t bg-background/95 px-4 py-4 backdrop-blur">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className="rounded-2xl border bg-card p-3">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={3}
            placeholder="Ask a question about NestJS..."
            className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="mt-3 flex items-center justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}