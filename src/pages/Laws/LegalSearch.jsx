import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { acts } from "../../data/acts";

export default function LegalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const search = query.toLowerCase();

    return Object.entries(acts).flatMap(([actId, act]) =>
      act.sections
        .filter(
          (section) =>
            section.title.toLowerCase().includes(search) ||
            (section.content || "").toLowerCase().includes(search)
        )
        .map((section) => ({
          actId,
          actName: act.shortName,
          ...section,
        }))
    );
  }, [query]);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Legal Search</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search any law..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #aaa",
          marginTop: "20px",
          marginBottom: "25px",
        }}
      />

      {results.map((item) => (
        <Link
          key={`${item.actId}-${item.section_no}`}
          to={`/laws/${item.actId}/${item.section_no}`}
          style={{
            display: "block",
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "18px",
            marginBottom: "15px",
          }}
        >
          <strong>{item.actName}</strong>

          <h3>
            Section {item.section_no}
          </h3>

          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}