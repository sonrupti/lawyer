import { motion } from "framer-motion";
import { suggestedPrompts } from "../../data/aiPrompts";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function SuggestedPrompts({ onSelect }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-3xl"
    >
      {suggestedPrompts.map(({ icon: Icon, title, prompt }) => (
        <motion.button
          key={title}
          variants={item}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(prompt)}
          className="
            group text-left
            rounded-2xl p-4
            bg-slate-900/60
            backdrop-blur-xl
            border border-cyan-500/20
            hover:border-cyan-400/60
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            transition-all
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
          "
        >
          <div
            className="
              w-9 h-9 rounded-lg mb-3
              bg-cyan-400/10 border border-cyan-400/30
              flex items-center justify-center
              group-hover:bg-cyan-400/20 transition
            "
          >
            <Icon size={17} className="text-cyan-400" />
          </div>
          <p className="text-sm font-medium text-gray-200 mb-1">{title}</p>
          <p className="text-xs text-gray-500 line-clamp-2">{prompt}</p>
        </motion.button>
      ))}
    </motion.div>
  );
}
