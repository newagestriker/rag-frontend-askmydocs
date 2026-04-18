import { SourceList } from "./source-list";

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

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "border bg-card text-card-foreground",
        ].join(" ")}
      >
        <p className="whitespace-pre-wrap leading-7">{message.content}</p>
        {!isUser && message.sources?.length ? (
          <SourceList sources={message.sources} />
        ) : null}
      </div>
    </div>
  );
}