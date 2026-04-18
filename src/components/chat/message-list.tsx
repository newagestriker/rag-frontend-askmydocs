import { MessageBubble } from "./message-bubble";

type SourceItem = {
  title: string;
  url: string;
  text: string;
  score: number;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: SourceItem[];
};

export function MessageList({
  messages,
  loading,
}: {
  messages: ChatMessage[];
  loading: boolean;
}) {
  if (!messages.length) {
    return (
      <div className="mx-auto flex h-full max-w-3xl items-center px-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Ask about your docs
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Try questions like “How do guards work in NestJS?” or “Explain module
            resolution.”
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-6">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {loading ? (
          <div className="rounded-2xl border bg-muted/40 p-4 text-sm text-muted-foreground">
            Thinking...
          </div>
        ) : null}
      </div>
    </div>
  );
}