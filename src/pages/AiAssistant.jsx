import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ChatSidebar from "../components/AiAssistant/ChatSidebar";
import WelcomeScreen from "../components/AiAssistant/WelcomeScreen";
import ChatMessages from "../components/AiAssistant/ChatMessages";
import ChatInput from "../components/AiAssistant/ChatInput";
import { useAiChat } from "../hooks/useAiChat";
import { PanelLeft } from "lucide-react";

export default function AiAssistant() {
  const {
    conversations,
    activeConversation,
    activeId,
    isTyping,
    startNewChat,
    selectConversation,
    deleteConversation,
    sendMessage,
  } = useAiChat();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messages = activeConversation?.messages ?? [];
  const hasMessages = messages.length > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex pt-20 h-screen">
        <ChatSidebar
          conversations={conversations}
          activeId={activeId}
          onNewChat={startNewChat}
          onSelect={selectConversation}
          onDelete={deleteConversation}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col h-[calc(100vh-5rem)] min-w-0 relative">
          {/* Mobile top bar */}
          <div className="md:hidden flex items-center gap-3 px-4 py-3 border-b border-cyan-500/10">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open conversation history"
              className="w-9 h-9 rounded-lg border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              <PanelLeft size={17} />
            </button>
            <p className="text-sm text-gray-400 truncate">
              {activeConversation?.title ?? "New conversation"}
            </p>
          </div>

          {hasMessages ? (
            <ChatMessages messages={messages} isTyping={isTyping} />
          ) : (
            <WelcomeScreen onSelectPrompt={(prompt) => sendMessage(prompt)} />
          )}

          <ChatInput onSend={sendMessage} disabled={isTyping} />
        </div>
      </div>
    </main>
  );
}
