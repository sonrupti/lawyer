import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import SuggestedPrompts from "./SuggestedPrompts";

export default function WelcomeScreen({ onSelectPrompt }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          relative w-16 h-16 rounded-2xl mb-6
          bg-cyan-400/10 border border-cyan-400/40
          flex items-center justify-center
          shadow-[0_0_30px_rgba(6,182,212,0.35)]
        "
      >
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Scale className="text-cyan-400" size={30} />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        How can I help with your case
        <span className="text-cyan-400">?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.18 }}
        className="mt-3 text-gray-400 text-center max-w-lg"
      >
        Ask about Indian laws, draft a document, or get help understanding your legal
        rights. LexArena AI is built for real legal questions.
      </motion.p>

      <div className="mt-10 w-full flex justify-center">
        <SuggestedPrompts onSelect={onSelectPrompt} />
      </div>
    </div>
  );
}
