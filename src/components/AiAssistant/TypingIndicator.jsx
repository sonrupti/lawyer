import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const dotTransition = (delay) => ({
  duration: 0.9,
  repeat: Infinity,
  ease: "easeInOut",
  delay,
});

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-start gap-3"
    >
      <div className="w-8 h-8 rounded-lg shrink-0 mt-1 bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)]">
        <Scale size={15} className="text-cyan-400" />
      </div>
      <div className="rounded-2xl rounded-tl-sm px-4 py-3.5 bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 flex items-center gap-1.5">
        {[0, 0.15, 0.3].map((delay, i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
            transition={dotTransition(delay)}
          />
        ))}
      </div>
    </motion.div>
  );
}
