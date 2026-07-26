import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Paperclip, Mic, ArrowUp, X, FileText } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  }, [value]);

  useEffect(() => {
    const SpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript ?? "";
      setValue((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;
    return () => recognition.stop();
  }, []);

  const handleMicClick = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment({ name: file.name, size: file.size });
    }
    e.target.value = "";
  };

  const handleSubmit = () => {
    if (disabled) return;
    if (!value.trim() && !attachment) return;
    onSend(value, attachment);
    setValue("");
    setAttachment(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const canSend = (value.trim().length > 0 || attachment) && !disabled;

  return (
    <div className="px-4 sm:px-6 pb-5 pt-2">
      <div className="max-w-3xl mx-auto">
        {attachment && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2 w-fit px-3 py-1.5 rounded-lg bg-slate-900/70 border border-cyan-500/30 text-xs text-gray-300"
          >
            <FileText size={13} className="text-cyan-400" />
            <span className="max-w-[220px] truncate">{attachment.name}</span>
            <button
              onClick={() => setAttachment(null)}
              aria-label="Remove attachment"
              className="text-gray-500 hover:text-red-400 transition"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}

        <div
          className="
            flex items-end gap-2
            rounded-2xl p-2
            bg-slate-900/70
            backdrop-blur-xl
            border border-cyan-500/25
            focus-within:border-cyan-400/70
            focus-within:shadow-[0_0_25px_rgba(34,211,238,0.2)]
            transition-all
          "
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            aria-label="Attach a file"
            className="
              w-10 h-10 shrink-0 rounded-xl
              flex items-center justify-center
              text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10
              transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
            "
          >
            <Paperclip size={19} />
          </button>

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask LexArena AI about your legal matter..."
            className="
              flex-1 resize-none bg-transparent
              text-gray-100 placeholder:text-gray-500
              text-[15px] leading-relaxed
              py-2.5 px-1
              max-h-44
              focus:outline-none
            "
          />

          <button
            onClick={handleMicClick}
            aria-label={isListening ? "Stop voice input" : "Start voice input"}
            className={`
              w-10 h-10 shrink-0 rounded-xl
              flex items-center justify-center
              transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
              ${
                isListening
                  ? "text-red-400 bg-red-400/10"
                  : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              }
            `}
          >
            <Mic size={19} className={isListening ? "animate-pulse" : ""} />
          </button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={handleSubmit}
            disabled={!canSend}
            aria-label="Send message"
            className={`
              w-10 h-10 shrink-0 rounded-xl
              flex items-center justify-center
              transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
              ${
                canSend
                  ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "bg-slate-800 text-gray-600 cursor-not-allowed"
              }
            `}
          >
            <ArrowUp size={19} />
          </motion.button>
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-2.5">
          LexArena AI provides general legal information, not a substitute for advice from
          a licensed advocate.
        </p>
      </div>
    </div>
  );
}
