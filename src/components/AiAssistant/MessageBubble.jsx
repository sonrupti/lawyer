import { motion } from "framer-motion";
import { Scale, User, Paperclip } from "lucide-react";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`
          w-8 h-8 rounded-lg shrink-0 mt-1
          flex items-center justify-center
          ${
            isUser
              ? "bg-slate-800 border border-slate-700"
              : "bg-cyan-400/10 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          }
        `}
      >
        {isUser ? (
          <User size={15} className="text-gray-300" />
        ) : (
          <Scale size={15} className="text-cyan-400" />
        )}
      </div>

      <div
        className={`
          max-w-[80%] sm:max-w-[70%]
          rounded-2xl px-4 py-3
          text-[15px] leading-relaxed whitespace-pre-wrap break-words
          ${
            isUser
              ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-tr-sm"
              : "bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 text-gray-200 rounded-tl-sm"
          }
        `}
      >
        {message.attachment && (
          <div
            className={`
              flex items-center gap-2 mb-2 px-2.5 py-1.5 rounded-lg text-xs
              ${isUser ? "bg-white/15" : "bg-cyan-400/10 border border-cyan-400/20"}
            `}
          >
            <Paperclip size={12} />
            <span className="truncate">{message.attachment.name}</span>
          </div>
        )}
        {message.content}
      </div>
    </motion.div>
  );
}
