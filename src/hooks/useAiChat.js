import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "lexarena-ai-conversations";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function titleFromMessage(text) {
  const clean = text.trim().replace(/\s+/g, " ");
  return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean || "New conversation";
}

function loadConversations() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * NOTE ON BACKEND INTEGRATION
 * ----------------------------------------------------------------
 * This hook currently simulates the AI reply locally so the redesigned
 * page works end-to-end without touching any backend/API/Supabase code.
 * To wire this up to a real model, replace `generateReply()` below with
 * a call to your existing AI service (e.g. an api.js function that hits
 * your LLM endpoint), keeping the same signature: (history) => Promise<string>.
 */
async function generateReply(history) {
  const lastUserMessage = [...history].reverse().find((m) => m.role === "user");
  const query = lastUserMessage?.content ?? "";

  await new Promise((resolve) => setTimeout(resolve, 900 + Math.random() * 700));

  return (
    `Here's a starting point on "${query.length > 120 ? `${query.slice(0, 120)}…` : query}"\n\n` +
    `This is a simulated response from the LexArena AI Assistant interface. ` +
    `Connect this to your legal AI backend to return real, sourced answers here.`
  );
}

export function useAiChat() {
  const [conversations, setConversations] = useState(loadConversations);
  const [activeId, setActiveId] = useState(() => loadConversations()[0]?.id ?? null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
    } catch {
      // storage unavailable — fail silently, chat still works for the session
    }
  }, [conversations]);

  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeId) ?? null,
    [conversations, activeId]
  );

  const startNewChat = useCallback(() => {
    setActiveId(null);
  }, []);

  const selectConversation = useCallback((id) => {
    setActiveId(id);
  }, []);

  const deleteConversation = useCallback(
    (id) => {
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (activeId === id) setActiveId(null);
    },
    [activeId]
  );

  const sendMessage = useCallback(
    async (text, attachment) => {
      const trimmed = text.trim();
      if (!trimmed && !attachment) return;

      const userMessage = {
        id: createId(),
        role: "user",
        content: trimmed,
        attachment: attachment ?? null,
        timestamp: Date.now(),
      };

      let conversationId = activeId;
      let historyForReply = [];

      setConversations((prev) => {
        let next = prev;
        if (!conversationId) {
          conversationId = createId();
          const newConversation = {
            id: conversationId,
            title: titleFromMessage(trimmed || attachment?.name || "New conversation"),
            messages: [userMessage],
            updatedAt: Date.now(),
          };
          next = [newConversation, ...prev];
        } else {
          next = prev.map((c) =>
            c.id === conversationId
              ? { ...c, messages: [...c.messages, userMessage], updatedAt: Date.now() }
              : c
          );
        }
        const updated = next.find((c) => c.id === conversationId);
        historyForReply = updated?.messages ?? [userMessage];
        return next;
      });

      setActiveId(conversationId);
      setIsTyping(true);

      try {
        const replyText = await generateReply(historyForReply);
        const assistantMessage = {
          id: createId(),
          role: "assistant",
          content: replyText,
          timestamp: Date.now(),
        };
        setConversations((prev) =>
          prev.map((c) =>
            c.id === conversationId
              ? { ...c, messages: [...c.messages, assistantMessage], updatedAt: Date.now() }
              : c
          )
        );
      } finally {
        setIsTyping(false);
      }
    },
    [activeId]
  );

  return {
    conversations,
    activeConversation,
    activeId,
    isTyping,
    startNewChat,
    selectConversation,
    deleteConversation,
    sendMessage,
  };
}
