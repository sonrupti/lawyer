import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";

export default function SectionPage() {
  const { act, section } = useParams();

  const [sectionData, setSectionData] = useState(null);
  const [prevSection, setPrevSection] = useState(null);
  const [nextSection, setNextSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSection() {
      setLoading(true);
      setError(null);

      // Fetch the current section
      const { data, error: fetchError } = await supabase
        .from("law_sections")
        .select("*")
        .eq("act", act.toUpperCase())
        .eq("section_number", section)
        .single();

      if (fetchError) {
        setError(fetchError.message);
        setLoading(false);
        return;
      }

      setSectionData(data);

      // Fetch previous section (the one with the largest section_number less than current)
      const { data: prevData } = await supabase
        .from("law_sections")
        .select("section_number")
        .eq("act", act.toUpperCase())
        .lt("section_number", data.section_number)
        .order("section_number", { ascending: false })
        .limit(1)
        .single();

      setPrevSection(prevData);

      // Fetch next section (the one with the smallest section_number greater than current)
      const { data: nextData } = await supabase
        .from("law_sections")
        .select("section_number")
        .eq("act", act.toUpperCase())
        .gt("section_number", data.section_number)
        .order("section_number", { ascending: true })
        .limit(1)
        .single();

      setNextSection(nextData);

      setLoading(false);
    }

    loadSection();
  }, [act, section]);

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        Loading...
      </div>
    );
  }

  if (error || !sectionData) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>{error ? "Error" : "Section not found"}</h1>
        {error && (
          <p style={{ color: "#ef4444" }}>{error}</p>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto"
      }}
    >

      {/* Back button */}
      <Link
        to={`/laws/${act}`}
        style={{
          textDecoration: "none",
          color: "#2563eb"
        }}
      >
        ← Back to sections
      </Link>


      <h1 style={{ marginTop: "20px" }}>
        {act.toUpperCase()}
      </h1>


      {/* Chapter info */}
      {(sectionData.chapter_number || sectionData.chapter_title) && (
        <div
          style={{
            marginTop: "15px",
            padding: "12px 18px",
            borderRadius: "10px",
            background: "rgba(37, 99, 235, 0.1)",
            color: "#2563eb",
            fontWeight: "600"
          }}
        >
          {sectionData.chapter_number && (
            <span>Chapter {sectionData.chapter_number}</span>
          )}
          {sectionData.chapter_number && sectionData.chapter_title && " — "}
          {sectionData.chapter_title && (
            <span>{sectionData.chapter_title}</span>
          )}
        </div>
      )}


      {/* Section Header Card */}
      <div
        style={{
          marginTop: "25px",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #777"
        }}
      >
        <h2>
          Section {sectionData.section_number}
        </h2>

        <h3>
          {sectionData.section_title}
        </h3>
      </div>


      {/* Legal Text Card */}
      <div
        style={{
          marginTop: "20px",
          padding: "25px",
          borderRadius: "14px",
          background: "#f5f5f5",
          color: "#111"
        }}
      >
        <h2>
          Legal Text
        </h2>

        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.8" }}>
          {sectionData.body ||
            "Legal text will be added here."}
        </p>
      </div>


      {/* Explanations Card */}
      <div
        style={{
          marginTop: "20px",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #777"
        }}
      >
        <h2>
          Explanations
        </h2>

        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.8" }}>
          {sectionData.explanations ||
            "No explanations available."}
        </p>
      </div>


      {/* Illustrations Card */}
      {sectionData.illustrations && (
        <div
          style={{
            marginTop: "20px",
            padding: "25px",
            borderRadius: "14px",
            border: "1px solid #777"
          }}
        >
          <h2>
            Illustrations
          </h2>

          <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.8" }}>
            {sectionData.illustrations}
          </p>
        </div>
      )}


      {/* Previous / Next Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          gap: "20px"
        }}
      >

        {prevSection ? (
          <Link
            to={`/laws/${act}/${prevSection.section_number}`}
            style={{
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid #777",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            ← Previous: Section {prevSection.section_number}
          </Link>
        ) : (
          <div />
        )}


        {nextSection ? (
          <Link
            to={`/laws/${act}/${nextSection.section_number}`}
            style={{
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid #777",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            Next: Section {nextSection.section_number} →
          </Link>
        ) : (
          <div />
        )}

      </div>

    </div>
  );
}