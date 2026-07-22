import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { acts } from "../../data/acts";

export default function LawPage() {
  const { act } = useParams();
  const [search, setSearch] = useState("");

  const law = acts[act.toLowerCase()];

  if (!law) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Law not found</h1>
      </div>
    );
  }

  const filteredSections = law.sections.filter((section) =>
    section.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto"
      }}
    >
      <h1>{law.name}</h1>

      <p>
        Explore sections of {law.shortName}.
      </p>

      <input
        placeholder="Search sections..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          margin: "20px 0",
          borderRadius: "8px",
          border: "1px solid #888"
        }}
      />

      <div>
        {filteredSections.map((section) => (
          <Link
            key={section.section_no}
            to={`/laws/${act}/${section.section_no}`}
            style={{
              display: "block",
              padding: "18px",
              marginBottom: "12px",
              borderRadius: "12px",
              border: "1px solid #777",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <h3>
              Section {section.section_no}
            </h3>

            <p>
              {section.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}