import { Link } from "react-router-dom";

export default function DropdownItem({ name, path, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="
        block
        py-1.5
        px-3
        text-sm
        text-gray-400
        hover:text-cyan-400
        hover:bg-cyan-500/5
        rounded-md
        transition-all
        duration-200
        hover:translate-x-1
        focus-visible:outline-none
        focus-visible:ring-1
        focus-visible:ring-cyan-500/50
        focus-visible:text-cyan-400
        focus-visible:bg-cyan-500/10
      "
    >
      {name}
    </Link>
  );
}
