"use client";

import { useState } from "react";
import {useMutation} from "@apollo/client/react";
import { ASK_RAG } from "@/lib/graphql/documents/ask-rag";
import {
  AskRagMutation,
  AskRagMutationVariables,
} from "@/lib/graphql/__generated__/graphql";
import { MessageList } from "./message-list";
import { Composer } from "./composer";
import { Sidebar } from "./sidebar";

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

export function ChatShell() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [askRag, { loading, error }] = useMutation<
    AskRagMutation,
    AskRagMutationVariables
  >(ASK_RAG);

  async function sendMessage(text: string) {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const { data } = await askRag({
        variables: {
          input: {
            question: text,
            framework: "nestjs",
            limit: 4,
          },
        },
      });

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data?.askRag.answer ?? "No answer returned.",
        sources:
          data?.askRag.sources?.map((source) => ({
            title: source.title,
            url: source.url,
            text: source.text,
            score: source.score,
          })) ?? [],
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Something went wrong while asking the backend.",
        },
      ]);
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="border-b px-6 py-4">
          <h1 className="text-lg font-semibold">Ask My Docs</h1>
          <p className="text-sm text-muted-foreground">
            Chat with your NestJS RAG backend
          </p>
        </header>

        <div className="flex-1 overflow-y-auto">
          <MessageList messages={messages} loading={loading} />
        </div>

        <Composer onSend={sendMessage} loading={loading} />

        {error ? (
          <div className="px-6 pb-4 text-sm text-destructive">
            {error.message}
          </div>
        ) : null}
      </main>
    </div>
  );
}