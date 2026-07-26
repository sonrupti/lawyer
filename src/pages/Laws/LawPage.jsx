import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";

export default function LawPage() {
  const { act } = useParams();

  const [sections, setSections] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSections() {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("law_sections")
        .select("section_number, section_title")
        .eq("act", act.toUpperCase())
        .order("section_number");

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setSections(data || []);
      }

      setLoading(false);
    }

    loadSections();
  }, [act]);

  const filteredSections = sections.filter((section) =>
    `${section.section_number} ${section.section_title}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Error</h1>
        <p style={{ color: "#ef4444" }}>{error}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <h1>{act.toUpperCase()}</h1>

      <p>
        {sections.length} Sections
      </p>

      <input
        placeholder="Search by section number or title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          marginBottom: "25px"
        }}
      />

      {filteredSections.map((section) => (
        <Link
          key={section.section_number}
          to={`/laws/${act}/${section.section_number}`}
          style={{
            display: "block",
            padding: "18px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            marginBottom: "12px",
            textDecoration: "none",
            color: "inherit"
          }}
        >
          <h3>Section {section.section_number}</h3>

          <p>{section.section_title}</p>
        </Link>
      ))}
    </div>
  );
}