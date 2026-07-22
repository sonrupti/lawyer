import { Link, useParams } from "react-router-dom";
import { bns } from "../../data/acts/bns";

export default function SectionPage() {
  const { act, section } = useParams();

  let law;

  if (act.toLowerCase() === "bns") {
    law = bns;
  }

  if (!law) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Law not found</h1>
      </div>
    );
  }

  const currentIndex = law.sections.findIndex(
    (item) => item.section_no === section
  );

  const sectionData = law.sections[currentIndex];

  if (!sectionData) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Section not found</h1>
      </div>
    );
  }

  const previousSection = law.sections[currentIndex - 1];
  const nextSection = law.sections[currentIndex + 1];

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
        {law.name}
      </h1>


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
          Section {sectionData.section_no}
        </h2>

        <h3>
          {sectionData.title}
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

        <p>
          {sectionData.content ||
            "Legal text will be added here."}
        </p>
      </div>


      {/* Explanation Card */}
      <div
        style={{
          marginTop: "20px",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #777"
        }}
      >
        <h2>
          Simple Explanation
        </h2>

        <p>
          {sectionData.explanation ||
            "Explanation will be added here."}
        </p>
      </div>


      {/* Previous / Next Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          gap: "20px"
        }}
      >

        {previousSection ? (
          <Link
            to={`/laws/${act}/${previousSection.section_no}`}
            style={{
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid #777",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            ← Previous: Section {previousSection.section_no}
          </Link>
        ) : (
          <div />
        )}


        {nextSection ? (
          <Link
            to={`/laws/${act}/${nextSection.section_no}`}
            style={{
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid #777",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            Next: Section {nextSection.section_no} →
          </Link>
        ) : (
          <div />
        )}

      </div>

    </div>
  );
}