import DropdownItem from "./DropdownItem";

export default function DropdownColumn({ heading, items, onItemClick }) {
  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      <h4 className="
        text-xs
        font-bold
        text-cyan-400
        tracking-widest
        uppercase
        border-b
        border-cyan-500/20
        pb-2
        mb-2
        select-none
      ">
        {heading}
      </h4>
      <div className="flex flex-col gap-1">
        {items.map((item, idx) => (
          <DropdownItem
            key={idx}
            name={item.name}
            path={item.path}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
}
