import { motion } from "framer-motion";
import DropdownColumn from "./DropdownColumn";

export default function MegaDropdown({ columns, align = "center", onItemClick }) {
  // Determine width and grid column classes based on the number of columns
  const getLayoutClasses = (numCols) => {
    if (numCols === 1) {
      return {
        width: "w-72",
        grid: "grid-cols-1"
      };
    }
    if (numCols === 3) {
      return {
        width: "w-[680px]",
        grid: "grid-cols-1 md:grid-cols-3"
      };
    }
    // Default/Max (e.g. 5 columns)
    return {
      width: "w-full",
      grid: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    };
  };

  const layout = getLayoutClasses(columns.length);
  const positionClass = align === "full"
    ? "left-0 right-0 w-full"
    : `left-1/2 -translate-x-1/2 ${layout.width}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        absolute
        top-full
        ${positionClass}
        mt-2
        bg-slate-950/95
        backdrop-blur-xl
        border
        border-cyan-500/25
        rounded-2xl
        p-6
        shadow-[0_20px_50px_rgba(6,182,212,0.15)]
        z-50
      `}
    >
      {/* Decorative neon top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-2xl opacity-70" />

      <div className={`grid ${layout.grid} gap-6`}>
        {columns.map((column, idx) => (
          <DropdownColumn
            key={idx}
            heading={column.heading}
            items={column.items}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </motion.div>
  );
}
