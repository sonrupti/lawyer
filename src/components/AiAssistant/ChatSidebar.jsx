import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageSquare, Trash2, X, Scale } from "lucide-react";

export default function ChatSidebar({
  conversations,
  activeId,
  onNewChat,
  onSelect,
  onDelete,
  isOpen,
  onClose,
}) {
  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={`
          fixed md:static
          inset-y-0 left-0 z-50
          w-72 shrink-0
          h-full
          bg-slate-950/90 md:bg-slate-950/40
          backdrop-blur-xl
          border-r border-cyan-500/20
          flex flex-col
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-2 md:hidden">
          <div className="flex items-center gap-2 text-cyan-400">
            <Scale size={18} />
            <span className="text-sm font-semibold tracking-wide">LexArena AI</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-cyan-500/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            aria-label="Close conversation history"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-4">
          <button
            onClick={() => {
              onNewChat();
              onClose?.();
            }}
            className="
              w-full flex items-center justify-center gap-2
              rounded-xl px-4 py-3
              bg-cyan-500/10 border border-cyan-400/40
              text-cyan-300 font-medium
              hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200
              hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
              transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
            "
          >
            <Plus size={18} />
            New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          {conversations.length === 0 && (
            <p className="text-gray-500 text-sm text-center mt-8 px-4">
              Your conversations will appear here.
            </p>
          )}

          <AnimatePresence initial={false}>
            {conversations.map((conversation) => {
              const isActive = conversation.id === activeId;
              return (
                <motion.div
                  key={conversation.id}
                  layout
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="group relative"
                >
                  <button
                    onClick={() => {
                      onSelect(conversation.id);
                      onClose?.();
                    }}
                    className={`
                      w-full text-left
                      flex items-center gap-2.5
                      rounded-xl px-3 py-2.5 pr-9
                      text-sm truncate
                      border transition-all
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                      ${
                        isActive
                          ? "bg-cyan-500/15 border-cyan-400/50 text-cyan-200"
                          : "bg-transparent border-transparent text-gray-400 hover:bg-slate-900/60 hover:border-cyan-500/20 hover:text-gray-200"
                      }
                    `}
                  >
                    <MessageSquare size={15} className="shrink-0" />
                    <span className="truncate">{conversation.title}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(conversation.id);
                    }}
                    aria-label="Delete conversation"
                    className="
                      absolute right-2 top-1/2 -translate-y-1/2
                      w-6 h-6 rounded-md
                      flex items-center justify-center
                      text-gray-500 opacity-0 group-hover:opacity-100
                      hover:text-red-400 hover:bg-red-500/10
                      transition
                      focus-visible:opacity-100 focus-visible:outline-none
                    "
                  >
                    <Trash2 size={13} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="p-4 border-t border-cyan-500/10">
          <p className="text-[11px] text-gray-500 leading-relaxed">
            LexArena AI can make mistakes. Verify important legal information with a
            qualified advocate.
          </p>
        </div>
      </aside>
    </>
  );
}
