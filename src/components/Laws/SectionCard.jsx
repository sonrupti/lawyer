import { Link } from "react-router-dom";

export default function SectionCard({ section }) {
  return (
    <Link
      to={`/laws/bns/${section.section_number}`}
      className="block rounded-xl border p-4 hover:shadow-md transition"
    >
      <h3 className="font-semibold">
        Section {section.section_number}
      </h3>

      <p className="text-gray-700 mt-2">
        {section.section_title}
      </p>

      <div className="text-sm text-gray-500 mt-3">
        {section.chapter_title}
      </div>
    </Link>
  );
}